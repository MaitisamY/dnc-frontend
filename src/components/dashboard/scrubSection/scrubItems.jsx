import { useState, useEffect } from 'react'
import { STATES } from '../../../utils/usaStates.js'

function ScrubItems({ scrubItems }) {

    const [statesData, setStatesData] = useState([]);

    useEffect(() => {
        STATES ? setStatesData(STATES) : setStatesData([]);
    }, [])

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
        {
            scrubItems.length === 0 ? 
            <>
                <h3 
                    style={{ textAlign: 'center', width: '100%' }}
                >
                    Your Scrub History Will Appear Below
                </h3>
                <p 
                    className="text-red"
                    style={{ textAlign: 'center', width: '100%' }}
                >
                    You haven't scrubbed any files yet.
                </p>
            </> :
            <>
                <h3>Scrub History</h3>
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
                    {
                        scrubItems.map((item, index) => (
                            <tr key={index}>
                                <td>{item.date}</td>
                                <td>{item.uploaded_file.slice(0, 7) + '.....' + item.uploaded_file.slice(-7)}</td>
                                <td>
                                    {
                                        getStateNames(item.scrubbed_against_states)
                                    }
                                </td>
                                <td>{item.scrubbed_against_options}</td>
                                <td>{item.total_numbers}</td>
                                <td>{item.clean_numbers}</td>
                                <td>{item.bad_numbers}</td>
                                <td>{item.cost}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </>
        }
        </>
    )
}

export default ScrubItems