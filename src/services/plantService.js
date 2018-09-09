import { plantsRef } from "../config/firebase";
import { plantInitialization } from "../reducers/reducer";
import { setPlantData } from "../components/App"

const getAll = () => async dispatch => {
    return (
        plantsRef.once("value", snapshot => {
            return snapshot.val()
            const data = snapshot.val()
            console.log("the snapshot ", snapshot.val())
        })
    )
}



const create = newPlant => async dispatch => {
    console.log('creating plant')
    plantsRef.push().set(newPlant);
};

const deletePlant = deletedPlantId => async dispatch => {
    plantsRef.child(deletedPlantId).remove();
};

export default { getAll, create, deletePlant }