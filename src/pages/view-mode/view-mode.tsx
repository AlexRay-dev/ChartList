import React, {FC, useRef,} from 'react';
import HighchartsReact from "highcharts-react-official";
import * as Highcharts from 'highcharts';
import axios from "axios";

const options: Highcharts.Options = {
  yAxis: {
    type: "linear",
    title: {
      text: "text1"
    },
  },
  xAxis: {
    title: {
      text: 'Fruit Number'
    },
  },
  series: [
    {
      type: 'line',
      name: "line 1",
      data: [
        {
          x: 5,
          y: 5,
        },
        {
          x: 15,
          y: 15,
        },
        {
          x: 25,
          y: 25,
        },
        {
          x: 26,
          y: 29,
        }
      ]
    },
    {
      type: 'column',
      name: "line 2",
      data: [
        {
          x: 15,
          y: 25,
        },
        {
          x: 16,
          y: 17,
        },
        {
          x: 27,
          y: 24,
        },
        {
          x: 28,
          y: 5,
        }
      ]
    }
  ]
}

const ViewMode: FC = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);


  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponentRef} {...props}/>
    </div>
  );
};

export default ViewMode;

//
// export const API_KEY = "?key=7ba0ed9bf9a04bfd881eddc00716079a";
// export const API_URL = `https://api.rawg.io/api`
// const fetchGameList = async () => {
//   try {
//     const {data} = await axios.get(`${API_URL}/games${API_KEY}&page_size=1000`);
//     console.log(data.results)
//     return data.results
//   } catch (e) {
//     console.log(e)
//     return []
//   }
// }