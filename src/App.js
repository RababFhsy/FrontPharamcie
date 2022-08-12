import "./App.css";
import Main from "./pages/Main";
import Products from "./pages/Products";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
