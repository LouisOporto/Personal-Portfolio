import '../styles/profile.css'
export default function Resume() {

  return (
  <>
    <a class='resume-link' href={require('../assets/files/resume.pdf')} download>Download Resume</a>
  </>
  );
}
