import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "pages/Login";
import AuthError from "pages/AuthError";
import { AuthProvider } from "contexts/Auth";
import AuthSuccess from "pages/AuthSuccess";
import Inbox from "pages/Inbox";
import Auth from "routes/Auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/error" element={<AuthError />} />
          <Route path="/success" element={<AuthSuccess />} />
          <Route path="/login" element={<Login />} />
          <Route element={<Auth />}>
            {/* Protected routes */}
            <Route path="/inbox" element={<Inbox />} />
          </Route>
          <Route path="*" element={<Navigate to="/inbox" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
