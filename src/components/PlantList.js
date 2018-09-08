import React from 'react'
import Plant from './Plant'
import { connect } from 'react-redux'

class PlantList extends React.Component {
    render() {
        console.log('props.plants ', this.props.plants)
        return (
            <ul>
                {this.props.plants.map(plant =>
                    <Plant
                        key={plant.id}
                        plant={plant}
                    />
                )}
            </ul>
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