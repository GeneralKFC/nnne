import Link from "next/link";
import React from "react";

function Header(){
return(
    <header>

        <span>My Next.js app</span>

        <nav>

        <Link href="/">Home</Link>
        <Link href="/about">About</Link>

        </nav>
    </header>
)
}
export default Header