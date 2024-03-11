"use client";

import React, { useEffect, useState } from "react";

import type { RandomFact } from "@/app/types/RandomFact";
import Link from "next/link";

const CSR = () => {
  const [catFact, setCatFact] = useState<RandomFact | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://randomuser.me/api`);
      const { results } = await response.json();
      setCatFact(results);
    };

    fetchUser();
  }, []);

  if (!catFact) {
    return <div>로딩중...</div>;
  }

  return (
    <div>
      <div>
        <div>
          <h1>다음 글의 이름은</h1>
          <p>{catFact.fact}</p>
        </div>
        <span>길이:{catFact.length}</span>
      </div>

      <Link href={`/`}>메인으로</Link>
    </div>
  );
};

export default CSR;
