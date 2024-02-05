import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps, AlertColor } from '@mui/material/Alert';

export interface IHPAlertProps {
  open: boolean;
  msg: string;
  severity?: AlertColor;
  duration?: number;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function HPAlert({ open, msg='', severity='warning', duration=6000}: IHPAlertProps) {

  return (
    <Stack
      spacing={2}
      sx={{ width: '100%' }}
    >
      <Snackbar
        open={open}
        autoHideDuration={duration}
      >
        <Alert
          severity={severity}
          sx={{ width: '100%' }}
        >
          {msg}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
