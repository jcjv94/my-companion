import React, { Component } from "react";

class NotesList extends Component {
  render() {
    return (
      <>
        {this.props.notesList.map(note => {
          return (
            <div class=" container left-align">
              <p>{note}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default NotesList;
