import * as React from 'react';
import './OpeningScript.scss';
import openingClosingScriptSvg from './openingClosingScript.svg';

interface Props {
  technicianFirstName: string;
  customerFirstName: string;
  customerLastName: string;
  openingScriptText: string;
}

const OpeningScript = (props: Props) => {
  const openingScriptMap = {
    technicianFirstName: props.technicianFirstName || '______',
    customerFirstName: props.customerFirstName || '______',
    customerLastName: props.customerLastName || '______'
  };

  const formatOpeningScriptText = (map: Object = {}, openingScriptText: string = '') => Object.keys(map)
        .reduce((text, key) => text.replace(`{{${key}}}`, map[key]), openingScriptText);
  
  return (
      <ul
        className={'openingScript'}
        id="OpeningScript"
        key="OpeningScript"
      >
        <li>
          <img src={openingClosingScriptSvg}/>
          <span />
          <span>
            {formatOpeningScriptText(openingScriptMap, props.openingScriptText)}
          </span>
        </li>
      </ul>
  );
};

export default OpeningScript;