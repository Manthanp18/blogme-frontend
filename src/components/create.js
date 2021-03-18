import React, { Component } from 'react'
import axios from 'axios'
import Moment from 'react-moment'
import TextareaAutosize from 'react-textarea-autosize'
import '../index.css'

export default class CreateBlog extends Component {
  constructor (props) {
    super(props)

    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeBody = this.onChangeBody.bind(this)
    this.onChangeDate = this.onChangeDate.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      title: '',
      body: '',
      date: new Date()
    }
  }

  onChangeTitle (e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangeBody (e) {
    this.setState({
      body: e.target.value
    })
  }

  onChangeDate (date) {
    this.setState({
      date: date
    })
  }

  onSubmit (e) {
    e.preventDefault()

    const me = {
      title: this.state.title,
      body: this.state.body
    }

    console.log(me)

    axios
      .post('http://localhost:5000/api/blog/add', me)
      .then(res => console.log(res.data))

    window.location = '/api/blogs/'
  }

  render () {
    return (
      <div>
        <h3>Create New Blog</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Title: </label>
            <input
              type='text'
              required
              className='form-control'
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
            <label>Body: </label>
            <TextareaAutosize
              type='text'
              required
              minRows={5}
              className='form-control'
              value={this.state.body}
              onChange={this.onChangeBody}
            />
            <div className='form-group'>
              <label>Date: </label>
              <div>
                <Moment
                  selected={this.state.date}
                  onChange={this.onChangeDate}
                />
              </div>
            </div>
          </div>
          <div className='form-group'>
            <input
              type='submit'
              value='Create Blog'
              className='btn btn-primary'
            />
          </div>
        </form>
      </div>
    )
  }
}
