import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { PokedexProvider } from './pokedex/context';
import Layout from './App/components/Layout';
import Home from './App/screens/Home';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokedexProvider>
      <Layout>
        <Home />
      </Layout>
    </PokedexProvider>
  </React.StrictMode>
)
