import * as React from 'react';
import Box from '@mui/material/Box';
import useId from '@mui/utils/useId';

import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { ScatterPlot } from '@mui/x-charts/ScatterChart';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { ChartsClipPath } from '@mui/x-charts/ChartsClipPath';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsGrid } from '@mui/x-charts/ChartsGrid';

const data = Array.from({ length: 100 }, (_, index) => ({
    x: Math.random() * 50 - 30, // -25 to 25
    y: Math.random() * 50 - 30,
    id: index,
  }));



export default function LimitOverflow() {
  const [isLimited, setIsLimited] = React.useState(false);
  const [xLimits, setXLimites] = React.useState([0, 30]);

  const id = useId();
  const clipPathId = `${id}-clip-path`;

  return (
    <Box sx={{ width: '100%', maxWidth: 800, color:"white" }}>
      <ChartContainer
        xAxis={[
          {
            label: 'Month',
            min: xLimits[0],
            max: xLimits[1],
            data: [-30, -25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25],
            axisLineStyle: { stroke: 'white' },
            tickLabelStyle: { fill: 'white' },
            labelStyle: { fill: 'white' },
          },
        ]}

        yAxis={[
          {
            label: 'Profit/Loss',
            // styling for Y-axis
            axisLineStyle: { stroke: 'white' },
            tickLabelStyle: { fill: 'white' },
            labelStyle: { fill: 'white' },
          }
        ]}

        series={[
          {
            type: 'line',
            data: [500, 130, 120, 500, -600, -300, 40, 300, 180, 107, 120, 110],
            showMark: true,
          },
        ]}
        height={400}
        width={800}
      >
        <ChartsGrid vertical horizontal />
        <g clipPath={`url(#${clipPathId})`}>
          <ScatterPlot />
          <LinePlot />
        </g>
        <ChartsXAxis />
        <ChartsYAxis />
        <MarkPlot />
        {isLimited && <ChartsClipPath id={clipPathId} />}
      </ChartContainer>
    </Box>
  );
}
