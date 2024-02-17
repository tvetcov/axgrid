import { Link } from '@tanstack/react-router';

const NavBar = () => {
    return (
        <div className="p-2 flex gap-2">
            <Link to="/" className="[&.active]:font-bold">
                Home
            </Link>{' '}
            <Link to="/about" className="[&.active]:font-bold">
                About
            </Link>
            <hr />
        </div>
    );
};

export default NavBar;
