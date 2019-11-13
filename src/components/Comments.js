import React from 'react'
import { connect } from 'react-redux'

const Comments = (props) => {
  console.log('props', props)
  const commentById = (id) => {
    console.log('mistä lähetään', props.ids)
    console.log('haettava id', id)
    console.log('mistä haetaan', props.comments)
    console.log('haku idllä', props.comments.find(c => c.id === id))
    return props.comments.find(c => c.id === id)
  }

  const rows = () => props.ids.map(commentId =>
    <li key={ commentId }>{ commentById(commentId).content }</li>
  )

  return (
    <ul>
      { rows() }
    </ul>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    ids: ownProps.ids,
    blogs: state.blogs,
    comments: state.comments
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