import "./menu.scss";

function Menu({ menuOpen, setMenuOpen }: any) {
  const menuLinks = [
    {
      name: "Home",
      link: "#home",
      onClick: () => setMenuOpen(false)
    },
    {
      name: "Skills",
      link: "#skills",
      onClick: () => setMenuOpen(false)
    },
    {
      name: "Projects",
      link: "#projects",
      onClick: () => setMenuOpen(false)
    },
    {
      name: "About",
      link: "#about",
      onClick: () => setMenuOpen(false)
    },
    {
      name: "Contact",
      link: "#contact",
      onClick: () => setMenuOpen(false)
    }
  ];
  return (
    <div className={`menu  ${menuOpen && "active"}`}>
      {menuLinks.map(({ name, link, onClick }) => (
        <ul onClick={onClick}>
          <li>
            <a href={link}>{name}</a>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Menu;
