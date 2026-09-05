import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Service from "@/models/Service";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    if (!slug || typeof slug !== "string") {
      return NextResponse.json(
        { success: false, error: "Service slug is required." },
        { status: 400 }
      );
    }

    const cleanSlug = slug.trim().toLowerCase();
    await connectToDatabase();

    const svc = await Service.findOne({ slug: cleanSlug }).lean();

    if (!svc) {
      return NextResponse.json(
        { success: false, error: `Service with slug '${cleanSlug}' not found.` },
        { status: 404 }
      );
    }

    const formattedService = {
      id: svc._id.toString(),
      slug: svc.slug,
      name: svc.name,
      category: svc.category,
      shortDescription: svc.shortDescription,
      description: svc.description,
      popular: Boolean(svc.popular),
      featured: Boolean(svc.featured),
      documentsRequired: svc.documentsRequired || [],
      processSteps: svc.processSteps || [],
      faqs: svc.faqs || [],
    };

    return NextResponse.json(
      {
        success: true,
        service: formattedService,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[GET /api/services/[slug] ERROR]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while fetching service details." },
      { status: 500 }
    );
  }
}
