import "../styles/background.css";
import "../styles/project.css";
import data from '../assets/data/project.json';
import Card from "./card.js";

function Project() {
  let length = data.projects.length;

  function nextProject() {
    update(1);
  }

  function prevProject() {
    update(-1);
  }


  function update(value) {
    let counter = 0;
    let cards = document.getElementsByClassName("projectCard");
    while (counter !== length) {
      let temp = cards[counter].innerHTML;
      console.log(temp);
      if (counter + 1 === length && value === 1) {
        cards[counter].innerHTML = cards[0].innerHTML;
        cards[0].innerHTML = temp;
      } else if (counter === 0 && value === -1) {
        cards[counter].innerHTML = cards[4].innerHTML;
        cards[4].innerHTML = temp;
      } else {
        cards[counter].innerHTML = cards[counter + value].innerHTML;
        cards[counter + value].innerHTML = temp;
      }
      counter++;
    }
  }


  return (
    <>
      <div id='projects'>
        <h2>PROJECTS</h2>
        <div id='cards'>
          {data?.projects?.map((item, i) => ( // The "?" checks if the item exists. i represents number
            (i === 0) ? <button onClick={prevProject} id={"buttonleft"}><Card projectName={item.name} description={item.description} language={item.language} link={item.link} /><div id='button'>Prev</div></button> :
              (i + 1 === length) ? <button onClick={nextProject} id={"buttonright"}><Card projectName={item.name} description={item.description} language={item.language} link={item.link} /><div id='button'> Next</div></button> :
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

/*{data?.projects?.map((item, i) => ( // The "?" checks if the item exists. i represents number
(i === 0)? <button onClick={prevProject} id={"button" + i}><Card projectName={item.name} description={item.description} language={item.language} link={item.link} /><div id='button'>Prev</div></button> :
(i + 1 === length)? <button onClick={nextProject} id={"button" + i}><Card projectName={item.name} description={item.description} language={item.language} link={item.link} /><div id='button'> Next</div></button>:
<Card projectName={item.name} description={item.description} language={item.language} link={item.link} />
))}
*/