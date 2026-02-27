/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import DataIngest from './pages/DataIngest';
import AlertCenter from './pages/AlertCenter';
import EntityProfile from './pages/EntityProfile';
import ModelLogic from './pages/ModelLogic';
import SystemConfig from './pages/SystemConfig';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ingest" element={<DataIngest />} />
          <Route path="/alerts" element={<AlertCenter />} />
          <Route path="/profiles" element={<EntityProfile />} />
          <Route path="/model" element={<ModelLogic />} />
          <Route path="/config" element={<SystemConfig />} />
        </Routes>
      </Layout>
    </Router>
  );
}
