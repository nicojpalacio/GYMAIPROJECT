import { NextResponse } from "next/server";
import { db } from "@/libs/db";

export async function GET(request, { params }) {

    const creatorId = parseInt(params.id, 10);

  try {
    const routines = await db.Routine.findMany({
        where: { creatorId },
    });

    return NextResponse.json(routines);
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
