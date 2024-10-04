import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import Footer from './Components/Footer/Footer'
import ScrollToTop from "./Components/ScrollToTop";
import "./App.css";
import './index.css'


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
