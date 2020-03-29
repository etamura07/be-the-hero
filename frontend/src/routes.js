import React from 'react';
import { browserRouter, Route, Switch, BrowserRouter } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Logon} />
            {/* exact é uma propriedade que define que a path da rota tem que ser exatamente igual */}
            <Route path='/register' component={Register} />
            <Route path='/profile' component={Profile} />
            <Route path='/incidents/new' component={NewIncident} />
        </Switch>
      </BrowserRouter>  
    );
}