import React from 'react'
import ConnectedPlantList from './PlantList';
import PlantForm from './PlantForm';
import NavBar from './NavBar'
import { connect } from 'react-redux'
import { plantInitialization } from '../reducers/reducer'
import { plantsRef } from "../config/firebase";

class App extends React.Component {

    componentWillMount = async () => {
        plantsRef.on("value", snapshot => {
            var plants = [];
            snapshot.forEach(function (childSnapshot) {
                var plant = childSnapshot.val();
                plant.id = childSnapshot.key;
                plants.push(plant);
            });
            this.props.plantInitialization(plants)
        })
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

export default connect(null, { plantInitialization })(App)