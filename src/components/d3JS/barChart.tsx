import * as d3 from "d3";
import { Box, Tooltip, Typography } from "@mui/material"
import { sales } from "../../dummyData/sales";
import { useEffect, useMemo, useRef } from "react";



export function BarChart({
  width = 640,
  height = 400,
  marginTop = 20,
  marginLeft = 60,
  marginRight = 60,
  marginBottom = 20,
}){

    const gx = useRef();
    const gy = useRef();
    const dateScale = [marginLeft, width - marginRight];
    const ranges = useMemo(()=> {
        return sales.reduce((acc, item) => {
            let total = item.price * item.quantity;
            if(item.discount)
                total = applyDiscount(total, item.discount);
            if(acc.maxTotal < total)
                acc.maxTotal = total;
            console.log(total)
            const saleDate = new Date(item.timeStamp);
            if(acc.start > saleDate)
                acc.start = saleDate;
            if(acc.end < saleDate)
                acc.end = saleDate;
            return acc;
        }, {maxTotal: 0, start: new Date(), end: new Date("1900-1-1")});
    }, []);
    const colors = [
        "#26e70a",
        "#e77c0a",
        "#e2137e",
        "#333",
        "#0a37e7",
        "#3a0ae7",
    ]

    const x = d3.scaleTime(
        [ranges.start, ranges.end],
        dateScale
    );

    const y = d3.scaleLinear(
        [ranges.maxTotal, 0],
        [marginTop, height - marginBottom]
    );

    useEffect(()=>{
        d3.select(gx.current)
        .call(d3.axisBottom(x));
    }, [gx, x])

    useEffect(()=>{
        d3.select(gy.current)
        .call(d3.axisLeft(y));
    }, [gy, y])

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
                    <g ref={gx} transform={`translate(0, ${height - marginBottom})`}/>
                    <g ref={gy} transform={`translate(${marginLeft}, 0)`}/>
                    <g >
                        {sales.map((sale, i) => {
                            let total = sale.quantity * sale.price;
                            const saleDate = new Date(sale.timeStamp);
                            if(sale.discount)
                                total = applyDiscount(total, sale.discount);
                            console.log(total)
                            return (
                                <Tooltip 
                                    placement="top"
                                    title={`$ ${total.toFixed(2)}`}
                                >
                                    <rect 
                                        key={"charBars" + i} 
                                        x={x(saleDate)} 
                                        y={y(total)} 
                                        height={y(0) - y(total)} 
                                        width={10}
                                        fill={colors[i % colors.length]}
                                    />
                                </Tooltip>
                            )
                        })}
                    </g>
                </svg>
            </Box>
        </Box>
    );
}

export function applyDiscount(amount: number, discount: number){
    return amount - (amount * (discount / 100));
}