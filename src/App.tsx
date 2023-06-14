import React from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content/Content';

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>contents</Content>
    </Layout>
  );
}

export const App = hot(AppComponent);
