import { useEffect } from 'react';
import useState from 'react-usestateref';
import './App.css';
import profile from './images/sidd.png';
import skill from './images/skills_gadgets.png';
import db from './db/db.json';
import Header from './Components/Header';
import ProfilePicture from './Components/ProfilePicture';
import WorkExperience from './Components/WorkExperience';
import Contact from './Components/Contact';
import PersonalProjects from './Components/PersonalProjects';
import Education from './Components/Education';
import Achievements from './Components/Achievements';
import Certifications from './Components/Certifications';
import TechnicalSkills from './Components/TechnicalSkills';


const App = () => {

  const [data, setData] = useState({});
  const [design, setDesign, designRef] = useState('');
  let CURSOR_SPEED = 180; // milliseconds

  useEffect(() => {
    if (db) {
      setData(db);
    }
  }, []);

  useEffect(() => {
    if (data.designation !== undefined) {
      let text = data.designation.split('');
      let count = 0;
      setInterval(() => {
        if (text.length > 0) {
          const getText = text.shift();
          setDesign(design => `${design}${getText}`);
        }
        else {
          setDesign(design => design.substring(0, design.length - 1));
          if (designRef.current.length === 0) {
            if (count % 2 === 0) {
              text = data.message_to_others.split('');
            }
            else {
              text = data.designation.split('');
            }
            count++;
          }
        }
      }, CURSOR_SPEED);
    }
  }, [data]);

  return (

    <div className="App container-fluid py-5">
      <div className="container p-5 bg-dark card">

        <Header name={data.name} designation={design} />

        {/* Row 1 */}
        <div className="row mt-4 resume-details resume-row-1 position-relative">
          
          { data.titles !== undefined && <WorkExperience work={data.titles.work_experience} /> }

          <ProfilePicture profile_pic={profile} about={data.about} />
          
          <div className="col-md-4 pt-5">
            { data.titles !== undefined && <Contact contact={data.titles.contacts} /> }

            { data.titles !== undefined && <PersonalProjects projects={data.titles.personal_projects} stack={data.personal_tech_stack} /> }
          </div>
          
          <div className="line h-100 width-line"></div>
        </div>

        {/* Row 2 */}
        <div className="row resume-details resume-row-2">
          { data.titles !== undefined && <Education education={data.titles.education} /> }
          
          <div className="col-md-6 front-skill-image position-relative">
            <div className="d-flex skill-parent">
              <img className="w-100 mx-auto" src={skill} alt="skills" />
            </div>
            
            <div className="line h-25 width-line"></div>
            <div className="line w-50 height-line"></div>
            <div className="line width-line"></div>
          </div>
          
          <div className="col-md-3 position-relative">
            <div className="line w-100 height-line"></div>
            <div className="line h-25 width-line"></div>
            <div className="line w-50 height-line"></div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row mt-5 resume-details resume-row-3">
          {data.titles !== undefined && <Achievements awards={data.titles.achievements} />}

          {data.titles !== undefined && <Certifications certifications={data.titles.certifications} />}

          {data.titles !== undefined && <TechnicalSkills skills={data.titles.technical_skills} />}
        </div>
      </div>
    </div>
  );
}

export default App;
