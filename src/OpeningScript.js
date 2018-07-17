import React from 'react';
import './OpeningScript.scss';
import svg from './openingClosingScript.svg';

const OpeningScript = (props) => {
    const openingScriptMap = {
        technicianFirstName: props.technicianFirstName || '______',
        customerFirstName: props.customerFirstName || '______',
        customerLastName: props.customerLastName || '______'
    };

    const formatOpeningScriptText = (map = {}, openingScriptText = '') => Object.keys(map)
        .reduce((text, key) => text.replace(`{{${key}}}`, map[key]), openingScriptText);
  
    return (
      <ul
        className={"openingScript"}
        id="OpeningScript"
        key="OpeningScript">
        <li>
          <img src={svg}/>
          <span />
          <span>
            { formatOpeningScriptText(openingScriptMap, props.openingScriptText) }
          </span>
        </li>
      </ul>
    );
  };

  export default OpeningScript;