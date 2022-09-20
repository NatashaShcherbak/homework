import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { formStyle } from "./style";

import { useDispatch } from "react-redux";

import { setSearch } from "../../../engine/core/todo/slice";

function Search() {
    const dispatch = useDispatch();

    const handleChange = (e) => dispatch(setSearch(e.target.value));

    return (
        <Paper
            component="form"
            sx={formStyle}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                name="search"
                onChange={handleChange}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="button" sx={{ p: '6px 8px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default Search;