import "./App.css";
import ResponsiveAppBar from "./components/AppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProposeArticle from "./pages/ProposeArticle";
import ViewArticle from "./pages/ViewArticle";

const App = () => (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propose-article" element={<ProposeArticle />}/>
          <Route path="/view-article" element={<ViewArticle />}/>
        </Routes>
      </BrowserRouter>
    </div>
);

export default App;
