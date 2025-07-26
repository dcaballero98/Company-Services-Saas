import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';
import RequireAuth from './components/RequireContext';
import ServicesPage from './pages/ServicesPage';
import AvailabilitiesPage from './pages/AvailabilitiesPage';
import CompaniesList from './pages/CompaniesList';
import CompanyDetail from './pages/CompanyDetails';
import MyReservations from './pages/MyReservations';
import Book from './pages/Book';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const storedCompanies = localStorage.getItem('companies') || [];
    const initialCompanies = [
      {
        id: 1,
        name: 'Empresa A',
        description: 'Descripción de Empresa A',
        services: [
          { id: 1, name: 'Servicio A1', price: 50, description: 'Descripción del Servicio A1' },
          { id: 2, name: 'Servicio A2', price: 75, description: 'Descripción del Servicio A2' }
        ]
      },
      {
        id: 2,
        name: 'Empresa B',
        description: 'Descripción de Empresa B',
        services: [
          { id: 3, name: 'Servicio B1', price: 60, description: 'Descripción del Servicio B1' },
          { id: 4, name: 'Servicio B2', price: 80, description: 'Descripción del Servicio B2' }
        ]
      }
    ];
    localStorage.setItem('companies', JSON.stringify(initialCompanies));
}
    )

  return (
    <Router>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/empresas' element={<CompaniesList />} />
          <Route path='/empresas/:id' element={<CompanyDetail />} />
          <Route path='empresas/:id/reservar/:serviceId' element={<RequireAuth><Book /></RequireAuth>} />
          <Route path='/mis-reservas' element={<RequireAuth><MyReservations /></RequireAuth>} />
        </Route>
        <Route path='/dashboard' element={<RequireAuth><DashboardLayout /></RequireAuth>}>
          <Route path='services' element={<ServicesPage />} />
          <Route path='availabilities' element={<AvailabilitiesPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
