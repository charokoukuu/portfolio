import { Grid } from "@mui/material"
import { Header } from "./component/Header"
import { Home } from "./Home"
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { db } from "./Firebase";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { WorksContentProps } from "./Works";
import { Carousel } from "react-responsive-carousel";
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
        GetData();
    }, []);
    return (
        <div>
            <Header mode={"works"} />
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
                </Grid>
            </Grid>
        </div>
    )
}
