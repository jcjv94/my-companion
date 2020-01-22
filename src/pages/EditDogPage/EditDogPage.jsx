import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './EditDogPage.css';

class EditDogPage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.dog
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateDog(this.state.formData);
    };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <>
            <h1> Add Dog </h1>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Dog's Name: </label>
                        <input
                        className="form-control"
                        name="dogName"
                        value={this.state.formData.dogName}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <div>
                        <label>Breed: </label>
                        <input
                        className="form-control"
                        name="breed"
                        value={this.state.formData.breed}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <div>
                        <label>Age: </label>
                        <input
                        className="form-control"
                        name="age"
                        value={this.state.formData.age}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <div>
                        <label>Number of Daily Walks: </label>
                        <input
                        className="form-control"
                        name="numWalks"
                        value={this.state.formData.numWalks}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <div>
                        <label>Number of Daily Feedings: </label>
                        <input
                        className="form-control"
                        name="numFeedings"
                        value={this.state.formData.numFeedings}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <div>
                        <label>Number of Daily Medications: </label>
                        <input
                        className="form-control"
                        name="numMeds"
                        // value={this.state.formData.numMeds}
                        onChange={this.handleChange}
                        
                        />
                    </div>
                    <button
                    type="submit"
                    disabled={this.state.invalidForm}
                    >
                        Save Dog
                    </button>
                    <Link to='/'>CANCEL</Link>
                </form>
            </>
        )
    }
}

export default EditDogPage;