import React, { Component } from 'react'
import styles from './app.module.scss'
import Library from '../Library'
import SideNav from '../SideNav/SideNav'
import { NavButton } from '../../components/NavButton'
import { Trash } from '../Trash'
import { Route } from 'react-router-dom'
import Pagination from '../../components/Pagination'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { } from '../../ducks/library.duck'

class App extends Component {
  render () {
    return (
      <div className='container-fluid '>
        <div className='row justify-content-center'>
          <div className=' col-sm-12 col-md-3 col-lg-3 col-xl-3'>
            <SideNav />
          </div>
          <div className=' col-sm-12 col-md-9 col-lg-8 col-xl-7'>
            <Route path='/library' component={Library} />
            <Route path='/trash' component={Trash} />
            <Pagination currentPage={this.props.currentPage + 1}
            totalRecords={
              this.props.totalRecords + 24
              // 12345
              } />
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number
  // uploadFile: PropTypes.func
}

const mapStateToProps = state => ({
  totalRecords: state.library.totalDisplayElements,
  currentPage: state.library.currentPage
})

const mapDispatchToProps = dispatch => ({
  // Hook up appropriate Redux methods
  // changeView: view => dispatch(changeView(view))
  // uploadFolder: folder => dispatch(uploadFolder(folder)),
  // uploadFile: file => dispatch(uploadFile(file))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)