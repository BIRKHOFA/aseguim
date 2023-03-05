export const resourcesColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "ecole",
    headerName: "Ecole",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.logo} alt="avatar" />
          {params.row.ecole}
        </div>
      );
    },
  },
  {
    field: "filiere",
    headerName: "Filière",
    width: 230,
  },
  {
    field: "semestre",
    headerName: "Semestre",
    width: 230,
  },
  {
    field: "responsable",
    headerName: "Responsable",
    width: 230,
  },

  {
    field: "email",
    headerName: "Address Email",
    width: 100,
  },
  
];
