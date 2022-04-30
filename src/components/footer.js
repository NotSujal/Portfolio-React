import React from 'react'
import { Link } from 'react-router-dom'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container">
      <div className="footer-container01">
        <div className="footer-container02">
          <h1 className="footer-text textXL">
            <span>Let&apos;s keep in touch</span>
          </h1>
          <span className="footer-text2">
            Find out on any of these platforms.
          </span>
          <div className="footer-container03">
            <a
              href="https://github.com/NotSujal"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link"
            >
              <div className="footer-container04">
                <div className="footer-container05">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="footer-icon grow-rotate-on-hover"
                  >
                    <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
                  </svg>
                </div>
              </div>
            </a>
            <a
              href="https://github.com/NotSujal"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link1"
            >
              <div className="footer-container06">
                <div className="footer-container07">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="footer-icon02 grow-rotate-on-hover"
                  >
                    <path d="M854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
                  </svg>
                </div>
              </div>
            </a>
            <a
              href="https://instagram.com/Not.Sujal"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link2"
            >
              <div className="footer-container08">
                <div className="footer-container09">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="footer-icon04 grow-rotate-on-hover"
                  >
                    <path d="M298.667 42.667c-70.699 0-134.741 28.715-181.035 74.965s-74.965 110.336-74.965 181.035v426.667c0 70.699 28.715 134.741 74.965 181.035s110.336 74.965 181.035 74.965h426.667c70.699 0 134.741-28.715 181.035-74.965s74.965-110.336 74.965-181.035v-426.667c0-70.699-28.715-134.741-74.965-181.035s-110.336-74.965-181.035-74.965zM298.667 128h426.667c47.147 0 89.728 19.072 120.661 50.005s50.005 73.515 50.005 120.661v426.667c0 47.147-19.072 89.728-50.005 120.661s-73.515 50.005-120.661 50.005h-426.667c-47.147 0-89.728-19.072-120.661-50.005s-50.005-73.515-50.005-120.661v-426.667c0-47.147 19.072-89.728 50.005-120.661s73.515-50.005 120.661-50.005zM724.864 478.848c-6.4-41.472-24.363-79.232-50.944-109.525-32.171-36.736-76.971-62.507-128.384-70.144-19.797-3.157-41.387-3.285-63.019-0.085-58.283 8.619-107.563 40.149-140.032 83.925s-48.341 100.139-39.68 158.379 40.149 107.563 83.925 140.032 100.139 48.341 158.379 39.68 107.563-40.149 140.032-83.925 48.341-100.139 39.68-158.379zM640.469 491.392c5.205 34.987-4.267 68.651-23.808 95.019s-49.067 45.184-84.011 50.347-68.651-4.267-95.019-23.808-45.184-49.067-50.347-84.011 4.267-68.651 23.808-95.019 49.067-45.184 84.011-50.347c13.355-1.963 26.24-1.792 37.12-0.085 31.573 4.693 58.283 20.053 77.568 42.069 16 18.261 26.88 41.088 30.72 65.835zM789.333 277.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
                  </svg>
                </div>
              </div>
            </a>
            <a
              href="mailto:sjlchoudhari@gmail.com?subject="
              className="footer-link3"
            >
              <div className="footer-container10">
                <div className="footer-container11">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="footer-icon06 grow-rotate-on-hover"
                  >
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                </div>
              </div>
            </a>
            <Link to="/blog-post-n-f-t" className="footer-navlink">
              <div className="footer-container12">
                <div className="footer-container13">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="footer-icon08 grow-rotate-on-hover"
                  >
                    <path d="M384 0v96c73.482 0 144.712 14.37 211.716 42.71 64.768 27.394 122.958 66.632 172.948 116.624s89.228 108.18 116.624 172.948c28.342 67.004 42.712 138.238 42.712 211.718h96c0-353.46-286.54-640-640-640z"></path>
                    <path d="M384 192v96c94.022 0 182.418 36.614 248.9 103.098 66.486 66.484 103.1 154.878 103.1 248.902h96c0-247.422-200.576-448-448-448z"></path>
                    <path d="M480 384l-64 64-224 64-192 416 25.374 25.374 232.804-232.804c-1.412-5.286-2.178-10.84-2.178-16.57 0-35.346 28.654-64 64-64s64 28.654 64 64-28.654 64-64 64c-5.732 0-11.282-0.764-16.568-2.178l-232.804 232.804 25.372 25.374 416-192 64-224 64-64-160-160z"></path>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="footer-container14">
          <div className="footer-container15">
            <span className="footer-text3 textXS">USEFUL LINK</span>
            <a
              href="https://notsujal.itch.io"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link4 textSM"
            >
              Itch.io
            </a>
            <Link to="/blogs" className="footer-navlink1 textSM">
              Blog
            </Link>
            <a
              href="https://github.com/Notsujal"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link5 textSM"
            >
              Github
            </a>
            <a
              href="https://discord.gg/NUrGKfU9vB"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link6 textSM"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
      <div className="footer-container16"></div>
      <span className="footer-text4 textSM">Sujal Choudhari</span>
    </div>
  )
}

export default Footer
