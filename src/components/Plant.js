import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Plant = ({ plant }) => {
  console.log('Plant ', plant)
  return (
    <div>
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
              {plant.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" href='https://www.google.fi/' target="_blank">
              Google the Plant
                    </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  )
}

export default Plant