import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./componentes/footer/Footer";
import Header from "./componentes/header/Header";
import HomePage from "./pages/home/HomePage";
import Authors from "./pages/authors/Authors";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import Contact from "./pages/contact/Contact";
import Book from "./pages/book/Book";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/author" element={<Authors />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
