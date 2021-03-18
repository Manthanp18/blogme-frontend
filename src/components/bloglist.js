import React, { Component } from 'react'
import { Button, Table } from 'react-bootstrap'
import axios from 'axios'




const Blog = props => (
  <tr>
    <td>{props.blog.title}</td>
    <td>{props.blog.body}</td>
    <td>{props.blog.date.substring(0, 10)}</td>
    <td>
      <Button
        size='sm'
        block
        variant='outline-primary'
        href={'/api/blog/edit/' + props.blog._id}
      >
        {' '}
        edit{' '}
      </Button>{' '}
      <Button
        block
        variant='outline-danger'
        size='sm'
        href='#'
        onClick={() => {
          props.deleteBlog(props.blog._id)
        }}
      >
        delete
      </Button>
    </td>{' '}
  </tr>
)

export default class BlogList extends Component {
  constructor (props) {
    super(props)

    this.deleteBlog = this.deleteBlog.bind(this)

    this.state = { blog: [] }
  }

  componentDidMount () {
    axios
      .get('http://localhost:5000/api/blog/')
      .then(response => {
        this.setState({ blog: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  deleteBlog (id) {
    axios
      .delete('http://localhost:5000/api/blog/delete/' + id)
      .then(response => {
        console.log(response.data)
      })

    this.setState({
      blog: this.state.blog.filter(el => el._id !== id)
    })
  }

  blogList () {
    return this.state.blog.map(currentblog => {
      return (
        <Blog
          blog={currentblog}
          deleteBlog={this.deleteBlog}
          key={currentblog._id}
        />
      )
    })
  }

  render () {
    return (
      <div>
        <h3>BlogList</h3>
        <Table striped bordered hover>
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>{' '}</th>
            </tr>
          </thead>
          <tbody>
            { this.blogList() }
          </tbody>
        </Table>
      </div>
    )
  }
}
// export default class BlogList extends Component {
//   state = {
//     posts: []
//   }

//   componentDidMount = () => {
//     this.getBlogPost()
//   }

//   getBlogPost = () => {
//     axios.get('http://localhost:5000/api/blog').then(response => {
//       const data = response.data
//       this.setState({ posts: data })
//       console.log(' Data has been received')
//     })
//   }
//   displayBlogPost = posts => {
//     if (!posts.length) return null

//     return posts.map((post, index) => (
// <div key={index} className='jumbotron'>
//   <h3>{post.title}</h3>
//   <p>{post.body}</p>
//   <p> {post.date}</p>
//   <div className='button'>
//     <Button href='/api/blog/edit/:id' variant='secondary' size='lg'>
//       Edit
//     </Button>
//     <Button href='/api/blog' variant='danger' size='lg'>
//       Delete
//     </Button>
//   </div>
// </div>
//     ))
//   }

//   render () {
//     return (
//       <div>
//         <Jumbotron>{this.displayBlogPost(this.state.posts)}</Jumbotron>
//       </div>
//     )
//   }
// }
