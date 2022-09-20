const style = {
    wrapper: {
        display: 'flex',
        width: '100%',
        p: '12px 0',
    },
    divStyle: {
        minHeight: '48px',
        p: '2px 14px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        borderRadius: '12px',
    },
    checkbox: {
        mb: 'auto',
        color: '#ff1493',
        '&.Mui-checked': {
            color: '#ff1493',
        },
    },
    btnGroupStyle: {
        m: '0 0 auto 6px',
        borderRadius: '12px',
        '& .MuiButtonGroup-grouped:not(:last-of-type)': {
            borderColor: '#e9967a',
        },
    },
    btnStyle: {
        borderRadius: '12px',
        p: '12px 10px',
        color: '#e9967a',
        backgroundColor: '#ffff00',
        '&:hover': {
            color: '#ffff00',
            backgroundColor: '#ff1493',
        },
    },
};

export const { wrapper, divStyle, btnGroupStyle, btnStyle, checkbox } = style;
