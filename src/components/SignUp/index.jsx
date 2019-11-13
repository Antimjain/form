import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {number, string, object} from 'yup';
import { withStyles } from '@material-ui/core';

const signUpSchema =  object().shape({
	phone: string().matches(/^\d{10}$/),
	address: string().min(3).max(100).required(),
	email: string().email().required(),
	lastName: string().min(3).max(30).required(),
	firstName: string().min(3).max(30).required(),
});

const signupStyle = {
	successMsg: {
		marginTop: "40px",
		maxWidth: "288px",
		color: "white",
    padding: "6px 16px",
    flexGrow: 1,
    flexWrap: "wrap",
    alignItems: "center",
		borderRadius: "4px",
		background: "green",
		textAlign: "center",
		margin: "0 auto"
	},
	paper: {
		marginTop: 10,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		border: '1px solid #ccc',
		padding: 20,
	},
	avatar: {
		margin: 10,
		backgroundColor: '#fff',
	},
	form: {
		width: '100%',
		marginTop: 3,
	},
	submit: {
		margin: 3,
	},
};

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			phone: '',
			address: '',
			isSubmit: false,
		};
	}

	handleOnChange = event => {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value
		});
	};
	
	handleSubmit = event => {
		event.preventDefault();
		console.log('this.state', this.state);
		signUpSchema.validate(this.state)
		.then((data) => {
			console.log('validated data=', data);
			this.setState({isSubmit: true});
		})
		.catch((error) => {
			console.log('error', error);
		})
	};
	
	render () {
		const { classes } = this.props;
		return this.state.isSubmit 
			? (
					<div className={classes.successMsg}>Thanks, for Signing Up</div>
				)
			:
                (<Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="firstName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        onChange={this.handleOnChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        onChange={this.handleOnChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        onChange={this.handleOnChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        onChange={this.handleOnChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="phone"
                                        label="Phone"
                                        type="text"
                                        id="phone"
                                        onChange={this.handleOnChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="address"
                                        label="Address"
                                        type="text"
                                        id="address"
                                        multiline
                                        onChange={this.handleOnChange}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                        </form>
                    </div>
                </Container>)
	}
}

export default withStyles(signupStyle)(SignUp);