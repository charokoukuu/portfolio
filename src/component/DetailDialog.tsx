import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { WorkContentDialogProps } from '../Profile';

interface DialogProps extends WorkContentDialogProps {
    open: boolean;
    setOpen: () => void;
}
export const DetailDialog = (props: DialogProps) => {



    return (
        <div>
            <Button variant="outlined" onClick={props.setOpen}>
                Open alert dialog
            </Button>
            <Dialog
                open={props.open}
                onClose={props.setOpen}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.setOpen}>Disagree</Button>
                    <Button onClick={props.setOpen} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}