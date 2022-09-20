const style = {
    footer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        pt: '28px',
        '& p': {
            fontSize: '22px',
            fontWeight: 700,
            textTransform: 'uppercase',
            color: '#934c64',
        }
    },
    btnStyle: {
        minHeight: '48px',
        borderRadius: '12px',
        color: '#934c64',
        backgroundColor: '#cf9cad',
        '&:hover': {
            backgroundColor: '#d3d3d3',
        },
    },
};

export const { footer, btnStyle } = style;