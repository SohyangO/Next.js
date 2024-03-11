// src>app>rendering/page.tsx
import ISR from "../components/rendering/ISR";
import React from "react";

const RenderingTestPage = () => {
  return (
    <div>
      <h1>4가지 렌더링 방식을 테스트합니다.</h1>
      <ISR />
    </div>
  );
};

export default RenderingTestPage;
