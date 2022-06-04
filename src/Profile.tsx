import { Box, Grid } from "@mui/material"
import { PieChart } from 'react-minimal-pie-chart';
export const Profile = () => {
    const SubContentStyles = {
        backgroundColor: "#fff",
        color: "black",
        width: "32vw",
        height: "26.5vw",
        textAlign: "center" as "center",
        margin: "0 auto",
        boxShadow: "inset 0px 3px 10px #00000029",
        borderRadius: "11px",
        fontSize: "1.5vw",

    }
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1} >
                    <Grid item xs={4}>
                        <div style={{
                            backgroundColor: "#fff",
                            color: "black",
                            width: "31vw",
                            padding: "12vw 0",
                            marginLeft: "1vw",
                            textAlign: "center" as "center",
                            margin: "0 auto",
                            boxShadow: "inset 0px 3px 10px #00000029",
                            borderRadius: "11px",
                            fontSize: "1.5vw",
                        }}>
                            <img src="https://avatars.githubusercontent.com/u/35647163?v=4" style={{ width: "50%", height: "50%", borderRadius: "50%", border: "solid 1px #00000029" }} />
                            <div className="japanese_L" style={{
                                margin: "1vw 0",
                            }}>Hinata Saito</div>
                            <a className="japanese_L" href="https://github.com/charokoukuu" style={{ color: "#0C8F9A" }}>https://github.com/charokoukuu</a>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div style={SubContentStyles}>
                            <div className="japanese_L" style={{ padding: "1vw 0", fontSize: "2vw" }}>
                                Language Usage Rate
                            </div>
                            <div style={{ width: "19vw", textAlign: "center" as "center", margin: "auto auto" }}>
                                <PieChart
                                    animate={true}
                                    animationDuration={700}
                                    animationEasing="ease-out"
                                    center={[50, 50]}
                                    data={[
                                        {
                                            color: '#0C8F9A',
                                            title: "TypeScript",
                                            value: 7,
                                        },
                                        {
                                            color: "#FFC107",
                                            title: "JavaScript",
                                            value: 12,
                                        },
                                        {
                                            color: "#F44336",
                                            title: "C#",
                                            value: 10,
                                        },
                                        {
                                            color: "#03A9F4",
                                            title: "C++",
                                            value: 7,
                                        },
                                        {
                                            color: "#4CAF50",
                                            title: "Python",
                                            value: 3,
                                        },
                                    ]}
                                    lengthAngle={360}
                                    startAngle={0}
                                    lineWidth={40}
                                    paddingAngle={2}
                                    onMouseOver={() => {
                                        // alert("over");
                                    }}
                                    radius={40}
                                    viewBoxSize={[100, 100]}
                                    label={(data) => data.dataEntry.title}
                                    labelPosition={75}
                                    labelStyle={{
                                        fontSize: "7px",
                                        fontWeight: "800",
                                    }}
                                />

                            </div>
                        </div>
                        <div style={{
                            backgroundColor: "#fff",
                            color: "black",
                            width: "44.5vw",
                            padding: "8.2vw 10.2vw",
                            textAlign: "center" as "center",
                            marginLeft: "0.5vw",
                            marginTop: "1vw",
                            boxShadow: "inset 0px 3px 10px #00000029",
                            borderRadius: "11px",
                            fontSize: "1.5vw",


                        }}>
                            テストぺージ
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div style={{ marginRight: "1vw" }}>
                            <div style={SubContentStyles}>
                                <div className="japanese_L" style={{ padding: "1vw 0", fontSize: "2vw" }}>
                                    Work Experience
                                </div>
                                <Grid container alignItems={"center"} justifyItems={"center"} spacing={1}>
                                    <Grid item xs={6}>
                                        <div className="japanese_L" style={{ fontSize: "2vw", textAlign: "left" as "left", margin: "3vw 3vw" }}>
                                            <a href="" style={{ textDecoration: "none" }}> ・React</a>
                                            <br />
                                            <a href="" style={{ textDecoration: "none" }}>
                                                ・Vue
                                            </a>
                                            <br />
                                            <a href="" style={{ textDecoration: "none" }}>
                                                ・Express
                                            </a>
                                            <br />
                                            <a href="" style={{ textDecoration: "none" }}>
                                                ・Unity
                                            </a>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <img src="https://avatars.githubusercontent.com/u/35647163?v=4" style={{ width: "50%", height: "50%", borderRadius: "50%", border: "solid 1px #00000029" }} />
                                    </Grid>
                                </Grid>
                            </div>

                        </div>
                    </Grid>
                </Grid>

            </Box>
        </div >
    )
}

