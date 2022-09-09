import React from "react";
import MainLayout from "../../layouts/MainLayout";
import AuthorizationLayout from "../../layouts/AuthorizationLayout";
import SignedRoutes from "./SignedRoutes";
import GuestRoutes from "./GuestRoutes";

const Routes = () => {
  const user = {};

  return (
    <div>
      {user ? (
        <MainLayout>
          <SignedRoutes />
        </MainLayout>
      ) : (
        <AuthorizationLayout>
          <GuestRoutes />
        </AuthorizationLayout>
      )}
    </div>
  );
};

export default Routes;
