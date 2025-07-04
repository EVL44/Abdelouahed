export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

/**
 * Handles POST requests to create a new request in the database.
 * This is used by your contact form.
 */
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
    // It's helpful to return the actual error message for debugging
    return NextResponse.json({ message: 'Error creating request', error: error.message }, { status: 500 });
  }
}

/**
 * Handles GET requests to this endpoint.
 * This prevents the "405 Method Not Allowed" error.
 */
export async function GET(request) {
  return NextResponse.json(
    { message: 'This endpoint is for form submissions. Please use POST.' },
    { status: 405 }
  );
}