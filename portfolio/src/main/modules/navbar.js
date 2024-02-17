import car from '../assets/images/911_1996-1-3.jpg'
// Implement diffrent aspects of the portfolio
function Navbar() {
  return (
    <>
      <p>
        This is my navbar.
			</p>
			<img src={car} alt='check' width='500'></img>
			<br></br>
			<a href={require('../assets/images/911_1996-1-3.jpg')} download>
				Click to download
			</a>
			<br></br>
			<a href={require('../assets/files/resume.pdf')}>Download Resume2</a>
    </>
  )
}

export default Navbar;
