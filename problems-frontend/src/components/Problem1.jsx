import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import IconHome from '../icons/IconHome'
import { Link } from 'react-router-dom'

function Problem1() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const [n, k, rq, cq, ...obstacleStrings] = input.split(/\s+/);
        const obstacles = [];
        const positionQ = [parseInt(rq), parseInt(cq)]
        let similarPosition = true

        for (let i = 0; i < obstacleStrings.length; i += 2) {
            let positionObs = [parseInt(obstacleStrings[i]), parseInt(obstacleStrings[i + 1])]
            obstacles.push([parseInt(obstacleStrings[i]), parseInt(obstacleStrings[i + 1])]);
            if (positionQ[0] === positionObs[0] && positionQ[0] === positionObs[0]) {
                similarPosition = false
            }
        }

        if (n <= 100000 && n > 0 && k <= 100000 && similarPosition) {

            try {
                const res = await axios.post('http://localhost:8000/problem-1/', {
                    n: parseInt(n),
                    k: parseInt(k),
                    rq: parseInt(rq),
                    cq: parseInt(cq),
                    obstacles: obstacles
                });
                setOutput(res.data.attackable_squares);
            } catch (error) {
                console.error("There was an error!", error);
            }
        } else {
            alert('The value is out of range or one obstacle is on the queen')
        }
    };

    return (
        <div className="container mt-4">
            <h1><Link to='/' ><IconHome /></Link></h1>
            <h1 className="text-center">Problem 1: Chess</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="form-group">
                    <p>
                        <b>Use de folow format, separated by double spaces:</b> <br />
                        n  k <br />
                        rq  cq <br />
                        r1  c1 <br />
                        r2  c2 <br />
                        r3 ... <br /><br />
                        <b>Where:</b> <br />
                        <b>n:</b> The number of rows and columns in the board <br />
                        <b>k:</b> The number of obstacles on the board <br />
                        <b>rq:</b> The row number of the queen's position <br />
                        <b>cq:</b> The column number of the queen's position <br />
                        <b>r1, c1, r2, c2, r3 ... :</b> Are the obstacles position (rows and columns) <br />
                    </p>
                    <label htmlFor="input-1">Input:</label>
                    <textarea
                        id="input-1"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="form-control"
                        placeholder="Enter n, k, rq, cq, obstacles..."
                        rows="5"
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
            <h3>Output</h3>
            <pre id="output-1" className="p-3 bg-light border rounded">{output}</pre>
        </div>
    );
}
export default Problem1;
