import React from 'react'
import ConnectedPlantList from './PlantList';
import PlantForm from './PlantForm';
import NavBar from './NavBar'

class App extends React.Component {

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

export default App