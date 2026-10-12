import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';

type PrivateRouteProps = {
    isAuthorized: boolean;
    children: JSX.Element;
}

const PrivateRoute = ({ isAuthorized, children }: PrivateRouteProps): JSX.Element => isAuthorized ? children : <Navigate to={AppRoute.Login} replace />;

export default PrivateRoute;
