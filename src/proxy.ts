import {
    type NextRequest, 
    NextResponse
}
from "next/server"

export async function proxy(req: NextRequest){
    const url = new URL(req.url).pathname
    const resp = new Headers()
    resp.set("x-pathname", url)
    return NextResponse.next({headers: resp})
}

export const config = {
    matcher: "/:path*"
}