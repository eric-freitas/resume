import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import ApiErrorMsg from './components/ApiErrorMsg';
import ApiStatus from './components/ApiStatus';
import { ApiExecStatus } from './models/ApiExec';
import { AppDataState } from './models/AppState';

import Routes from './routes';

function Page() {
	
	const apiStatus   = useSelector((state:AppDataState) => state.apiExec)

	return (
		<div className="App">
			<ApiStatus status={apiStatus?.status || ApiExecStatus.Idle} />
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
			<ApiErrorMsg />
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