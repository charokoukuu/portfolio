import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material"
import React, { ReactNode, RefObject } from "react"
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

type DialogMode = "none" | "line" | "mobile" | "web"

export const DevelopmentList = () => {
    const refLine = React.createRef<HTMLDivElement>()
    const refMobile = React.createRef<HTMLDivElement>()
    const refWeb = React.createRef<HTMLDivElement>()
    const theme = useTheme();
    let [openline, setOpenline] = React.useState<DialogMode>("none")
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
            <AppDetail open={openline === "line"} close={() => { setOpenline("none") }} title="LINEミニアプリ" />
            <AppDetail open={openline === "mobile"} close={() => { setOpenline("none") }} title="モバイルアプリ" />
            <AppDetail open={openline === "web"} close={() => { setOpenline("none") }} title="Webアプリ" />
            {matches && <AppList
                refLine={() => {
                    refLine!.current!.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    })
                }}
                refMobile={() => {
                    refMobile!.current!.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    })
                }}
                refWeb={() => {
                    refWeb!.current!.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    })
                }}

            />}
            <IntroApp
                isImageRight={false}
                title="LINEミニアプリ"
                background={lineBack}
                appImage={lineMiniApp}
                pastOnclick={() => {
                    setOpenline("line")
                }}
                requestOnclick={() => { }}
                themaColor="#3FC767" refScroll={refLine}>
                誰でも使える新しいアプリの形<br />予約システムやECサイトなど<br />ログイン不要なお手軽アプリを開発
            </IntroApp>
            <IntroApp
                isImageRight={true}
                title="モバイルアプリ"
                background={mobileAppBack}
                appImage={mobileApp}
                pastOnclick={() => {
                    setOpenline("mobile")
                }}
                requestOnclick={() => { }}
                themaColor="#0088CC"
                refScroll={refMobile}>
                手軽に使えるアプリをモダンなUIで<br />完全オリジナルアプリを開発
            </IntroApp>
            <IntroApp
                isImageRight={false}
                title="Webアプリ"
                background={webAppBack}
                appImage={webApp}
                pastOnclick={() => {
                    setOpenline("web")
                }}
                requestOnclick={() => { }}
                themaColor="#42BFE5"
                refScroll={refWeb}>
                モダンなUIでユニバーサル端末向け<br />完全オリジナルアプリを開発
            </IntroApp>


        </Box >
    )
}

interface AppListProps {
    refLine: () => void,
    refMobile: () => void,
    refWeb: () => void,

}

const AppList = (props: AppListProps) => {
    return (
        <Box style={{ background: "#F7F7F7DA 0% 0% no-repeat padding-box", padding: "20px", marginInline: "150px", marginBlock: "30px", borderRadius: "15px", boxShadow: "0px 3px 6px #00000029", }}>
            <Grid container justifyItems="center" alignItems="center">
                <Grid item xs={12} md={4} >
                    <AppButton text="LINE miniApp" onClick={() => {
                        props.refLine()
                    }} img={line} />
                </Grid>
                <Grid item xs={12} md={4} >
                    <AppButton text="MobileApp" onClick={() => {
                        props.refMobile()
                    }} img={mobile} />
                </Grid>
                <Grid item xs={12} md={4} >
                    <AppButton text="WebApp" onClick={() => {
                        props.refWeb()
                    }} img={react} />
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
        <Button onClick={props.onClick}>
            <img src={props.img} alt="line" width="80px" />
        </Button>

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
    children?: ReactNode,
    refScroll: RefObject<HTMLDivElement>
}

const IntroApp = (props: IntroAppProps) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <div ref={props.refScroll}>
            <Box style={{ backgroundImage: `url(${matches && props.background})`, backgroundRepeat: "no-repeat", backgroundSize: "contain" }} >
                <Grid container style={{ paddingInline: `${matches ? "40px" : "10px"}` }} justifyContent={"center"}>
                    {matches && !props.isImageRight && <Grid item sm={12} lg={4}>
                        <Box style={{ paddingInlineStart: "20px" }}>
                            <img src={props.appImage} alt="line" width="100%" />
                        </Box>
                    </Grid>}
                    <Grid item sm={12} lg={8} style={{
                        paddingBlock: "30px",
                        marginBlockStart: `${matches ? "50px" : "10px"}`,
                        marginBlockEnd: `${matches ? "100px" : "10px"}`, paddingInline: `${matches ? "40px" : "30px"}`, backgroundColor: "white", boxShadow: "0px 3px 6px #00000029",
                        borderRadius: "23px", textAlign: "left", height: "100%", verticalAlign: "middle"
                    }}>
                        <Box style={{ height: "100%", verticalAlign: "middle" }}>

                            <Box style={{ fontSize: "2rem", color: "#707070" }}>{props.title}</Box>
                            <Box style={{ fontSize: "1.5rem", color: "#707070", marginBlock: "30px", whiteSpace: "pre-line" }}>
                                {props.children}
                            </Box>
                            <Grid container>
                                <Grid item xs={12} lg={5}>
                                    <Button variant="outlined" onClick={props.pastOnclick} style={{ marginBlock: "5px", paddingBlock: "10px", color: "white", borderWidth: "0", width: "150px", borderRadius: "30px", backgroundColor: props.themaColor }}>詳しく見る</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    {matches && props.isImageRight && <Grid item sm={12} lg={4}>
                        <Box style={{ paddingInlineStart: "20px" }}>
                            <img src={props.appImage} alt="line" width="100%" />
                        </Box>
                    </Grid>}
                </Grid>
            </Box >

        </div >

    )
}