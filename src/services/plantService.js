import { plantsRef } from "../config/firebase";
import { plantInitialization } from "../reducers/reducer";
import { setPlantData } from "../components/App"

const getAll = () => async dispatch => {
    var returnArr = []
    plantsRef.on("value", snapshot => {
        snapshot.val()
        const data = snapshot.val()
        console.log("the snapshot ", snapshot.val())
        returnArr.push(snapshot.val());
    })
    console.log("result ", returnArr)
    return returnArr;
}



const create = newPlant => async dispatch => {
    console.log('creating plant')
    plantsRef.push().set(newPlant);
};

const deletePlant = deletedPlantId => async dispatch => {
    plantsRef.child(deletedPlantId).remove();
};

export default { getAll, create, deletePlant }