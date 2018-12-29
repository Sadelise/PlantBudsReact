import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const IdentifyForm = ({ handleChange, state, colors, handleCheckboxChange }) => {
    const { darkGreen, lightGreen, silver, pink, white } = colors;
    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Kasvin tyyppi</FormLabel>
                <RadioGroup
                    aria-label="Kasvin tyyppi"
                    name="plantType"
                    value={state.plantType}
                    onChange={handleChange}
                >
                    <FormControlLabel value="mehikasvi" control={<Radio />} label="mehikasvi" />
                    <FormControlLabel value="palmu" control={<Radio />} label="palmu" />
                    <FormControlLabel value="köynnös" control={<Radio />} label="köynnös" />
                    <FormControlLabel value="ei mikään näistä" control={<Radio />} label="ei mikään näistä" />
                </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
                <FormLabel component="legend">Lehden muoto</FormLabel>
                <RadioGroup
                    aria-label="Lehden muoto"
                    name="leafShape"
                    value={state.leafShape}
                    onChange={handleChange}
                >
                    <FormControlLabel value="vastapuikea" control={<Radio />} label="vastapuikea" />
                    <FormControlLabel value="puikea" control={<Radio />} label="puikea" />
                    <FormControlLabel value="pyöreä" control={<Radio />} label="pyöreä" />
                    <FormControlLabel value="herttamainen" control={<Radio />} label="herttamainen" />
                    <FormControlLabel value="pitkänomainen" control={<Radio />} label="pitkänomainen" />
                    <FormControlLabel value="ei mikään näistä" control={<Radio />} label="ei mikään näistä" />
                </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
                <FormLabel component="legend">Lehdessä esiintyy seuraavia värejä:</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox checked={darkGreen} onChange={(event) => handleCheckboxChange(event, 'darkGreen')} value="darkGreen" />
                        }
                        label="Tummanvihreä"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={lightGreen} onChange={(event) => handleCheckboxChange(event, 'lightGreen')} value="lightGreen" />
                        }
                        label="Vaaleanvihreä"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={silver} onChange={(event) => handleCheckboxChange(event, 'silver')} value="silver" />
                        }
                        label="Hopea"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={pink} onChange={(event) => handleCheckboxChange(event, 'pink')} value="pink" />
                        }
                        label="Vaaleanpunainen"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={white} onChange={(event) => handleCheckboxChange(event, 'white')} value="white" />
                        }
                        label="Valkoinen"
                    />
                </FormGroup>
                <FormHelperText>Voit valita useita</FormHelperText>
            </FormControl>
        </div>
    )
}

export default IdentifyForm