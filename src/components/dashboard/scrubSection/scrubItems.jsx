import { useState, useEffect } from 'react';
import { STATES } from '../../../utils/usaStates.js';

function ScrubItems({ scrubItems }) {

    const [statesData, setStatesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        STATES ? setStatesData(STATES) : setStatesData([]);
        // Simulate loading delay
        setTimeout(() => {
            setIsLoading(false);
        }, 3000); // 3000 milliseconds delay
    }, []);

    const getStateNames = (stateIds) => {
        const stateNames = [];
        const ids = stateIds.split(',').map(id => parseInt(id.trim())); // Split by comma and convert to integers
        ids.forEach(id => {
            const state = statesData.find(state => state.id === id);
            if (state) {
                stateNames.push(state.name);
            }
        });
        return stateNames.join(', '); // Join state names with comma and space
    };

    return (
        <>
            {isLoading ? (
                <div 
                    className="spinner-border mt-5 mb-5" 
                    role="status" 
                    style={{ 
                        width: '3rem', 
                        height: '3rem', 
                        border: '4px solid #ffffff', 
                        borderTop: '4px solid #104cba',
                        borderBottom: '4px solid #104cba',
                    }}
                ></div>
            ) : (
                <>
                    <h3>Scrub History</h3>
                    {scrubItems.length === 0 ? (
                        <div>
                            <p>Your Scrub History Will Appear Below</p>
                            <p>You haven't scrubbed any files yet.</p>
                        </div>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Uploaded File</th>
                                    <th>States</th>
                                    <th>Scrubbed Options</th>
                                    <th>Total Numbers</th>
                                    <th>Clean Numbers</th>
                                    <th>Bad Numbers</th>
                                    <th>Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                {scrubItems.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.date}</td>
                                        <td>{item.uploaded_file.slice(0, 7) + '.....' + item.uploaded_file.slice(-7)}</td>
                                        <td>{getStateNames(item.scrubbed_against_states)}</td>
                                        <td>{item.scrubbed_against_options}</td>
                                        <td>{item.total_numbers}</td>
                                        <td>{item.clean_numbers}</td>
                                        <td>{item.bad_numbers}</td>
                                        <td>{item.cost}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </>
            )}
        </>
    )
}

export default ScrubItems;
