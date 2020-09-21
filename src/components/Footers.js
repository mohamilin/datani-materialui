import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {teal} from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: '100%',
    backgroundColor: teal[500],
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function Footer() {
  const classes = useStyles();

  return (
   <>
    <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
                <Grid item className={classes.paper}>
                    
                </Grid>
            </Grid>
        </Grid>
    </Grid>
   </>
  );
}


export default Footer
