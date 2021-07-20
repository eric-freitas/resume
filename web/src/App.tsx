import React, { Suspense } from 'react';

import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

//import errorMsgHandler from './static/errorMsgHandler';

function Page() {
	
	//const apiStatus   = useSelector((state:AppDataState) => state.apiExec)
	//const currentUser = useSelector((state:AppDataState) => state.currentUser);
    //const token = currentUser?.loggedIn && currentUser?.user?.token;
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
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</div>
	);
}

const Loader = () => (
	<div className="App">
    	<div>carregando...</div>
  	</div>
);

export default function App() {
	return (
    	<Suspense fallback={<Loader />}>
      		<Page />
    	</Suspense>
  	);
}