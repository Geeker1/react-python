import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class PonyNote extends Component {
  render () {
    return (
      <div>
        <h2> Welcome to PonyNote! </h2>
        <p> This is a site where you can create pony notes to store for
      future use
          <Link to='/contact'>Click here</Link> to contact us
        </p>

        <h3>View your Notes</h3>
        <table>
          <tbody>
            {this.props.notes.map(note => (
              <tr>
                <td>{note.text}</td>
                <td><button>edit</button></td>
                <td><button>delete</button></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PonyNote)
