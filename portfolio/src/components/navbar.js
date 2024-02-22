import '../styles/navbar.css'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <a className="links" href='#projects'>Projects</a>
        <a className="links" href='#workTitle'>Work</a>
        <a className="links" href='#abouts'>About</a>
        <div className="dropdown">
          <button className="dropbtn">Contact</button>
          <div className="dropdown-content">
            <a href="https://www.linkedin.com/in/louisoporto/" target="_blank" rel="noreferrer">Linkedin</a>
            <a href="https://github.com/LouisOporto" target="_blank" rel="noreferrer">Github</a>
            <a href="mailto:louisoporto203@gmail.com">Gmail</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
