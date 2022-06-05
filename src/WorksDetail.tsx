import { Button, Grid } from "@mui/material"
import { Header } from "./component/Header"
import { doc, getDoc } from "firebase/firestore";
import { db } from "./Firebase";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { WorksContentProps } from "./Works";
import { CarouselMenu } from "./CarouselMenu";

export const WorksDetail = () => {
    const [data, setData] = useState<WorksContentProps>();
    const [loadStatus, setLoadStatus] = useState<"notLoaded" | "loaded" | "notData">("notLoaded");
    const params = useParams();
    const GetData = async () => {
        const docRef = doc(db, "develop", params.id ?? "");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setData({
                title: docSnap.data()?.title ?? "",
                category: docSnap.data()?.category ?? "",
                framework: docSnap.data()?.framework ?? "",
                image: docSnap.data()?.image ?? [],
                id: docSnap.id,
            });
            setLoadStatus("loaded");
        } else {
            setLoadStatus("notData");
        }

    }
    useEffect(() => {
        console.log(loadStatus);
        GetData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <Header mode={"product"} />
            <Grid container alignItems="center" justifyContent={"center"}>
                <Grid item sm={12} md={8} style={{ backgroundColor: "#fff" }}>
                    <div style={{
                        width: "100%",
                        margin: "0 auto",
                        backgroundColor: "#fff",
                    }}>
                        <div className="japanese_L" style={{
                            fontSize: "2vw",
                            margin: "2vw auto",
                            textAlign: "center" as "center",
                        }}>{data?.title}</div>
                        <div style={{
                            backgroundColor: "rgba(0,0,0,0.3)",
                            width: "5vw",
                            height: "0.2vw",
                            margin: "0 auto",
                        }}></div>

                    </div>
                    <CarouselMenu image={(data !== undefined) ? data.image : []} />
                    <div className="japanese_L" style={{
                        margin: "2vw 0 3vw 0",
                        fontSize: "1.5vw",
                        textAlign: "center" as "center",
                    }}>
                        カテゴリ：{data?.category}
                        <br />
                        使用技術：{data?.framework}
                    </div>
                    <div style={{
                        textAlign: "center" as "center",
                        marginBottom: "3vw",
                    }}><Button component={Link} to={"/product"} variant="outlined" style={{
                        width: "20vw",
                        height: "4vw",
                    }}>開発実績に戻る</Button></div>
                </Grid>
            </Grid>
        </div>
    )
}
