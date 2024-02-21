import "../styles/background.css";
import "../styles/project.css";
import data from '../assets/data/project.json';
import Card from "./card.js";

function Project() {

  let length = data.projects.length;

  function nextProject() {
    alert("Next");
  }

  function prevProject(){
    alert("Prev");
  }

  
  return(
    <>
      <div id='projects'>
        <h2>PROJECTS</h2>
        <div id='cards'>
          {data?.projects?.map((item, i) => ( // The "?" checks if the item exists. i represents number
            (i === 0)? <button onClick={prevProject} id={"button" + i}><Card projectName={item.name} description={item.description} language={item.language} link={item.link} /><div id='button'>Prev</div></button> :
            (i + 1 === length)? <button onClick={nextProject} id={"button" + i}><Card projectName={item.name} description={item.description} language={item.language} link={item.link} /><div id='button'> Next</div></button>:
            <Card projectName={item.name} description={item.description} language={item.language} link={item.link} />
          ))}
          
        </div>
      </div>


      <div className="background" id="bg2"></div>
      <div id='filler' />

    </>
  );
}

export default Project;