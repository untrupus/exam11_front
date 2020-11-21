import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SingleProduct from "../../components/SingleProoduct/SingleProduct";
import {fetchProducts} from "../../store/actions/productsActions";

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "space-between"
    }
}));

const Products = () => {
    const classes = useStyles();
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);


    const productList = products.map(product => {
        return (
            <SingleProduct
                key={product._id}
                id={product._id}
                title={product.title}
                image={product.image ?
                    'http://localhost:8000/uploads/' + product.image :
                    "https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png"}

            />
        )
    });
    return (
        <Container className={classes.main}>
            {productList}
        </Container>
    );
};

export default Products;