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
import { filterChange } from '../reducers/filterReducer'

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
        },
        showForm: false
    };

    handleChange = (event) => {
        console.log("chagning ", event.target.name, " value ", event.target.value)
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

        var filtered = this.props.plants
            .filter(plant =>
                (this.state.plantType === '' ||
                    plant.plantType === this.state.plantType)
                &&
                (this.state.leafShape === '' ||
                    plant.leafShape === this.state.leafShape)
                &&
                (this.state.colors.lightGreen === false
                    || plant.colors !== undefined
                    &&
                    plant.colors.lightGreen)
                &&
                (this.state.colors.darkGreen === false
                    || plant.colors !== undefined
                    &&
                    plant.colors.darkGreen)
                &&
                (this.state.colors.silver === false
                    || plant.colors !== undefined
                    &&
                    plant.colors.silver)
                &&
                (this.state.colors.pink === false
                    || plant.colors !== undefined
                    &&
                    plant.colors.pink)
                &&
                (this.state.colors.white === false
                    || plant.colors !== undefined
                    &&
                    plant.colors.white))

        this.props.filterChange(filtered)
    }

    reset = () => {
        this.setState({
            plantname: '',
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

    show = () => {
        console.log('showww ', this.state.showForm)
        if (this.state.showForm === true) {
            this.setState({
                showForm: false
            });
        } else {
            this.setState({
                showForm: true
            });
        }

    }

    render() {
        const showWhenVisible = { display: this.state.showForm ? '' : 'none' }
        const { darkGreen, lightGreen, silver, pink, white } = this.state.colors;

        return (
            <div>
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
                        <Button variant="contained" color="primary" type="submit">Hae</Button>
                        <Button variant="contained" color="secondary" type="reset" onClick={this.reset}>tyhjennä</Button>
                    </form>
                </div>
                <div>
                    <Button variant="contained" color="secondary" type="reset" onClick={this.show}>Tunnista kasvi</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        plants: state.plants,
        filter: state.filter
    }
}

export default connect(mapStateToProps, { filterChange })(IdentificationForm)