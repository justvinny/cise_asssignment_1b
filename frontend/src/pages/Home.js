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
      <h1>CISE Assignment 1B SPEED App</h1>
      <h2>Team 6</h2>
      <h2>Team Members:</h2>
      <ul>
        <li>Vinson Beduya</li>
        <li>Jose Santos</li>
        <li>Jacob Tupe</li>
      </ul>
      <Box sx={{ width: "100%", display: "flex" }}>
        <img
          src="developers.png"
          width={"90%"}
          style={{ margin: "0px auto" }}
        />
      </Box>
    </Box>
  );
};

export default Home;
