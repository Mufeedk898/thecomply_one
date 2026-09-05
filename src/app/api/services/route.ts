import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Service from "@/models/Service";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const featured = searchParams.get("featured");
    const popular = searchParams.get("popular");

    // Build filter query dynamically
    const filterQuery: Record<string, unknown> = {};

    if (category) {
      filterQuery.category = category.trim().toLowerCase();
    }

    if (featured !== null && featured !== undefined) {
      if (featured === "true") {
        filterQuery.featured = true;
      } else if (featured === "false") {
        filterQuery.featured = false;
      } else {
        return NextResponse.json(
          { success: false, error: "Invalid value for 'featured' parameter. Expected 'true' or 'false'." },
          { status: 400 }
        );
      }
    }

    if (popular !== null && popular !== undefined) {
      if (popular === "true") {
        filterQuery.popular = true;
      } else if (popular === "false") {
        filterQuery.popular = false;
      } else {
        return NextResponse.json(
          { success: false, error: "Invalid value for 'popular' parameter. Expected 'true' or 'false'." },
          { status: 400 }
        );
      }
    }

    await connectToDatabase();

    const services = await Service.find(filterQuery)
      .sort({ name: 1 })
      .lean();

    const formattedServices = services.map((svc) => ({
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
    }));

    return NextResponse.json(
      {
        success: true,
        count: formattedServices.length,
        services: formattedServices,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[GET /api/services ERROR]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while fetching services." },
      { status: 500 }
    );
  }
}
