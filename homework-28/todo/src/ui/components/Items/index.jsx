import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from "@mui/material/InputBase";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { wrapper, divStyle, btnGroupStyle, btnStyle, checkbox } from "./style";

import { useDispatch, useSelector } from "react-redux";

import { handleUpdate, handleEdit, handleCancel, handleDelete } from "../../../engine/core/todo/thunk";

import Selectors from "../../../engine/core/todo/selectors";

function Items({ id, description, checked }) {
    const dispatch = useDispatch();
    const edit = useSelector(Selectors.edit);

    const onChecked = (e) => dispatch(handleUpdate(id, description, e.target.checked));

    const editItems = () => dispatch(handleEdit(id));

    const saveItems = (event) => {
        event.preventDefault();
        dispatch(handleUpdate(id, event.target.description.value, checked));
    };

    const cancelItem = () => dispatch(handleCancel(id, description));

    const deleteItem = () => dispatch(handleDelete(id));

    return (
        edit === id
        ? <Box component="form" sx={wrapper} onSubmit={saveItems}>
            <Paper sx={divStyle}>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    name="description"
                    defaultValue={description}
                    onChange={(e) => e.target.value}
                    inputProps={{ 'aria-label': 'task' }}
                />
            </Paper>
            <ButtonGroup variant="contained" aria-label="save-cancel" sx={btnGroupStyle}>
                <Button type="submit" sx={btnStyle}>Save</Button>
                <Button type="button" onClick={cancelItem} sx={btnStyle}>Cancel</Button>
            </ButtonGroup>
        </Box>
        : <Box sx={wrapper}>
            <Paper component="div" sx={divStyle}>
                <FormControlLabel
                    sx={[checked && {'span': {textDecoration: 'line-through'}}]}
                    control={<Checkbox sx={checkbox} checked={checked} onClick={onChecked}/>}
                    label={description}
                />
            </Paper>
            <ButtonGroup variant="contained" aria-label="edit-delete" sx={btnGroupStyle}>
                <Button type="button" sx={btnStyle} onClick={editItems}>Edit</Button>
                <Button type="button" sx={btnStyle} onClick={deleteItem}>Delete</Button>
            </ButtonGroup>
        </Box>
    )
}

export default Items;