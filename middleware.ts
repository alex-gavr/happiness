import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const cookie = request.cookies.has('nonUnique');

    // NonUnique Exit
    if (cookie) {
        return NextResponse.redirect('https://whoursie.com/4/5729771');
    }
}
