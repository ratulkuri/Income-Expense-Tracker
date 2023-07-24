import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Expense from '../pages/Expense';
import Income from '../pages/Income';

const WebRoutes = () => {
  return (
    <>
        <Routes>
            <Route exact path={'/'} element={<Dashboard />} />
            <Route exact path={'/income'} element={<Income />} />
            <Route exact path={'/expense'} element={<Expense />} />
        </Routes>
    </>
  )
}

export default WebRoutes