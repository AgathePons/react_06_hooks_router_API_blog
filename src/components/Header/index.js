// == Import
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

// == Composant
function Header({ categories, isZenMode, onButtonZenChange }) {
  return (
    <header className="menu">
      <nav>
        {
          categories.map((category) => (
            <Link
              className={category.route === '/' ? 'menu-link menu-link--selected' : 'menu-link'}
              to={category.route}
              key={category.route}
            >
              {category.label}
            </Link>
          ))
        }
        <button
          className="menu-btn"
          type="button"
          onClick={onButtonZenChange}
        >
          {isZenMode ? 'Désactiver le mode zen' : 'Activer le mode zen'}
        </button>
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
  isZenMode: PropTypes.bool.isRequired,
  onButtonZenChange: PropTypes.func.isRequired,
};

export default Header;
