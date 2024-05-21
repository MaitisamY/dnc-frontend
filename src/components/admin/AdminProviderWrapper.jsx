import { Outlet } from 'react-router-dom';
import { AdminProvider } from '../../hooks/useAdminProvider';
import AdminThemeProvider from '../../hooks/adminThemeProvider';

const AdminProviderWrapper = () => (
    <AdminProvider>
        <AdminThemeProvider>
            <Outlet />
        </AdminThemeProvider>
    </AdminProvider>
);

export default AdminProviderWrapper;