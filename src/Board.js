import React from "react";

class Board extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isXTurn: false,
            data: Array(9).fill(null),
        }
    }

    renderSquare(i) {
        return <Square value={this.state.data[i]} onClick={() => this.handleClick(i)} />;
    }

    checkWinner(data) {
        const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]];
        const firstWinnerIndex = lines.find((indices) => {
            console.log(indices, data);
            const role = data[indices[0]];
            return role !== null && data[indices[1]] === role && data[indices[2]];
        });
        if (firstWinnerIndex) {
            return data[firstWinnerIndex[0]]
        }
        return null;
    }

    handleClick(i) {
        if (this.state.winner) {
            return;
        }
        if (!this.state.data[i]) {
            const data = this.state.data.slice();
            data[i] = this.state.isXTurn ? 'X' : 'O';
            const winner = this.checkWinner(data);
            this.setState({
                winner: winner,
                isXTurn: !this.state.isXTurn,
                data: data,
            });
        }
    }



    render() {
        let status = `Next player: ${this.state.isXTurn ? 'X' : 'O'}`;
        if (this.state.winner) {
            status = `Winner: ${this.state.winner}`;
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}

                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

export {
    Board,
}