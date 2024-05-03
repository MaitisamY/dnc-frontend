import '../../styles/scrub-section.css'

import { CgAlbum, CgList } from 'react-icons/cg'
import { FiInfo } from 'react-icons/fi'
import { FaFileUpload } from 'react-icons/fa'
import { MdCheckBoxOutlineBlank, MdCheckBox, MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

import ScrubReq from './ScrubReq'
import TcpaPerState from './TcpaPerState'
import SuppressionList from './SuppressionList'

import { useScrubSection } from '../../helpers/scrubSection.js'

function ScrubSection() {

    const {
        tab,
        fileName,
        tcpa,
        complainers,
        federal,
        state,
        NRA,
        isDragging,
        selectedItems,
        isDropped,
        handleNRAChange,
        setSelectedItems,
        handleIsDropped,
        handleSelection,
        handleTcpaChange,
        handleComplainersChange,
        handleFederalChange,
        handleStateChange,
        handleTab,
        handleDragOver,
        handleDragLeave,
        handleDrop, 
        handleFileChange,
        handleBrowseClick
    } = useScrubSection()

    const states = [
        {
            id: 1,
            name: 'Alabama',
        },
        {
            id: 2,
            name: 'Alaska',
        },
        {
            id: 3,
            name: 'Arizona',
        },
        {
            id: 4,
            name: 'Arkansas',
        },
        {
            id: 5,
            name: 'California',
        },
        {
            id: 6,
            name: 'Colorado',
        },
        {
            id: 7,
            name: 'Connecticut',
        },
        {
            id: 8,
            name: 'Delaware',
        },
        {
            id: 9,
            name: 'Florida',
        },
        {
            id: 10,
            name: 'Georgia',
        },
        {
            id: 11,
            name: 'Hawaii',
        },
        {
            id: 12,
            name: 'Idaho',
        },
        {
            id: 13,
            name: 'Illinois',
        },
        {
            id: 14,
            name: 'Indiana',
        },
        {
            id: 15,
            name: 'Iowa',
        },
        {
            id: 16,
            name: 'Kansas',
        },
        {
            id: 17,
            name: 'Kentucky',
        },
        {
            id: 18,
            name: 'Louisiana',
        },
        {
            id: 19,
            name: 'Maine',
        },
        {
            id: 20,
            name: 'Maryland',
        },
        {
            id: 21,
            name: 'Massachusetts',
        },
        {
            id: 22,
            name: 'Michigan',
        }
    ]

    return (
        <section>
            <div className="scrub-container">

                <div className="scrub-header">
                    <h2 className="scrub-title">Phone Scrub</h2>

                    <div className="pills">
                    <a 
                        className={`pill ${tab === 1 ? 'active' : ''}`} 
                        onClick={() => tab === 1 ? handleTab(0) : handleTab(1)}
                    >
                        <FiInfo size={20} /> Scrub Requirements
                    </a>
                    <a 
                        className={`pill ${tab === 2 ? 'active' : ''}`} 
                        onClick={() => tab === 2 ? handleTab(0) : handleTab(2)}
                    
                    >
                        <CgAlbum size={20} /> TCPA Per State
                    </a>
                    <a 
                        className={`pill ${tab === 3 ? 'active' : ''}`} 
                        onClick={() => tab === 3 ? handleTab(0) : handleTab(3)}
                    >
                        <CgList size={20} /> My Suppression List
                    </a>
                </div>
                </div>

                {
                    tab === 1 ? <ScrubReq /> : tab === 2 ? <TcpaPerState /> : tab === 3 ? <SuppressionList /> : null
                }

                <div className={`scrub-item ${isDragging ? 'dragging' : ''}`}>
                    <div className="scrub-title">
                        <span>Step 1:</span> Upload your scrub file
                    </div>
                    <div className="scrub-body">
                        <div className="custom-file-input"
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}>
                            <input
                                type="file"
                                id="fileInput"
                                className="input-file"
                                onChange={(e) => handleFileChange(e.target.files[0])}
                                accept=".csv"
                            />
                            <label htmlFor="fileInput" onClick={handleBrowseClick}>
                                <span>{fileName ? fileName : 'Choose file'}</span> or drag and drop your file here <FaFileUpload size={50} />
                            </label>
                        </div>

                        <div className="scrub-info-container">
                            <h4>File extension allowed: <span>.csv</span></h4>
                            <a 
                                className={`pill-referer ${tab === 1 ? 'active' : ''}`} 
                                onClick={() => tab === 1 ? handleTab(0) : handleTab(1)}
                            >
                                <FiInfo size={20} /> Scrub Requirements
                            </a>
                        </div>
                    </div>
                </div>
                <div className="scrub-item">
                    <div className="scrub-title">
                        <span>Step 2:</span> Select Scrub Options
                    </div>
                    <div className="scrub-body bg-light-blue">

                        <div className="scrub-checks">
                            <label
                                className={tcpa === 1 ? 'active' : ''}
                                onClick={() => handleTcpaChange({ target: { value: tcpa === 1 ? 0 : 1 } })}
                            >
                                TCPA / TCPA Troll
                                {
                                    tcpa === 1 ? <MdCheckBox size={25} /> : <MdCheckBoxOutlineBlank size={25} />
                                }
                            </label>
                            <label
                                className={complainers === 1 ? 'active' : ''}
                                onClick={() => handleComplainersChange({ target: { value: complainers === 1 ? 0 : 1 } })}
                            >
                                DNC Complainers
                                {
                                    complainers === 1 ? <MdCheckBox size={25} /> : <MdCheckBoxOutlineBlank size={25} />
                                }
                            </label>
                            <label
                                className={federal === 1 ? 'active' : ''}
                                onClick={() => handleFederalChange({ target: { value: federal === 1 ? 0 : 1 } })}
                            >
                                Federal DNC
                                {
                                    federal === 1 ? <MdCheckBox size={25} /> : <MdCheckBoxOutlineBlank size={25} />
                                }
                            </label>
                            <label
                                className={state === 1 ? 'active' : ''}
                                onClick={() => handleStateChange({ target: { value: state === 1 ? 0 : 1 } })}
                            >
                                State DNC
                                {
                                    state === 1 ? <MdCheckBox size={25} /> : <MdCheckBoxOutlineBlank size={25} />
                                }
                            </label>
                        </div>

                        <div className="scrub-select">
                            <a className="dropdown" onClick={handleIsDropped}>
                                {
                                    selectedItems.length > 3 ? (
                                        selectedItems.length
                                    ) : selectedItems.length > 0 && selectedItems <= 3 ? (
                                        selectedItems.map((item) => {
                                            {item}
                                        })
                                    ) : (
                                        'Scrub against Federal Database'
                                    )
                                }
                                 
                                {
                                    isDropped ? <MdKeyboardArrowUp size={25} /> : <MdKeyboardArrowDown size={25} />
                                }
                                <div className={`dropdown-menu ${isDropped ? 'show' : ''}`}>
                                    <div className="menu">
                                        <span className="select-all">
                                            {
                                                selectedItems.length > 0 ? (
                                                    <MdCheckBox size={15} />
                                                ) : (
                                                    <MdCheckBoxOutlineBlank size={15} />
                                                )
                                            }
                                            Select All
                                        </span>
                                        {
                                            states.map((state, index) => (
                                                <span 
                                                    className="item" 
                                                    key={index} 
                                                    onClick={() => handleSelection(state.id)}
                                                >
                                                    {
                                                        selectedItems.length > 0 ? (
                                                            <MdCheckBox size={15} />
                                                        ) : (
                                                            <MdCheckBoxOutlineBlank size={15} />
                                                        )
                                                    }
                                                    {state.name}
                                                </span>
                                            ))
                                        }
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="scrub-info">
                            <p>
                                Federal DNC is State independent. 
                                <a 
                                    onClick={() => tab === 1 ? handleTab(0) : handleTab(1)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    &nbsp; Learn more!
                                </a>
                            </p>
                        </div>

                        <label
                            style={{ 
                                display: 'flex', 
                                justifyContent: 'flex-start', 
                                alignItems: 'center', 
                                gap: '5px', 
                                cursor: 'pointer'
                            }}
                            onClick={handleNRAChange}
                        >
                            {
                                NRA ? <MdCheckBox size={25} /> : <MdCheckBoxOutlineBlank size={25} />
                            }
                            Name Recognition Algorithm (NRA)
                        </label>
                    </div>
                </div>

                <button className="step-3-button">
                    <span>Step 3:</span> Start scrubbing
                </button>
            </div>
        </section>
    )
}

export default ScrubSection