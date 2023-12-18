import { NextResponse } from "next/server";
import { db } from "@/libs/db";

//Se utilizó para agregar las body parts

// export async function POST(request) {
//   try {
//     const { name } = await request.json();

//     const existingBodyPart = await db.bodyPart.findUnique({
//       where: { name: name },
//     });

//     //Contola si ya existe body part
//     if (existingBodyPart) {
//       return NextResponse.json(
//         { body: null, message: "Body already exists" },
//         { status: 400 }
//       );
//     }

//      const newBodyPart = await db.bodyPart.create({
//       data: {
//         name,
//       },
//     });

//     return NextResponse.json(
//       { newBodyPart, message: "Successful created body part" },
//       { status: 201 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Something went wrong!" },
//       { status: 500 }
//     );
//   }
// }

// Se utilizo para borrar todas las partes del cuepo

// export async function DELETE() {
//   try {
//     await db.BodyPart.deleteMany();
//     return NextResponse.json(
//       {body:null message: "Successful delete bodys parts" },
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
  const bodys = await db.BodyPart.findMany();
  return NextResponse.json(bodys);
}
