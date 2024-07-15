import logo from '../../assets/logo.svg';
import './header.css';

export function Header () {
    return (
        <header className="header">
            <img src={logo} alt="Be Talent logo" className='logo'/>
        </header>
    );
}