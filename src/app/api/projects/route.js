// src/app/api/projects/route.js (optional API endpoint)
import { getProjects } from "@/lib/notion";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const projects = await getProjects();
    return NextResponse.json({
      success: true,
      data: projects,
      count: projects.length,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
