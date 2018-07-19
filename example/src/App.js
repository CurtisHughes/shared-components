import React, { Component } from 'react'

import { OpeningScript } from 'shared-components';

export default class App extends Component {
  render () {
    return (
      <div>
        <OpeningScript 
        customerFirstName={''}
        customerLastName={''}
        technicianFirstName={''}
        openingScriptText={'Hello! My name is ______ and I will be your ATT Protech. Am I speaking with ______?'}
        />
      </div>
    )
  }
}
