import React from "react";
interface Props {
  params: { id: string };
}
const EditAccount = ({ params: { id } }: Props) => {
  return <div>user: {id}</div>;
};

export default EditAccount;
