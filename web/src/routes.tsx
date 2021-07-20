import React             from 'react';
import { Route , Switch} from 'react-router-dom';

import Home     from './pages/Home';
//import Start    from './pages/Start';

const Routes = () => {
    return (
        <Switch>
            <Route component={Home} path="/" exact/>
        </Switch>
    )
}

export default Routes;