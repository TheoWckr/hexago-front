
import {FormControlLabel, Grid, Slider, Switch, Typography} from "@material-ui/core";
import React from "react";
import {GameEditProps} from "../../../models/propsDeclaration";
import {marksGameAgeMin, marksGameDuration, marksGameNumPlayer} from "../../../models/gameModel";
import {useStylesPanelCreatePage} from "./gameCreatePage";
import GenresSelector from "../../genre/shared/GenresSelector";
import {GenreModel} from "../../../models/genreModel";



const GameCreatePanel2 = (props:GameEditProps ) => {
    function valueLabelFormat(value: number) {
        return marksGameDuration[marksGameDuration.findIndex(mark => mark.value === value)].hiddenLabel ;
    }

    const [checkedAge, setCheckedAge] = React.useState(props.game.minAge !== undefined);
    const [checkedDuration, setCheckedDuration] = React.useState(props.game.gameLengthMin !== undefined);


    const handleChangeNumberOfPlayer = (event: any, newValue: number | number[]) => {
        if (newValue as number[]) {
            props.changeGameState('playerMin', (newValue as number[])[0]);
            props.changeGameState('playerMax', (newValue as number[])[1]);
        }
    };

    const handleChangeMinimumAge = (event: any, newValue: number | number[]) => {
      console.log(newValue);
        if (newValue as number) {
            props.changeGameState('minAge',newValue );
        }
    };

    const handleChangeGameLength= (event: any, newValue: number | number[]) => {
        if (newValue as number[]) {
            props.changeGameState('gameLengthMin', (newValue as number[])[0]);
            props.changeGameState('gameLengthMax', (newValue as number[])[1]);
        }
    };

    const handleChangeCheckedAge = () => {
        if(checkedAge){
            props.changeGameState('minAge', undefined)
        }
        setCheckedAge(prev => !prev);
    };
    const handleChangeCheckedDuration = () => {
        if(checkedDuration){
            props.changeGameState('gameLengthMin', undefined);
            props.changeGameState('gameLengthMax',undefined);
        }
        setCheckedDuration(prev => !prev);
    };

    const setGenres  = (genres : GenreModel []) => {
        props.changeGameState('genres', genres);
    };


    const classes = useStylesPanelCreatePage();
    return (
        <Grid
              container
              direction="column"
              className={classes.panel}
        >
            <Typography>Number of player</Typography>
            <Slider
                value={ props.game.playerMin ? [props.game.playerMin, props.game.playerMax] : [4,8]}
                onChange={handleChangeNumberOfPlayer}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={1}
                max={16}
                marks={marksGameNumPlayer}
            />
             <FormControlLabel
                control={<Switch checked={checkedAge} onChange={handleChangeCheckedAge} />}
                label="Minimum Age"
            />
            <Slider
                name={'age'}
                onChange={handleChangeMinimumAge}
                disabled={!checkedAge}
                value={props.game.minAge ? props.game.minAge : 10}
                aria-labelledby="discrete-slider-custom"
                step={1}
                min={3}
                max={21}
                valueLabelDisplay={"on"}
                marks={marksGameAgeMin}
            />


            <FormControlLabel
                control={<Switch checked={checkedDuration} onChange={handleChangeCheckedDuration} />}
                label="Duration"
            />
            <Slider
                disabled={!checkedDuration}
                onChange={handleChangeGameLength}
                defaultValue={[30,60]}
                valueLabelDisplay="auto"
                valueLabelFormat={valueLabelFormat}
                aria-labelledby="discrete-slider-restrict"
                marks={marksGameDuration}
                step={null}
                min={15}
                max={180}
            />
            <GenresSelector changeGenreState={setGenres} genres={props.game.genres}/>
        </Grid>


)
};
export default GameCreatePanel2;
