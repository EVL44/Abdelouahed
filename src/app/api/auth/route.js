import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { sign } from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    const admin = await prisma.admin.findUnique({
      where: { username },
    });

    if (admin && admin.password === password) {
      // Create the token
      const token = sign({ userId: admin.id }, SECRET_KEY, { expiresIn: '1h' });

      // 1. Create a response object first
      const response = NextResponse.json({ message: 'Login successful' });

      // 2. Set the cookie on the response object
      response.cookies.set('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
        sameSite: 'strict',
        path: '/',
      });

      return response;

    } else {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    console.error('Auth API Error:', error);
    return NextResponse.json({ message: 'An internal server error occurred' }, { status: 500 });
  }
}