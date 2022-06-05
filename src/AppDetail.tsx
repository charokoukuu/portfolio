import { Box, Button, Grid, Modal } from "@mui/material"
import React from "react"
import lineappimg from "./img/lineappimg.png"


interface AppDetailProps {
    open: boolean,
    close: () => void
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
export const AppDetail = (props: AppDetailProps) => {
    return (
        <Box>
            <Modal
                open={props.open}
                onClose={() => { props.close() }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container style={{ height: "100%", }}>
                        <Grid item sm={12} md={5} style={{ color: "#707070", textAlign: "center", marginBlockStart: "170px" }}>
                            <Box style={{ fontSize: "35px" }}>
                                LINEミニアプリ
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
                                {/* <Button variant="outlined" style={{ marginBlock: "5px", paddingBlock: "10px", color: "#3FC767", width: "150px", borderRadius: "30px", borderColor: "#3FC767" }}>見積もりの依頼</Button> */}
                            </a>
                        </Grid>
                        <Grid item sm={12} md={7} style={{ background: `url(${lineappimg})`, backgroundSize: "cover" }}>
                        </Grid>
                    </Grid>
                </Box >
            </Modal>
        </Box>
    )
}