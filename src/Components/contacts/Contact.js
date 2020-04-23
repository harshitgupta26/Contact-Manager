import React, { Component } from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import { Consumer } from "../../context";
import axios from "axios";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };
  onShowClick = (e) => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
  //   onDeleteClick = () => {
  //     //   this.props.deleteClickHandeler();
  //   };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h3>
                {name}
                <i
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                ></i>
                <i
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                ></i>

                <Link to={`contact/edit/${id}`}>
                  <i className="fas fa-pencil-alt"
                  style={{cursor: 'pointer', float: 'right', color: 'black', marginRight: '1rem'}}></i>
                </Link>
              </h3>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Contact: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
      /*{ <div className="card card-body mb-3">
        <h3>
          {contact.name}
          <i onClick={this.onShowClick} className="fas fa-sort-down" style={{cursor: 'pointer'}}></i>
          <i onClick={this.onDeleteClick} className="fas fa-times" style={{cursor: 'pointer', float: 'right', color: 'red'}}></i>
        </h3>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {contact.email}</li>
            <li className="list-group-item">Contact: {contact.phone}</li>
          </ul>
        ) : null}
      </div>} */
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  //   deleteClickHandeler: PropTypes.func.isRequired
};

export default Contact;
