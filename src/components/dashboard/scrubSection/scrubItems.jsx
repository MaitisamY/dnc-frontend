import React, { useState, useEffect, useRef } from 'react';
import { STATES } from '../../../utils/usaStates.js';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdOutlineFileDownload } from 'react-icons/md';
import { FaTrashAlt, FaCogs, FaFileAlt } from 'react-icons/fa';

function ScrubItems({ scrubItems }) {

    const [statesData, setStatesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedItems, setSelectedItems] = useState([]);
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
    const dropdownRefs = useRef([]);

    useEffect(() => {
        dropdownRefs.current = 
        Array(scrubItems.length).fill(0).map((_, i) => dropdownRefs.current[i] || React.createRef());
        
        STATES ? setStatesData(STATES) : setStatesData([]);
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-button')) {
                setOpenDropdownIndex(null);
            }
        };
        
        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleSelection = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(item => item !== id))
        } else {
            setSelectedItems([...selectedItems, id])
        }
    }

    const handleIsDropped = (index) => {
        setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    }

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
                    <h3 style={{ width: '100%', textAlign: 'center' }}>Scrub History</h3>
                    {scrubItems.length === 0 ? (
                        <div>
                            <p className="text-red">You haven't scrubbed any files yet.</p>
                        </div>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <div style={{ cursor: 'pointer' }}>
                                            {
                                                selectedItems.length > 0 ? (
                                                    <MdCheckBox 
                                                        size={20} 
                                                        style={{ color: '#fff' }}
                                                        onClick={() => setSelectedItems([])} 
                                                    />
                                                ) : (
                                                    <MdCheckBoxOutlineBlank 
                                                        size={20} 
                                                        onClick={() => setSelectedItems(scrubItems.map(item => item.id))} 
                                                    />
                                                )
                                            }
                                        </div>
                                    </th>
                                    <th>#</th>
                                    <th>Date</th>
                                    <th>Execution Time</th>
                                    {/* <th>Uploaded File</th> */}
                                    <th>Scrub States</th>
                                    <th>Scrub Against</th>
                                    <th>Total Numbers</th>
                                    <th>Clean Numbers</th>
                                    <th>Bad Numbers</th>
                                    <th>Cost</th>
                                    <th>
                                        {
                                            selectedItems && selectedItems.length > 1 && (
                                                <div className="delete-selection">
                                                    <FaTrashAlt size={15} /> <span>Delete ({selectedItems.length})</span>
                                                </div>
                                            )
                                        }
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {scrubItems.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div style={{ cursor: 'pointer'}}>
                                                {
                                                    selectedItems.includes(item.id) ? (
                                                        <MdCheckBox 
                                                            size={20} 
                                                            style={{ cursor: 'pointer', color: '#108d10' }}
                                                            onClick={() => handleSelection(item.id)} 
                                                        />
                                                    ) : (
                                                        <MdCheckBoxOutlineBlank 
                                                            size={20} 
                                                            onClick={() => handleSelection(item.id)} 
                                                        />
                                                    )
                                                }
                                            </div>
                                        </td>
                                        <td>{scrubItems.indexOf(item) + 1}</td>
                                        <td>{item.date}</td>
                                        <td>{item.execution_time}</td>
                                        {/* <td>
                                            <a 
                                                className="file-link" 
                                                onClick={() => downloadUploadedFile(item.uploaded_file)}
                                            >
                                                {
                                                    item.uploaded_file.slice(0, 12) 
                                                    + ' ..... ' + 
                                                    item.uploaded_file.slice(-8)
                                                }
                                            </a>
                                        </td> */}
                                        <td>
                                            {
                                                getStateNames(item.scrubbed_against_states) ?
                                                getStateNames(item.scrubbed_against_states) :
                                                '--'
                                            }
                                        </td>
                                        <td>
                                            {
                                                item.scrubbed_against_options ?
                                                item.scrubbed_against_options :
                                                '--'
                                            }
                                        </td>
                                        <td>{item.total_numbers}</td>
                                        <td>{item.clean_numbers}</td>
                                        <td>{item.bad_numbers}</td>
                                        <td>
                                            <span 
                                                style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '17px' }}
                                            >
                                                <img src="/img/cost-coins.png" alt="cost coins image" /> {item.cost}
                                            </span>
                                        </td>
                                        <td>
                                            <button 
                                                className="dropdown-button"
                                                style={{ color: '#ffffff' }} 
                                                onClick={() => handleIsDropped(index)}
                                            >
                                                <FaCogs size={15} /> Options
                                                {openDropdownIndex === index && (
                                                    <div className="options-dropdown" ref={dropdownRefs.current[index]}>
                                                        <ul>
                                                            <li>
                                                                <a 
                                                                    
                                                                    download 
                                                                    className="green"
                                                                >
                                                                    <FaFileAlt size={15} />
                                                                    <span>View</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a 
                                                                    href={`http://localhost:3000/uploads/${item.non_matching_file}`}
                                                                    download 
                                                                    className="green"
                                                                >
                                                                    <MdOutlineFileDownload size={20} />
                                                                    <span>Clean Numbers</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a  
                                                                    href={`http://localhost:3000/uploads/${item.matching_file}`}
                                                                    download 
                                                                    className="green"
                                                                >
                                                                    <MdOutlineFileDownload size={20} />
                                                                    <span>Bad Numbers</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a 
                                                                     
                                                                    download 
                                                                    className="red"
                                                                >
                                                                    <FaTrashAlt size={15} />
                                                                    <span>Delete</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                            </button>
                                        </td>
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
