import React from 'react'
import { plantCreation } from '../reducers/reducer'
import { connect } from 'react-redux'

class PlantForm extends React.Component {
    addPlant = (event) => {
        event.preventDefault()
        const finnishName = event.target.finnishName.value
        const scientificName = event.target.scientificName.value
        const description = event.target.description.value
        this.props.plantCreation(
            finnishName, scientificName, description
        )
        event.target.finnishName.value = ''
        event.target.scientificName.value = ''
        event.target.description.value = ''
    }
    render() {
        return (
            <form onSubmit={this.addPlant}>
                <input name="finnishName" />
                <input name="scientificName" />
                <input name="description" />
                <button type="submit">lisää</button>
            </form>
        )
    }
}

export default connect(null, { plantCreation })(PlantForm)
