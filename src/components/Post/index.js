// == Import
import PropTypes from 'prop-types';
import './styles.scss';

function Post({
  id,
  category,
  title,
  excerpt,
}) {
  return (
    <article className="post" id={`post-${id}`}>
      <h2 className="post-title">{title}</h2>
      <div className="post-category">{category}</div>
      <p className="post-excerpt">{excerpt}</p>
    </article>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Post;
