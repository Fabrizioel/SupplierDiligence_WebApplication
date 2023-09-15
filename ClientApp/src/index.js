import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { FluentProvider, webLightTheme, BrandVariants, createLightTheme, createDarkTheme } from '@fluentui/react-components';
import './global-styles.css';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const highRiskTheme = {
    10: "#020304",
    20: "#101A1D",
    30: "#162B31",
    40: "#1A3841",
    50: "#1D4551",
    60: "#1F5362",
    70: "#216273",
    80: "#227085",
    90: "#227F97",
    100: "#218FAA",
    110: "#1F9EBD",
    120: "#1BAED0",
    130: "#14BFE4",
    140: "#07CFF8",
    150: "#5EDCFF",
    160: "#9AE7FF"
};

const lightTheme = createLightTheme(highRiskTheme);

const darkTheme = createDarkTheme(highRiskTheme);


darkTheme.colorBrandForeground1 = highRiskTheme[110];
darkTheme.colorBrandForeground2 = highRiskTheme[120];

root.render(
    <FluentProvider theme={lightTheme}>
        <BrowserRouter basename={baseUrl}>
            <App />
        </BrowserRouter>
    </FluentProvider>
);
