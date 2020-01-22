import React, {Component} from 'react';

class AddDogPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            dogName: '',
            breed: 'Mutt',
            age: '0',
            numWalks: '2',
            numFeedings: '2',
            numMeds: '0'
        }
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddDog(this.state.formData);
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
                <h4 class="center-align"> Add Dog </h4>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit} class="container row">
                    <div class="col s4">
                        <label>Dog's Name: </label>
                        <input
                        className="form-control"
                        name="dogName"
                        value={this.state.formData.dogName}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <div class="col s4">
                        <label>Breed: </label>
                        <input
                        className="form-control"
                        name="breed"
                        value={this.state.formData.breed}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <div class="col s4">
                        <label>Age: </label>
                        <input
                        className="form-control"
                        name="age"
                        value={this.state.formData.age}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <div class="col s4">
                        <label>Number of Daily Walks: </label>
                        <input
                        className="form-control"
                        name="numWalks"
                        value={this.state.formData.numWalks}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <div class="col s4">
                        <label>Number of Daily Feedings: </label>
                        <input
                        className="form-control"
                        name="numFeedings"
                        value={this.state.formData.numFeedings}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <div class="col s4">
                        <label>Number of Daily Medications: </label>
                        <input
                        className="form-control"
                        name="numMeds"
                        // value={this.state.formData.numMeds}
                        onChange={this.handleChange}
                        
                        />
                    </div>
                    <div class="center-align">
                    <button
                    type="submit"
                    disabled={this.state.invalidForm}
                    >
                        Add Dog
                    </button>
                    </div>
                </form>
            </>
        );
    }
}

export default AddDogPage;