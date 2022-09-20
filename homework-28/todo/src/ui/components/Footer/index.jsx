import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { footer, btnStyle } from './style';

import { useSelector, useDispatch } from "react-redux";

import Selectors from "../../../engine/core/todo/selectors";

import { handleAllDelete } from "../../../engine/core/todo/thunk";

function Footer() {
    const dispatch = useDispatch();
    const memoItems = useSelector(Selectors.memoItems);

    const deleteAllItems = () => dispatch(handleAllDelete(memoItems));

    return (
        <Box sx={footer} component="footer">
            <p>Total: {memoItems.length}</p>
            <Button sx={btnStyle} variant="contained" onClick={deleteAllItems}>All DELETE</Button>
        </Box>
    )
}

export default Footer;