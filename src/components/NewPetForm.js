import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "../styles/button.css";
import "../styles/input.css";
import { motion } from "framer-motion";

class NewPetForm extends Component {
  state = {
    name: "",
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createNewPet(this.state.name);
    this.props.history.push("/loading");
    this.setState({
      name: "",
    });
  };
  render() {
    return (
      <div>
        <motion.div
          animate={{ x: 100 }}
          transition={{ 
            type: "inertia", 
            velocity: 100, 
            }}
        >
          <Form
            onSubmit={(e) => {
              this.handleSubmit(e);
            }}
          >
            <Form.Control
              value={this.state.name}
              id="entername"
              type="text"
              placeholder="Enter a Name for your Pet "
              onChange={(e) => this.handleChange(e)}
            />
            <Button
              size="sm"
              id="btn-colour-1"
              type="submit"
              style={{marginTop: '10px', float: 'right'}}
            >
              Hatch New Pet
            </Button>
          </Form>
        </motion.div>
      </div>
    );
  }
}

export default withRouter(NewPetForm);
