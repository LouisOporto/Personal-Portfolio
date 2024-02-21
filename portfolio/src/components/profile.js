import "../styles/profile.css";
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
                Building code line by line. Designing from the bottom up.<br/>
                This will be a paragraph about me
              </p>
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
