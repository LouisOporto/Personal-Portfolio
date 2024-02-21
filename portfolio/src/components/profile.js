import "../styles/profile.css";
import Resume from "./resume.js";

function Profile() {
  /* We will include content that is static to the profile. Photo, name, brief intro */
  return (
    <>
      <div id="background">
        <div className='profile'>
          <div className='profile-section'>
            <div id='photo'></div>
          </div>
          <div className='profile-section'>
            <div id='profile-content'>
              <h2>Louis Oporto</h2>
              <p>
                Building something small, to fill the bigger picture. <br/>
                A developing student leaning into the world of software development. <br/>
                Looking forward to what's in store...
              </p>
              <Resume />
            </div>
          </div>
        </div>
      </div>
      <div id='filler' />
      <div id="background2"></div>
      <div id='filler' />
    </>
  );
}

export default Profile;
