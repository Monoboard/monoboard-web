import React from "react";

type Props = {
  children?: React.ReactNode;
};

const AuthorizationLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default AuthorizationLayout;
