import { Button, Grid } from "@mui/material"
import '../App.css';

type Mode = "profile" | "works" | "blog" | "contact";
export const Header = (props: { mode: Mode }) => {
    return (
        <div className="header">
            <div style={{
                backgroundColor: "#fff",
                color: "black",
                width: "98vw",
                padding: "2vw 0",
                textAlign: "center" as "center",
                margin: "1vw auto",
                boxShadow: "inset 0px 3px 10px #00000029",
                borderRadius: "11px",
                fontSize: "1.5vw",
            }}>
                <div >
                    <Grid container >
                        <Grid item xs={3}>
                            <Button>
                                <div className="header_button">
                                    Profile
                                </div>
                            </Button>
                            {props.mode === "profile" && <ItemBar />}
                        </Grid>
                        <Grid item xs={3}>
                            <Button>
                                <div className="header_button">
                                    Works
                                </div>
                            </Button>
                            {props.mode === "works" && <ItemBar />}

                        </Grid>
                        <Grid item xs={3}>
                            <Button>
                                <div className="header_button">
                                    Blog
                                </div>
                            </Button>
                            {props.mode === "blog" && <ItemBar />}
                        </Grid>
                        <Grid item xs={3}>
                            <Button>
                                <div className="header_button">
                                    Contact
                                </div>
                            </Button>
                            {props.mode === "contact" && <ItemBar />}
                        </Grid>

                    </Grid>
                </div>

            </div>
        </div >

    );
}

const ItemBar = () => {
    return (
        <div>
            <div style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                width: "5vw",
                height: "0.2vw",
                margin: "0 auto",
            }}></div>
        </div>
    );
}