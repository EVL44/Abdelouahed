import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Create a response to send back to the client
    const response = NextResponse.json({ message: 'Logout successful' });

    // Set the cookie with an immediate expiration date to delete it
    response.cookies.set('auth_token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      path: '/',
      expires: new Date(0),
    });

    return response;
  } catch (error) {
    console.error('Logout API Error:', error);
    return NextResponse.json({ message: 'An internal server error occurred' }, { status: 500 });
  }
}