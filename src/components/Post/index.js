// == Import
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import './styles.scss';

function Post({
  id,
  category,
  title,
  excerpt,
}) {
  const configSanitize = {
    ALLOWED_TAGS: ['em', 'strong'],
  };
  const cleanHTML = DOMPurify.sanitize(excerpt, configSanitize);

  return (
    <article className="post" id={`post-${id}`}>
      <h2 className="post-title">{title}</h2>
      <div className="post-category">{category}</div>
      <p className="post-excerpt" dangerouslySetInnerHTML={{ __html: cleanHTML }} />
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
