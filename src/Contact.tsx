import { TextField, Button, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material"
import { useState } from "react";
import { DetailDialog } from "./component/DetailDialog";
import { Header } from "./component/Header"
export const Contact = () => {
    const [open, setOpen] = useState(false);
    return (
        <div >
            <Header mode={"contact"} />
            <div style={{ margin: "auto", textAlign: "center" as "center" }}>
                <Grid container alignItems="center" justifyContent={"center"} >
                    <Grid item xs={8} style={{ backgroundColor: "#fff" }}>
                        <div style={{ marginTop: "1vw", padding: "3vw" }}>
                            <TextField
                                label="お名前"
                                variant="outlined"
                                style={{ width: "80%", margin: "0 auto" }}

                            />
                            <TextField
                                label="メールアドレス"
                                variant="outlined"
                                style={{ width: "80%", margin: "1vw auto" }}

                            />

                            <TextField
                                id="outlined-basic"
                                label="お問い合わせ内容"
                                variant="outlined"
                                style={{ width: "80%", height: "10vw", margin: "2vw auto" }}
                                rows={7}
                                multiline
                            />
                            <Button variant="outlined" onClick={() => {
                                setOpen(true);
                            }} style={{ width: "40vw", height: "4vw", margin: "5vw auto 2vw auto" }}>送信</Button>
                        </div>
                    </Grid>
                </Grid>
                <Dialog
                    fullWidth
                    open={open}
                    onClose={() => {
                        setOpen(false);
                    }}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" style={{ color: "ActiveBorder" }}>
                        {"確認"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            お問合わせ内容を送信しますか？
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => {
                            setOpen(false);
                        }}>いいえ</Button>
                        <Button onClick={() => {
                            setOpen(false);
                            window.location.reload();
                        }} autoFocus>
                            はい
                        </Button>
                    </DialogActions>
                </Dialog>
            </div >
        </div>
    )
}