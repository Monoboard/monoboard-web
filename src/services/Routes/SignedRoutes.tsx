import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../../components/Dashboard";
import LoginForm from "../../components/LoginForm";

const SignedRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/" element={<LoginForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default SignedRoutes;
