import React, {useEffect} from 'react';
import Container from "@material-ui/core/Container";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import {fetchProduct, deleteProduct} from "../../store/actions/productsActions";
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(() => ({
    product: {
        padding: "10px",
        marginTop: "25px",
        textAlign: 'center'
    },
    img: {
        height: "300px",
        width: "auto",
        marginRight: "auto",
        marginLeft: "auto",
        display: 'block'
    },
    info: {
        marginTop: "15px",
        padding: '10px',
        textAlign: 'left',
        marginBottom: "15px"
    },
    submit: {
        display: 'block',
        margin: "auto",
        padding: "15px",
        width: "100%"
    }
}));


const ProductDetail = props => {
    const classes = useStyles();
    const product = useSelector(state => state.products.singleProduct);
    const user = useSelector(state => state.users.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    const remove = () => {
        dispatch(deleteProduct(props.match.params.id));
    };

    console.log(user);
    return (
        <Container className={classes.product}>
            {product &&
            <div>
                <h1>{product.title}</h1>
                <img src={product.image ?
                    'http://localhost:8000/uploads/' + product.image :
                    "https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png"}
                     alt="product"
                     className={classes.img}/>
                <Paper elevation={3} className={classes.info}>
                    <p>Description: {product.description}</p>
                    <p>Price: <b>{product.price}</b></p>
                    <p>Category: {product.category}</p>
                    <p>Seller: {product.user.displayName}</p>
                    <p>Phone: {product.user.phone}</p>
                </Paper>
            </div>}
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={remove}
            >
                Delete
            </Button>
        </Container>
    );
};

export default ProductDetail;