import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

const Form = ({ handleChange, state }) => {

  return (
    <div>
      <div>
        <FormControl >
          <InputLabel htmlFor="name-simple">Suomenkielinen nimi</InputLabel>
          <Input name="finnishName" value={state.finnishName} id="name-simple" onChange={handleChange} />
        </FormControl>
      </div>
      <div>
        <FormControl >
          <InputLabel htmlFor="name-simple">Tieteellinen nimi</InputLabel>
          <Input name="scientificName" value={state.scientificName} id="name-simple" onChange={handleChange} />
        </FormControl>
      </div>
      <div>
        <FormControl >
          <TextField
            id="filled-multiline-flexible"
            name="description"
            label="Kuvaus"
            multiline
            rowsMax="4"
            value={state.description}
            onChange={handleChange}
            margin="normal"
            helperText="Kuvaus"
            variant="filled"
          />
        </FormControl>
      </div>
      <div>
        <FormControl >
          <InputLabel htmlFor="name-simple">Linkki kuvaan</InputLabel>
          <Input name="imagelink" value={state.imagelink} id="name-simple" onChange={handleChange} />
        </FormControl>
      </div>
    </div>
  )
}

export default Form