/***  examples/src/index.js ***/
import React from 'react';
import { render} from 'react-dom';
import { TodaysDate } from '../../src';

const App = () => (
    <TodaysDate />
);

render(<App />, document.getElementById("root"));
