import React, {FC, useState} from 'react';
import {Stack, Table, TableBody, TableContainer, TableHead, TableRow, Typography,} from "@mui/material";
import ChartItem from "./chart-item";
import AddIcon from '@mui/icons-material/Add';
import {StyledFab} from "../../shared/ui/styled-components/styled-fab";
import {StyledButton} from "../../shared/ui/styled-components/styled-button";
import Popup from "../../components/popup/popup";
import {StyledTableHeadCell} from './styles';
import {POPUP} from "../../components/popup/interface";

const ChartList: FC = () => {
  const [isOpenAddChartModal, setIsOpenAddChartModal] = useState(false)

  return (
    <>
      <Stack flexDirection="row" alignItems="center" justifyContent="space-between" pb={2}>
        <Typography variant="h4">Chart list</Typography>

        <StyledButton
          variant={"contained"}
          startIcon={<AddIcon/>}
          onClick={() => setIsOpenAddChartModal(true)}
          sx={{display: {"xs": "none", "sm": "flex"}, maxWidth: "180px"}}>
          Add new chart
        </StyledButton>
        <StyledFab
          onClick={() => setIsOpenAddChartModal(true)}
          color="primary"
          aria-label="add">
          <AddIcon/>
        </StyledFab>
      </Stack>

      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableHeadCell align="left">Title</StyledTableHeadCell>
              <StyledTableHeadCell align="left">Type</StyledTableHeadCell>
              <StyledTableHeadCell align="left">Color</StyledTableHeadCell>
              <StyledTableHeadCell align="right">Options</StyledTableHeadCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <ChartItem/>
            <ChartItem/>
            <ChartItem/>
          </TableBody>
        </Table>
      </TableContainer>

      <Popup isOpen={isOpenAddChartModal} setIsOpen={setIsOpenAddChartModal} type={POPUP.ADD_CHART}/>
    </>
  );
};

export default ChartList;