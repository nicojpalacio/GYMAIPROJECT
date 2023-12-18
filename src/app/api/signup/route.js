import { NextResponse } from "next/server";
import { db } from "@/libs/db";
import { hash } from "bcrypt";

export async function GET() {
  const users = await db.user.findMany();

  return NextResponse.json(users);
}



export async function POST(request) {
  try {
    const { username, email, password } = await request.json();

    const existingUserByEmail = await db.user.findUnique({
      where: { email: email },
    });

    

    //Contola si ya existe email
    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "Email already exists" },
        { status: 400 }
      );
    }

    //Encripta contraseña
    const hashedPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const { password: _, ...user } = newUser;

    return NextResponse.json(
      { user, message: "Successful registration" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}