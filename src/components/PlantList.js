import React from 'react'
import Plant from './Plant'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';

class PlantList extends React.Component {
    render() {
        console.log('props.plants ', this.props.plants)
        return (
            <div>
                <div>
                    {/* <TextField style={{ padding: 24 }}
                        id="searchInput"
                        placeholder="Search for Plants"
                        margin="normal"
                        onChange={this.onSearchInputChange}
                    /> */}

                    <Grid container spacing={24} style={{ padding: 24 }}>
                        {this.props.plants.map(plant => (
                            <Grid key={plant.id} item xs={12} sm={6} lg={4} xl={3}>
                                <Plant plant={plant} />
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

const ConnectedPlantList = connect(mapStateToProps)(PlantList)

export default ConnectedPlantList