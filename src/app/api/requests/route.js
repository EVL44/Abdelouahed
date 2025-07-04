
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, phoneNumber, service, message } = data;

    // Create a new entry in the database using Prisma
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
    // Log the full error to the Vercel console for debugging
    console.error("Error creating request:", error);
    
    // Return a detailed error message in the response
    return NextResponse.json(
      { message: 'Error creating request', error: error.message },
      { status: 500 }
    );
  }
}

/**
 * Handles GET requests to prevent "405 Method Not Allowed" errors.
 */
export async function GET(request) {
  return NextResponse.json(
    { message: 'This endpoint is for form submissions. Please use POST.' },
    { status: 405 }
  );
}