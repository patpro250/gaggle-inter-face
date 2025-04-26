import React from "react";
interface Props {
  params: { id: number };
}
const DeletLibarian = ({ params: { id } }: Props) => {
  return (
    <div>
      <h1> DELET ID:{id} </h1>
    </div>
  );
};

export default DeletLibarian;
