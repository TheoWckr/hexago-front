import React, {useEffect, useState} from 'react';
import {GenreModel} from "../../../models/genreModel";
import {GenreService} from "../../../services/genreService";
import {AxiosResponse} from "axios";
import {Grid} from "@material-ui/core";
import {GenreCreatePanel} from "../panel/genreCreate";
import GenreSearch from "../shared/GenreSearch";
import {GenreUpdatePanel} from "../panel/genreUpdatePanel";

export const GenreCRUDPage = () => {
    const [genreToEdit, setGenreToEdit] = useState<GenreModel>(new GenreModel());
    const genresList = new Array<GenreModel>();
    genresList.push(genreToEdit);

    useEffect(() => {
        if (genresList.length != 0)
            genresList[0] = genreToEdit;
    }, [genreToEdit]);
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <GenreCreatePanel/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <GenreSearch genres={genresList} clickHandler={(genre: GenreModel) => {
                        setGenreToEdit(genre)
                    }}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <GenreUpdatePanel genreState={genreToEdit} setGenreState={setGenreToEdit}/>
                </Grid>
            </Grid>
        </div>
    )
};