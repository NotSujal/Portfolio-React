import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Language from '../components/language'
import PrimaryButton from '../components/primary-button'
import SecondaryButton from '../components/secondary-button'
import Footer from '../components/footer'
import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - Sujal Choudhari</title>
        <meta name="description" content="A computer Enthusiast" />
        <meta property="og:title" content="Profile - Sujal Choudhari" />
        <meta property="og:description" content="A computer Enthusiast" />
      </Helmet>
      <div className="profile-image">
        <Header></Header>
        <img
          alt="image"
          src="/playground_assets/gray-vector.svg"
          className="profile-image1"
        />
        <div className="profile-bg"></div>
      </div>
      <div className="profile-container01">
        <div className="profile-container02">
          <div className="profile-container03">
            <Language number="Python"></Language>
            <Language type="Comments" number="JavaScript"></Language>
            <Language type="Photos" number="C++"></Language>
            <Language type="Comments" number="C#"></Language>
          </div>
          <img
            alt="image"
            src="/playground_assets/blackicon-200h.png"
            className="profile-image2 grow-on-hover"
          />
          <div className="profile-container04">
            <div className="profile-container05">
              <a
                href="https://github.com/NotSujal"
                target="_blank"
                rel="noreferrer noopener"
                className="profile-link"
              >
                <PrimaryButton
                  button="Github"
                  className="profile-component5"
                ></PrimaryButton>
              </a>
            </div>
            <a
              href="mailto:sjlchoudhari@gmail.com?subject="
              className="profile-link1"
            >
              <SecondaryButton
                button="Email"
                className="profile-component6"
              ></SecondaryButton>
            </a>
          </div>
        </div>
        <div className="profile-container06">
          <h3 className="profile-text text2XL">Sujal Choudhari</h3>
          <div className="profile-container07">
            <svg viewBox="0 0 1024 1024" className="profile-icon">
              <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
            </svg>
            <span className="profile-text01 textSM">MUMBAI, MAHARASHTRA</span>
          </div>
          <div className="profile-container08">
            <svg viewBox="0 0 1024 1024" className="profile-icon2">
              <path d="M512 128l470 256v342h-86v-296l-384 210-470-256zM214 562l298 164 298-164v172l-298 162-298-162v-172z"></path>
            </svg>
            <span className="profile-text02 textSM">
              Dr. M.G. Parulerkar Mitramandal&apos;s School,Vasai
            </span>
          </div>
          <div className="profile-container09">
            <div className="profile-container10">
              <svg
                viewBox="0 0 1097.142857142857 1024"
                className="profile-icon4"
              >
                <path d="M548.571 0l548.571 219.429v73.143h-73.143c0 20-17.714 36.571-39.429 36.571h-872c-21.714 0-39.429-16.571-39.429-36.571h-73.143v-73.143zM146.286 365.714h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h33.714c21.714 0 39.429 16.571 39.429 36.571v36.571h-950.857v-36.571c0-20 17.714-36.571 39.429-36.571h33.714v-438.857zM1057.714 914.286c21.714 0 39.429 16.571 39.429 36.571v73.143h-1097.143v-73.143c0-20 17.714-36.571 39.429-36.571h1018.286z"></path>
              </svg>
              <span className="profile-text03 textSM">
                R.P. Jr College of Arts, Science and Commerce
              </span>
            </div>
          </div>
          <div className="profile-container11"></div>
          <span className="profile-text04">
            <span>A programmer with various qualities.</span>
            <br></br>
            <span>
              I can use a creative approach to problem solve. Energetic and
              eager to learn new skills.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              Have experience working as part of a team and individually.
            </span>
          </span>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Profile
