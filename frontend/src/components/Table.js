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
  DialogContent,
} from "@mui/material";
import CustomButton from "./CustomButton";

const ArticleTable = ({
  data,
  columns,
  handleAccept,
  handleReject,
  isModerator = false,
  moderationLoading = false,
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setModalOpen] = React.useState(false);
  const [selectedArticle, setSelectedArticle] = React.useState(null);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleOnModalOpen = (row) => {
    if (!isModerator) {
      setModalOpen(true);
      setSelectedArticle(row);
    }
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <strong>{column.label}</strong>
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
              <DialogContent>
                {selectedArticle ? (
                  <ArticleSummary
                    title={selectedArticle.title}
                    authors={selectedArticle.authors}
                    source={selectedArticle.source}
                    pubyear={selectedArticle.pubyear}
                    doi={selectedArticle.doi}
                    claim={selectedArticle.claim}
                    evidence={selectedArticle.evidence}
                  />
                ) : (
                  <div>Nothing to show</div>
                )}
              </DialogContent>
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
                      if (value !== undefined) {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      } else {
                        return (
                          <React.Fragment key={column.id}></React.Fragment>
                        );
                      }
                    })}
                    {isModerator ? (
                      <TableCell align="right">
                        <CustomButton
                          label="Accept"
                          bgcolor="#09f"
                          onClick={handleAccept(row._id)}
                          isLoading={moderationLoading}
                        />
                        <CustomButton
                          label="Reject"
                          bgcolor="#fc3730"
                          margin="0px 0px 0px 8px"
                          onClick={handleReject(row._id)}
                          isLoading={moderationLoading}
                        />
                      </TableCell>
                    ) : (
                      <></>
                    )}
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

const ArticleSummary = React.forwardRef((props, ref) => {
  const { title, authors, source, pubyear, doi, claim, evidence } = props;
  return (
    <Card sx={popupStyle} ref={ref}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          written by {authors} | {pubyear}, {source}
        </Typography>
        {/* claims */}
        <Box style={{ marginTop: 24 }}>
          <Typography variant="h7">Claim</Typography>
          <Paper style={{ maxHeight: 200, overflow: "auto", margin: 10 }}>
            <List>
              {claim !== undefined ? (
                <ListItem>{claim}</ListItem>
              ) : (
                <ListItem>No claim to show</ListItem>
              )}
            </List>
          </Paper>
        </Box>
        <Box style={{ marginTop: 24 }}>
          <Typography variant="h7">Evidence</Typography>
          <Paper style={{ maxHeight: 200, overflow: "auto", margin: 10 }}>
            <List>
              {evidence !== undefined ? (
                <ListItem>{evidence}</ListItem>
              ) : (
                <ListItem>No evidence to show</ListItem>
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
  );
});

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
