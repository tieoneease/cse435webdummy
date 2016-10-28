import React from 'react'
import { Grid, 
  Row, 
    Col,
    Image } from 'react-bootstrap'

const footerStyle= {
  color: '#9d9d9d',
  backgroundColor: '#101010',
  marginTop: 10,
  paddingLeft: 60,
  paddingTop: 15,
  paddingBottom: 15,
};

const Footer = () => (
  <footer style={footerStyle}>
    <p>2016 Team Mobis: PEDAC1</p>
  </footer>
)

export default Footer
