import * as d3 from "d3";
import { Box, Typography } from "@mui/material"
import { sales } from "../../dummyData/sales";

export function BarChart({
  width = 640,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 20,
}){


    return (
        <Box 
            component="section"
        >
            <Typography
                variant="h2"
                component="h2"
                sx={{
                    textAlign: "center"
                }}
            >Bar Chart Example</Typography>
            <Box
                component={"article"}
            >
                <svg width={width} height={height}>
                </svg>
            </Box>
        </Box>
    );
}