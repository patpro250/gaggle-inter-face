import React from "react";

interface Props {
  params: { id: number };
}
const ViewLibrarian = ({ params: { id } }: Props) => {
  return (
    <div>
      <h1>VIEW DATA OF ID:{id}</h1>
    </div>
  );
};

export default ViewLibrarian;
