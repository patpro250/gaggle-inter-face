import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MembersLayout = ({ children }: Props) => {
  return <div className="my-10 mx-40">{children}</div>;
};

export default MembersLayout;
