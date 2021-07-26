import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import React, { useState } from 'react';
import { useEffect } from 'react';
import IconComponent from '../IconComponent';

import './index.scss';

interface ErorMsgProps {
    title   : string,
    message : string,
    icon    : IconDefinition
}

const ErrorMessage: React.FC<ErorMsgProps> = (props) => {
    const [show, setShow] = useState(true);

    const sleep = (ms: number) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
      if (show) {
        sleep(10000).then(s => setShow(false));
	  }
    }, [ show ])


	if (show) {
		return (

			<div className="tt-error-msg">

				<div>
					<IconComponent icon={props.icon} />
				</div>
				<div>
					<div className="tt-error-msg__header">
						<strong className="mr-auto">{props.title}</strong>
					</div>
					<div className="tt-error-msg__body">
						{props.message}
					</div>
				</div>
				
			</div>
		)
	} else {
		return null;
	}

}
  
export default ErrorMessage;