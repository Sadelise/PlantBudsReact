import React from 'react'
import { setOwner } from '../reducers/ownerReducer'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { create, loginFirebase, logoutFirebase } from '../services/ownerService'

class LoginForm extends React.Component {
    state = {
        email: '',
        username: '',
        password: '',
        repeatedpassword: '',
        showRegistration: false
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    login = (event) => {
        event.preventDefault()
        this.props.loginFirebase(this.state)
        // this.props.login(user)
        this.reset()
    }

    logout = (event) => {
        event.preventDefault()
        this.props.logoutFirebase(this.state)
        this.props.setOwner(null)
        this.reset()
    }

    showRegistration = (event) => {
        event.preventDefault()
        this.reset()
    }

    register = (event) => {
        event.preventDefault()
        this.props.create(this.state)
        this.reset()
    }

    reset = () => {
        this.setState({
            finnishName: '',
            scientificName: '',
            description: ''
        });
    }

    render() {
        const showWhenVisible = { display: this.state.showRegistration ? '' : 'none' }
        const hideWhenVisible = { display: this.state.showRegistration ? 'none' : '' }
        const showWhenLoggedIn = { display: this.props.owner !== null ? '' : 'none' }
        const hideWhenLoggedIn = { display: this.props.owner !== null ? 'none' : '' }

        return (
            <div>
                <div style={showWhenLoggedIn}>
                    <Button variant="contained" color="primary" type="submit" onClick={this.logout}>Kirjaudu ulos</Button>
                </div>
                <div style={hideWhenLoggedIn}>
                    <div style={hideWhenVisible}>
                        <form onSubmit={this.login}>
                            <FormControl >
                                <InputLabel htmlFor="name-simple">Sähköpostiosoite</InputLabel>
                                <Input name="email" value={this.state.email} id="name-simple" onChange={this.handleChange} />
                            </FormControl>
                            <FormControl >
                                <InputLabel htmlFor="name-simple">Salasana</InputLabel>
                                <Input name="password" value={this.state.password} id="name-simple" onChange={this.handleChange} />
                            </FormControl>
                            <Button variant="contained" color="primary" type="submit">Kirjaudu sisään</Button>
                            <Button variant="contained" color="primary" type="submit" onClick={this.showRegistration}>Rekisteröidy</Button>
                        </form>
                    </div>
                    <div style={showWhenVisible}>
                        <form onSubmit={this.register}>
                            <FormControl >
                                <InputLabel htmlFor="name-simple">Sähköpostiosoite</InputLabel>
                                <Input name="email" value={this.state.email} id="name-simple" onChange={this.handleChange} />
                            </FormControl>
                            <FormControl >
                                <InputLabel htmlFor="name-simple">Salasana</InputLabel>
                                <Input name="password" value={this.state.password} id="name-simple" onChange={this.handleChange} />
                            </FormControl>
                            <FormControl >
                                <InputLabel htmlFor="name-simple">Toista salasana</InputLabel>
                                <Input name="repeatedpassword" value={this.state.repeatedpassword} id="name-simple" onChange={this.handleChange} />
                            </FormControl>
                            {/* <Button variant="contained" color="primary" type="submit">Rekisteröidy</Button> */}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        owner: state.owner
    }
}

export default connect(mapStateToProps, { setOwner, create, loginFirebase, logoutFirebase })(LoginForm)