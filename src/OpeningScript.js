import React from 'react';
import styles from './OpeningScript.css';

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
        <li
          className={ styles.openingScriptItem }>
          <span
            className={ styles.openingScriptIcon } />
          <span>
            { formatOpeningScriptText(openingScriptMap, props.openingScriptText) }
          </span>
        </li>
      </ul>
    );
  };

  export default OpeningScript;