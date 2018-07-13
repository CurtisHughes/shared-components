/***  examples/src/index.js ***/
import React from 'react';
import { render} from 'react-dom';
import { TodaysDate, OpeningScript } from '../../src';

const App = () => (
    <OpeningScript
          customerFirstName="customerFirstName"
          customerLastName="customerLastName"
          technicianFirstName="techFirstName"
          openingScriptText="Hello! My name is {{technicianFirstName}} and I will be your ATT Protech. Am I speaking with {{customerFirstName}}?" />
);

render(<App />, document.getElementById("root"));
