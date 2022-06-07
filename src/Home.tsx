import { Box, Button, Grid } from "@mui/material"
import { DocumentData } from "firebase/firestore"
import React from "react"
import { Link } from "react-router-dom"
import { DevelopmentList } from "./DevelopmentList"
import { WorkContentDialogProps } from "./Profile"
import { WorksContentProps } from "./Works"

export const Home = (props: { allData: Array<DocumentData> }) => {
    return (
        <Box style={{ marginTop: "7vw" }}>
            <Grid container alignItems="center" justifyContent={"center"}>
                <Grid item xs={8} style={{ backgroundColor: "#fff" }}>
                    <DevelopmentList />

                    <div className="japanese_L" style={{
                        fontSize: "2vw",
                        margin: "2vw auto",
                        textAlign: "center" as "center",
                    }}>開発実績</div>
                    <div style={{
                        backgroundColor: "rgba(0,0,0,0.3)",
                        width: "5vw",
                        height: "0.2vw",
                        margin: "0 auto",
                    }}></div>
                    <Grid container alignItems="center" justifyContent={"center"}>
                        {
                            props.allData && props.allData.map((data: DocumentData) => {
                                return <Card data={
                                    {
                                        title: data.title,
                                        category: data.category,
                                        framework: data.framework,
                                        image: data.image,
                                        id: data.id,
                                        other: data.other,
                                    }
                                } />
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    )
}


const Card = (props: { data: WorksContentProps }) => {
    const CardStyle = {
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        width: "20vw",
        margin: "0 auto",
        boxShadow: "0px 3px 6px #00000029"
    }

    return (
        <div style={{
            margin: "2vw auto",
        }}>
            <Grid item xs={6} style={{ backgroundColor: "#fff" }}>
                <Button component={Link}
                    to={"/product/" + props.data.id} style={CardStyle}>
                    <Grid container alignItems="center" justifyContent={"center"}>
                        <Grid item xs={6}>
                            <img alt="product" style={{
                                width: "40%",
                                margin: "1vw 0 auto 3vw",
                            }} src={props.data.image[0]} ></img>
                        </Grid>
                        <Grid item xs={6}>
                            <div style={{
                                width: "10vw",
                                height: "8vw",
                                padding: "0 1vw",
                                position: "relative",
                                fontSize: "1.1vw",
                            }}>
                                <div style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%,-50%)",
                                    textTransform: 'none'
                                }}>{props.data.title}</div></div>
                        </Grid>
                    </Grid>

                </Button>
            </Grid>
        </div>
    )
}