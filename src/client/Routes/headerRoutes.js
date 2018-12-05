import Home from '../containers/Home';
import PrescriptionList from '../containers/PrescriptionList';
import HealthServices from '../containers/HealthServices';
import BookAppointment from '../containers/BookAppointment';

export default [
    {
        ...Home,
        path: '/',
        exact: true,
    },
    {
        ...PrescriptionList,
        path: '/prescription',
        exact: true,
    },
    {
        ...HealthServices,
        path: '/healthservices',
        exact: true,
    },
    {
        ...BookAppointment,
        path: '/bookappointment',
        exact: true,
    }
]