import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import AddTaskIcon from '@mui/icons-material/AddTask';
import IconButton from "@mui/material/IconButton";

import { formStyle } from "./style";

import { useDispatch } from "react-redux";

import {handleAdd} from "../../../engine/core/todo/thunk";

function Form({ value, onChange }) {
    const dispatch = useDispatch();

    const addItem = (event) => {
        event.preventDefault();
        dispatch(handleAdd(event.target.description.value));
        event.target.description.value = '';
    };

    return (
        <Paper
            component="form"
            onSubmit={addItem}
            sx={formStyle}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                name="description"
                defaultValue={value}
                onChange={onChange}
                placeholder="Your task..."
                inputProps={{ 'aria-label': 'task' }}
            />
            <IconButton type="submit" sx={{p: '10px 14px'}} aria-label="add">
                <AddTaskIcon sx={{ color: '#eb9f30' }} />
            </IconButton>
        </Paper>
    );
}

export default Form;