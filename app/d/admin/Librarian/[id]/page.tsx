import React from "react";

interface Props {
  params: { id: number };
}

const SingleLibrarian = ({ params: { id } }: Props) => {
  return <div>{id}</div>;
};

export default SingleLibrarian;
