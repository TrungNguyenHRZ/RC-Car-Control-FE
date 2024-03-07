import React, { useEffect, useState } from "react";
import apiMatchInstance from "../../service/api-match";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { FaEllipsisV } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import moment from "moment";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Button } from "antd";

const MatchInfo = () => {
  const [listMatch, setListMatch] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openAdding, setOpenAdding] = React.useState(false);
  const itemPerPage = 5;

  useEffect(() => {
    apiMatchInstance
      .get("/getAll")
      .then((response) => {
        setListMatch(response.data.payload);
        //setTotalPage(Math.ceil(response.data.payload.length / itemPerPage));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleRowClick = (match) => {
    setSelectedMatch(match);
    setIsEditing(false);
  };
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleAddToggle = () => {
    setIsAdding(!isAdding);
  };

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const handleDeleteItem = () => {
    console.log("Delete item");
    setOpenDelete(true);
  };
  const renderedData = listMatch.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

  const totalPages = Math.ceil(listMatch.length / itemPerPage);

  const formattedDateTime =
    selectedMatch && selectedMatch.startTime
      ? moment(selectedMatch.startTime).format("YYYY-MM-DDTHH:mm")
      : "";

  const handleChangeInput = (e) => {
    setSelectedMatch({
      ...selectedMatch,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleClose = () => {
    setOpenDelete(false);
  };
  const handleClickOpenAdding = () => {
    setOpenAdding(true);
  };

  const handleCloseAdding = () => {
    setOpenAdding(false);
  };
  return (
    <div className="pt-[25px] px-[25px] bg-[#F9F8FC]">
      <div className="flex mt-[22px] w-full gap-[30px]">
        <div className="basis-[70%] border bg-white shadow-md rounded-[4px]">
          <div className="bg-[#F8F9FC] flex items-center justify-between px-[20px] py-[15px] border-b-[1px] border-[#EDEDED]">
            <h>Match</h>
            <FaCirclePlus
              color="green"
              className="cursor-pointer"
              onClick={handleClickOpenAdding}
            />
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {listMatch.length !== 0 ? (
                  renderedData.map((item, index) => (
                    <tr
                      key={item.id}
                      className="odd:bg-white  even:bg-gray-200  border-b cursor-pointer transition delay-50 hover:bg-[#668bfac9] hover:text-white"
                      onClick={() => handleRowClick(item)}
                    >
                      <td className="px-6 py-4 font-medium  whitespace-nowrap ">
                        {item.id}
                      </td>
                      <td className="px-6 py-4">{item.bracketId}</td>
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">{item.startTime}</td>
                      <td className="px-6 py-4">{item.place}</td>
                      <td className="px-6 py-4">
                        <RemoveCircleIcon
                          color="error"
                          onClick={handleDeleteItem}
                        />
                      </td>
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
            <Stack spacing={1}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
              />
            </Stack>
          </div>
        </div>
        <div className="basis-[30%] border bg-white shadow-md rounded-[4px]">
          <div className="bg-[#F8F9FC] flex items-center justify-between px-[20px] py-[15px] border-b-[1px] border-[#EDEDED]">
            <h2>Match Detail</h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div className="flex flex-col">
            <form
              className="w-full pl-[15px] pt-[15px] pr-[15px] pb-[3px]"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    for="match_id"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Match ID
                  </label>
                  <input
                    type="text"
                    id="match_id"
                    name="id"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder=""
                    required
                    value={selectedMatch ? selectedMatch.id : ""}
                    disabled
                  />
                </div>
                <div>
                  <label
                    for="bracket_id"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Bracket ID
                  </label>
                  <input
                    type="text"
                    id="bracket_id"
                    name="bracketId"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder=""
                    required
                    value={selectedMatch ? selectedMatch.bracketId : ""}
                    disabled={!isEditing}
                    onChange={handleChangeInput}
                  />
                </div>
                <div>
                  <label
                    for="match_name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Match name
                  </label>
                  <input
                    type="text"
                    id="match_name"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder=""
                    required
                    value={selectedMatch ? selectedMatch.name : ""}
                    disabled={!isEditing}
                    onChange={handleChangeInput}
                  />
                </div>
                <div>
                  <label
                    for="time"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Time
                  </label>
                  <input
                    type="datetime-local"
                    id="time"
                    name="startTime"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder=""
                    required
                    value={formattedDateTime}
                    disabled={!isEditing}
                    onChange={handleChangeInput}
                  />
                </div>
                <div>
                  <label
                    for="lap"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Number of lap
                  </label>
                  <input
                    type="number"
                    id="lap"
                    name="lap"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="0"
                    required
                    value={selectedMatch ? selectedMatch.lap : ""}
                    disabled={!isEditing}
                    onChange={handleChangeInput}
                  />
                </div>
                <div>
                  <label
                    for="location"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="place"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder=""
                    required
                    value={selectedMatch ? selectedMatch.place : ""}
                    disabled={!isEditing}
                    onChange={handleChangeInput}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                {isEditing ? (
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
                  >
                    Update
                  </button>
                ) : (
                  ""
                )}
                {isAdding ? (
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
                  >
                    Submit
                  </button>
                ) : (
                  ""
                )}
              </div>
            </form>
            <div className="flex justify-between pl-[15px] pb-[15px] pr-[15px]">
              {!isEditing || isAdding ? (
                <button
                  onClick={handleEditToggle}
                  type="submit"
                  className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Edit
                </button>
              ) : (
                ""
              )}
              {isAdding ? (
                <button
                  onClick={handleAddToggle}
                  type="submit"
                  className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Add
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <Dialog
        open={openDelete}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Are you sure you want to delete?`}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <React.Fragment>
        <Dialog
          open={openAdding}
          onClose={handleCloseAdding}
          PaperProps={{
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleCloseAdding();
            },
          }}
        >
          <DialogTitle>Add new match</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter all data fields to add a new match. This is required.
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="id"
              name="id"
              label="ID"
              type="number"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="bracketId"
              name="bracketId"
              label="Bracket ID"
              type="number"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Match Name"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="startTime"
              name="startTime"
              label=""
              type="datetime-local"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="lap"
              name="lap"
              label="Number of lap"
              type="number"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="place"
              name="place"
              label="Location"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAdding}>Cancel</Button>
            <Button variant="contained" type="submit">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </div>
  );
};

export default MatchInfo;
