import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import { TextField} from "@material-ui/core";
import {KeyboardDatePicker} from "@material-ui/pickers";
import {GenreModel} from "../../../models/genreModel";
import GenresSelector from "../../genre/shared/GenresSelector";
import GameSearchProps from "../../../models/game/gameSearch";

export const GameSearchPanel = (props : {setSearch : Dispatch<SetStateAction<GameSearchProps>>}) => {
    const [date, setDate] = useState(new Date);
    const[genreList, setGenreList] = useState(new Array<GenreModel>());
    const [name, setName] = useState('');
    const refreshList = (genres : GenreModel[]) => {
        //Adding an element
        if(genres.length > genreList.length) {
            let elementToAdd = genres.filter((genre) => !genreList.includes(genre))[0];
            setGenreList(prevState => {
                prevState.push(elementToAdd);
                return genreList;
            });
        } else
        setGenreList(prevState => prevState.filter((genre) => genreList.includes(genre)));
    };
    useEffect(() => console.log('change genre list' , genreList), [genreList]);

    return(
        <div className="iflx mx-2-childs mt-2 px-2 w-100">
            <TextField id="outlined-search" label="Name" type="search" variant="outlined" onChange={(event => setName(event.target.value))}/>
            <KeyboardDatePicker
                margin="none"
                id="date-picker-dialog"
                label="Year of released"
                format="yyyy"
                value={date}
                onChange={(date) => date ? setDate(date) : date }
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
            <GenresSelector genres={genreList} changeGenreState={refreshList} inline={true}/>
        </div>
    )
};
