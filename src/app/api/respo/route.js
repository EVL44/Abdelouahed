import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

export async function GET(request) {
  try {
    // Read the cookie from the incoming request using the cookies() store
    const token = cookies().get('auth_token');

    // Check if the token exists and has a value
    if (!token || !token.value) {
      return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
    }

    // Verify the token
    verify(token.value, SECRET_KEY);

    // Fetch messages if token is valid
    const messages = await prisma.request.findMany();
    return NextResponse.json(messages);

  } catch (error) {
    // Handle invalid tokens specifically
    if (error.name === 'JsonWebTokenError') {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }
    // Log other potential errors
    console.error('Respo API Error:', error);
    return NextResponse.json({ message: 'An internal server error occurred' }, { status: 500 });
  }
}