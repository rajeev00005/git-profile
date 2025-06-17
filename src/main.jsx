import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css'; // Ensure you have this file for app styles
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
 