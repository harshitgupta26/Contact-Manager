import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
//   deleteContact = (id) => {
//     const { contacts } = this.state;
//     const newContacts = contacts.filter((contact) => contact.id !== id);
//     this.setState({ contacts: newContacts });
//   };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <div className="display-4 mb-2">
                <span className="text-danger">Contact </span>List
              </div>
              {contacts.map((contact) => (
                <Contact
                  key={contact.id}
                  contact={contact}
                //   deleteClickHandeler={this.deleteContact.bind(
                //     this,
                //     contact.id
                //   )}
                ></Contact>
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );

    // const { contacts } = this.state;
    // return (
    //   <React.Fragment>
    //     {contacts.map((contact) => (
    //       <Contact
    //         key={contact.id}
    //         contact={contact}
    //         deleteClickHandeler={this.deleteContact.bind(this, contact.id)}
    //       ></Contact>
    //     ))}
    //   </React.Fragment>
    // );
  }
}

export default Contacts;
