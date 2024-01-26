import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import apiMatchInstance from "../../service/api-match";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { FaEllipsisV } from "react-icons/fa";
import { Box, CircularProgress } from "@mui/material";

const MatchInfo = () => {
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
    <div className="pt-[25px] px-[25px] bg-[#F9F8FC]">
      <div className="flex mt-[22px] w-full gap-[30px]">
        <div className="basis-[70%] border bg-white shadow-md rounded-[4px]">
          <div className="bg-[#F8F9FC] flex items-center justify-between px-[20px] py-[15px] border-b-[1px] border-[#EDEDED]">
            <h>Match</h>
          </div>
          <div className="relative overflow-x-auto shadow-md h-[400px]">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200  ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Bracket
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Match Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Start Time
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Address
                  </th>
                </tr>
              </thead>
              <tbody>
                {listMatch.length !== 0 ? (
                  listMatch.map((item, index) => (
                    <tr
                      key={item.id}
                      className="odd:bg-white  even:bg-gray-200  border-b "
                    >
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        {item.id}
                      </td>
                      <td className="px-6 py-4">{item.bracketId}</td>
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">{item.startTime}</td>
                      <td className="px-6 py-4">{item.place}</td>
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
          </div>
          <div className="flex justify-center my-[15px]">
            <Stack spacing={2}>
              <Pagination count={10} color="primary" />
            </Stack>
          </div>
          {/* <div className="mt-4">
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
          </div> */}
        </div>
        <div className="basis-[30%] border bg-white shadow-md rounded-[4px]">
          <div className="bg-[#F8F9FC] flex items-center justify-between px-[20px] py-[15px] border-b-[1px] border-[#EDEDED]">
            <h2>Coming Soon...</h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div className="flex h-[400px] items-center justify-center">
            <Box className="flex">
              <CircularProgress />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchInfo;
