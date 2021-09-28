import { useEffect, useState } from 'react';
import './App.css';
import profile from './sidd.png';
import skill from './skills_gadgets.png';
import db from './db.json';
import Header from './Header';
import ProfilePicture from './ProfilePicture';
import WorkExperience from './WorkExperience';
import Contact from './Contact';


const App = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    if (db) {
      setData(db);
    }
  }, []);

  return (

    <div className="App container-fluid py-5">
      <div className="container p-5 bg-dark">

        <Header name={data.name} designation={data.designation} />

        <div className="row mt-4 resume-details resume-row-1 position-relative">
          

          { data.titles !== undefined && <WorkExperience work={data.titles.work_experience} /> }

          <ProfilePicture profile_pic={profile} about={data.about} />
          
          <div className="col-md-4 pt-5">
            
            { data.titles !== undefined && <Contact contact={data.titles.contacts} /> }

            <div className="mt-5">
              <h1 className="title-heading">Personal Projects</h1>
              <div className="personal-project-info ms-2">
                <div className="d-flex">
                  <div className="tag">
                    <div className="rectangle">Jul2021</div>
                    <div className="right-triangle"></div>
                  </div>
                  <div className="ms-3 company-work-details">
                    <div className="text-light h5 mb-0">Digital Invoice</div>
                    <small className="h6 font-semibold stream">Web Application</small>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="tag">
                    <div className="rectangle">Jun2021</div>
                    <div className="right-triangle"></div>
                  </div>
                  <div className="ms-3 company-work-details">
                    <div className="text-light h5 mb-0">School Quiz Portal</div>
                    <small className="h6 font-semibold stream">Web Application</small>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="tag">
                    <div className="rectangle">Jan2021</div>
                    <div className="right-triangle"></div>
                  </div>
                  <div className="ms-3 company-work-details">
                    <div className="text-light h5 mb-0">Online Language Tutor</div>
                    <small className="h6 font-semibold stream">Web Application</small>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="tag">
                    <div className="rectangle">Dec2020</div>
                    <div className="right-triangle"></div>
                  </div>
                  <div className="ms-3 company-work-details">
                    <div className="text-light h5 mb-0">Multiple Account Handling</div>
                    <small className="h6 font-semibold stream">Web Application</small>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="tag">
                    <div className="rectangle">Jun2020</div>
                    <div className="right-triangle"></div>
                  </div>
                  <div className="ms-3 company-work-details">
                    <div className="text-light h5 mb-0">Hostpital Finder - Covid19</div>
                    <small className="h6 font-semibold stream">Android Application</small>
                  </div>
                </div>
                <div className="text-light mt-2">
                  <span className="stream"><i className="fas fa-globe stream"></i> Tech Stack: </span>
                  Javascript, Jquery, HTML/CSS, Bootstrap, PHP/Laravel, Android, Java, MySql, Google APIs.
                </div>
              </div>
            </div>
          </div>
          
          <div className="line h-100 width-line"></div>
        </div>

        <div className="row resume-details resume-row-2">
          <div className="col-md-3 pt-5 my-auto position-relative">
            <h1 className="title-heading">EDUCATION</h1>
            <div className="education-info ms-2">
              <div className="d-flex">
                <div className="tag">
                  <div className="rectangle">2015/19</div>
                  <div className="right-triangle"></div>
                </div>
                <div className="ms-3 company-work-details">
                  <div className="text-light h5 mb-0 fw-bold">BTech</div>
                  <small className="h6 stream">Computer Science & Engineering</small>
                </div>
              </div>
            </div>
            <div className="d-flex mt-3 ms-2 position-relative">
              <i className="fas fa-university text-light h5"></i>
              <div className="text-light h5 ms-3">AKTU, Uttar Pradesh</div>
            </div>
            
            <div className="line w-25 height-line"></div>
            <div className="line h-25 width-line"></div>
          </div>
          
          <div className="col-md-6 pt-5 front-skill-image position-relative">
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

        <div className="row mt-5 resume-details resume-row-3">
          <div className="col-md-4 pt-5">
            <h1 className="title-heading">Achievements</h1>
            <div className="achievements-info ms-2">
              <div className="d-flex achievements-details">
                <i className="fas fa-star stream"></i>
                <div className="text-light ms-3 h5">Certificate of participating in Smart India Hackathon 2018 at Chennai.</div>
              </div>
              <div className="d-flex achievements-details">
                <i className="fas fa-star stream"></i>
                <div className="text-light ms-3 h5">Certificate of participating in Digifest 2018 at Jaipur.</div>
              </div>
              <div className="d-flex achievements-details">
                <i className="fas fa-star stream"></i>
                <div className="text-light ms-3 h5">Certificate of participating in Women CO[vi]DE Warriors Hackathon 2020 [Team Mentor].</div>
              </div>
              <div className="d-flex achievements-details">
                <i className="fas fa-star stream"></i>
                <div className="text-light ms-3 h5">Got 3 Inspiring Performance badges recognition in the current project.</div>
              </div>
            </div>
          </div>

          <div className="col-md-4 pt-5">
            <h1 className="title-heading">Certifications</h1>
            <div className="certification-info ms-2">
              <div className="d-flex">
                <div className="tag">
                  <div className="rectangle">Nov2020</div>
                  <div className="right-triangle"></div>
                </div>
                <div className="ms-3 certification-details">
                  <div className="text-light h5 mb-0">Javascript Certification</div>
                  <small className="h6 font-semibold stream">HackerRank</small>
                </div>
              </div>
              <div className="d-flex">
                <div className="tag">
                  <div className="rectangle">Feb2021</div>
                  <div className="right-triangle"></div>
                </div>
                <div className="ms-3 certification-details">
                  <div className="text-light h5 mb-0">Agile Project Management Certification</div>
                  <small className="h6 font-semibold stream">Udemy</small>
                </div>
              </div>
              <div className="d-flex">
                <div className="tag">
                  <div className="rectangle">Apr2021</div>
                  <div className="right-triangle"></div>
                </div>
                <div className="ms-3 certification-details">
                  <div className="text-light h5 mb-0">React JS - Complete Guide for Frontend Web Development</div>
                  <small className="h6 font-semibold stream">Udemy</small>
                </div>
              </div>
              <div className="d-flex">
                <div className="tag">
                  <div className="rectangle">Sep2021</div>
                  <div className="right-triangle"></div>
                </div>
                <div className="ms-3 certification-details">
                  <div className="text-light h5 mb-0">DevOps, CI/CD for Beginners</div>
                  <small className="h6 font-semibold stream">Udemy</small>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 pt-5">
            <h1 className="title-heading">TECHNICAL SKILLS</h1>
            <div className="software-skills-info ms-2">
              <div className="mt-3">
                <div className="langauge-skills text-light ms-3 h3">Js</div>
                <div className="langauge-skills text-light ms-3 h3">HTML</div>
                <div className="langauge-skills text-light ms-3 h3">CSS</div>
                <div className="langauge-skills text-light ms-3 h3">SASS</div>
                <div className="langauge-skills text-light ms-3 h3">Bootstrap</div>
                <div className="langauge-skills text-light ms-3 h3">React.js</div>
                <div className="langauge-skills text-light ms-3 h3">PHP</div>
                <div className="langauge-skills text-light ms-3 h3">Laravel</div>
                <div className="langauge-skills text-light ms-3 h3">Drupal</div>
                <div className="langauge-skills text-light ms-3 h3">Java</div>
                <div className="langauge-skills text-light ms-3 h3">Git</div>
                <div className="langauge-skills text-light ms-3 h3">CI/CD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
