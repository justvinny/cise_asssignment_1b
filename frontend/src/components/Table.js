import * as React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Link,
  List,
  Box,
  ListItem,
  Typography,
  Modal,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

const ArticleTable = ({ data, columns }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setModalOpen] = React.useState(false);

  const [selectedArticle, setSelectedArticle] = React.useState(null);

  const ref = React.useRef();

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleOnModalOpen = (row) => {
    setModalOpen(true);
    setSelectedArticle(row);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <Modal
              open={open}
              onClose={() => setModalOpen(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              {selectedArticle ? (
                <ArticleSummary
                  title={selectedArticle.title}
                  authors={selectedArticle.authors}
                  source={selectedArticle.source}
                  pubyear={selectedArticle.pubyear}
                  doi={selectedArticle.doi}
                  claims={selectedArticle.claim}
                />
              ) : (
                <div>nothing to show</div>
              )}
            </Modal>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, idx) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={idx}
                    onClick={() => handleOnModalOpen(row)}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

const ArticleSummary = ({ title, authors, source, pubyear, doi, claims }) => {
  return (
    <Card sx={popupStyle}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          written by {authors} | {pubyear}, {source}
        </Typography>
        {/* claims */}
        <Box style={{ marginTop: 24 }}>
          <Typography variant="h7">Claims</Typography>
          <Paper style={{ maxHeight: 200, overflow: "auto", margin: 10 }}>
            <List>
              {claims ? (
                claims.map((claim) => {
                  return <ListItem>{claim}</ListItem>;
                })
              ) : (
                <ListItem>No claims to show</ListItem>
              )}
            </List>
          </Paper>
        </Box>
      </CardContent>
      <CardActions>
        <Link href={doi} color="text.secondary">
          {doi}
        </Link>
      </CardActions>
    </Card>
    // <Box sx={popupStyle}>
    //   <Typography id="modal-modal-title" variant="h6" component="h2">
    //     {title}
    //   </Typography>
    //   <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    //     {authors}
    //   </Typography>
    //   <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    //     {source}
    //   </Typography>
    //   <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    //     {pubyear}
    //   </Typography>
    //   <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    //     {doi}
    //   </Typography>
    // </Box>
  );
};

const popupStyle = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  p: 4,
};

export default ArticleTable;
