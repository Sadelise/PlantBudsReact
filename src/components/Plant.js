import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Plant = ({ plant, deletePlant, filterByName, plantIsChosen }) => {
  const showWhenVisible = { display: plantIsChosen ? '' : 'none' }
  const googleAddress = `https://www.google.fi/search?q=${plant.finnishName}`

  return (
    <div onClick={() => filterByName(plant.finnishName)}>
      {plant ? (
        <Card key={plant.id}>
          <CardMedia style={{ height: 0, paddingTop: '80%' }}
            title={plant.finnishName}
            image='https://www.publicdomainpictures.net/pictures/150000/velka/tropical-green-plants.jpg'
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {plant.finnishName}
            </Typography>
            <Typography component="p">
              {plant.scientificName}
            </Typography>
            <div style={showWhenVisible}>
              <Typography component="p">
                {plant.description}
              </Typography>
              <Typography component="p">
                Tyyppi:{plant.plantType}
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" href={googleAddress} target="_blank">
              Google the Plant
                    </Button>
          </CardActions>
          <CardActions>
            <Button variant="contained" color="secondary" type="reset" onClick={() => deletePlant(plant)}>poista</Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  )
}

export default Plant