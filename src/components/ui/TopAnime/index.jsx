import React from "react";
import Card from "../../layout/Card";

export default function TopAnime({ topAnimes }) {
  console.log(topAnimes);
  return (
    <div>
      <ul className="grid grid-cols-2 px-12 gap-5">
        {topAnimes?.map((topanime) => (
          <Card topanime={topanime} />
        ))}
      </ul>
    </div>
  );
}
