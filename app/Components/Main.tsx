import Link from "next/link";
import React from "react";

function Main({posts}:any){
return(
    <main>

        <h1>Главная страница</h1>     
        <p>{posts[0].body}</p>
        {posts.map(el=>(
            <div className="post" key={el.id}>
                <h2>{el.title}</h2>
                <p>{el.body}</p>
                <Link href={`/post/` + el.id}>Детальнее</Link>
        </div>
        ))}

    </main>
)
}
export default Main