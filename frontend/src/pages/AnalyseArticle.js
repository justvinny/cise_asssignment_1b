import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { CurrentUrlContext } from "../context/CurrentUrlContext";
import { CurrentUserContext } from "../context/CurrentUserContext";

const AnalyseArticle = () => {
    // Current URL state
    const [, setSelectedUrl] = useContext(CurrentUrlContext);
    const [, setCurrentUser] = useContext(CurrentUserContext);

    useEffect(() => {
        if (document.referrer !== "") {
            setSelectedUrl("/analyse-article");
            setCurrentUser("Analyst");
        }
    }, [setSelectedUrl, setCurrentUser]);

    return (
        <Box sx={{ bgcolor: "#fff", margin: "12px", padding: "8px" }}>
            <h1>Analyse Articles</h1>
        </Box>
    );
};

export default AnalyseArticle;
