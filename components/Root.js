
import React from 'react'
import Head from './Head'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

class Root extends React.Component {
  render () {
    return (
      <html>
        <Head title='Automated Pedestrian Collision Avoidance System' />
        <body>
          <Header title='Team Mobis' />
          <Main />
          <Footer />
        </body>
      </html>
    )
  }
}

export default Root

