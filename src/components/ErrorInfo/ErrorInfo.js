
import './ErrorInfo.css';

const ErrorInfo = ({ onClose }) => {
  return (
    <div className="error-info">
      <h2 className="error-info__title">
        Что-то пошло не так...
      </h2>
      <button className="register__submit register__submit_full" onClick={onClose}>Закрыть</button>
    </div>
  );
};

export default ErrorInfo;