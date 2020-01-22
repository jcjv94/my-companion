import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import './Notes.css';

class Notes extends Component {

    // state = {
    //     invalidForm: false,
    //     formData: this.props.location.state.dog
    // };

    // handleSubmit = e => {
    //     e.preventDefault();
    //     this.props.handleUpdateCmnt(this.state.formData);
    // };

    // handleChange = e => {
    //     const formData = {...this.state.formData, [e.target.name]: e.target.value};
    //     this.setState({
    //         formData,
    //         invalidForm: !this.formRef.current.checkValidity()
    //     });
    // };

    render () {
        return (
            <>
            <form>
                <label>Notes</label>
                <textarea placeholder='Leave a Note'></textarea>
                <br/>
                <button
                    type="submit"
                    // disabled={this.state.invalidForm}
                    >
                        Save Notes
                    </button>
                    {/* <Link to='/'>CANCEL</Link> */}
            </form>
            </>
        )
    }
}

export default Notes;