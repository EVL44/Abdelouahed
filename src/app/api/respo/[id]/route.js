import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key';

export async function DELETE(request, { params }) {
  // Use the id directly as a string, no parseInt
  const { id } = params;

  try {
    const token = cookies().get('auth_token');
    if (!token?.value) {
      return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
    }
    verify(token.value, SECRET_KEY);

    // Use the correct model name: 'request'
    await prisma.request.delete({
      where: {
        id: id, // Use the string ID
      },
    });

    return NextResponse.json({ message: 'Message deleted successfully' });

  } catch (error) {
    if (error.code === 'P2025') {
      return NextResponse.json({ message: 'Message not found' }, { status: 404 });
    }
    if (error.name === 'JsonWebTokenError') {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }
    console.error('DELETE API ERROR:', error);
    return NextResponse.json(
      { message: 'An internal server error occurred', error: error.message },
      { status: 500 }
    );
  }
}