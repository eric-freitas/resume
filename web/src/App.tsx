import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import ApiErrorMsg from './components/ApiErrorMsg';
import ApiStatusLoading from './components/ApiStatus';
import { ApiExecStatus } from './models/ApiExec';
import { AppReducerData } from './reducers';

import Routes from './routes';

function Page() {
	
	const apiStatus =  (
		useSelector((state:AppReducerData) => state.appStatus?.apiStatus)
			.find(e => e.status === ApiExecStatus.Init || e.status === ApiExecStatus.Loading)
		&& (<ApiStatusLoading />)
	) || null;
	
	return (
		<div className="App">
			{apiStatus}
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
			<ApiStatusLoading />
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