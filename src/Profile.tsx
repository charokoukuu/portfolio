import { Box, Grid } from "@mui/material"
import { useState } from "react";
import { PieChart } from 'react-minimal-pie-chart';
import { DetailDialog } from "./component/DetailDialog";
import { Header } from "./component/Header";
export interface WorkContentDialogProps {
    title: string;
    content: string;
    image: string;
}
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
    const WorkLinkPoint = { textDecoration: "none", cursor: "pointer", color: "#009CC1" };
    const [open, setOpen] = useState(false);
    const [work, setWork] = useState<WorkContentDialogProps>({
        title: "",
        content: "",
        image: "",
    });
    return (
        <div>
            <Header mode="profile" />
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
                            <div className="japanese_L" style={{ padding: "2vw 0", fontSize: "2vw" }}>
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
                            width: "44.7vw",
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
                                <div className="japanese_L" style={{ padding: "2vw 0", fontSize: "2vw" }}>
                                    Work Experience
                                </div>
                                <Grid container alignItems={"center"} justifyItems={"center"} spacing={1}>
                                    <Grid item xs={6}>
                                        <div className="japanese_B" style={{ fontSize: "2vw", textAlign: "left" as "left", marginLeft: "4vw" }}>
                                            <a onClick={() => {
                                                setOpen(true);
                                                setWork({
                                                    title: "React",
                                                    content: "WebアプリやLIFFアプリケーション\nの開発依頼・経験あり。\nReact + TypeScriptを用いた\n厳格なシステム開発が可能です。",
                                                    image: "https://www.shareicon.net/data/2016/07/10/119874_apps_512x512.png",
                                                });
                                            }} style={WorkLinkPoint}> ・React</a>
                                            <br />
                                            <a onClick={() => {
                                                setOpen(true);
                                                setWork({
                                                    title: "Vue",
                                                    content: "WebアプリやLIFFアプリケーション\nの開発依頼・経験あり。\nReact + TypeScriptを用いた\n厳格なシステム開発が可能です。",
                                                    image: "https://jp.vuejs.org/images/logo.png",
                                                });
                                            }} style={WorkLinkPoint}>
                                                ・Vue
                                            </a>
                                            <br />
                                            <a onClick={() => {
                                                setOpen(true);
                                                setWork({
                                                    title: "Express",
                                                    content: "WebアプリやLIFFアプリケーション\nの開発依頼・経験あり。\nReact + TypeScriptを用いた\n厳格なシステム開発が可能です。",
                                                    image: "https://cdn-icons-png.flaticon.com/512/919/919825.png?w=360",
                                                });
                                            }} style={WorkLinkPoint}>
                                                ・Express
                                            </a>
                                            <br />
                                            <a onClick={() => {
                                                setOpen(true);
                                                setWork({
                                                    title: "Unity",
                                                    content: "WebアプリやLIFFアプリケーション\nの開発依頼・経験あり。\nReact + TypeScriptを用いた\n厳格なシステム開発が可能です。",
                                                    image: "https://preview.redd.it/81nwobjayd181.png?width=512&format=png&auto=webp&s=027cac2b3ddd6f7b3f5e60a783706d1d0e8151ec",
                                                });
                                            }} style={WorkLinkPoint}>
                                                ・Unity
                                            </a>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <img src="work_image.png" style={{ width: "80%", height: "80%" }} />
                                    </Grid>
                                </Grid>
                            </div>

                        </div>
                    </Grid>
                </Grid>

            </Box>
            {
                open && <DetailDialog open={open} setOpen={function (): void {
                    setOpen(false);
                }} title={work.title} content={work.content} image={work.image} />
            }
        </div >
    )
}

