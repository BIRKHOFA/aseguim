import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { resourcesColumns } from "../../datatablesource";
import {resourcesData} from "../../dummydata"
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        console.log(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();

    // LISTEN (REALTIME)
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        console.log(list)
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (link) => {
        console.log(link.row)
        return (
          <div className="cellAction">
              <a href={link.row.lien} target="_blank" rel="noreferrer" className="viewButton">Voir</a>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Liste Des Ressources Drive
      </div>
      <DataGrid
        className="datagrid"
        rows={resourcesData}
        columns={resourcesColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        localeText={
          {
            columnMenuSortAsc : 'tri croissant',
            columnMenuSortDesc : 'tri decroissant',
            columnMenuFilter: 'Filtrer',
            columnMenuShowColumns: 'Monstrer Des columns',
            columnMenuHideColumn: 'Cacher Des column',
            columnMenuUnsort: 'Desordonné'
          }
        }
      />
    </div>
  );
};

export default Datatable;
