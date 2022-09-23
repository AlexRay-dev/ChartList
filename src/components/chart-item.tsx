import React, {useState} from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  TableCell,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Popup from "./popup";

const ChartItem = () => {
  const [isOpenEditChartModal, setIsOpenEditChartModal] = useState(false)
  const [removeModal, setRemoveModal] = useState(false)

  // @ts-ignore
  // function createData(title, type, options) {
  //   return {title, type, options};
  // }

  function removeChartHandler() {

  }

  return (
    <>
      <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
        <TableCell align="left">Chart 1</TableCell>
        <TableCell align="left">Line</TableCell>
        <TableCell align="left">Gray</TableCell>

        <TableCell align="right">
          <IconButton onClick={() => setIsOpenEditChartModal(true)}>
            <EditIcon/>
          </IconButton>

          <IconButton onClick={() => setRemoveModal(true)}>
            <DeleteIcon/>
          </IconButton>
        </TableCell>
      </TableRow>

      <Dialog
        open={removeModal}
        onClose={() => setRemoveModal(false)}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you really want to delete this chart?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => setRemoveModal(false)}>Cansel</Button>
          <Button onClick={removeChartHandler}>Delete</Button>
        </DialogActions>
      </Dialog>

      <Popup isOpen={isOpenEditChartModal} setIsOpen={setIsOpenEditChartModal} type={"edit"}/>
    </>
  );
};

export default ChartItem;