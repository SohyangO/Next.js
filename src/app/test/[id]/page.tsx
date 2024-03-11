import React from "react";

const IDPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return (
    <>
      <h1>IDPage</h1>
      <div>IDPage 테스트 : {params.id}</div>
    </>
  );
};

export default IDPage;
