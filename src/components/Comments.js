import React from 'react'
import { connect } from 'react-redux'

const Comments = (props) => {
  console.log('props', props)

  const rows = () => props.comments.map(comment => {
    return ( <li key={comment.id}>{ comment.content }</li> )
  })

  if (props.comments === undefined) {
    return null
  }
  else if (props.comments.length === 0) {
    return (
      <div>
        <form>
          <input></input>
          <button>Add comment</button>
        </form>
        <p>No comments yet...</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <form>
          <input></input>
          <button>Add comment</button>
        </form><br />
        <ul>
          { rows() }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: ownProps.comments,
  }
}

const mapDispatchToProps = {
  //
}

const ConnectedComments = connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments)

export default ConnectedComments