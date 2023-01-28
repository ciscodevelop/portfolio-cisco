import "./navbar.scss";
import Icon from "@reacticons/bootstrap-icons";

const NavBar=({menuOpen,setMenuOpen}:any)=> {
  return (
    <div className={`navbar-container  ${menuOpen && 'active'}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#home" className="logo">
           <img className="logo-img" src="/portfolio-cisco/asset/logo.png" alt="" /> Cisco
          </a>
          <div className="item-container">
            <Icon name="award" className="icon" />
            <span>+39 3738219139</span>
          </div>
          <div className="item-container">
            <Icon name="award" className="icon" />
            <span>ciscopp@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1" />
            <span className="line2" />
            <span className="line3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
