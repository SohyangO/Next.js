"use client";

import React, { useEffect, useState } from "react";
import { CatData } from "../types/CatData";

const SSG = () => {
  const [cat, setCat] = useState<CatData | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://catfact.ninja/fact`);
      const catFact = await response.json();
      setCat(catFact);
    };

    fetchUser();
  }, []);

  if (!cat) {
    return <div>로딩중...</div>;
  }

  return (
    <div className="mt-8">
      <div className="border p-4 my-4">
        <div className="flex gap-8">
          <div>
            <h2 className="text-xl font-bold">{cat.fact}</h2>
            <div className="mt-4">
              <p>
                <span className="font-bold">글자수 : </span>
                {cat.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSG;
