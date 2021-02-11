import React, { Component, createContext } from 'react';

export const GameContext = createContext();

class GameContextProvider extends Component {
    state = {

    }
    roll = async () => {

    }
    render() {
        return (
            <GameContext.Provider value={{
                ...this.state,
                roll: this.roll
            }}>
                {this.props.children}
            </GameContext.Provider>
        );
    }
}

export default GameContextProvider;


