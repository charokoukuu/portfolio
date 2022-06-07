import { Box, Grid } from "@mui/material"
import { useState } from "react";
import { PieChart } from 'react-minimal-pie-chart';
import { animated, useSpring } from "react-spring";
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
    const [open, setOpen] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [work, setWork] = useState<WorkContentDialogProps>({
        title: "",
        content: "",
        image: "",
    });
    const animation = {
        config: {
            duration: 1000,
        },
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
    }
    const styles = useSpring(animation)
    const BlackFont = {
        margin: "5vw 3vw",
        color: "#fff",
        fontSize: "1.5vw",
        fontWeight: "bold",
    }
    return (
        <animated.div style={styles}>
            <div>
                <Header mode="profile" />
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1} >
                        <Grid item xs={4}>
                            <div style={{
                                backgroundColor: "#fff",
                                color: "black",
                                width: "31vw",
                                padding: "10.2vw 0",
                                marginLeft: "1vw",
                                textAlign: "center" as "center",
                                margin: "0 auto",
                                boxShadow: "inset 0px 3px 10px #00000029",
                                borderRadius: "11px",
                                fontSize: "1.5vw",
                            }}>
                                <img alt="github" src="https://avatars.githubusercontent.com/u/35647163?v=4" style={{ width: "50%", height: "50%", borderRadius: "50%", border: "solid 1px #00000029" }} />
                                <div className="japanese_L" style={{
                                    margin: "1vw 0",
                                }}>Hinata Saito</div>
                                <div className="japanese_L" style={{
                                    margin: "1vw 0",
                                }}>2001-10-31</div>
                                <a className="japanese_L" href="https://github.com/charokoukuu" style={{ color: "#0C8F9A" }}>https://github.com/charokoukuu</a>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div style={{ ...SubContentStyles, position: "relative" }}>
                                {isMouseOver && <div style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "rgba(0,0,0,0.6)",
                                    borderRadius: "11px",
                                    pointerEvents: "none"
                                }}>

                                    <div className="japanese_R" style={{ ...BlackFont, position: "absolute" }}><span style={{ color: "#0C8F9A" }}>TypeScript</span>: React,Vue.js</div>
                                    <br />
                                    <br />
                                    <div className="japanese_R" style={{ ...BlackFont, position: "absolute" }}><span style={{ color: "#FFC107" }}>JavaScript</span>: Node.js(Express)</div>
                                    <br />
                                    <br />
                                    <div className="japanese_R" style={{ ...BlackFont, position: "absolute" }}><span style={{ color: "#F44336" }}>C#</span>: Unity</div>
                                    <br />
                                    <br />
                                    <div className="japanese_R" style={{ ...BlackFont, position: "absolute" }}><span style={{ color: "#03A9F4" }}>C++</span>: ESP32,openCV</div>
                                    <br />
                                    <br />
                                    <div className="japanese_R" style={{ ...BlackFont, position: "absolute" }}><span style={{ color: "#4CAF50" }}>Python</span>: Raspberry Pi,WebSocket</div>
                                </div>
                                }
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
                                                value: 10,
                                            },
                                            {
                                                color: "#FFC107",
                                                title: "JavaScript",
                                                value: 12,
                                            },
                                            {
                                                color: "#F44336",
                                                title: "C#",
                                                value: 7,
                                            },
                                            {
                                                color: "#03A9F4",
                                                title: "C++",
                                                value: 5,
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
                                            setIsMouseOver(true)
                                        }}
                                        onMouseOut={() => {
                                            setIsMouseOver(false)
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
                                padding: "9.3vw 10.2vw",
                                textAlign: "center" as "center",
                                marginLeft: "0.5vw",
                                marginTop: "1vw",
                                boxShadow: "inset 0px 3px 10px #00000029",
                                borderRadius: "11px",
                                fontSize: "1.5vw",
                                position: "relative"

                            }}>
                                <Grid container alignItems={"center"} justifyItems={"center"} spacing={1}>
                                    <Grid item xs={4}>
                                        <div style={{
                                            position: "absolute",
                                            top: "1vw",
                                            left: "0vw",
                                            width: "21vw",
                                            height: "18vw",
                                        }}>
                                            <h2 className="japanese_R" style={{
                                                color: "#707070",
                                            }} >
                                                Hobby
                                            </h2>
                                            <div className="japanese_L">
                                                ピアノ
                                                <br />
                                                DTM / 作曲
                                                <br />
                                                ツーリング
                                                <br />
                                                VRゲーム
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div style={{
                                            position: "absolute",
                                            top: "1vw",
                                            left: "20vw",
                                            width: "18vw",
                                            height: "18vw",
                                        }}>
                                            <h2 className="japanese_R" style={{
                                                color: "#707070",
                                            }} >
                                                Achievement
                                            </h2>
                                            <div className="japanese_L">
                                                SDLアプリコンテスト
                                                <br />
                                                特別賞
                                                <br />
                                                （作品名：バイクは楽器）
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div style={{
                                            position: "absolute",
                                            top: "1vw",
                                            left: "42vw",
                                            width: "21vw",
                                            height: "18vw",
                                        }}>
                                            <h2 className="japanese_R" style={{
                                                color: "#707070",
                                            }} >
                                                Message
                                            </h2>
                                            <div className="japanese_L" style={{
                                                textAlign: "left" as "left",
                                                fontSize: "1.2vw"
                                            }}>
                                                普段からモノづくりを楽しんでいます。
                                                制作範囲はRaspberry Piを使った電子工作やゲーム制作、CGアニメーションやWeb制作などと様々です。
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
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
                                                <a className="click" onClick={() => {
                                                    setOpen(true);
                                                    setWork({
                                                        title: "Frontend",
                                                        content: "Webフレームワーク「React.js」「Vue.js」を使ったフロントエンド開発を行っています。",
                                                        image: "https://www.shareicon.net/data/2016/07/10/119874_apps_512x512.png",
                                                    });
                                                }} style={{ cursor: "pointer" }}> Frontend</a>
                                                <br />
                                                <a className="click" onClick={() => {
                                                    setOpen(true);
                                                    setWork({
                                                        title: "Backend",
                                                        content: "Node.jsのWebフレームワーク「Express」を使ったバックエンド開発を行っています。",
                                                        image: "https://cdn-icons-png.flaticon.com/512/919/919825.png?w=360",
                                                    });
                                                }} style={{ cursor: "pointer" }}>
                                                    Backend
                                                </a>
                                                <br />
                                                <div className="click" onClick={() => {
                                                    setOpen(true);
                                                    setWork({
                                                        title: "Unity",
                                                        content: "有限会社ふりーむでUnityを使ってゲーム制作を行うするアルバイトを3年程しておりました。",
                                                        image: "https://preview.redd.it/81nwobjayd181.png?width=512&format=png&auto=webp&s=027cac2b3ddd6f7b3f5e60a783706d1d0e8151ec",
                                                    });
                                                }} style={{ cursor: "pointer" }}>
                                                    Unity
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <img alt="work" src="work_image.png" style={{ width: "80%", height: "80%" }} />
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
        </animated.div>

    )
}

