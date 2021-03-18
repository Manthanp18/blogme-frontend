import React, { Component } from 'react'
import axios from 'axios'
import Moment from 'react-moment'
import TextareaAutosize from 'react-textarea-autosize'

export default class EditBlog extends Component {
  constructor (props) {
    super(props)

    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeBody = this.onChangeBody.bind(this)
    this.onChangeDate = this.onChangeDate.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      username: '',
      description: '',
      date: new Date()
    }
  }

  componentDidMount () {
    axios
      .get('http://localhost:5000/api/blog/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          title: response.data.title,
          body: response.data.body,
          date: new Date(response.data.date)
        })
      })
      .catch(function (error) {
        console.log(error)
      })
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
      .put(
        'http://localhost:5000/api/blog/edit/' + this.props.match.params.id,
        me
      )
      .then(res => console.log(res.data))

    window.location = '/api/blogs'
  }
  render () {
    return (
      <div>
        <h3>Edit Blog</h3>
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
            <input type='submit' value=' save' className='btn btn-primary' />
          </div>
        </form>
      </div>
    )
  }
}
// export default class EditBlog extends Component {
// constructor(props) {
//   super(props);

//   this.onChangeTitle = this.onChangeTitle.bind(this);
//   this.onChangeBody = this.onChangeBody.bind(this);
//   this.onChangeDate = this.onChangeDate.bind(this);
//   this.onSubmit = this.onSubmit.bind(this);

//   this.state = {
//     username: '',
//     description: '',
//     date: new Date(),
//   }
// }

// componentDidMount() {
//   axios.get('http://localhost:5000/api/blog'+this.props.match.params.id)
//     .then(response => {
//       this.setState({
//         title: response.data.title,
//         body: response.data.body,
//         date: new Date(response.data.date)
//       })
//     })
//     .catch(function (error) {
//       console.log(error);
//     })

// }

// onChangeTitle(e) {
//   this.setState({
//     title: e.target.value
//   })
// }

// onChangeBody(e) {
//   this.setState({
//     body: e.target.value
//   })
// }

// onChangeDate(date) {
//   this.setState({
//     date: date
//   })
// }

// onSubmit(e) {
//   e.preventDefault();

//   const me = {
//     title: this.state.title,
//     body: this.state.body,
//     date: this.state.date
//   }

//   console.log(me);

//   axios.post('http://localhost:5000/api/blog/edit' + this.props.match.params.id, me)
//     .then(res => console.log(res.data));

//   window.location = '/api/blogs';
// }
// }

// //   render () {
// //       return (
//         <div>
//         <h3>Edit Blog</h3>
//         <form onSubmit={this.onSubmit}>
//         <div className='form-group'>
//             <label>Title: </label>
//             <input
//             type='text'
//             required
//             className='form-control'
//             value={this.state.title}
//             onChange={this.onChangeTitle}
//             />
//             <label>Body: </label>
//             <input
//             type='text'
//             required
//             className='form-control'
//             value={this.state.body}
//             onChange={this.onChangeBody}
//             />
//             <div className='form-group'>
//             <label>Date: </label>
//             <div>
//                 <Moment
//                 selected={this.state.date}
//                 onChange={this.onChangeDate}
//                 />
//             </div>
//             </div>
//         </div>
//         <div className='form-group'>
//             <input
//             type='submit'
//             value='Edit Blog'
//             className='btn btn-primary'
//             />
//         </div>
//         </form>
//     </div>

//       )
//   }
// export default class EditBlog extends Component {
//   constructor (props) {
//     super(props)

//     this.onChangeTitle = this.onChangeTitle.bind(this)
//     this.onChangeBody = this.onChangeBody.bind(this)
//     this.onChangeDate = this.onChangeDate.bind(this)
//     this.onSubmit = this.onSubmit.bind(this)

//     this.state = {
//       title: '',
//       body: '',
//       date: new Date()
//     }
//   }

//   onChangeTitle (e) {
//     this.setState({
//       title: e.target.value
//     })
//   }

//   onChangeBody (e) {
//     this.setState({
//       body: e.target.value
//     })
//   }

//   onChangeDate (date) {
//     this.setState({
//       date: date
//     })
//   }

//   onSubmit (e) {
//     e.preventDefault()

//     const me = {
//       title: this.state.title,
//       body: this.state.body
//     }

//     console.log(me)

//     axios
//       .put('http://localhost:5000/blog/edit/'+ this.props.match.params.id, me)
//       .then(res => console.log(res.data))

//     window.location = '/api/blogs/'
//   }
