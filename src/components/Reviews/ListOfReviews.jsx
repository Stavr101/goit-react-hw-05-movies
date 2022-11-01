import PropTypes from 'prop-types';

export default function ListOfReviews({ items }) {
  console.log(items);
  return (
    <div>
      <ul>
        {items.map(({ id, author, content }) => (
          <li key={id}>
            <h1>{author}</h1>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
ListOfReviews.propTypes = {
  items: PropTypes.string,
};
