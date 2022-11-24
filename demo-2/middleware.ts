import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  if (pathname && pathname.replaceAll('/', '').length === 8) {
    const code = pathname.replaceAll('/', '');
    // typeof window !== 'undefined' && localStorage.setItem('code', code);
    return NextResponse.redirect(new URL(`/:${code}`, request.url), 308)
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:code*',
}