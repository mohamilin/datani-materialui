import React, {useState, useEffect} from "react";
import Axios from 'axios';

import { makeStyles, createMuiTheme, withStyles } from "@material-ui/core/styles";
import {
    Paper,
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Button,
    ThemeProvider
} from "@material-ui/core";
import { purple, blue, orange, blueGrey, grey, brown, green, red} from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    media: {
        height: 140,
      },
      margin: {
        margin: theme.spacing(3),
        marginLeft: '17%',
        width: '45%',
      },
      marginArea : {
        textAlign: 'center',
        width: '20%',
        marginBottom: -23,
    },
    marginAreaTotal: {
        textAlign: 'center',
        width: '100%',
    },
}));

const themes = createMuiTheme({
    palette: {
      primary: red,
      secondary: purple,
    },
  });

  const ColorButtonOne = withStyles(() => ({
    root: {
        marginBottom: 2,
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: blue[700],
        
      },
    },
  }))(Button);
  const ColorButtonTwo = withStyles(() => ({
    root: {
        marginBottom: 2,
      backgroundColor: purple[500],
      '&:hover': {
        backgroundColor: brown[700],
      },
    },
  }))(Button);
  const ColorButtonThree = withStyles(() => ({
    root: {
        marginBottom: 2,
      backgroundColor: orange[500],
      '&:hover': {
        backgroundColor: red[700],
      },
    },
  }))(Button);
  const ColorButtonFour = withStyles(() => ({
    root: {
        marginBottom: 2,
      backgroundColor: blueGrey[500],
      '&:hover': {
        backgroundColor: grey[900],
      },
    },
  }))(Button);

function DataTani() {
    const classes = useStyles();

    const [data, setData] = useState([]);
    // use [render, setRender] = useState([]);

    useEffect(() => {
        Axios
        .get(`https://5f51b1f85e98480016123cb6.mockapi.io/maindata-datani/`)
        .then((response) => setData(response.data))
    }, [data]);

    const totalCabai = data.reduce((total, item) => {
        return (total + item.cabeRawit);
    }, 0)
    const totalCabaiBesar = data.reduce((total, item) => {
        return (total + item.cabeBesar);
    }, 0)

    const Luas = [4961, 2524, 1188]
    const totalLuas = Luas.reduce((total, item) => {
        return total + item;
    }, 0)

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography align="center" gutterBottom variant="h6" component="h2">
                               LUAS LAHAN PERTANIAN KAB. BANYUWANGI
                            </Typography>
                           <div>
                           <ColorButtonOne variant="contained" href="#" color="primary" className={classes.margin}>
                                TOTAL LAHAN PERTANIAN (Ha)
                            </ColorButtonOne>
                            <Button variant="outlined" href="#" size="large" color="primary" className={classes.marginArea}>
                            {totalLuas}
                            </Button>
                            <ColorButtonTwo variant="contained" href="#" color="primary" className={classes.margin}>
                                Luas Lahan Pangan (Ha)
                            </ColorButtonTwo>
                            <Button variant="outlined" href="#" size="large" color="primary" className={classes.marginArea}>
                            {Luas[0]}
                            </Button>
                            <ColorButtonThree variant="contained" href="#" color="primary" className={classes.margin}>
                               Luas Lahan Hortikultura(Ha)
                            </ColorButtonThree>
                            <Button variant="outlined" href="#" size="large" color="primary" className={classes.marginArea}>
                            {Luas[1]}
                            </Button>
                            <ColorButtonFour variant="contained" href="#" color="primary" className={classes.margin}>
                               Luas Lahan Buah-buahan(Ha)
                            </ColorButtonFour>
                            <Button variant="outlined" href="#" size="large" color="primary" className={classes.marginArea}>
                            {Luas[2]}
                            </Button>
                           </div>
                            <br/>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <div>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAWiNg0zwYetwVd8VZcGrLaO8gZ0ClBoi6EA&usqp=CAU"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="h2">
                                    Lahan Cabai Rawit
                                    </Typography>
                                    <ThemeProvider theme={themes}>
                                        <Button variant="contained" href="#" color="primary" className={classes.marginAreaTotal}>
                                            <h2>{(totalCabai/totalLuas*100).toFixed(4)} % </h2>
                                        </Button>
                                    </ThemeProvider>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={6} sm={3}>
                <div>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRI1BCrqaCP0YfmQrBucXcs9M8LBuHkIbjZ2Q&usqp=CAU"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                                    Lahan Cabai Merah Besar
                                </Typography>
                                <ThemeProvider theme={themes}>
                                        <Button variant="contained" href="#" color="secondary" className={classes.marginAreaTotal}>
                                        <h2>{(totalCabaiBesar/totalLuas*100).toFixed(4)} % </h2>
                                        </Button>
                                    </ThemeProvider>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default DataTani;
