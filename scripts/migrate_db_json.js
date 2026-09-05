/**
 * One-time migration script to transfer users and OTPs from local data/db.json to MongoDB Atlas.
 * Run with: node scripts/migrate_db_json.js
 */
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

// Load .env.local
const envPath = path.resolve('.env.local');
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf8').split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const match = trimmed.match(/^([^=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      let val = match[2].trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      process.env[key] = val;
    }
  }
}

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri || mongoUri.trim() === '') {
  console.error('ERROR: MONGODB_URI is not set in .env.local');
  process.exit(1);
}

const dbJsonPath = path.resolve('data', 'db.json');
if (!fs.existsSync(dbJsonPath)) {
  console.log('No data/db.json found. Nothing to migrate.');
  process.exit(0);
}

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    name: { type: String, trim: true, default: 'User' },
    phone: { type: String, trim: true },
    entityType: { type: String, trim: true },
  },
  { timestamps: true }
);

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);

async function migrate() {
  console.log('Connecting to MongoDB Atlas...');
  await mongoose.connect(mongoUri.trim());
  console.log('Connected to MongoDB Atlas successfully.');

  const rawData = fs.readFileSync(dbJsonPath, 'utf8');
  const data = JSON.parse(rawData);

  const users = Array.isArray(data.users) ? data.users : [];
  console.log(`Found ${users.length} user(s) in data/db.json to migrate.`);

  let migratedCount = 0;
  let skippedCount = 0;

  for (const user of users) {
    const normalizedEmail = (user.email || '').trim().toLowerCase();
    if (!normalizedEmail || !user.passwordHash) continue;

    const existing = await UserModel.findOne({ email: normalizedEmail });
    if (existing) {
      console.log(`  - User ${normalizedEmail} already exists in MongoDB Atlas (skipped).`);
      skippedCount++;
    } else {
      await UserModel.create({
        email: normalizedEmail,
        passwordHash: user.passwordHash,
        name: user.name || 'User',
        phone: user.phone,
        entityType: user.entityType,
        createdAt: user.createdAt ? new Date(user.createdAt) : new Date(),
        updatedAt: user.updatedAt ? new Date(user.updatedAt) : new Date(),
      });
      console.log(`  ✓ Migrated user: ${normalizedEmail}`);
      migratedCount++;
    }
  }

  console.log(`\nMigration completed: ${migratedCount} migrated, ${skippedCount} skipped.`);
  await mongoose.disconnect();
  console.log('Disconnected from MongoDB Atlas.');
}

migrate().catch((err) => {
  console.error('Migration error:', err.message);
  process.exit(1);
});
