import React from 'react';
import Link from 'gatsby-link';
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Travis McCormick</h1>
        <p>iOS Developer</p>
        <Link to="/page-2/">Portfolio</Link>
        <div className="Logos">
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-studio.png')} width="50" />
        </div>
        
      </div>
    </div>
    <div className="Cards">
      <h2>Portfolio</h2>
      <div className="CardGroup">
        <Card 
          title="Pitch Perfect"
          text="12 sections"
          image={require('../images/jshine.jpg')} 
          />
        <Card 
          title="MemeMe"
          text="12 sections"
          image={require('../images/flare.jpg')} 
          />
        <Card 
          title="On The Map"
          text="12 sections"
          image={require('../images/bydesign.jpg')} 
          />
        <Card 
          title="Virtual Tourist"
          text="12 sections"
          image={require('../images/amin.jpg')} 
          />
      </div>
    </div>
    <Section 
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="Learning React"
      text="Fill in a bunch of text here not sure yet."
    />
  </div>
)

export default IndexPage
