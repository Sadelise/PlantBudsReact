import React from 'react'
import ConnectedPlantList from './PlantList';
import PlantForm from './PlantForm';

class App extends React.Component {

    render() {
        return (
            <div>
                <PlantForm />
                <ConnectedPlantList />
            </div >
        )
    }
}

export default App