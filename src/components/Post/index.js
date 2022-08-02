// == Import
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import './styles.scss';

function Post({
  id,
  category,
  title,
  excerpt,
  content,
  isSingle,
  onPostClick,
}) {
  const configSanitize = {
    ALLOWED_TAGS: ['em', 'strong'],
  };
  const cleanHTML = DOMPurify.sanitize(isSingle ? content : excerpt, configSanitize);

  return (
    <article
      className={isSingle ? 'post post--single' : 'post'}
      id={`post-${id}`}
      onClick={onPostClick}
    >
      <h2 className="post-title">{title}</h2>
      <div className="post-category">{category}</div>
      <p className="post-excerpt" dangerouslySetInnerHTML={{ __html: cleanHTML }} />
    </article>
  );
}

Post.defaultProps = {
  isSingle: false,
  onPostClick: null,
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isSingle: PropTypes.bool,
  onPostClick: PropTypes.func,
};

export default Post;
