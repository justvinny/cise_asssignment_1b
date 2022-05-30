import { useState } from "react";
import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import ArticleTable from "../components/Table";
import { moderatorTableColumns } from "../components/tableColumns";
import { CurrentUrlContext } from "../context/CurrentUrlContext";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { getArticle } from "../services/articlesService";

const ModerateArticle = () => {
  // Current URL state
  const [, setSelectedUrl] = useContext(CurrentUrlContext);
  const [, setCurrentUser] = useContext(CurrentUserContext);

  const [articles, setArticles] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (document.referrer !== "") {
      setSelectedUrl("/moderate-article");
      setCurrentUser("Moderator");
    }
    getArticle()
      .then((data) => {
        setArticles(data.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setSelectedUrl, setCurrentUser]);

  return (
    <Box sx={{ bgcolor: "#fff", margin: "12px", padding: "8px" }}>
      {isLoading ? (
        <></>
      ) : (
        <ArticleTable
          data={articles}
          columns={moderatorTableColumns}
          isModerator={true}
        />
      )}
    </Box>
  );
};

export default ModerateArticle;
