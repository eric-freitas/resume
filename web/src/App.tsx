import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import ApiStatus from './components/ApiStatus';
import { ApiExecStatus } from './models/ApiExec';
import { AppDataState } from './models/AppState';

import Routes from './routes';

//import errorMsgHandler from './static/errorMsgHandler';

function Page() {
	
	const apiStatus   = useSelector((state:AppDataState) => state.apiExec)
	//const { httpStatusToTitle } = errorMsgHandler();
	
	//let errorMessage = null;
	/*if (apiStatus?.status === ApiExecStatus.Error && apiStatus?.error?.response ) {

		if (apiStatus?.error?.response?.status !== 406) {
	
			const errorMsgDefinition = httpStatusToTitle(apiStatus?.error?.response?.status || 0);
			const errorMsgText = apiStatus?.error?.response?.data?.err || apiStatus?.error?.response?.data?.msg || apiStatus?.error?.response?.data?.error;
			
			errorMessage = (<TTErrorMessage title={errorMsgDefinition.title} icon={errorMsgDefinition.icon} message={(errorMsgText?.toString() || "")} />)
		}
	}*/

	/*const userMenu = (currentUser && currentUser.user ?
						<TTUserMenu nickname={currentUser.user.nickname || ""} />
					  : null );*/

	return (
		<div className="App">
			<ApiStatus status={apiStatus?.status || ApiExecStatus.Idle} />
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</div>
	);
}

const Loader = () => (
	<div className="App">
    	<div>
			<ApiStatus status={ApiExecStatus.Loading} />
		</div>
  	</div>
);

export default function App() {
	return (
    	<Suspense fallback={<Loader />}>
      		<Page />
    	</Suspense>
  	);
}