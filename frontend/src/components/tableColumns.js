// eslint-disable-next-line no-sparse-arrays
const tablecolumns = [
  {
    id: "title",
    label: "Title",
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "authors",
    label: "Authors",
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "source",
    label: "Source",
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "pubyear",
    label: "Pub. Year",
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "doi",
    label: "DOI",
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

export default tablecolumns;
