import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Pages/home";
import { AuthProvider } from "./component/authContext";
// import ProtectedRoute from "./component/protectedroute";
import Login from "./component/login";
import NotFound from "./component/Pages/notfound";
import Testingpgae from "./component/Pages/testingpgae";
import Adduser from "./component/Pages/adduser";
import Edituser from "./component/Pages/edituser";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/test" element={<Testingpgae />} />
          <Route path="/adduser" element={<Adduser />} />
          <Route path="/edit/:id" element={<Edituser />} />

          <Route
            path="/"
            element={
              // <ProtectedRoute>
              <Home />
              // </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
