import Link from "next/link";
import React from "react";
import { RandomFact } from "@/app/types/RandomFact";
const SSG = async () => {
  const response = await fetch(`https://catfact.ninja/fact`);

  const jsonData = await response.json();

  const catFact: RandomFact = jsonData;

  return (
    <>
      <div>
        <div>
          <h1>다음 글의 이름은</h1>
          <p>{catFact.fact}</p>
        </div>
        <span>길이:{catFact.length}</span>
      </div>

      <Link href={`/`}>메인으로</Link>
    </>
  );
};

export default SSG;
