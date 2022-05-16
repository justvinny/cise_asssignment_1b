import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { CurrentUrlContext } from "../context/CurrentUrlContext";

const Home = () => {
    // Current URL state
    const [, setSelectedUrl] = useContext(CurrentUrlContext);

    useEffect(() => {
        setSelectedUrl("/");
    }, [setSelectedUrl]);

    return (
        <Box sx={{ bgcolor: "#fff", margin: "12px", padding: "8px" }}>
            <h1>
                Hello world! CISE Assignment 1B SPEED App. Under construction.
            </h1>
        </Box>
    );
};

export default Home;
