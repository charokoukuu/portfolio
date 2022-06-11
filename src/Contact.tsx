import { TextField, Button, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material"
import axios from "axios";
import { useState } from "react";
import { Header } from "./component/Header"
export const Contact = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isInputValid, setIsInputValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(false);
    const [isTextValid, setIsTextValid] = useState(false);
    const CheckMailAddress = (mailAddress: string) => {
        const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        return regExp.test(mailAddress);
    }

    return (
        <div >
            <Header mode={"contact"} />
            <div style={{ margin: "auto", textAlign: "center" as "center" }}>
                <Grid container alignItems="center" justifyContent={"center"} >
                    <Grid item xs={8} style={{ backgroundColor: "#fff" }}>
                        <div style={{ marginTop: "1vw", padding: "5vw" }}>
                            <TextField
                                required
                                label="お名前"
                                variant="outlined"
                                style={{ width: "80%", margin: "0 auto" }}
                                onChange={(e) => {
                                    setName(e.target.value)
                                    setIsNameValid(true);
                                }}

                            />
                            <TextField
                                error={!isInputValid}
                                label={!isInputValid ? "メールアドレスが不正です" : "メールアドレス"}
                                variant="outlined"
                                required
                                style={{ width: "80%", margin: "1vw auto" }}
                                onChange={(e) => {
                                    setIsInputValid(CheckMailAddress(e.target.value))
                                    setEmail(e.target.value)
                                }
                                }


                            />

                            <TextField
                                id="outlined-basic"
                                label="お問い合わせ内容"
                                variant="outlined"
                                style={{ width: "80%", height: "100px", margin: "2vw auto" }}
                                rows={7}
                                onChange={(e) => {
                                    setIsTextValid(true);
                                    setText(e.target.value)
                                }}
                                multiline
                                required
                            />
                            <Button variant="outlined" onClick={() => {
                                if (isNameValid && isTextValid && isInputValid) {
                                    setOpen(true)
                                } else {
                                    alert("すべての項目を正しく入力してください。")
                                }

                            }} style={{ width: "40vw", height: "4vw", marginTop: "100px" }}>送信</Button>
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
                    <DialogTitle id="alert-dialog-title" style={{ color: "#08C4D9", textAlign: "center" as "center" }}>
                        {"以下の内容で送信しますか？"}
                    </DialogTitle>
                    <DialogContent style={{ textAlign: "center" as "center" }}>
                        <DialogContentText id="alert-dialog-description" >
                            <span style={{ textAlign: "center" as "center" }}>
                                <span>
                                    {
                                        "名前：" + name
                                    }
                                </span>
                                <br />
                                <span>
                                    {"メールアドレス：" + email}
                                </span>
                                <br />
                                <span>
                                    {"お問い合わせ内容：" + text}
                                </span>
                            </span>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => {
                            setOpen(false);
                        }}>いいえ</Button>
                        <Button onClick={() => {
                            axios.post("https://mocaff.net/testLine", {
                                name: "名前：" + name + " | メールアドレス：" + email + " | お問合わせ内容：" + text,
                            }).then(res => {
                                setOpen(false);
                                window.location.reload();
                            })
                        }} autoFocus>
                            はい
                        </Button>
                    </DialogActions>
                </Dialog>
            </div >
        </div>
    )
}