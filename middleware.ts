import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const cookie = request.cookies.has('nonUnique');
    const path = request.url === 'https://areuhappy.top/' ? true : false;

    // NonUnique Exit
    if (cookie && path) {
        return NextResponse.redirect('https://whoursie.com/4/5729771');
    }
}
