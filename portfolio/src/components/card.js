import "../styles/project.css";

export default function Card({projectName, description, language, link} ) {
  return(
    <div className="projectCard">
      <h3>{projectName}</h3>
      <p>{description}</p>
      <p>Language: {language}</p>
      <p>Link: {link}</p>
    </div>
  );
}