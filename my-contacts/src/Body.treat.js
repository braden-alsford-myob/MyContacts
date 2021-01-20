import { style } from 'treat';

export const body = style(theme => ({
    padding: '2rem',
    backgroundColor: theme.bodyColor,
    fontFamily: 'sans-serif',
    height: '100vh',
}));

export const button = style({
    marginBottom: '2rem',
});