import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "pages/Login";
import AuthError from "pages/AuthError";
import { AuthProvider } from "contexts/Auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<h1 className="text-sm text-red-500">Root path</h1>}
          />
          <Route path="/error" element={<AuthError />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/inbox"
            element={<h1 className="text-sm text-red-500">Inbox path</h1>}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
