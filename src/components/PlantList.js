import React from 'react'
import Plant from './Plant'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import { deletePlant } from '../services/plantService'
import TextField from '@material-ui/core/TextField';

class PlantList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterBy: ''
        }
    }

    deletePlant = (plant) => {
        this.props.deletePlant(plant.id)
    }

    onSearchInputChange = (event) => {
        this.setState({ filterBy: event.target.value })
    }

    filterByName = (name) => {
        if (name !== undefined) {
            this.setState({ filterBy: name })
        }
    }

    render() {
        const plantsToShow =
            this.state.filterBy === '' ?
                this.props.plants :
                this.props.plants.filter(plant => plant.finnishName.toLowerCase().indexOf(this.state.filterBy.toLowerCase()) > -1)

        return (
            <div>
                <div>
                    <TextField style={{ padding: 24 }}
                        id="searchInput"
                        placeholder="Search for Plants"
                        margin="normal"
                        onChange={this.onSearchInputChange}
                    />

                    <Grid container spacing={24} style={{ padding: 24 }}>
                        {plantsToShow.map(plant => (
                            <Grid key={plant.id} item xs={12} sm={6} lg={4} xl={3}>
                                <Plant plant={plant}
                                    deletePlant={this.deletePlant}
                                    filterByName={this.filterByName} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        plants: state.plants
    }
}

const ConnectedPlantList = connect(mapStateToProps, { deletePlant })(PlantList)
export default ConnectedPlantList