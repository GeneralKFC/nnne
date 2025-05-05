export async function GET(request:any) {
    const data={
        name:'bob',
        age:10,
        bio:'some info',
    }
    return new Response(JSON.stringify(data));
}

export async function POST(request:any) {
    return new Response(request.body);
}