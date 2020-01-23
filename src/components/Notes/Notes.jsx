import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import * as dogAPI from '../../utils/dogs-api';
import './Notes.css';

class Notes extends Component {

    state = {
        notes: [],
        newNotes: ''
    };

    handleSubmit = async(e) => {
        e.preventDefault();
        const updatedNotes = await dogAPI.addNote(this.state.newNotes, this.props.dog._id)
        console.log(updatedNotes)
        this.setState({
            notes: updatedNotes
        })
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    componentDidMount() {
        this.setState({
            notes: this.props.dog.notes
        })
    }

    render () {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <label>Notes</label>
                <div class="row">
                    <div class="col s10">
                <textarea placeholder='Leave a Note' class="materialize-textarea" name="newNotes" onChange={this.handleChange}></textarea>
                    </div>

                <div class="col s2 center-align">
                <button
                    type="submit"
                    class="btn btn-small green"
                    // disabled={this.state.invalidForm}
                    >
                        <i class="material-icons">control_point</i> 
                    </button>
                    </div>
                </div>
                
                    {/* <Link to='/'>CANCEL</Link> */}
            </form>

            {
                this.state.notes.map(note => {
                    return(
                        <div class=" container left-align">
                        <p>{note}</p>
                        </div>
                    )
                })
            }
            </>
        )
    }
}

export default Notes;