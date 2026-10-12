import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import './not-found-page.css';

const NotFoundPage = () => (
  <main className="page__main page__main--not-found not-found">
    <div className="not-found__container">
      <div className="not-found__illustration">
        <div className="not-found__pin">
          <span>?</span>
        </div>
        <div className="not-found__pin-shadow"></div>
      </div>

      <div className="not-found__content">
        <span className="not-found__badge">404 Error</span>
        <h1 className="not-found__title">Страница уплыла</h1>
        <p className="not-found__description">
          Похоже, этот уютный уголок не найден или был перемещён. Попробуйте вернуться на главную страницу и выбрать другой город.
        </p>
        <Link className="not-found__button button" to={AppRoute.Main}>
          Вернуться в город
        </Link>
      </div>
    </div>
  </main>
);

export default NotFoundPage;
