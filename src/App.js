import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import pictures from "./pictures.json";


class App extends Component {
    // Setting this.state.pictures to the pictures json array
    state = {
        pictures,
    };

    // Map over this.state.pictures and render a Card component for each picture object
    render() {
        return (
            <Wrapper>
                <Title>Clicky Meow</Title>
                {this.state.pictures.map((picture) => (
                    <Card
                        id={picture.id}
                        key={picture.id}
                        name={picture.name}
                        image={picture.image}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;
