// == Import
import PropTypes from 'prop-types';
import './styles.scss';

// == Composant
function Header({ categories }) {
  return (
    <header className="menu">
      <nav>
        {
          categories.map((category) => (
            <a
              className={category.route === '/' ? 'menu-link menu-link--selected' : 'menu-link'}
              href=""
              key={category.route}
            >
              {category.label}
            </a>
          ))
        }
        <button className="menu-btn" type="button">Activer le mode zen</button>
      </nav>
    </header>
  );
}

Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Header;
