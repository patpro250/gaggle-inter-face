import React from "react";
interface Props {
  params: { id: number };
}
const EditLibarian = ({ params: { id } }: Props) => {
  return (
    <div>
      <h1> Edit ID:{id} </h1>
    </div>
  );
};

export default EditLibarian;
