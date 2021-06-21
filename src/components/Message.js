import React, { useEffect, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useStateValue } from './StateProvider';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Message() {
    const [open, setOpen] = useState(false);
    const [{message: {successMessage, errorMessage}}] = useStateValue();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        if (errorMessage || successMessage) {
            setOpen(true);
        }

    }, [errorMessage, successMessage]);

    return (
        <div>
            {
                errorMessage && <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert onClose={handleClose} severity="error">{errorMessage}</Alert>
                </Snackbar>
            }

            {
                successMessage && <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert onClose={handleClose} severity="success">{successMessage}</Alert>
                </Snackbar>
            }
        </div>
    );
}

export default Message;
