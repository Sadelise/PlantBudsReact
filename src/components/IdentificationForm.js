import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

class IdentificationForm extends React.Component {
    state = {
        leafColor: '',
        leafShape: '',
        plantType: '',
        colors: {
            darkGreen: false,
            lightGreen: false,
            silver: false,
            pink: false,
            white: false
        }
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
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

    identify = (event) => {
        event.preventDefault()
        console.log("plants ",  this.props.plants)
        this.props.plants.filter(plant => 
            plant.finnishName.toLowerCase().indexOf(
                this.state.finnishName.toLowerCase()) > -1)
            
//   this.props.plants.filter(plant => plant.finnishName.toLowerCase().indexOf(this.state.filterBy.toLowerCase()) > -1)

    }

    reset = () => {
        this.setState({
            leafColor: '',
            leafShape: '',
            plantType: '',
            colors: {
                darkGreen: false,
                lightGreen: false,
                silver: false,
                pink: false,
                white: false
            }
        });
    }

    render() {
        const showWhenVisible = { display: false ? '' : 'none' }

        const { darkGreen, lightGreen, silver, pink, white } = this.state.colors;

        return (
            <div style={showWhenVisible}>
                <form onSubmit={this.identify}>
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

                    <Button variant="contained" color="primary" type="submit">Hae</Button>
                    <Button variant="contained" color="secondary" type="reset" onClick={this.reset}>tyhjennä</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        plants: state.plants
    }
}

export default connect(mapStateToProps, null)(IdentificationForm)