import React, {useState, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {addProduct} from "../../store/actions/productsActions";
import Alert from '@material-ui/lab/Alert';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    login: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const PostForm = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        title: '',
        description: '',
        category: '',
        image: '',
        price: ''
    });
    const inputRef = useRef();
    const dispatch = useDispatch();
    const error = useSelector(state => state.products.addProductError);

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState(prevState => {
            return {...prevState, [name]: value};
        });
    };
    const fileChangeHandler = e => {
        const name = e.target.name;
        const file = e.target.files[0];
        setState(prevState => ({
            ...prevState, [name]: file
        }));
    };
    const formSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(state).forEach(key => {
            formData.append(key, state[key]);
        });
        dispatch(addProduct(formData));
    };

    return (
        <Container component="main" maxWidth="lg">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Add new product
                </Typography>
                {error ? <Alert severity="error">{error.message}</Alert> : null}
                <form className={classes.form}
                      onSubmit={formSubmit}
                >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="title"
                        label="Title"
                        name="title"
                        value={state.title}
                        onChange={inputChangeHandler}
                        autoComplete="title"
                        autoFocus
                        required={true}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="description"
                        label="Description"
                        type="description"
                        id="description"
                        value={state.description}
                        onChange={inputChangeHandler}
                        autoComplete="description"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="price"
                        label="Price"
                        type="price"
                        id="price"
                        value={state.price}
                        onChange={inputChangeHandler}
                        autoComplete="price"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="image"
                        type="file"
                        ref={inputRef}
                        id="image"
                        onChange={fileChangeHandler}
                    />
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                        <Select
                            fullWidth
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={state.category}
                            onChange={inputChangeHandler}
                            label="Category"
                            name="category"
                            required={true}
                        >

                            <MenuItem value="Cars">Cars</MenuItem>
                            <MenuItem value="Computers">Computers</MenuItem>
                            <MenuItem value="Clothes">Clothes</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Add
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default PostForm;