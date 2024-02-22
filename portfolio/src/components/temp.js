function callCard({currentIndex, prev, next, prevProject, nextProject}){
  if (prev) return (
    <button onClick={prevProject} id={"buttonleft"}><Card projectName={data.projects[currentIndex]["name"]} 
    description={data.projects[currentIndex]["description"]} 
    language={data.projects[currentIndex]["language"]} 
    link={data.projects[currentIndex]["link"]}/><div id='button'>Prev</div></button>
    );
  if (next) return (
    <button onClick={nextProject} id={"buttonright"}><Card projectName={data.projects[currentIndex]["name"]} 
    description={data.projects[currentIndex]["description"]} 
    language={data.projects[currentIndex]["language"]} 
    link={data.projects[currentIndex]["link"]}/><div id='button'> Next</div></button>
    );
  else return (
    <Card projectName={data.projects[currentIndex]["name"]} 
    description={data.projects[currentIndex]["description"]} 
    language={data.projects[currentIndex]["language"]} 
    link={data.projects[currentIndex]["link"]}/>
  );
}
const createCards = () => {
  let counter = length;
  let currentIndex = index;
  while( counter !== 0) {
    console.log(counter);
    if (counter === length) {
      <callCard currentIndex={currentIndex} prev={1} next={0} prevProject={() => prevProject()} nextProject={() => nextProject()}/>
    } else if(counter === 1) {
      <callCard currentIndex={currentIndex} prev={0} next={1} prevProject={() => prevProject()} nextProject={() => nextProject()}/>
    } else {
      <callCard currentIndex={currentIndex} prev={0} next={0} prevProject={() => prevProject()} nextProject={() => nextProject()}/>;
    }

    if (currentIndex === 4) {
      currentIndex = 0;
    } else currentIndex++;
  }
};
{() => {
  let counter = length;
  let currentIndex = index;
  while( counter !== 0) {
    console.log(counter);
    if (counter === length) {
      
      <callCard currentIndex={currentIndex} prev={1} next={0} prevProject={() => prevProject()} nextProject={() => nextProject()}/>
    } else if(counter === 1) {
      <callCard currentIndex={currentIndex} prev={0} next={1} prevProject={() => prevProject()} nextProject={() => nextProject()}/>
    } else {
      <callCard currentIndex={currentIndex} prev={0} next={0} prevProject={() => prevProject()} nextProject={() => nextProject()}/>;
    }

    if (currentIndex === 4) {
      currentIndex = 0;
    } else currentIndex++;
  }
}}
