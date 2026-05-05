import {
    type NextRequest, 
    NextResponse
}
from "next/server"

// por enqquanto ele so serve para setar um header personalizado contendo a rota atual
export async function proxy(req: NextRequest){
    const url = new URL(req.url)
    const resp = new Headers()
    resp.set("x-pathname", url.href)
    return NextResponse.next({headers: resp})
}

export const config = {
    matcher: "/:path*"
}