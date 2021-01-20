import { createTheme } from 'treat';

export const light = createTheme({
    bodyColor: '#e5e5e5',
    backgroundColor: 'white',
    secondaryBackgroundColor: '#ededed',
    inputBackground: 'white',
    primaryTextColor:'black',
    secondaryTextColor: 'gray',
    linkTextColor: '#0401ed',
    buttonColor: '#78d694',
});

export const dark = createTheme({
    bodyColor: 'black',
    backgroundColor: '#494949',
    secondaryBackgroundColor: '#b8b8b8',
    inputBackground: '#6b6b6b',
    primaryTextColor: 'white',
    secondaryTextColor: '#b6b6b6',
    linkTextColor:'#91bcfd',
    buttonColor: '#1dc537',
});

export default {light, dark}