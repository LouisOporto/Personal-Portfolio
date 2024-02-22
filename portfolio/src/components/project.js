import "../styles/project.css";
import data from '../assets/data/project.json';
import Card from "./card.js";

function Project() {
  let length = data.projects.length;

  function nextProject() {
    update(true);
  }

  function prevProject() {
    update(false);
  }

  function update(notReverse) {
    let counter = 0
    let length = 5
    let cards = document.getElementsByClassName("projectCard");
    while (counter < length - 1) {
      let current = notReverse ? counter : length - 1 - counter;
      let next = notReverse ? counter + 1 : length - 2 - counter;
      let temp = cards[current].innerHTML;
      cards[current].innerHTML = cards[next].innerHTML;
      cards[next].innerHTML = temp;
      cards[current].classList.add("change");
      setTimeout(() => { cards[current].classList.remove("change"); }, 400);
      counter++;
    }

    cards[4].classList.add("change");
    setTimeout(() => { cards[4].classList.remove("change"); }, 400);
    cards[0].classList.add("change");
    setTimeout(() => { cards[0].classList.remove("change"); }, 400);

  }

  return (
    <>
      <div id='projects'>
        <h2>PROJECTS</h2>
        <div id='cards'>
          {data?.projects?.map((item, i) => ( // The "?" checks if the item exists. i represents number
            (i === 0) ? <button onClick={prevProject} className="button left"><Card projectName={item.name} description={item.description} language={item.language} link={item.link} /><div id='buttonleft'>Prev</div></button> :
              (i + 1 === length) ? <button onClick={nextProject} className="button right"><Card projectName={item.name} description={item.description} language={item.language} link={item.link} /><div id='buttonright'> Next</div></button> :
                <Card projectName={item.name} description={item.description} language={item.language} link={item.link} />
          ))}
        </div>
        <a className='project-link' href="https://github.com/LouisOporto" target="_blank" rel="noreferrer" >More Projects</a>
      </div>
    </>
  );
}

export default Project;
