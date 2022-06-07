import { Box, Grid, Modal, useMediaQuery, useTheme } from "@mui/material"
import React from "react"
import lineappimg from "./img/lineappimg.png"


interface AppDetailProps {
    open: boolean,
    close: () => void,
    title: string
}
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "70%",
    height: "80%",
    bgcolor: 'background.paper',
    boxShadow: 24,
};
const styleSM = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "90%",
    height: "80%",
    bgcolor: 'background.paper',
    boxShadow: 24,
};
export const AppDetail = (props: AppDetailProps) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Box>
            <Modal
                open={props.open}
                onClose={() => { props.close() }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={matches ? style : styleSM}>
                    <Grid container style={{ height: "100%", backgroundImage: `url(${!matches && lineappimg})`, backgroundRepeat: "repeat", backgroundSize: "contain" }}>
                        <Grid item sm={12} md={5} style={{
                            color: "#707070", textAlign: "center", marginBlockStart: "170px", width: "100%",
                        }} justifyItems="center" alignItems="center">
                            <Box style={{ backgroundColor: "#fff", paddingBlock: "20px" }}>
                                <Box style={{ fontSize: "35px" }}>
                                    {props.title}
                                </Box>
                                <br />
                                <Box style={{ fontSize: "27px" }}>
                                    -開発事例-
                                </Box>
                                <Box style={{ fontSize: "20px" }}>
                                    テイクアウト
                                    <br />
                                    予約システム
                                    <br />
                                    在庫管理
                                    <br />
                                    ECモール ..etc
                                </Box>
                                <br />
                                <a href="https://forms.gle/u6ZU6zW7qH2itvHJ8" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                </a>
                            </Box>

                        </Grid>
                        {matches &&
                            <Grid item sm={12} md={7} style={{ background: `url(${lineappimg})`, backgroundSize: "cover" }}>
                            </Grid>
                        }
                    </Grid>
                </Box >
            </Modal>
        </Box>
    )
}