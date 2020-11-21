import React, {useEffect} from 'react';
import Container from "@material-ui/core/Container";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    post: {
        padding: "10px",
        display: "flex",
        marginTop: "25px"
    },
    postInfo: {
        marginTop: "20px",
        display: "block",
        fontSize: "25px"
    },
    img: {
        height: "300px",
        width: "auto",
        marginRight: "30px"
    },
    postInner: {
        marginTop: "15px"
    },
    field: {
        width: "65%"
    },
    btn: {
        width: "30%",
        padding: "17px",
        marginTop: "5px"
    },
    form: {
        marginBottom: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
}));


const ProductDetail = () => {
    const classes = useStyles();
    const product = useSelector(state => state.products.singleProduct);
    const user = useSelector(state => state.users.user);
    const dispatch = useDispatch();



    return (
        <Container>
            detail
        </Container>
    );
};

export default ProductDetail;