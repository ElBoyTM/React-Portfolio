// import './Header.css';
import logo from '../assets/IMG_0323.jpg';

export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="header-logo" />
            <h1 className="header-title">Welcome to My Portfolio</h1>
        </header>
    );
};