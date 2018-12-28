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
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

class PlantForm extends React.Component {
    state = {
        finnishName: '',
        scientificName: '',
        description: '',
        plantType: '',
        imagelink: '',
        leafShape: '',
        colors: {
            darkGreen: false,
            lightGreen: false,
            silver: false,
            pink: false,
            white: false
        },
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    addPlant = (event) => {
        event.preventDefault()
        console.log('about to create ', this.props)
        const newPlantId = this.props.create(this.state)
        this.props.plantCreation(
            newPlantId, this.state.finnishName, this.state.scientificName, this.state.description, this.state.imagelink
        )
        this.reset()
    }

    reset = () => {
        this.setState({
            finnishName: '',
            scientificName: '',
            description: '',
            imagelink: '',
            leafShape: '',
            colors: {
                darkGreen: false,
                lightGreen: false,
                silver: false,
                pink: false,
                white: false
            },
        });
    }

    handleCheckboxChange = (event, color) => {
        var newColors = this.state.colors
        if (color === 'darkGreen') {
            newColors.darkGreen = event.target.checked
        } else if (color === 'lightGreen') {
            newColors.lightGreen = event.target.checked
        } else if (color === 'silver') {
            newColors.silver = event.target.checked
        } else if (color === 'pink') {
            newColors.pink = event.target.checked
        } else if (color === 'white') {
            newColors.white = event.target.checked
        }
        this.setState({ colors: newColors });
    }

    render() {
        const { darkGreen, lightGreen, silver, pink, white } = this.state.colors;

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
                    <FormControl >
                        <InputLabel htmlFor="name-simple">Linkki kuvaan</InputLabel>
                        <Input name="imagelink" value={this.state.imagelink} id="name-simple" onChange={this.handleChange} />
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
                            <FormControlLabel value="ei mikään näistä" control={<Radio />} label="ei mikään näistä" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Lehden muoto</FormLabel>
                        <RadioGroup
                            aria-label="Lehden muoto"
                            name="leafShape"
                            value={this.state.leafShape}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel value="vastapuikea" control={<Radio />} label="vastapuikea" />
                            <FormControlLabel value="puikea" control={<Radio />} label="puikea" />
                            <FormControlLabel value="pyöreä" control={<Radio />} label="pyöreä" />
                            <FormControlLabel value="herttamainen" control={<Radio />} label="herttamainen" />
                            <FormControlLabel value="pitkänomainen" control={<Radio />} label="pitkänomainen" />
                            <FormControlLabel value="ei mikään näistä" control={<Radio />} label="ei mikään näistä" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Lehdessä esiintyy seuraavia värejä:</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={darkGreen} onChange={(event) => this.handleCheckboxChange(event, 'darkGreen')} value="darkGreen" />
                                }
                                label="Tummanvihreä"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={lightGreen} onChange={(event) => this.handleCheckboxChange(event, 'lightGreen')} value="lightGreen" />
                                }
                                label="Vaaleanvihreä"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={silver} onChange={(event) => this.handleCheckboxChange(event, 'silver')} value="silver" />
                                }
                                label="Hopea"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={pink} onChange={(event) => this.handleCheckboxChange(event, 'pink')} value="pink" />
                                }
                                label="Vaaleanpunainen"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={white} onChange={(event) => this.handleCheckboxChange(event, 'white')} value="white" />
                                }
                                label="Valkoinen"
                            />
                        </FormGroup>
                        <FormHelperText>Voit valita useita</FormHelperText>
                    </FormControl>
                    <Button variant="contained" color="primary" type="submit">lisää</Button>
                    <Button variant="contained" color="secondary" type="reset" onClick={this.reset}>tyhjennä</Button>
                </form>
            </div>
        )
    }
}

export default connect(null, { plantCreation, create })(PlantForm)