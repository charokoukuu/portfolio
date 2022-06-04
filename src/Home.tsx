import { Box, Grid } from "@mui/material"
import React from "react"
import { DevelopmentList } from "./DevelopmentList"
import top from "./img/top.png"

export const Home = () => {
    return (
        <Box style={{ marginTop: "7vw" }}>
            <Grid container alignItems="center" justifyContent={"center"}>
                <Grid item sm={12} md={8} style={{ backgroundColor: "#fff" }}>
                    <DevelopmentList />
                </Grid>
            </Grid>
        </Box >
    )
}
