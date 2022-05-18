import { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { CurrentUrlContext } from "../context/CurrentUrlContext";
import Dropdown from "../components/Dropdown";
import ArticleTable from "../components/Table";

import { getPractices } from "../services/practicesService";
import { getArticle } from "../services/articlesService";
import tablecolumns from "../components/tableColumns";

const ViewArticle = () => {
  // Current URL state
  const [, setSelectedUrl] = useContext(CurrentUrlContext);

  // Dropdown States
  const [practices, setPractices] = useState([]);
  const [selectedPractice, setSelectedPractice] = useState("");

  // Articles
  const [articles, setArticles] = useState([]);

  // Loading State
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setSelectedUrl("view-article");
  }, [setSelectedUrl]);

  useEffect(() => {
    setSelectedUrl("propose-article");
    getPractices()
      .then((data) => {
        const practices = data.map((practice) => practice.practice);
        setPractices(practices);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setSelectedUrl]);

  const handleSelectPractice = (practice) => {
    setSelectedPractice(practice);
    getArticle().then(({ data }) => {
      setArticles(data.filter((data) => data.sepractice === practice));
    });
  };

  return (
    <Box sx={{ bgcolor: "#fff", margin: "12px", padding: "8px" }}>
      <h1>View Articles</h1>
      <Box>
        <Dropdown
          menuItems={practices}
          selectedPractice={selectedPractice}
          setSelectedPractice={handleSelectPractice}
          isLoading={isLoading}
        />
        <ArticleTable data={articles} columns={tablecolumns} />
      </Box>
    </Box>
  );
};

export default ViewArticle;
