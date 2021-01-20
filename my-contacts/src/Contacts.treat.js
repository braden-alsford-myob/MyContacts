import { style } from 'treat';

export const titleContainer = style((theme => ({
    '@media': {
        '(max-width: 750px)': {
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            backgroundColor: '#823a80',
        }
    },
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
})));

export const searchContainer = style( theme => ({
    backgroundColor: theme.backgroundColor,
    padding: '1rem',
    borderRadius: '0.5rem',
    marginTop: '2rem',
    marginBottom: '1rem',
    color: theme.primaryTextColor,
}));

export const searchInput = style ( theme => ({
    '@media': {
        '(max-width: 750px)': {
            width: '98%',
        }
    },
    backgroundColor: theme.inputBackground,
    color: theme.primaryTextColor,
    width: '20rem',
}));

export const title = style (theme => ({
    '@media': {
        '(max-width: 750px)': {
            margin: '1rem',
            color: 'white',
        }
    },
    color: theme.primaryTextColor,
    marginBottom: 0,
}));

export const contactList = style ({
    '@media': {
        '(max-width: 750px)': {
            columnCount: 2,
        }
    },
    paddingLeft: 0,
});

export const line = style ({
    '@media': {
        '(max-width: 750px)': {
            display: 'none'
        }
    },
});

export const buttonContainer = style ({
    '@media': {
        '(max-width: 750px)': {
            justifyContent: 'flex-end',
        }
    },
});