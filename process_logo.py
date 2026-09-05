from PIL import Image

img = Image.open('public/logo.jpg').convert('RGBA')
width, height = img.size
pix = img.load()

# Emblem center around (512, 500)
center_x, center_y = 512, 500

for y in range(height):
    for x in range(width):
        r, g, b, a = pix[x, y]
        
        # Distance squared from center oval: (dx/rx)^2 + (dy/ry)^2
        dx = (x - center_x) / 470.0
        dy = (y - center_y) / 270.0
        dist_sq = dx*dx + dy*dy
        
        # Checkerboard pixel detector (gray or white)
        is_gray = (abs(r - g) < 10 and abs(g - b) < 10 and 210 <= r <= 245)
        is_white = (r > 248 and g > 248 and b > 248)
        
        if dist_sq > 1.01:
            pix[x, y] = (r, g, b, 0)
        elif dist_sq > 0.96 and (is_gray or is_white):
            pix[x, y] = (r, g, b, 0)

# Get bounding box of non-transparent area
bbox = img.getbbox()
if bbox:
    pad = 8
    left = max(0, bbox[0] - pad)
    top = max(0, bbox[1] - pad)
    right = min(width, bbox[2] + pad)
    bottom = min(height, bbox[3] + pad)
    img = img.crop((left, top, right, bottom))

img.save('public/logo.png', 'PNG')
print("Successfully saved transparent public/logo.png! Bbox:", bbox, "New Size:", img.size)
