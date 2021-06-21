
import './PagePreloader.css';

const PagePreloader = (props) => {

  return (
    <section className={`popup ${ props.show ? 'popup_is-opened' : ''}`}>
      <div className="popup__container">
        {props.children}
      </div>
    </section>
  );
};

export default PagePreloader;