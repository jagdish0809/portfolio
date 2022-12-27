// import React from 'react';
// import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

// ReactDOM.render(<App/>, document.getElementById('root'));

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
