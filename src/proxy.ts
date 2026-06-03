import {
    NextRequest, 
    NextResponse
}
from "next/server"

// por enquanto ele so serve para setar um header personalizado contendo a rota atual
export async function proxy(req: NextRequest){
    const url = new URL(req.url)
    
    let page = url.searchParams.get("p")
    if(!page){
        url.searchParams.set("p", "1")
    }

    const resp = new Headers()
    resp.set("x-pathname", url.href)
    
    // muda a rota (query) e os headers
    // const response = NextResponse.rewrite(url, {
    //     request: {
    //         headers: requestHeaders,
    //     },
    // })

    return NextResponse.rewrite(url, {
        request:{
            headers: resp
        }
    })

    return NextResponse.next({headers: resp})
}

export const config = {
    matcher: "/:path*"
}