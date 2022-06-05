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

                        {
                            allData && allData.map((data: DocumentData) => {
                                return <Card data={data} />
                            })
                        }
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

const Card = (props: { data: any }) => {
    const CardStyle = {
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        width: "25vw",
        padding: "3vw 0",
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
            <Grid container alignItems="center" justifyContent={"center"}>
                <Grid item xs={6} style={{ backgroundColor: "#fff" }}>
                    <div style={CardStyle}>
                        <Grid container alignItems="center" justifyContent={"center"}>
                            <Grid item xs={6}>
                            </Grid>
                            <Grid item xs={6}>
                                <div style={{
                                    whiteSpace: "pre-wrap",
                                    wordWrap: "break-word",
                                    width: "70%",
                                    textAlign: "left" as "left",
                                    margin: "auto",
                                    fontSize: "1.2vw",
                                }}>
                                    {"賃貸マンション検索サービス"}</div>
                            </Grid>
                        </Grid>

                    </div>
                </Grid>
                <Grid item xs={6} style={{ backgroundColor: "#fff" }}>
                    <div style={CardStyle}></div>
                </Grid>
            </Grid>
        </div>
    )
}