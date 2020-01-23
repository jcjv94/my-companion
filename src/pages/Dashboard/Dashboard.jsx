import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import "./Dashboard.css";
import AddDogPage from "../AddDogPage/AddDogPage";
import DogGroup from "../../components/DogGroup/DogGroup";
import { set } from "mongoose";
import DogDetailPage from "../dogDetailPage/dogDetailPage";

class Dashboard extends Component {
    state = {
        selectedDog: null,
    };

    selectDog(dog) {
        this.setState({selectedDog: dog});
    }

    render () {
        return (
            <>
               <Nav user={this.props.user} handleLogout={this.props.handleLogout} />
        <AddDogPage handleAddDog={this.props.handleAddDog} />
      <div class="container">

        {this.props.dogs.map(dog => <button class="btn btn-small" onClick={() => this.selectDog(dog)}>{dog.dogName}</button>)}
        {this.state.selectedDog ? <DogDetailPage 
                dog={this.state.selectedDog}
                handleDeleteDog={this.props.handleDeleteDog}
                /> : ''
        }
        
        {/* <DogGroup dogs={this.props.dogs} handleDeleteDog={this.props.handleDeleteDog} /> */}
      </div>
            </>
        )
    }

}


// const Dashboard = props => {
//   return (
//     <>
//       <Nav user={props.user} handleLogout={props.handleLogout} />
//         <AddDogPage handleAddDog={props.handleAddDog} />
//       <div class="container">

//         <DogGroup dogs={props.dogs} handleDeleteDog={props.handleDeleteDog} />
//       </div>
//     </>
//   );
// };
export default Dashboard;
