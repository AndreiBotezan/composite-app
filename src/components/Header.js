import {Link} from 'react-router-dom';
import './Header.css'

export default function Header() {
  return (
    <div className = "header">
      <p className='logo'>COMPO<span>SITE</span></p>
      
      <nav className='nav-links'>
          <Link to ="/">HOME</Link>
          <Link to ="/book-a-demo">BOOK A DEMO</Link>
          <Link to ="/view-demos">VIEW DEMOS</Link>
      </nav>
    </div>
  )
}