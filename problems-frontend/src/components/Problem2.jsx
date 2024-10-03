import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import IconHome from '../icons/IconHome'
import {Link} from 'react-router-dom'

function Problem2() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const checkCharValid = (inputStr) => {
        const charExcept = /[^a-z]/;
        return !charExcept.test(inputStr)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let charValid = checkCharValid(input)
        if (input.length <= 100000 && charValid){
            try {
                const res = await axios.post('http://localhost:8000/problem-2/', { t: input });
                setOutput(res.data.max_value);
            } catch (error) {
                console.error("There was an error!", error);
            }
        } else {
            alert("The value entered must not be greater than 10,000 or or you have typed a character that is not lowercase")
        }
    };

    return (
        <div className="container mt-4">
             <h1><Link to='/' ><IconHome/></Link></h1> 
            <h1 className="text-center">Problem 2: String Value</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="form-group">
                    <p>
                        You can write a string of characters.
                        <br />Remember, you only can write lowercase of English alphabet. <br />
                    </p>
                    <label htmlFor="input-2">Input</label>
                    <textarea 
                        id="input-2" 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        className="form-control" 
                        placeholder="Enter the string..." 
                        rows="5"
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
            <h3>Output</h3>
            <pre id="output-2" className="p-3 bg-light border rounded">{output}</pre>
        </div>
    );
}

export default Problem2;