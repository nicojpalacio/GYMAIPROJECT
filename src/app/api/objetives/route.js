import { NextResponse } from "next/server";
import { db } from "@/libs/db";

//Se utilizó para agregar las objetives

// export async function POST(request) {
//   try {
//     const { description } = await request.json();

//     const existingObjetive = await db.Objetive.findUnique({
//       where: { description: description },
//     });

//     //Contola si ya existe body objetive
//     if (existingObjetive) {
//       return NextResponse.json(
//         { body: null, message: "Objetive already exists" },
//         { status: 400 }
//       );
//     }

//     const newObjetive = await db.Objetive.create({
//       data: {
//         description,
//       },
//     });

//     return NextResponse.json(
//       { newObjetive, message: "Successful created Objetive" },
//       { status: 201 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Something went wrong!" },
//       { status: 500 }
//     );
//   }
// }

export async function GET() {
  const objetives = await db.objetive.findMany();
  return NextResponse.json(objetives);
}
