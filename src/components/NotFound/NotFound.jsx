import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section>
      <h2>404 - Síða fannst ekki</h2>
      <p>Við erum að vinna í að laga þetta.</p>
      <p>
        <Link to="/">Til baka á forsíðu</Link>
      </p>
    </section>
  );
};

export default NotFound;