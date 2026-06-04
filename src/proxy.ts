import {
    NextRequest, 
    NextResponse,
    MiddlewareConfig
}
from "next/server"

// seta um header especial contendo a rota atual por inteiro
// seta um query param padrao do valor da pagia
export async function proxy(req: NextRequest){
    const url = new URL(req.url)
    let page = url.searchParams.get("p")
    if(!page){
        url.searchParams.set("p", "1")
    }

    const resp = req.headers
    resp.set("x-pathname", url.href)

    // return NextResponse.next()
    return NextResponse.rewrite(url, {
        request:{
            headers: resp
        }
    })
}

export const config: MiddlewareConfig = {
    matcher: ["/"]
}