import React from "react";

// SSG TEST : 아무것도 하지 않으면 SSG!
const SSG = async () => {
  const response = await fetch(`https://catfact.ninja/fact`);
  const cat = await response.json();

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
