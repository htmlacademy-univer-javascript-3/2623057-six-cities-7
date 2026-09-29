const FavoritesEmptyPage = () => (
    <body>
    <div class="page page--favorites-empty">
      <header class="header">
        <div class="container">
          <div class="header__wrapper">
            <div class="header__left">
              <a class="header__logo-link" href="main.html">
                <img class="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav class="header__nav">
              <ul class="header__nav-list">
                <li class="header__nav-item user">
                  <a class="header__nav-link header__nav-link--profile" href="#">
                    <div class="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span class="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span class="header__favorite-count">0</span>
                  </a>
                </li>
                <li class="header__nav-item">
                  <a class="header__nav-link" href="#">
                    <span class="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main class="page__main page__main--favorites page__main--favorites-empty">
        <div class="page__favorites-container container">
          <section class="favorites favorites--empty">
            <h1 class="visually-hidden">Favorites (empty)</h1>
            <div class="favorites__status-wrapper">
              <b class="favorites__status">Nothing yet saved.</b>
              <p class="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
            </div>
          </section>
        </div>
      </main>
      <footer class="footer">
        <a class="footer__logo-link" href="main.html">
          <img class="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  </body>
)

export default FavoritesEmptyPage
