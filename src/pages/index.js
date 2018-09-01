import React from 'react';
import Link from 'gatsby-link';
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import styled from 'styled-components'
import Cell from '../components/Cell'

const SectionCaption = styled.p`
  font-weight: 600px;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`
const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`


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
          image={require('../images/wallpaper.jpg')} 
          />
        <Card 
          title="MemeMe"
          text="12 sections"
          image={require('../images/wallpaper.jpg')} 
          />
        <Card 
          title="On The Map"
          text="12 sections"
          image={require('../images/wallpaper.jpg')} 
          />
        <Card 
          title="Virtual Tourist"
          text="12 sections"
          image={require('../images/wallpaper.jpg')} 
          />
      </div>
    </div>
    <Section 
      image={require('../images/wallpaper.jpg')}
      logo={require('../images/logo-react.png')}
      title="Learning React"
      text="Fill in a bunch of text here not sure yet."
      />
     <SectionCaption>OTHER PROJECTS</SectionCaption>
     <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell 
          title={cell.title}
          image={cell.image} />
      ))}
     </SectionCellGroup>
  </div>
)

export default IndexPage
