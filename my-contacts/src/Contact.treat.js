import { style } from 'treat';

const mobileBreakPoint = 750;
const mobileMaxWidthMediaQuery = `(max-width: ${mobileBreakPoint}px)`;
const mobileMinWidthMediaQuery = `(min-width: ${mobileBreakPoint + 1}px)`;

export const contact = style((theme => ({
    '@media': {
        [`${mobileMaxWidthMediaQuery}`]: {
            flexDirection: 'column',
            alignItems: 'center',
        }
    },
    display: 'flex',
    backgroundColor: theme.backgroundColor,
    padding: '1rem',
    borderRadius: '0.5rem',
    marginBottom: '1rem',
    color: theme.primaryTextColor,
})));

export const contactDetails = style({
    '@media': {
        [`${mobileMaxWidthMediaQuery}`]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }
    },
});

export const name = style({
    '@media': {
        [`${mobileMaxWidthMediaQuery}`]: {
            marginTop: '0.8rem',
        }
    },
});

export const company = style(theme => ({
    color: theme.secondaryTextColor,
}));

export const anchor = style(theme => ({
    color: theme.linkTextColor,
    marginLeft: '0.5rem',
    marginRight: '0.8rem',
}));

export const anchorContainerMobile = style( theme => ({
    display: 'flex',
    width: '6rem',
    backgroundColor: theme.secondaryBackgroundColor,
    borderRadius: '0.5rem',
    justifyContent: 'center',
    margin: '0.5rem',
    padding: '0.2rem',
}));

export const avatar = style({
    '@media': {
        [`${mobileMinWidthMediaQuery}`]: {
            marginRight: '1rem',
        },
    },
    backgroundColor: 'lightskyblue',
    borderRadius: '50%',
    height: '6rem',
    width: '6rem',
    border: 'white',
    borderStyle: 'solid',
    borderWidth: '0.3rem',
});

export const anchorsWeb = style({
    '@media': {
        [`${mobileMaxWidthMediaQuery}`]: {
            display: 'none'
        },
        [`${mobileMinWidthMediaQuery}`]: {
            display: 'flex'
        },
    },
    alignItems: 'center'
});

export const mobileAnchorContainer = style( {
    display: 'flex',
    '@media': {
        [`${mobileMaxWidthMediaQuery}`]: {
            display: 'flex'
        },
        [`${mobileMinWidthMediaQuery}`]: {
            display: 'none'
        },
    },
});