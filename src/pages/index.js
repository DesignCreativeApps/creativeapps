import React from "react"
import { Link } from "gatsby"
// import Slider from 'infinite-react-carousel';

import Layout from "../components/layout"


const IndexPage = () => (
  <Layout>
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>CREATIVE APPS</h1>
          <p>We create hand crafted software for your business from the initial prototype to completion</p>
          <Link to="/page-2/">Learn More</Link>
        </div>
      </div>
      <section>
        <div className="services">
          <h1>Custom software development for web and mobile</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="cardIcon" style={{ color: '#66CD93' }}>W</div>
            <h3>Web Development</h3>
            <p>
              Massa tempor nec feugiat nisl pretium fusce. Ipsum a arcu cursus vitae. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi.
             
            </p>
          </div>
          <div className="card">
            <div className="cardIcon" style={{ color: '#8F4EC9' }}>M</div>
            <h3>Mobile Development</h3>
            <p>
              Massa tempor nec feugiat nisl pretium fusce. Ipsum a arcu cursus vitae. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi.
             
            </p>
          </div>
          <div className="card">
            <div className="cardIcon" style={{ color: '#F5A623' }}>D</div>
            <h3>Design</h3>
            <p>
              Massa tempor nec feugiat nisl pretium fusce. Ipsum a arcu cursus vitae. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi.
              
            </p>
          </div>
          <div className="card">
            <div className="cardIcon" style={{ color: '#4A90E2' }}>I</div>
            <h3>Integration</h3>
            <p>
              Massa tempor nec feugiat nisl pretium fusce. Ipsum a arcu cursus vitae. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi.
            
            </p>
          </div>
          <div className="card">
            <div className="cardIcon" style={{ color: '#E24A4A' }}>M</div>
            <h3>Migration</h3>
            <p>
              Massa tempor nec feugiat nisl pretium fusce. Ipsum a arcu cursus vitae. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi.
             
            </p>
          </div>
          <div className="card">
            <div className="cardIcon" style={{ color: '#66CD93' }}>C</div>
            <h3>Consultancy</h3>
            <p>
              Massa tempor nec feugiat nisl pretium fusce. Ipsum a arcu cursus vitae. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h1 style={{ textAlign: 'center' }}>What they say about us</h1>
        {/* <Slider dots centerMode centerPadding="0">
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}>
              <p style={{ textAlign: 'center', width: '80%' }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia quis vel eros donec ac odio tempor orci."
            </p>
              <div style={{ display: 'flex', alignItems: 'center', fontSize: 16 }}>
                <img src='/images/italy.svg' width="30" style={{ marginRight: 15 }} />
                <span>Pippo Franco, 11 December 2019</span>
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}>
              <p style={{ textAlign: 'center', width: '80%' }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia quis vel eros donec ac odio tempor orci."
            </p>
              <div style={{ display: 'flex', alignItems: 'center', fontSize: 16}}>
                <img src='/images/germany.svg' width="30" style={{ marginRight: 15 }} />
                <span>Jurgen Strunz, 10 September 2019</span>
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}>
              <p style={{ textAlign: 'center', width: '80%' }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia quis vel eros donec ac odio tempor orci."
            </p>
              <div style={{ display: 'flex', alignItems: 'center', fontSize: 16}}>
                <img src='/images/sweden.svg' width="30" style={{ marginRight: 15 }} />
                <span>Pippo Franco, 10 August 2019</span>
              </div>
            </div>
          </div>
        </Slider> */}
      </section>
    </div>
  </Layout>
)

export default IndexPage
