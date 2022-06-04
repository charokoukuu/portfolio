import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material"
import React, { ReactNode } from "react"
import line from "./img/line.png"
import mobile from "./img/native.png"
import react from "./img/react.png"
import lineMiniApp from "./img/lineminiapp.png"
import lineBack from "./img/lineback.png"
import webAppBack from "./img/webappback.png"
import webApp from "./img/webapp.png"
import mobileApp from "./img/mobileapp.png"
import mobileAppBack from "./img/mobileappback.png"
import { AppDetail } from "./AppDetail"

export const DevelopmentList = () => {
    const theme = useTheme();
    let [openline, setOpenline] = React.useState(false)
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const style = matches ? {
        marginBlockStart: "20px",
        position: "relative",
        bottom: "100px"
    } : {
        marginBlockStart: "20px"
    };

    return (
        <Box sx={style}>
            <AppDetail open={openline} close={() => { setOpenline(false) }} />
            <IntroApp
                isImageRight={false}
                title="LINEミニアプリ"
                background={lineBack}
                appImage={lineMiniApp}
                pastOnclick={() => {
                    setOpenline(true)
                }}
                requestOnclick={() => { }}
                themaColor="#3FC767" >
                誰でも使える新しいアプリの形<br />予約システムやECサイトなど<br />ログイン不要なお手軽アプリを開発
            </IntroApp>
            <IntroApp
                isImageRight={true}
                title="モバイルアプリ"
                background={mobileAppBack}
                appImage={mobileApp}
                pastOnclick={() => {
                    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSc3USPu6utUR3epLFtgG_NPXQ-yrJFmDpDFps_ApyWRq5qegg/viewform"
                }}
                requestOnclick={() => { }}
                themaColor="#0088CC" >
                手軽に使えるアプリをモダンなUIで<br />完全オリジナルアプリを開発
            </IntroApp>
            <IntroApp
                isImageRight={false}
                title="Webアプリ"
                background={webAppBack}
                appImage={webApp}
                pastOnclick={() => {
                    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSc3USPu6utUR3epLFtgG_NPXQ-yrJFmDpDFps_ApyWRq5qegg/viewform"
                }}
                requestOnclick={() => { }}
                themaColor="#42BFE5" >
                モダンなUIでユニバーサル端末向け<br />完全オリジナルアプリを開発
            </IntroApp>


        </Box >
    )
}

const AppList = () => {
    return (
        <Box style={{ background: "#F7F7F7DA 0% 0% no-repeat padding-box", padding: "20px", marginInline: "150px", marginBlock: "30px", borderRadius: "15px", boxShadow: "0px 3px 6px #00000029", }}>
            <Grid container justifyItems="center" alignItems="center">
                <Grid item xs={12} md={4} >
                    <AppButton text="LINE miniApp" onClick={() => { }} img={line} />
                </Grid>
                <Grid item xs={12} md={4} >
                    <AppButton text="MobileApp" onClick={() => { }} img={mobile} />
                </Grid>
                <Grid item xs={12} md={4} >
                    <AppButton text="WebApp" onClick={() => { }} img={react} />
                </Grid>
            </Grid>
        </Box>
    )
}


type AppButtonProps = {
    text: string,
    onClick: () => void,
    img: string
}
const AppButton = (props: AppButtonProps) => {
    return (
        <button>
            <img src={props.img} alt="line" width="80px" />
        </button>

    )
}

type IntroAppProps = {
    isImageRight: boolean,
    title: string,
    background: string,
    appImage: string,
    pastOnclick: () => void,
    requestOnclick: () => void,
    themaColor: string,
    children?: ReactNode
}

const IntroApp = (props: IntroAppProps) => {
    return (
        <Box style={{ backgroundImage: `url(${props.background})`, backgroundRepeat: "no-repeat", backgroundSize: "contain" }} >
            <Grid container style={{ paddingInline: "50px" }} >
                {!props.isImageRight && <Grid item sm={12} lg={4}>
                    <Box style={{ paddingInlineStart: "20px" }}>
                        <img src={props.appImage} alt="line" width="100%" />
                    </Box>
                </Grid>}
                <Grid item sm={12} lg={8} style={{
                    paddingBlock: "30px",
                    marginBlockEnd: "100px", marginBlockStart: "10px", paddingInline: "40px", backgroundColor: "white", boxShadow: "0px 3px 6px #00000029",
                    borderRadius: "23px", textAlign: "left"
                }}>
                    <Box style={{ fontSize: "45px", color: "#707070" }}>{props.title}</Box>
                    <Box style={{ fontSize: "25px", color: "#707070", marginBlock: "30px", whiteSpace: "pre-line" }}>
                        {props.children}
                    </Box>
                    <Grid container>
                        <Grid item xs={12} lg={5}>
                            <Button variant="outlined" onClick={props.pastOnclick} style={{ marginBlock: "5px", paddingBlock: "10px", color: "white", borderWidth: "0", width: "150px", borderRadius: "30px", backgroundColor: props.themaColor }}>詳しく見る</Button>
                        </Grid>
                    </Grid>
                </Grid>
                {props.isImageRight && <Grid item sm={12} lg={4}>
                    <Box style={{ paddingInlineStart: "20px" }}>
                        <img src={props.appImage} alt="line" width="100%" />
                    </Box>
                </Grid>}
            </Grid>
        </Box >
    )
}