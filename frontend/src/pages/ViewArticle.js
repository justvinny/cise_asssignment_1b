import { useContext, useEffect } from "react";
import { Box } from "@mui/material";
import { CurrentUrlContext } from "../context/CurrentUrlContext";

const ViewArticle = () => {
    // Current URL state
    const [, setSelectedUrl] = useContext(CurrentUrlContext);

    useEffect(() => {
        setSelectedUrl("view-article");
    }, [setSelectedUrl]);

    return (
        <Box sx={{ bgcolor: "#fff", margin: "12px", padding: "8px" }}>
            <h1>View Articles</h1>
        </Box>
    );
};

export default ViewArticle;
