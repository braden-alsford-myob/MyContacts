import { style } from 'treat';

export const contact = style((theme => ({
    '@media': {
        '(max-width: 750px)': {
            flexDirection: 'column',
            alignItems: 'center',
            breakInside: 'avoid-column',
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
        '(max-width: 750px)': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }
    },
});

export const name = style({
    '@media': {
        '(max-width: 750px)': {
            marginTop: '0.8rem',
        }
    },
});

export const company = style(theme => ({
    color: theme.secondaryTextColor,
}));

export const icon = style(theme => ({
    fill: theme.primaryTextColor,
    width: 32,
    height: 32,
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
        '(min-width: 751px)': {
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
        '(max-width: 750px)': {
            display: 'none'
        },
        '(min-width: 751px)': {
            display: 'flex'
        },
    },
    alignItems: 'center'
});

export const mobileAnchorContainer = style( {
    display: 'flex',
    '@media': {
        '(max-width: 750px)': {
            display: 'flex'
        },
        '(min-width: 751px)': {
            display: 'none'
        },
    },
});