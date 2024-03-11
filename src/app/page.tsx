import Link from "next/link";

import React from "react";
export default function Home() {
  return (
    <>
      <header className="flex items-stretch justify-between">
        <h1>Hello Next.js</h1>

        <nav className="flex">
          <Link href={`/components/rendering/0`} className="px-8">
            SSG
          </Link>
          <br />
          <Link href={`/components/rendering/0/1`} className="px-8">
            ISR
          </Link>
          <br />
          <Link href={`/components/rendering/0/1/2`} className="px-8">
            SSR
          </Link>
          <br />
          <Link href={`/components/rendering/0/1/2/3`} className="px-8">
            CSR
          </Link>
        </nav>
      </header>
    </>
  );
}
