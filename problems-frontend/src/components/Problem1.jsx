import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Problem1() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const [n, k, rq, cq, ...obstacleStrings] = input.split(/\s+/);
        const obstacles = [];
        for (let i = 0; i < obstacleStrings.length; i += 2) {
            obstacles.push([parseInt(obstacleStrings[i]), parseInt(obstacleStrings[i + 1])]);
        }

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
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center">Problem 1: Chess</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="form-group">
                    <label htmlFor="input-1">Input</label>
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
