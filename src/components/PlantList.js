import React from 'react'
import Plant from './Plant'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import { deletePlant } from '../services/plantService'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { filterChange } from '../reducers/filterReducer'

class PlantList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterBy: '',
            plantIsChosen: '',
            fillUpdateForm: false
        }
    }

    deletePlant = (plant) => {
        this.props.deletePlant(plant.id)
    }

    filter = (name) => {
        var plantName = this.state.filterBy
        if (name !== undefined) {
            plantName = name
        }
        var list = this.props.plants.filter(plant => plant.finnishName.toLowerCase().indexOf(plantName.toLowerCase()) > -1)
        this.props.filterChange(list)
    }

    onSearchInputChange = (event) => {
        this.setState({ filterBy: event.target.value })
        this.filter()
    }

    filterByName = (name) => {
        if (name !== undefined) {
            this.setState({
                filterBy: name,
                plantIsChosen: true
            })
            this.filter(name)
        }
    }

    setStateLater = () => {

    }

    clearFilter = (event) => {
        this.setState({
            filterBy: '',
            plantIsChosen: false
        })
        var list = []
        this.props.filterChange(list)
    }

    fillUpdateForm = () => {
        this.setState({
            fillUpdateForm: true
        });
    }

    render() {
        const plantsToShow =
            this.props.filter.length <= 0 ?
                this.props.plants :
                this.props.filter

        return (
            <div>
                <div>
                    <TextField style={{ padding: 24 }}
                        id="searchInput"
                        placeholder="Etsi kasvia"
                        margin="normal"
                        value={this.state.filterBy}
                        onChange={this.onSearchInputChange}
                    />

                    <Button variant="contained" color="secondary" type="reset" onClick={this.clearFilter}>Näytä kaikki</Button>

                    <Grid container spacing={24} style={{ padding: 24 }}>
                        {plantsToShow.map(plant => (
                            <Grid key={plant.id} item xs={12} sm={6} lg={4} xl={3}>
                                <Plant plant={plant}
                                    deletePlant={this.deletePlant}
                                    filterByName={this.filterByName}
                                    plantIsChosen={this.state.plantIsChosen}
                                    fillUpdateForm={this.fillUpdateForm} />

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
        plants: state.plants,
        filter: state.filter
    }
}

const ConnectedPlantList = connect(mapStateToProps, { deletePlant, filterChange })(PlantList)
export default ConnectedPlantList