import React from 'react'
import { plantCreation } from '../reducers/reducer'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { create } from '../services/plantService'

class PlantForm extends React.Component {
    state = {
        finnishName: '',
        scientificName: '',
        description: ''
    };

    handleChange = (event) => {
        if (event.target.name === 'finnishName') {
            this.setState({ finnishName: event.target.value })
        } else if (event.target.name === 'scientificName') {
            this.setState({ scientificName: event.target.value })
        } if (event.target.name === 'description') {
            this.setState({ description: event.target.value })
        }
    }

    addPlant = (event) => {
        event.preventDefault()
        console.log('about to create ', this.props)
        const newPlantId = this.props.create(this.state)
        this.props.plantCreation(
            newPlantId, this.state.finnishName, this.state.scientificName, this.state.description
        )
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
        return (
            <div>
                <form onSubmit={this.addPlant}>
                    <FormControl >
                        <InputLabel htmlFor="name-simple">Suomenkielinen nimi</InputLabel>
                        <Input name="finnishName" value={this.state.finnishName} id="name-simple" onChange={this.handleChange} />
                    </FormControl>
                    <FormControl >
                        <InputLabel htmlFor="name-simple">Tieteellinen nimi</InputLabel>
                        <Input name="scientificName" value={this.state.scientificName} id="name-simple" onChange={this.handleChange} />
                    </FormControl>
                    <FormControl >
                        <InputLabel htmlFor="name-simple">Kuvaus</InputLabel>
                        <Input name="description" value={this.state.description} id="name-simple" onChange={this.handleChange} />
                    </FormControl>
                    <Button variant="contained" color="primary" type="submit">lisää</Button>
                    <Button variant="contained" color="secondary" type="reset" onClick={this.reset}>tyhjennä</Button>
                </form>
            </div>
        )
    }
}

export default connect(null, { plantCreation, create })(PlantForm)