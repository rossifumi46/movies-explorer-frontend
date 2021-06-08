import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__text">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__sub-title">Страница не найдена</p>
      </div>
      <button className="not-found__back-btn">Назад</button>
    </div>
  )
}

export default NotFound;