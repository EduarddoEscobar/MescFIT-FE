import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.less';
import App from './Components/App';
import rootReducer from './redux/reducers';
import { Layout } from 'antd';
import Header from './Components/common/Header/Header';
import Footer from './Components/common/Footer/Footer';
import MobileHeader from './Components/common/Header/MobileHeader';

const root = createRoot(document.getElementById('root'));
const store = configureStore({ reducer: rootReducer });

root.render(
  <Provider store={store}>
    <Router>
      <Layout
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />
        <MobileHeader />
        <App />
        <Footer />
      </Layout>
    </Router>
  </Provider>
);
