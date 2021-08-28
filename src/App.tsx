import React, { useEffect } from 'react';

import cityApi from './api/cityApi';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from './features/auth/pages/LoginPage';
import { AdminLayout } from './components/Layout';
import { NotFound, PrivateRoute } from './components/Common';

function App() {
  useEffect(() => {
    cityApi.getAll().then(response => console.log(response));
  });
  return (
    <div>
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <PrivateRoute path='/admin'>
          <AdminLayout />
        </PrivateRoute>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
