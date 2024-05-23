import '../../styles/admin/admin.css'

import { useState, useEffect } from 'react'
import { useTheme } from '../../hooks/adminThemeProvider'
import { STATES } from '../../utils/usaStates.js'
import { MdFormatListBulleted, MdGridView, MdDownload } from 'react-icons/md'
import { motion } from 'framer-motion'
import axios from 'axios'

import Header from '../../components/admin/Header'
import Sidebar from '../../components/admin/Sidebar'

function AdminScrubHistory () {

    const { theme } = useTheme()

    const [scrubItems, setScrubItems] = useState([])
    const [statesData, setStatesData] = useState(STATES)

    const [view, setView] = useState(1)

    const toggleView = (view) => {
        setView(view)
    }

    const getScrubItems = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/admin/get/scrub/items`)

            setScrubItems(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getScrubItems()
    }, [scrubItems])

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
    }

    const getCircleClass = (number) => {
        const length = number.toString().length;
        if (length <= 4) {
            return 'small-circle';
        } else if (length === 5) {
            return 'medium-circle';
        } else {
            return 'large-circle';
        }
    }

    const containerVariants = {
        hidden: {
            opacity: 0,
            x: -20,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -40,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
    };

    document.title = 'Scrub History | Admin'

    return (
        <div className={`admin ${theme === 'light' ? '' : 'dark'}`}>
            <Header />

            <main>
                <Sidebar />

                <div className="col-two">
                    <h1>Scrub History</h1>

                    <div className="pills">
                        <a 
                            className={`link ${view === 1 ? 'active' : ''}`} 
                            onClick={() => toggleView(1)}
                        >
                            <MdGridView size={24} />
                        </a>
                        <a 
                            className={`link ${view === 2 ? 'active' : ''}`} 
                            onClick={() => toggleView(2)}
                        >
                            <MdFormatListBulleted size={24} />
                        </a>
                    </div>

                    <div className="elements-container">
                        {
                            Array.isArray(scrubItems) ? scrubItems.map((item, index) => (
                            <div 
                                key={index} 
                                className="scrub-history-card"
                                style={{ width: view === 1 ? '31%' : '95%' }}
                            >

                                <motion.div
                                    className="overlay"
                                    initial="hidden"
                                    whileHover="visible"
                                    variants={containerVariants}
                                >
                                    <motion.a
                                        className="link"
                                        href={`http://localhost:3000/uploads/${item.uploaded_file}`}
                                        download
                                        variants={itemVariants}
                                    >
                                        File by client <MdDownload size={18} />
                                    </motion.a>
                                    <motion.a
                                        className="link"
                                        href={`http://localhost:3000/uploads/${item.matching_file}`}
                                        download
                                        variants={itemVariants}
                                    >
                                        Matching records <MdDownload size={18} />
                                    </motion.a>
                                    <motion.a
                                        className="link"
                                        href={`http://localhost:3000/uploads/${item.non_matching_file}`}
                                        download
                                        variants={itemVariants}
                                    >
                                        Non matching records <MdDownload size={18} />
                                    </motion.a>
                                </motion.div>

                                <div className="scrub-history-card-header">
                                    <i className={getCircleClass(scrubItems.indexOf(item) + 1)}>
                                        {scrubItems.indexOf(item) + 1}
                                    </i>
                                    <h4 style={{ marginTop: '5px' }}>{item.user_name}</h4>
                                    <span><img src="/img/cost-coins.png" alt="cost coins image" /> {item.cost}</span>
                                </div>

                                <div className="scrub-history-card-body">
                                    <table>
                                        {
                                            view === 1 ? (
                                                <tbody>
                                                    <tr>
                                                        <td className="left">
                                                            Date:
                                                        </td>
                                                        <td className="right">
                                                            {item.date}
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="left">
                                                            Execution Time:
                                                        </td>
                                                        <td className="right">
                                                            {item.execution_time}
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="left">
                                                            State(s):
                                                        </td>
                                                        <td className="right">
                                                            {
                                                                getStateNames(item.scrubbed_against_states) ?
                                                                getStateNames(item.scrubbed_against_states) :
                                                                '--'
                                                            }
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="left">
                                                            Option(s):
                                                        </td>
                                                        <td className="right">
                                                            {
                                                                item.scrubbed_against_options ?
                                                                item.scrubbed_against_options :
                                                                '--'
                                                            }
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="left">
                                                            Total Numbers:
                                                        </td>
                                                        <td className="right">
                                                            {item.total_numbers}
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="left">
                                                            Clean Numbers:
                                                        </td>
                                                        <td className="right">
                                                            {item.clean_numbers}
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="left">
                                                            Bad Numbers:
                                                        </td>
                                                        <td className="right">
                                                            {item.bad_numbers}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            ) : (
                                                <>
                                                    <thead>
                                                        <tr>
                                                            <th>Date</th>
                                                            <th>Execution Time</th>
                                                            <th>State(s)</th>
                                                            <th>Option(s)</th>
                                                            <th>Total Numbers</th>
                                                            <th>Clean Numbers</th>
                                                            <th>Bad Numbers</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>{item.date}</td>
                                                            <td>{item.execution_time}</td>
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
                                                        </tr>
                                                    </tbody>
                                                </>
                                            )
                                        }
                                        
                                    </table>
                                </div>
                            </div>
                            )) : (
                                <h5 className="text-red">No Scrub History Found</h5>
                            )
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AdminScrubHistory