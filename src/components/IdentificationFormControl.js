import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { filterChange } from '../reducers/filterReducer'
import IdentifyForm from './IdentifyForm'

class IdentificationFormControl extends React.Component {
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
        this.setState({ [event.target.name]: event.target.value });
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
            <div >
                <Button variant="contained" color="secondary" type="reset" onClick={this.show}>Tunnista kasvi</Button>

                <form onSubmit={this.identify} style={showWhenVisible}>
                    <IdentifyForm state={this.state}
                        handleChange={this.handleChange}
                        colors={this.state.colors}
                        handleCheckboxChange={this.handleCheckboxChange} />
                    <Button variant="contained" color="primary" type="submit">Hae</Button>
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

export default connect(mapStateToProps, { filterChange })(IdentificationFormControl)