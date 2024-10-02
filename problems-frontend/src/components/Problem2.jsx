import React, { useState } from 'react';
import axios from 'axios';

function Problem2() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:8000/problem-2/', { t: input });
            setOutput(res.data.max_value);
        } catch (error) {
            console.error("There was an error!", error);
        }
    };

    return (
        <div>
            <h1>Problem 2: String Value</h1>
            <form onSubmit={handleSubmit}>
                <textarea 
                    id="input-2" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Enter the string t..."
                />
                <button type="submit">Submit</button>
            </form>
            <pre id="output-2">{output}</pre>
            <h3>{output}</h3>
        </div>
    );
}

export default Problem2;
