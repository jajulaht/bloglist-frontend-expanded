import React from 'react'
import { connect } from 'react-redux'

const ErrorMessage = (props) => {
  if (props.errorMessage === null) {
    return null
  }

  return (
    <div className="error">
      {props.errorMessage}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.error
  }
}

const ConnectedErrorMessage = connect(mapStateToProps)(ErrorMessage)
export default ConnectedErrorMessage