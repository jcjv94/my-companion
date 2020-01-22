import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import * as dogAPI from '../../utils/dogs-api';
import './Notes.css';

class Notes extends Component {

    state = {
        notes: [],
        newNotes: ''
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('HITTING!!!!!')
        dogAPI.addNote(this.state.newNotes, this.props.dog._id)
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render () {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <label>Notes</label>
                <textarea placeholder='Leave a Note' class="materialize-textarea" name="newNotes" onChange={this.handleChange}></textarea>
                <br/>
                <div class="center-align">
                <button
                    type="submit"
                    // disabled={this.state.invalidForm}
                    >
                        Save Notes
                    </button>
                    </div>
                    {/* <Link to='/'>CANCEL</Link> */}
            </form>
            </>
        )
    }
}

export default Notes;