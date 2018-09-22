import React from 'react'
import ConnectedPlantList from './PlantList';
import PlantForm from './PlantForm';
import NavBar from './NavBar'
import { connect } from 'react-redux'
import { plantInitialization } from '../reducers/reducer'
import { plantsRef } from "../config/firebase";
import IdentificationForm from './IdentificationForm';
import LoginForm from './LoginForm';

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
        console.log("this.props.owner ", this.props.owner)
   
        if (this.props.owner.length <= 0) {
            return (
                <div>
                    <NavBar />
                    <LoginForm />
                    <ConnectedPlantList />
                </div>
            )
        } else {
            return (
                <div>
                    <NavBar />
                    <PlantForm />
                    <IdentificationForm />
                    <ConnectedPlantList />
                </div >
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        owner: state.owner
    }
}

export default connect(mapStateToProps, { plantInitialization })(App)