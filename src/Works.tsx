import { Button, Grid } from "@mui/material";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "./component/Header";
import { db } from "./Firebase";
import { Home } from "./Home";

export interface WorksContentProps {
    title: string;
    category: string;
    framework: string;
    image: Array<string>;
    id: string;
    timeStamp?: string;
    link?: string;
    other: string;

}
export const Works = () => {
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
            <Header mode={"product"} />
            <Home allData={allData ? allData : []} />

        </div>
    );
}
