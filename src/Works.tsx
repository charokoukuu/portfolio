import { Grid } from "@mui/material";
import { collection, doc, DocumentData, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Header } from "./component/Header";
import { db } from "./Firebase";
import { Home } from "./Home";

interface WorksContentProps {
    title: string;
    category: string;
    framework: string;
    image: Array<string>;
    id: string;
}
export const Works = () => {
    const [workData, setWorkData] = useState<DocumentData>();
    const [allData, setAllData] = useState<Array<DocumentData>>();
    const GetData = async () => {
        const querySnapshot = await getDocs(collection(db, "develop"));
        // querySnapshot.forEach((doc: DocumentData) => {
        //     setWorkData(doc.data());
        // })
        setAllData(querySnapshot.docs.map((doc: DocumentData) => doc.data()));

    }

    useEffect(() => {
        GetData();
    }, []);
    useEffect(() => {
        console.log(allData);
    });

    return (
        <div>
            <Header mode={"works"} />
            <Home />
            <Grid container alignItems="center" justifyContent={"center"}>
                <Grid item sm={12} md={8} style={{ backgroundColor: "#fff" }}>
                    <div style={{
                        width: "100%",
                        height: "100vh",
                        margin: "0 auto",
                        backgroundColor: "#fff",
                    }}>
                        <div className="japanese_L" style={{
                            fontSize: "2vw",
                            margin: "2vw auto",
                            textAlign: "center" as "center",
                        }}>開発実績</div>
                        <div style={{
                            backgroundColor: "rgba(0,0,0,0.3)",
                            width: "5vw",
                            height: "0.2vw",
                            margin: "0 auto",
                        }}></div>
                        <Grid container >
                            {
                                allData && allData.map((data: DocumentData) => {
                                    return <Card data={
                                        {
                                            title: data.title,
                                            category: data.category,
                                            framework: data.framework,
                                            image: data.image,
                                            id: data.id,
                                        }
                                    } />
                                })
                            }
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

const Card = (props: { data: WorksContentProps }) => {
    const CardStyle = {
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        width: "22vw",
        padding: "1vw 0",
        margin: "0 auto",
        boxShadow: "0px 3px 6px #00000029"
    }
    const autobr = {
        whiteSpace: "pre-wrap",
        wordWrap: "break-word",
    }
    return (
        <div style={{
            margin: "2vw auto",
        }}>
            <Grid item xs={6} style={{ backgroundColor: "#fff" }}>
                <div style={CardStyle}>
                    <Grid container alignItems="center" justifyContent={"center"}>
                        <Grid item xs={6}>
                            <img style={{
                                width: "40%",
                                margin: "auto 0 auto 3vw",
                            }} src={props.data.image[0]} ></img>
                        </Grid>
                        <Grid item xs={6}>
                            <div style={{
                                whiteSpace: "pre-wrap",
                                wordWrap: "break-word",
                                width: "80%",
                                textAlign: "left" as "left",
                                margin: "auto",
                                fontSize: "1.2vw",
                            }}>
                                {props.data.title}</div>
                        </Grid>
                    </Grid>

                </div>
            </Grid>
        </div>
    )
}