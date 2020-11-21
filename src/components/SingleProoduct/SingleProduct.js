import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Link as RouterLink} from "react-router-dom";
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: "30%",
        marginBottom: "20px"
    },
    media: {
        height: 140,
    },
    link: {
        textTransform: "uppercase",
        fontWeight: 'bold'
    }
});

const SingleProduct = props => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h3" component="h2">
                        {props.title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h4">
                        {props.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link component={RouterLink}  to={"/products/" + props.id} className={classes.link}>
                    Learn More
                </Link>
            </CardActions>
        </Card>
    );
};

export default SingleProduct;