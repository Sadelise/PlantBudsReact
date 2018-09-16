import React from 'react'
import { plantCreation } from '../reducers/reducer'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { create } from '../services/plantService'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

class PlantForm extends React.Component {
    state = {
        finnishName: '',
        scientificName: '',
        description: '',
        plantType: ''
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
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

                                        <FormControl component="fieldset">
                        <FormLabel component="legend">Kasvin tyyppi</FormLabel>
                        <RadioGroup
                            aria-label="Kasvin tyyppi"
                            name="plantType"
                            value={this.state.plantType}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel value="mehikasvi" control={<Radio />} label="mehikasvi" />
                            <FormControlLabel value="palmu" control={<Radio />} label="palmu" />
                            <FormControlLabel value="köynnös" control={<Radio />} label="köynnös" />
                        </RadioGroup>
                    </FormControl>
                    <Button variant="contained" color="primary" type="submit">lisää</Button>
                    <Button variant="contained" color="secondary" type="reset" onClick={this.reset}>tyhjennä</Button>
                </form>
            </div>
        )
    }
}

export default connect(null, { plantCreation, create })(PlantForm)