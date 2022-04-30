import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Label from '../components/label'
import MemberDetails from '../components/member-details'
import Footer from '../components/footer'
import './index.css'

const Index = (props) => {
  return (
    <div className="index-container">
      <Helmet>
        <title>Sujal Choudhari</title>
        <meta name="description" content="A computer Enthusiast" />
        <meta property="og:title" content="Sujal Choudhari" />
        <meta property="og:description" content="A computer Enthusiast" />
      </Helmet>
      <div className="index-hero">
        <div className="index-bg"></div>
        <Header></Header>
        <div className="index-container01">
          <div className="index-container02">
            <img
              alt="image"
              src="/playground_assets/sign-1500h.png"
              className="index-image grow-on-hover"
            />
            <h1 className="index-text">Sujal Choudhari</h1>
            <span className="index-text01">
              <span>
                Hello, I am Sujal.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>A Self taught Indian Programmer.</span>
              <br></br>
              <span>I make games for fun!</span>
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/gray-vector.svg"
            className="index-image1"
          />
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className="index-image2"
          />
        </div>
      </div>
      <div className="index-section1">
        <div className="index-container03">
          <div className="index-container04">
            <h6 id="achievements" className="index-text07">
              <span>Achievements</span>
            </h6>
            <h3 className="index-text09 healine">
              Here are Some of my Achievements
            </h3>
            <span className="index-text10 textXL">
              Some of the achievements didn&apos;t make here, contact me for
              them
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div className="index-cards-container">
            <div className="index-card1 grow-on-hover_less">
              <div className="index-container05">
                <svg viewBox="0 0 1024 1024" className="index-icon">
                  <path d="M639.403 658.091l32 241.152-137.429-82.475c-13.269-7.851-29.995-8.363-43.904 0l-137.429 82.475 32.043-241.109c39.296 15.829 82.304 24.533 127.317 24.533s88.021-8.747 127.403-24.576zM654.165 554.283c-2.475 1.28-4.821 2.773-6.955 4.48-39.253 24.448-85.547 38.571-135.211 38.571-70.699 0-134.656-28.587-181.035-74.965s-74.965-110.336-74.965-181.035 28.587-134.656 74.965-181.035 110.336-74.965 181.035-74.965 134.656 28.587 181.035 74.965 74.965 110.336 74.965 181.035-28.587 134.656-74.965 181.035c-11.861 11.861-24.875 22.571-38.869 31.915zM304.64 612.48l-48.256 363.221c-3.115 23.339 13.312 44.8 36.693 47.915 9.984 1.323 19.669-0.939 27.563-5.717l191.36-114.816 191.403 114.816c20.224 12.117 46.421 5.589 58.539-14.635 5.205-8.661 6.955-18.389 5.717-27.563l-48.213-363.307c11.947-9.173 23.296-19.115 33.92-29.739 61.696-61.696 99.968-147.072 99.968-241.323s-38.272-179.627-99.968-241.365-147.115-99.968-241.365-99.968-179.627 38.272-241.365 99.968-99.968 147.115-99.968 241.365 38.272 179.627 99.968 241.365c10.667 10.667 22.016 20.608 33.963 29.781z"></path>
                </svg>
              </div>
              <h6 className="index-text11 textXL">SOF Runner Up</h6>
              <span className="index-text12">
                I was awarded a Gold and a Silver medal from Science Olympiad
                Foundation for Maths and Science during my School days.
              </span>
            </div>
            <div className="index-card2 grow-on-hover_less">
              <div className="index-container06">
                <svg
                  viewBox="0 0 1022.8297142857142 1024"
                  className="index-icon02"
                >
                  <path d="M922.857 0c52 0 100 38.857 100 93.143 0 30.286-12 59.429-25.714 86.286-44.571 84.571-194.286 364-265.714 429.714-34.857 32.571-76 52-124.571 52-96.571 0-175.429-82.286-175.429-178.286 0-45.714 18.857-90.286 52.571-121.143l364.571-330.857c20-18.286 46.286-30.857 74.286-30.857zM403.429 590.857c29.714 57.714 84 101.143 146.857 117.714l0.571 40.571c3.429 162.857-109.714 274.857-273.143 274.857-193.714 0-277.714-154.286-277.714-329.714 21.143 14.286 94.857 73.143 118.857 73.143 14.286 0 26.286-8 31.429-21.143 48.571-126.857 124.571-149.714 253.143-155.429z"></path>
                </svg>
              </div>
              <h6 className="index-text13 textXL">Recognised Artist</h6>
              <span className="index-text14">
                <span className="index-text15">
                  I have won various Local as well as State Level Drawing
                  Competitions with A Grades.
                </span>
                <br></br>
                <span className="index-text17">And I am an art blogger</span>
              </span>
            </div>
            <div className="index-card3 grow-on-hover_less">
              <div className="index-container07">
                <svg viewBox="0 0 1024 1024" className="index-icon04">
                  <path d="M321.008 1024c-68.246-142.008-31.902-223.378 20.55-300.044 57.44-83.956 72.244-167.066 72.244-167.066s45.154 58.7 27.092 150.508c79.772-88.8 94.824-230.28 82.782-284.464 180.314 126.012 257.376 398.856 153.522 601.066 552.372-312.532 137.398-780.172 65.154-832.85 24.082 52.676 28.648 141.85-20 185.126-82.352-312.276-285.972-376.276-285.972-376.276 24.082 161.044-87.296 337.144-194.696 468.73-3.774-64.216-7.782-108.528-41.55-169.98-7.58 116.656-96.732 211.748-120.874 328.628-32.702 158.286 24.496 274.18 241.748 396.622z"></path>
                </svg>
              </div>
              <h6 className="index-text18 textXL">NRC Finalist</h6>
              <span className="index-text19">
                I was a team leader with a few other classmates who made it to
                the finals of the National robotics Championship India
              </span>
            </div>
          </div>
          <div className="index-work-with-us">
            <div className="index-container08">
              <div className="index-container09 grow-rotate-on-hover">
                <svg viewBox="0 0 1024 1024" className="index-icon06">
                  <path d="M170 214v426h684v-426h-684zM854 768h170v86h-1024v-86h170v-42q-34 0-59-26t-25-60v-426q0-34 25-60t59-26h684q34 0 59 26t25 60v426q0 34-25 60t-59 26v42z"></path>
                </svg>
              </div>
              <h3 className="index-text20 healine">What do I do?</h3>
              <span className="index-text21">
                <span className="index-text22">
                  I am a Science Student in Maharashtra Board(HSC) with Computer
                  Science as an vocational Subject.
                </span>
                <br></br>
                <span>I taught myself coding when I was 14.</span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  I make small Python projects along with C++ libraries,
                </span>
                <br></br>
                <span>
                  I know to use Unity Engine and Godot Engine and make games in
                  those.
                </span>
                <br></br>
              </span>
              <a
                href="https://notsujal.itch.io"
                target="_blank"
                rel="noreferrer noopener"
                className="index-link"
              >
                Check out my Itch.io Page?
              </a>
            </div>
            <a
              href="https://github.com/Notsujal/Indie"
              target="_blank"
              rel="noreferrer noopener"
              className="index-link1"
            >
              <div className="index-container10 grow-on-hover_less">
                <div className="index-container11">
                  <img
                    alt="image"
                    src="/playground_assets/blue_wave.svg"
                    className="index-image3"
                  />
                </div>
                <div className="index-container12">
                  <h4 className="index-text31 healine">
                    <span className="index-text32">
                      IndieEngine (Game Engine)
                    </span>
                    <br></br>
                  </h4>
                  <span className="index-text33">
                    Indie Engine is my first large scale project
                  </span>
                  <span className="index-text34">
                    <br></br>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/white-vector.svg"
          className="index-image4"
        />
      </div>
      <div className="index-section2">
        <div id="qualities" className="index-container13">
          <Label text="What can i do?"></Label>
          <h2 className="index-text35 text2XL">
            <span className="index-text36">A self-taught programmer</span>
          </h2>
          <span className="index-text37 textXL">
            <span>Yes, I am a self-taught programmer</span>
            <br></br>
            <span></span>
            <span>and I have experience in various sectors of programming</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
        <div className="index-growing-company-section">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
            className="index-image5"
          />
          <div className="index-container14">
            <div className="index-container15 grow-rotate-on-hover">
              <svg viewBox="0 0 1280 1024" className="index-icon08">
                <path d="M832 736l96 96 320-320-320-320-96 96 224 224z"></path>
                <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                <path d="M701.298 150.519l69.468 18.944-191.987 704.026-69.468-18.944 191.987-704.026z"></path>
              </svg>
            </div>
            <h3 className="index-text42 healine">What I know?</h3>
            <div className="index-container16 grow-on-hover_less">
              <div className="index-container17">
                <svg viewBox="0 0 1024 1024" className="index-icon12">
                  <path d="M636 938h-6q-92-24-158-90-38-38-65-103t-27-119q0-52 38-89t92-37 93 37 39 89q0 34 25 58t63 24 64-24 26-58q0-120-91-206t-219-86q-92 0-168 47t-114 125q-24 50-24 120 0 80 28 154 6 20-14 26t-26-12q-32-82-32-168 0-78 30-138 42-90 129-144t191-54q146 0 249 99t103 237q0 52-39 88t-93 36-92-36-38-88q0-34-26-59t-64-25-63 25-25 59q0 112 80 192 56 56 140 78 18 2 14 26-4 16-20 16zM530 626q0 74 55 128t137 54q4 0 18-2t23-2 18 3 11 13q4 22-18 26-24 4-52 4-80 0-132-38-102-70-102-186 0-22 22-22 20 0 20 22zM416 930q-8 0-14-6-54-54-86-114-46-80-46-184 0-94 71-162t171-68 171 68 71 162q0 20-22 20t-22-20q0-78-58-133t-140-55-140 55-58 133q0 96 38 164 26 46 80 104 16 14 0 30-6 6-16 6zM150 414q-22 0-22-20 0-4 4-12 64-92 160-140 100-52 220-52t220 52q98 48 160 138 4 8 4 12 0 14-16 20t-24-8q-60-82-144-124-92-46-200-47t-200 47q-90 46-146 126-6 8-16 8zM760 190q-8 0-10-2-118-60-238-60-130 0-238 60-10 6-20 0t-10-18q0-14 10-20 116-64 258-64 130 0 258 64 18 10 8 28-8 12-18 12z"></path>
                </svg>
              </div>
              <span className="index-text43">Machine Learning in Python</span>
            </div>
            <div className="index-container18 grow-on-hover_less">
              <div className="index-container19">
                <svg
                  viewBox="0 0 1097.142857142857 1024"
                  className="index-icon14"
                >
                  <path d="M475.429 621.714v-73.143c0-10.286-8-18.286-18.286-18.286h-109.714v-109.714c0-10.286-8-18.286-18.286-18.286h-73.143c-10.286 0-18.286 8-18.286 18.286v109.714h-109.714c-10.286 0-18.286 8-18.286 18.286v73.143c0 10.286 8 18.286 18.286 18.286h109.714v109.714c0 10.286 8 18.286 18.286 18.286h73.143c10.286 0 18.286-8 18.286-18.286v-109.714h109.714c10.286 0 18.286-8 18.286-18.286zM804.571 658.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM950.857 512c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM1097.143 585.143c0 161.714-130.857 292.571-292.571 292.571-74.286 0-141.714-28-193.143-73.143h-125.714c-51.429 45.143-118.857 73.143-193.143 73.143-161.714 0-292.571-130.857-292.571-292.571s130.857-292.571 292.571-292.571h512c161.714 0 292.571 130.857 292.571 292.571z"></path>
                </svg>
              </div>
              <span className="index-text44">Unity and Godot Engine</span>
            </div>
            <div className="index-container20 grow-on-hover_less">
              <div className="index-container21">
                <svg
                  viewBox="0 0 1024.5851428571427 1024"
                  className="index-icon16"
                >
                  <path d="M1008 6.286c12 8.571 17.714 22.286 15.429 36.571l-146.286 877.714c-1.714 10.857-8.571 20-18.286 25.714-5.143 2.857-11.429 4.571-17.714 4.571-4.571 0-9.143-1.143-13.714-2.857l-301.143-122.857-170.286 186.857c-6.857 8-16.571 12-26.857 12-4.571 0-9.143-0.571-13.143-2.286-14.286-5.714-23.429-19.429-23.429-34.286v-258.286l-269.714-110.286c-13.143-5.143-21.714-17.143-22.857-31.429-1.143-13.714 6.286-26.857 18.286-33.714l950.857-548.571c12-7.429 27.429-6.857 38.857 1.143zM812.571 862.857l126.286-756-819.429 472.571 192 78.286 493.143-365.143-273.143 455.429z"></path>
                </svg>
              </div>
              <span className="index-text45">Discord Bots</span>
            </div>
            <div className="index-container22 grow-on-hover_less">
              <div className="index-container23">
                <svg viewBox="0 0 1024 1024" className="index-icon18">
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <span className="index-text46">C++ Applications</span>
            </div>
            <div className="index-container24 grow-on-hover_less">
              <div className="index-container25">
                <svg viewBox="0 0 1024 1024" className="index-icon20">
                  <path d="M964.73 178.804c-93.902-109.45-233.21-178.804-388.73-178.804-282.77 0-512 229.23-512 512s229.23 512 512 512c155.52 0 294.828-69.356 388.728-178.804l-324.728-333.196 324.73-333.196zM704 120.602c39.432 0 71.398 31.964 71.398 71.398 0 39.432-31.966 71.398-71.398 71.398s-71.398-31.966-71.398-71.398c0-39.432 31.966-71.398 71.398-71.398z"></path>
                </svg>
              </div>
              <span className="index-text47">Pygame</span>
            </div>
          </div>
        </div>
        <div className="index-container26">
          <h6 id="projects" className="index-text48">
            <span>My Projects</span>
          </h6>
          <h3 className="index-text50 healine">
            Here is a Collection of my projects
          </h3>
          <span className="index-text51 textXL">
            <span className="index-text52">
              Not all the projects are included here. Check out my GitHub page
              for all of my projects
            </span>
          </span>
        </div>
        <div className="index-team">
          <div className="index-container27">
            <Link to="/profilehtml" className="index-navlink">
              <div className="index-container28">
                <MemberDetails
                  heading1="Neptune"
                  heading11="Python Library"
                  image_src="https://source.unsplash.com/100x100/?neptune"
                ></MemberDetails>
              </div>
            </Link>
            <Link to="/profilehtml" className="index-navlink1">
              <div className="index-container29">
                <MemberDetails
                  heading1="8085 Sim"
                  heading11="Application"
                  image_src="https://source.unsplash.com/100x100/?computer"
                ></MemberDetails>
              </div>
            </Link>
            <Link to="/profilehtml" className="index-navlink2">
              <div className="index-container30">
                <MemberDetails
                  heading1="Photography "
                  heading11="Book"
                  image_src="https://source.unsplash.com/100x100/?camera"
                ></MemberDetails>
              </div>
            </Link>
            <Link to="/profilehtml" className="index-navlink3">
              <div className="index-container31">
                <MemberDetails
                  heading1="Arena1999"
                  heading11="Game Prototype"
                  image_src="https://source.unsplash.com/100x100/?arena"
                ></MemberDetails>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Index
