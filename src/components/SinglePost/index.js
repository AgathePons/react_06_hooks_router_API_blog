// == Import
import PropTypes from 'prop-types';

function SinglePost({ posts }) {
  return (
    <article className="post" id={`post-${posts.id}`}>
      <h2 className="post-title">{posts.title}</h2>
      <div className="post-category">{posts.category}</div>
      <p className="post-content">{posts.content}</p>
    </article>
  );
}

SinglePost.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SinglePost;
