import '../styles/navbar.css'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <a className="links" href='#project'>Projects</a>
        <a className="links" href='#work'>Work</a>
        <a className="links" href='#about'>About</a>
        <div class="dropdown">
          <button class="dropbtn">Contact</button>
          <div class="dropdown-content">
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
