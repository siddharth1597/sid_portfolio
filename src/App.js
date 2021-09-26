import './App.css';
import profile from './sidd.png';
import skill from './skills_gadgets.png';

function App() {
  return (
    <div className="App container-fluid py-5">
      <div className="container p-5 bg-dark">
        <h1 className="text-light text-center display-4 mt-3 name">Siddharth Rastogi</h1>
        <small className="designation text-light d-flex justify-content-center h5">A FULL STACK DEVELOPER</small>
        
        <div className="row mt-4 resume-details resume-row-1 position-relative">
          <div className="col-md-4 pt-5 position-relative">
            <h1 className="title-heading">WORK EXPERIENCE</h1>
            <div className="experience-info ms-2">
              <div className="d-flex">
                <div className="tag">
                  <div className="rectangle">2019</div>
                  <div className="right-triangle"></div>
                </div>
                <div className="ms-3 company-work-details">
                  <div className="text-light h5 mb-0 fw-bold">Wipro Ltd. <span className="current-org">&#40;Current&#41;</span></div>
                  <small className="text-light h6 font-semibold"  data-bs-toggle="tooltip">Web developer</small>
                  <ul className="text-light mt-2">
                    <li>Developed the components of the website using JQuery, HTML/CSS/SASS to make the easier way for the customer to create the static as well as dynamic pages.</li>
                    <li>Have done the API Integration.</li>
                    <li>Create Internet Banking web application in training</li>
                  </ul>
                  <div className="tooltip bs-tooltip-top" role="tooltip">
                    <div className="tooltip-arrow"></div>
                    <div className="tooltip-inner">
                      Some tooltip text!
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience-info ms-2">
              <div className="d-flex">
                <div className="tag">
                  <div className="rectangle">2017</div>
                  <div className="right-triangle"></div>
                </div>
                <div className="ms-3 company-work-details">
                  <div className="text-light h5 mb-0 fw-bold">Boxinall Softech</div>
                  <small className="text-light h6 font-semibold">Full Stack Developer <span className="stream">&#40;Part-time&#41;</span></small>
                  <ul className="text-light mt-2">
                    <li>Worked on many projects and takes the ownership and have learned many things from the startup company.</li>
                    <li>Worked on the Mobile applications, Web applications and deliver them successfully to clients.</li>
                  </ul>
                  <div className="tooltip bs-tooltip-top" role="tooltip">
                    <div className="tooltip-arrow"></div>
                    <div className="tooltip-inner">
                      Some tooltip text!
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="line h-25 width-line"></div>
            <div className="line w-75 height-line"></div>
          </div>
          
          <div className="col-md-4 position-relative profile-info">
            <div className="line h-100 width-line"></div>
            <div className="bg-warning profile mx-auto mt-5">
              <img className="profile-pic" src={profile} alt="profic pic" />
            </div>
            <div className="line w-25 height-line"></div>
            <div className="description px-5 pt-5">
              <p className="text-light">Hi, I have great experience in Web development. I have worked on many projects earlier, which makes me better, and I have responsible career opportunities to fully utilize my skills while making a significant contribution to the team's and client's success.</p>
            </div>
          </div>
          
          <div className="col-md-4 pt-5">
            <h1 className="title-heading">Contact</h1>
            <div className="contact-info ms-2">
              <div className="d-flex">
                <i className="fas fa-map-marker-alt text-light my-auto h5"></i>
                <span className="text-light ms-3 h5 my-auto">Bangalore, IN</span>
              </div>
              <div className="d-flex">
                <i className="fas fa-envelope text-light my-auto h5"></i>
                <span className="text-light ms-3 h5 my-auto">sidd15597@gmail.com</span>
              </div>
              <div className="d-flex">
                <i className="fas fa-mobile-alt text-light my-auto h5"></i>
                <span className="text-light ms-3 h5 my-auto">+91 8938052752</span>
              </div>
            </div>
            <hr className="text-light" />
            <div className="social-links ms-2">
              <div className="d-flex">
                <i className="fab fa-linkedin text-light my-auto h5"></i>
                <span className="text-light ms-3 h5 my-auto">linkedin.com/in/siddharth-rastogi-bb2a77145</span>
              </div>
            </div>

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
                  <span class="stream"><i class="fas fa-globe stream"></i> Tech Stack: </span>
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
              <i class="fas fa-university text-light h5"></i>
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
                <i class="fas fa-star stream"></i>
                <div className="text-light ms-3 h5">Certificate of participating in Smart India Hackathon 2018 at Chennai.</div>
              </div>
              <div className="d-flex achievements-details">
                <i class="fas fa-star stream"></i>
                <div className="text-light ms-3 h5">Certificate of participating in Digifest 2018 at Jaipur.</div>
              </div>
              <div className="d-flex achievements-details">
                <i class="fas fa-star stream"></i>
                <div className="text-light ms-3 h5">Certificate of participating in Women CO[vi]DE Warriors Hackathon 2020 [Team Mentor].</div>
              </div>
              <div className="d-flex achievements-details">
                <i class="fas fa-star stream"></i>
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
