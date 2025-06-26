import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import PrivateRoute from "./middlewares/PrivateRoute";
import Main from "./Layouts/Main";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota pública */}
        <Route path="/" element={<Login />} />

        {/* Rotas protegidas */}
        {/* <Route
          path="/home"
          element={
            <PrivateRoute>
             <Home/>
            </PrivateRoute>
          }
        /> */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
