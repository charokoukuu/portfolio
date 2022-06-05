import { TextField, Button, Grid } from "@mui/material"
import { Header } from "./component/Header"
export const Contact = () => {
    return (
        <div>
            <Header mode={"contact"} />
            <Grid container justifyItems="center" alignItems="center" >
                <Grid item xs={12}>
                    <TextField
                        label="お名前"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="メールアドレス"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>

                <TextField
                    id="outlined-basic"
                    label="お問い合わせ内容"
                    variant="outlined"
                    style={{ width: "100%", margin: "0 auto" }}
                    multiline
                />
                <Button variant="contained" style={{ width: "100%", margin: "3vw auto" }}>送信</Button>
            </Grid>


        </div >
    )
}