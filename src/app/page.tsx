import Link from "next/link";

import React from "react";
export default function Home() {
  return (
    <>
      <header>
        <h1>Hello Next.js</h1>

        <nav>
          <Link href={`/components/rendering/0`}>SSG</Link>
          <br />
          <Link href={`/components/rendering/1`}>ISR</Link>
          <br />
          <Link href={`/components/rendering/2`}>SSR</Link>
          <br />
          <Link href={`/components/rendering/3`}>CSR</Link>
        </nav>
      </header>
    </>
  );
}
