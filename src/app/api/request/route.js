
export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';


export async function POST(request) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, phoneNumber, service, message } = data;

    const newRequest = await prisma.request.create({
      data: {
        firstName,
        lastName,
        email,
        phoneNumber,
        service,
        message,
      },
    });

    return NextResponse.json(newRequest, { status: 201 });
  } catch (error) {
    console.error("Error creating request:", error);
    return NextResponse.json({ message: 'Error creating request' }, { status: 500 });
  }
}