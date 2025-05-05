import Link from "next/link";
import React from "react";

function Post({res}:any){
return(
    <div>
            <Link href="/">Назад</Link>
            <h2>{res.title}</h2>
            <p>{res.body}</p>
            <strong>Autor ID:{res.userId}</strong>
    </div>
)
}
export default Post