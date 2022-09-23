import React, {FC, useState} from 'react';
import {
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow, Typography,
} from "@mui/material";
import ChartItem from "./chart-item";
import AddIcon from '@mui/icons-material/Add';
import {StyledFab} from "../shared/ui/styled-components/styled-fab";
import {StyledButton} from "../shared/ui/styled-components/styled-button";
import {StyledTableCell} from "../shared/ui/styled-components/styled-table-cell";
import Popup from "./popup";

const ChartList: FC = () => {
  const [isOpenAddChartModal, setIsOpenAddChartModal] = useState(false)

  return (
    <>
      <Stack flexDirection="row" alignItems="center" justifyContent="space-between">
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
              <StyledTableCell align="left">Title</StyledTableCell>
              <StyledTableCell align="left">Type</StyledTableCell>
              <StyledTableCell align="left">Color</StyledTableCell>
              <StyledTableCell align="right">Options</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <ChartItem/>
            <ChartItem/>
            <ChartItem/>
          </TableBody>
        </Table>
      </TableContainer>

      <Popup isOpen={isOpenAddChartModal} setIsOpen={setIsOpenAddChartModal} type={"save"}/>
    </>
  );
};

export default ChartList;