import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import SingleProduct from "../../components/SingleProoduct/SingleProduct";
import {fetchProducts} from "../../store/actions/productsActions";
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Link from "@material-ui/core/Link";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: '20px',
        marginLeft: '30px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "space-around",
        width: '70%'
    },
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    product: {
        cursor: "pointer"
    }
}));

const Products = () => {
    const classes = useStyles();
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts(''));
    }, [dispatch]);

    const category = (cat) => {
        dispatch(fetchProducts(cat));
    }

    const productList = products.map(product => {
        return (
            <SingleProduct
                key={product._id}
                id={product._id}
                title={product.title}
                price={product.price}
                image={product.image ?
                    'http://localhost:8000/uploads/' + product.image :
                    "https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png"}

            />
        )
    });
    return (
        <div className={classes.root}>

            <Toolbar/>
            <div className={classes.drawerContainer}>
                <h4>Categories</h4>
                <List>
                    <ListItem>
                        <Link className={classes.product}
                              onClick={() => category('')}
                        >All categories</Link>
                    </ListItem>
                    <ListItem>
                        <Link className={classes.product}
                              onClick={() => category("cars")}
                        >Cars</Link>
                    </ListItem>
                    <ListItem>
                        <Link className={classes.product}
                              onClick={() => category("guns")}
                        >Guns</Link>
                    </ListItem>
                    <ListItem>
                        <Link className={classes.product}
                              onClick={() => category("computers")}
                        >Computers</Link>
                    </ListItem>
                    <ListItem>
                        <Link className={classes.product}
                              onClick={() => category("clothes")}
                        >Clothes</Link>
                    </ListItem>
                </List>
                <Divider/>
            </div>

            <div className={classes.main}>
                {productList}
            </div>
        </div>
    );
};

export default Products;