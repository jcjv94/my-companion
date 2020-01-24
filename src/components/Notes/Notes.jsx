import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import * as dogAPI from '../../utils/dogs-api';
import './Notes.css';
import NoteList from '../NotesList/NotesList';

class Notes extends Component {

    state = {
        notes: [ ],
        newNotes: ''
    };

    componentDidMount() {
        this.setState({
            notes: this.props.dog.notes
        })
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        const updatedNotes = await dogAPI.addNote(this.state.newNotes, this.props.dog._id)
        console.log(updatedNotes)
        this.setState(state => ({
            notes: updatedNotes,
            newNotes: ''
        }),
       () =>  this.props.history.push('/dashboard'));
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
                <div class="row">
                    <div class="col s10">
                <textarea placeholder='Leave a Note' class="materialize-textarea" value={this.state.newNotes} name="newNotes" onChange={this.handleChange}></textarea>
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

            <NoteList 
                notesList = {this.props.dog.notes}
            />

            </>
        )
    }
}

export default withRouter(Notes);