import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const IsActiveNavLink = ({to, ...props}) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  // TODO: Mark active links when chat detail opened
  return <Link to={to} {...props} className={match ? 'active': ''} />;
}

export default IsActiveNavLink;