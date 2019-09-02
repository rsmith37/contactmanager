import React, { Component } from 'react'

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">
          Add Contact
              <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input type="text"
                  name="name"
                  className="form-control form-control-lg"
                  placeholder="Enter name..."
                  value={name}
                  onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input type="email"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Enter email..."
                  value={email}
                  onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="Phone">Phone</label>
                <input type="text"
                  name="phone"
                  className="form-control form-control-lg"
                  placeholder="Enter phone..."
                  value={phone}
                  onChange={this.onChange} />
              </div>
              <input type="submit"
                value="Add Contact"
                className="btn btn-primary btn-block" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddContact;