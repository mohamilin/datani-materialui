import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles } from '@material-ui/core/styles';

// import Typography from '@material-ui/core/Typography';
import {CardMedia, Container, Grid, Paper} from '@material-ui/core';
// import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  root: {
    flexGrow: 1,
  }
}))

function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container fixed>
        {/* <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "50vh", marginTop: 10}}
        /> */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            style={{ backgroundColor: "#cfe8fc", height: "40vh", marginTop: 50 }}
            image="https://images.unsplash.com/photo-1511941923513-f7749910f91d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=764&q=80"
          />          
          </Grid>
          </Grid>

         
      </Container>
    </div>
  );
}

export default Banner;
