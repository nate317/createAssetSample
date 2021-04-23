import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <div className="navBar">
        <Link to="/" style={{textDecoration: 'none'}}>Create </Link>
        <Link to="/profile" style={{textDecoration: 'none'}}>Profile</Link>
      </div>
    );
  };

  export default NavBar;