import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Home from "./pages/Home";
import ProposeArticle from "./pages/ProposeArticle";
import ViewArticle from "./pages/ViewArticle";
import { CurrentUrlProvider } from "./context/CurrentUrlContext";

const App = () => {
    return (
        <Box className="App">
            <CurrentUrlProvider>
                <BrowserRouter>
                    <ResponsiveAppBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/propose-article"
                            element={<ProposeArticle />}
                        />
                        <Route path="/view-article" element={<ViewArticle />} />
                    </Routes>
                </BrowserRouter>
            </CurrentUrlProvider>
        </Box>
    );
};

export default App;
