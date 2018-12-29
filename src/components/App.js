import React from 'react'
import ConnectedPlantList from './PlantList';
import PlantFormControl from './PlantFormControl';
import NavBar from './NavBar'
import { connect } from 'react-redux'
import { plantInitialization } from '../reducers/reducer'
import { plantsRef } from "../config/firebase";
import IdentificationFormControl from './IdentificationFormControl';
import { setOwner } from '../reducers/ownerReducer'
import * as firebase from "firebase";

class App extends React.Component {

    componentWillMount() {
        plantsRef.on("value", snapshot => {
            var plants = [];
            snapshot.forEach(function (childSnapshot) {
                var plant = childSnapshot.val();
                plant.id = childSnapshot.key;
                plants.push(plant);
            });
            this.props.plantInitialization(plants)
        })

        var context = this.props
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                context.setOwner(user.email)
            } else {
                context.setOwner(null)
            }
        });
    }

    render() {
        if (this.props.owner == null) {
            return (
                <div>
                    <NavBar />
                    <ConnectedPlantList />
                </div>
            )
        } else {
            return (
                <div>
                    <NavBar />
                    <PlantFormControl/>
                    <IdentificationFormControl />
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

export default connect(mapStateToProps, { plantInitialization, setOwner })(App)