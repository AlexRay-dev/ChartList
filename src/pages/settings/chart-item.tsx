import React, {useState} from 'react';
import {
  Button, Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Popup from "../../components/popup/popup";
import { StyledTableCell } from './styles';
import {POPUP} from "../../components/popup/interface";

const ChartItem = () => {
  const [isOpenEditChartModal, setIsOpenEditChartModal] = useState(false)
  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false)

  return (
    <>
      <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
        <StyledTableCell align="left">Chart 1</StyledTableCell>
        <StyledTableCell align="left">Line</StyledTableCell>
        <StyledTableCell align="left">Gray</StyledTableCell>
        <StyledTableCell align="right">
          <IconButton size="small"  onClick={() => setIsOpenEditChartModal(true)}>
            <EditIcon/>
          </IconButton>

          <IconButton size="small" onClick={() => setIsRemoveDialogOpen(true)}>
            <DeleteIcon/>
          </IconButton>
        </StyledTableCell>
      </TableRow>

      <Dialog
        open={isRemoveDialogOpen}
        onClose={() => setIsRemoveDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you really want to delete this chart?"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={() => setIsRemoveDialogOpen(false)}>Cansel</Button>
          {/*<Button onClick={removeChartHandler}>Delete</Button>*/}
        </DialogActions>
      </Dialog>

      <Popup isOpen={isOpenEditChartModal} setIsOpen={setIsOpenEditChartModal} type={POPUP.EDIT_CHART}/>
    </>
  );
};

export default ChartItem;