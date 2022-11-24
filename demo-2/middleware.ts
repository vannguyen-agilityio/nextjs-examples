import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const code = pathname ? pathname.replaceAll('/', '') : '';

  if (code.length === 8 && code !== 'referral') {
    return NextResponse.redirect(
      new URL(`/referral?code=${code}`, request.url),
      308
    );
  }
}
