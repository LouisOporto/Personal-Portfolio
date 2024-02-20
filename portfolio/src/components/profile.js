
function Profile() {
  /* We will include content that is static to the profile. Photo, name, brief intro */
  return (
    <>
      <div className='profile'>
        <div id='photo'>
          <img src={require("../assets/images/911_1996-1-3.jpg")} width='500px' height='500px' alt='Louis Oporto'></img>
        </div>
        <div id='profile-content'>
          <h2>Louis Oporto</h2>
          <p>
            This will be a paragraph about me
          </p>
        </div>
      </div>
      <img src={require("../assets/images/911_1996-1-3.jpg")}></img>
    </>
  );
}

export default Profile;