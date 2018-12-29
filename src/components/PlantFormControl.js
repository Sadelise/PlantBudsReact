import React from 'react'
import { plantCreation } from '../reducers/reducer'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { create } from '../services/plantService'
import BasicForm from './BasicForm'
import IdentifyForm from './IdentifyForm'
import { filterChange } from '../reducers/filterReducer'

class PlantFormControl extends React.Component {
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
        showForm: false
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    addPlant = (event) => {
        event.preventDefault()
        const newPlantId = this.props.create(this.state)
        this.props.plantCreation(
            newPlantId, this.state.finnishName, this.state.scientificName, this.state.description, this.state.imagelink
        )



        var list = this.props.plants.filter(plant => plant.finnishName.toLowerCase().indexOf(this.state.finnishName.toLowerCase()) > -1)
        this.props.filterChange(list)

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
            showForm: false
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

    show = () => {
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

        return (
            <div>
                <Button variant="contained" color="primary" type="reset" onClick={this.show}>Lisää kasvi</Button>
                <form onSubmit={this.addPlant} style={showWhenVisible}>

                    <BasicForm state={this.state}
                        handleChange={this.handleChange} />
                    <IdentifyForm state={this.state}
                        handleChange={this.handleChange}
                        colors={this.state.colors}
                        handleCheckboxChange={this.handleCheckboxChange} />

                    <Button variant="contained" color="primary" type="submit">lisää</Button>
                    <Button variant="contained" color="secondary" type="reset" onClick={this.reset}>tyhjennä</Button>
                </form>
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

export default connect(mapStateToProps, { plantCreation, create, filterChange })(PlantFormControl)
