import './App.css';
import React, {useState} from 'react';
import Body from "./Body.js";
import { TreatProvider } from 'react-treat';
import theme from './theme.treat.js';

const App = () => {

    const [currentTheme, setCurrentTheme] = useState(theme.light);

    const changeTheme = () => {
        if (currentTheme === theme.light) {
            setCurrentTheme(theme.dark)
        } else {
            setCurrentTheme(theme.light)
        }
    };

    return (
        <TreatProvider theme={currentTheme}>
            <Body onThemeChange={changeTheme} />
        </TreatProvider>
    );
};

export default App;
