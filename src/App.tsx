import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from './const';
import MainPage from './pages/main-page';
import LoginPage from './pages/login-page';
import FavoritesPage from './pages/favorites-page';
import OfferPage from './pages/offer-page';
import NotFoundPage from './pages/not-found-page/not-found-page';
import PrivateRoute from './components/private-route/private-route';


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage offersCount={312} />} />
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route path={AppRoute.Favorites} element={
        <PrivateRoute isAuthorized={false}>
          <FavoritesPage />
        </PrivateRoute>
      }
      />
      <Route path={AppRoute.Offer} element={<OfferPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
