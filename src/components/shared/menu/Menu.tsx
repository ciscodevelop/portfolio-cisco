import "./menu.scss";

function Menu({ menuOpen, setMenuOpen }: any) {
  return (
    <div className={`menu  ${menuOpen && "active"}`}>
      <ul onClick={() => setMenuOpen(false)}>
        <li>
          <a href="#home">Home</a>
        </li>
      </ul>
      <ul onClick={() => setMenuOpen(false)}>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
      <ul onClick={() => setMenuOpen(false)}>
        <li>
          <a href="#skills">Skills</a>
        </li>
      </ul>
      <ul onClick={() => setMenuOpen(false)}>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
      <ul onClick={() => setMenuOpen(false)}>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
