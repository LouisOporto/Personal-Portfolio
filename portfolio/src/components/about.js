import "../styles/about.css";
import data from '../assets/data/project.json';

export default function About() {

  return (
    <>
      <div id='abouts'>
        <div className="about">
          <h2>About</h2>
          <div className="aboutBlock">
          <p>Outside of CS, my main hobby would be photography. From nature portraits to sport car shots, I try to take a photo of everything that could be shot with a camera.</p>
          </div>
          <div className="aboutBlock">
            <p>Here are some of my favorites...</p>
            {data.photos.map((item) => (
              <img src={require("../assets/images/" + item + ".jpg")} alt={item} className="photos"></img>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
