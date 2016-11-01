const React = require('react')
const ReactRouter = require('react-router')
const Store = require('./Store')
const { connector } = Store

class Landing extends React.Component {
  constructor (props) {
    super(props)

  }

  render () {
    return (
      <div className='home-info'>
        <h1 className='title'>Landing</h1>
      </div>
    )
  }
}

Landing.propTypes = {

}

module.exports = connector(Landing)
