import { style } from 'treat';

const mobileBreakPoint = 750;
const mobileMaxWidthMediaQuery = `(max-width: ${mobileBreakPoint}px)`;

export const titleContainer = style((theme => ({
    '@media': {
        [`${mobileMaxWidthMediaQuery}`]: {
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
        [`${mobileMaxWidthMediaQuery}`]: {
            width: '98%',
        }
    },
    backgroundColor: theme.inputBackground,
    color: theme.primaryTextColor,
    width: '20rem',
}));

export const title = style (theme => ({
    '@media': {
        [`${mobileMaxWidthMediaQuery}`]: {
            margin: '1rem',
            color: 'white',
        }
    },
    color: theme.primaryTextColor,
    marginBottom: 0,
}));

export const contactList = style ({
    '@media': {
        [`${mobileMaxWidthMediaQuery}`]: {
            columnCount: 2,
        },
        ['(max-width: 600px)']: {
            columnCount: 1,
        }
    },
    paddingLeft: 0,
});

export const line = style ({
    '@media': {
        [`${mobileMaxWidthMediaQuery}`]: {
            display: 'none'
        }
    },
});

export const buttonContainer = style ({
    '@media': {
        [`${mobileMaxWidthMediaQuery}`]: {
            justifyContent: 'flex-end',
        }
    },
});