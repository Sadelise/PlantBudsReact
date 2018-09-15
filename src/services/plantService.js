import { databaseRef, plantsRef } from "../config/firebase";

export const create = newPlant => async dispatch => {
    const response = await plantsRef.push()
    await response.set(newPlant)
    return response.key
};

export const deletePlant = deletedPlantId => async dispatch => {
    await databaseRef.child(`plants/${deletedPlantId}`).remove();
};

