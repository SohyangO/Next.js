// src>app>rendering/page.tsx
import SSG from "../components/rendering/SSG";
import React from "react";

const RenderingTestPage = () => {
  return (
    <div>
      <h1>4가지 렌더링 방식을 테스트합니다.</h1>
      <SSG />
    </div>
  );
};

export default RenderingTestPage;
