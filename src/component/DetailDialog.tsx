import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { WorkContentDialogProps } from '../Profile';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

interface DialogProps extends WorkContentDialogProps {
    open: boolean;
    setOpen: () => void;
}
export const DetailDialog = (props: DialogProps) => {



    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.setOpen}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent style={{
                    padding: "1vw 3vw",
                }}>
                    <DialogTitle id="alert-dialog-title">
                        <div className='japanese_B'> {props.title}</div>
                    </DialogTitle>
                    <Grid container alignItems="center" justifyItems="center" >
                        <Grid item xs={4}>
                            <img src={props.image} alt="icon" style={{ width: "100%", height: "100%" }} />
                        </Grid>
                        <Grid item xs={8} >
                            <div className='japanese_L' style={{
                                whiteSpace: "pre-wrap",
                                margin: "0 2vw",
                                textAlign: "left" as "left",
                            }}>{props.content}</div>
                        </Grid>
                    </Grid>
                </DialogContent>

                <Button variant='outlined' component={Link}
                    to="/product" onClick={props.setOpen} style={{
                        margin: "0 auto 3vw auto",
                        width: "30%",
                    }}>詳細を見る</Button>
            </Dialog>
        </div>
    );
}