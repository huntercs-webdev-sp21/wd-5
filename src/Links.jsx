import Link from 'react-router-dom/Link';

function Links() {
  return (
    <div>
      <Link to="/zipsearch">Zip Code Search</Link>
      <br />
      <Link to="/citysearch">City Search</Link>
    </div>
  );
}
export default Links;
