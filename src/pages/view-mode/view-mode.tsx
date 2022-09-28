import React, {FC, useRef} from 'react';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import {getHighchartsOptions} from "../../shared/chartListData";
import {useTypedSelector} from "../../hooks/redux";
import {Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

const ViewMode: FC = (props: HighchartsReact.Props) => {
  const {chartList} = useTypedSelector(state => state.chartListReducer);
  const isChartListEmpty = !!chartList.length
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const options = getHighchartsOptions(chartList, isChartListEmpty)

  return (
    <>
      {!isChartListEmpty && <Typography>Chart list is empty. To add new chart go to {<NavLink to={"/settings"}>settings</NavLink>} page.</Typography>}
      <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponentRef} {...props}/>
    </>
  );
};

export default ViewMode;
