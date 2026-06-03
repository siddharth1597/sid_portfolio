import { useEffect, useRef, useState } from 'react';
import './App.css';
import profile from './images/sidd.png';
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

  const [data, setData] = useState(db);
  const [design, setDesign] = useState('');
  const animRef = useRef(null);
  const CURSOR_SPEED = 180;

  useEffect(() => {
    const designation = data.designation;
    const message = data.message_to_others;

    if (!designation || !message) {
      return undefined;
    }

    animRef.current = {
      display: '',
      charQueue: designation.split(''),
      isDeleting: false,
      showMessage: false,
    };
    setDesign('');

    const tick = () => {
      const anim = animRef.current;
      if (!anim) return;

      if (!anim.isDeleting) {
        if (anim.charQueue.length > 0) {
          anim.display += anim.charQueue.shift();
        } else if (anim.display.length > 0) {
          anim.isDeleting = true;
        }
      } else if (anim.display.length > 0) {
        anim.display = anim.display.slice(0, -1);
      } else {
        anim.isDeleting = false;
        anim.showMessage = !anim.showMessage;
        const nextText = anim.showMessage ? message : designation;
        anim.charQueue = nextText.split('');
      }

      setDesign(anim.display);
    };

    tick();
    const intervalId = setInterval(tick, CURSOR_SPEED);

    return () => {
      clearInterval(intervalId);
      animRef.current = null;
    };
  }, [data.designation, data.message_to_others]);

  const hasTitles = data.titles !== undefined;

  return (
    <div className="App container-fluid py-4 py-md-5">
      <div className="container resume-shell p-4 p-md-5 bg-dark card">
        <Header name={data.name} designation={design} />

        <div className="row resume-details resume-row-1 g-3">
          {hasTitles && <WorkExperience work={data.titles.work_experience} />}
          <div className="col-lg-4 col-md-6 pt-lg-5 pt-3 sidebar-column">
            <ProfilePicture profile_pic={profile} about={data.about} />
            {hasTitles && <Education education={data.titles.education} />}
          </div>
          <div className="col-lg-4 col-md-6 pt-lg-5 pt-3 sidebar-column">
            {hasTitles && <Contact contact={data.titles.contacts} />}
            {hasTitles && (
              <PersonalProjects
                projects={data.titles.personal_projects}
                stack={data.personal_tech_stack}
              />
            )}
          </div>
        </div>

        <div className="row mt-4 resume-details resume-row-3 g-4">
          {hasTitles && <Achievements awards={data.titles.achievements} />}
          {hasTitles && <Certifications certifications={data.titles.certifications} />}
          {hasTitles && <TechnicalSkills skills={data.titles.technical_skills} />}
        </div>
      </div>
    </div>
  );
};

export default App;
