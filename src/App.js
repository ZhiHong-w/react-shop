import React, { memo, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import store from './store';
import route from './router';

export default memo(function App() {
  return (
    <Suspense fallback={<div>loding...</div>}>
      <Provider store={store}>
        <BrowserRouter>
          {renderRoutes(route)}
        </BrowserRouter>
      </Provider>
    </Suspense>
  )
})

