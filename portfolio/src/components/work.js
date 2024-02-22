import "../styles/background.css";
import "../styles/work.css";
// import data from '../assets/data/project.json';

export default function Work() {
  function notYet() {
    alert("Nothing here yet!!");
  }
  return (
    <>

      <div className="background" id="bg2">
        <div className="work-experience">
          <h2 id='workTitle'>Work Experience</h2>
          <button onClick={notYet} className='buttonWork'>Up</button>
          <div className='card'>
            <h3>Company Name</h3>
            <p>Basis of employment</p>
            <div className='bottomWork'>
              <p><b>Language:</b> Working Language</p>
              <p><b>Position:</b> Placeholder</p>
            </div>
          </div>
          <button onClick={notYet} className='buttonWork'>Down</button>
        </div>
      </div>
    </>
  );
}
