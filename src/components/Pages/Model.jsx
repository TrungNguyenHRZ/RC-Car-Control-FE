import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import apiMatchInstance from "../../service/api-match";
import "./Model.css";
const Model = () => {
  const [listMatch, setListMatch] = useState([]);
  const itemPerPage = 9;

  useEffect(() => {
    apiMatchInstance
      .get("/getAll")
      .then((response) => {
        setListMatch(response.data.payload);
        //setTotalPage(Math.ceil(response.data.payload.length / itemPerPage));
        console.log(response.data.payload);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  let renderData = () => {
    return listMatch.map((item, index) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.bracketId}</td>
        <td>{item.name}</td>
        <td>{item.startTime}</td>
        <td>{item.place}</td>
      </tr>
    ));
  };

  return (
    <div className="table-match-container">
      <table className="table-match">
        <thead>
          <tr>
            <th>ID</th>
            <th>bracket</th>
            <th>Match Name</th>
            <th>Start Time</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {listMatch.length !== 0 ? (
            listMatch.map((item, index) => (
              <tr key={item.id} className="tbody-match-tr">
                <td>
                  <div className="tbody-match-td">{item.id}</div>
                </td>
                <td className="tbody-match-td">{item.bracketId}</td>
                <td className="tbody-match-td">{item.name}</td>
                <td className="tbody-match-td">{item.startTime}</td>
                <td className="tbody-match-td">{item.place}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td style={{ textAlign: "center" }} colSpan={7}>
                No result found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="view-race-pagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          //onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          //marginPagesDisplayed={3}
          pageCount={10}
          previousLabel="<"
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </div>
  );
};

export default Model;
