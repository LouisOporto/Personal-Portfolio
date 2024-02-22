import "../styles/project.css";

export default function Card({projectName, description, language, link} ) {
  return(
    <div className="projectCard">
      <div>
        <h3>{projectName}</h3>
        <p>{description}</p>
        <span className="bottom">
          <p><b>Language</b>: {language}</p>
          <a href={link} target="_blank" rel="noreferrer"><b>Link to Repo</b></a>
        </span>
      </div>
    </div>
  );
}
