import React from 'react'
import ConnectedPlantList from './PlantList';
import PlantForm from './PlantForm';
import NavBar from './NavBar'
import plantService from '../services/plantService'
import { connect } from 'react-redux'
import { plantInitialization } from '../reducers/reducer'

class App extends React.Component {
    state = {
        plantData: []
    };

    componentDidMount = async () => {
        const result = await plantService.getAll()()
        console.log("DBPLANTSresult ", result)
        this.props.plantInitialization(result)
    }

    render() {
        return (
            <div>
                <NavBar />
                <PlantForm />
                <ConnectedPlantList />
            </div >
        )
    }
}

export default connect(null, { plantInitialization, plantService })(App)