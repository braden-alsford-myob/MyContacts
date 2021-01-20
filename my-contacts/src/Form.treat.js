import { style } from 'treat';

export const container = style(theme => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.backgroundColor,
    borderRadius: '0.5rem',
    padding: '1rem',
    marginTop: '2rem',
    alignItems: 'center',
}));

export const input = style(theme => ({
    width: '100%',
    boxSizing: 'border-box',
    height: '2rem',
    marginTop: '0.4rem',
}));

export const label = style(theme => ({
    marginBottom: '1rem',
    minWidth: '30rem',
    color: theme.primaryTextColor,
}));

export const saveButton = style(theme => ({
    backgroundColor: theme.buttonColor,
    border: 'None',
    height: '2rem',
    borderRadius: '0.3rem',
    minWidth: '30rem',
    color: theme.primaryTextColor,
    fontSize: '1rem',
}));