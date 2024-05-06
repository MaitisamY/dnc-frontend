import '../../styles/scrub-section.css'

import { useState } from 'react'
import { CgAlbum, CgList } from 'react-icons/cg'
import { FiInfo } from 'react-icons/fi'
import { FaFileUpload } from 'react-icons/fa'
import { MdCheckBoxOutlineBlank, MdCheckBox, MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

import ScrubReq from './ScrubReq'
import TcpaPerState from './TcpaPerState'
import SuppressionList from './SuppressionList'

import { useScrubSection } from '../../helpers/scrubSection.js'
import { STATES } from '../../utils/usaStates.js'
 
function ScrubSection() {

    const {
        tab,
        fileName,
        tcpa,
        complainers,
        federal,
        stateDNC,
        NRA,
        isDragging,
        selectedItems,
        isDropped,
        dropdownRef,
        handleNRAChange,
        setSelectedItems,
        handleIsDropped,
        handleSelection,
        handleTcpaChange,
        handleComplainersChange,
        handleFederalChange,
        handleStateDNCChange,
        handleTab,
        handleDragOver,
        handleDragLeave,
        handleDrop, 
        handleFileChange,
        handleBrowseClick
    } = useScrubSection()

    const [states, setStates] = useState(STATES)
    const getStateNames = selectedItems.map(item => states.find(state => state.id === item).name)

    const selectAll = () => {
        setSelectedItems(selectedItems.length !== states.length ? 
            states.map(state => state.id) : [])
    }

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
                    {/* <a 
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
                    </a> */}
                </div>
                </div>

                {
                    tab === 1 ? <ScrubReq /> : tab === 2 ? <TcpaPerState /> : tab === 3 ? <SuppressionList /> : null
                }

                <div className="scrub-items-container">
                    <div className="scrub-item">
                        <div className="scrub-title">
                            <span>Step 1:</span> Upload your scrub file
                        </div>
                        <img className="img-1" src="/img/arrow-2.jpg" alt="arrow" />
                    </div>
                
                    <div className={`scrub-item ${isDragging ? 'dragging' : ''}`}>
                        <div className="scrub-body">
                            <div 
                                className="custom-file-input"
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                            >
                                <input
                                    type="file"
                                    id="fileInput"
                                    className="input-file"
                                    onChange={(e) => handleFileChange(e.target.files[0])}
                                    accept=".csv"
                                />
                                <label 
                                    htmlFor="fileInput" 
                                    onClick={handleBrowseClick}
                                    className={fileName && fileName.length > 0 ? 'active-dashed-border' : 'dashed-border'}
                                >
                                    <span>{fileName ? fileName : 'Choose file'}</span> 
                                    or drag and drop your file here <FaFileUpload size={50} />
                                </label>
                            </div>

                            <div className="scrub-info-container">
                                <h4>File extension allowed: <span>.csv</span></h4>
                                <a 
                                    className={`pill-referer ${tab === 1 ? 'active' : ''}`} 
                                    onClick={() => tab === 1 ? handleTab(0) : handleTab(1)}
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scrub-items-container">
                    <div className="scrub-item light-border">
                        <div className="scrub-body">

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
                                    className={selectedItems.length > 0 ? 'active' : 'inactive'}
                                    // onClick={() => handleStateDNCChange({ target: { value: stateDNC === 1 ? 0 : 1 } })}
                                >
                                    State DNC
                                    {
                                        selectedItems.length > 0 ? 
                                        <MdCheckBox size={25} /> 
                                        : <MdCheckBoxOutlineBlank size={25} />
                                    }
                                </label>
                            </div>

                            <div className="scrub-select">
                                <a className="dropdown" onClick={handleIsDropped} ref={dropdownRef}>
                                    {
                                        selectedItems.length > 3 ? (
                                            selectedItems.length + ' Items Selected'
                                        ) : selectedItems.length > 0 && selectedItems.length <= 3 ? (
                                            getStateNames && getStateNames.join(', ')
                                        ) : (
                                            'Scrub against Federal Database'
                                        )
                                    }
                                    
                                    {
                                        isDropped ? <MdKeyboardArrowUp size={25} /> : <MdKeyboardArrowDown size={25} />
                                    }
                                    <div 
                                        className={`dropdown-menu ${isDropped ? 'show' : ''}`} 
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <div className="menu">
                                            <div className="select-all">
                                                <span onClick={selectAll}>
                                                    {
                                                        selectedItems.length > 0 ? 
                                                        <MdCheckBox size={20} style={{ color: '#0059fc' }} />
                                                        : <MdCheckBoxOutlineBlank size={20} />
                                                    }
                                                    Select All
                                                </span>
                                            </div>
                                            {
                                                states.map((state, index) => (
                                                    <div className="item">
                                                        <span
                                                            key={index} 
                                                            onClick={() => selectedItems.includes(state.id) ?
                                                                handleSelection(state.id) : handleSelection(state.id)
                                                            }
                                                        >
                                                            {
                                                                selectedItems.includes(state.id) ? 
                                                                <MdCheckBox size={20} style={{ color: '#0059fc' }} />
                                                                : <MdCheckBoxOutlineBlank size={20} />
                                                            }
                                                            {state.name}
                                                        </span>
                                                    </div>
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
                                        style={{ cursor: 'pointer', color: '#0059fc' }}
                                    >
                                        Learn more!
                                    </a>
                                </p>
                            </div>

                            <label
                                style={{ 
                                    display: 'flex', 
                                    justifyContent: 'flex-start', 
                                    alignItems: 'center', 
                                    gap: '5px', 
                                    cursor: 'pointer',
                                    marginBottom: '10px'
                                }}
                                onClick={handleNRAChange}
                            >
                                {
                                    NRA ? 
                                    <MdCheckBox size={25} style={{ color: '#0059fc' }} /> 
                                    : <MdCheckBoxOutlineBlank size={25} />
                                }
                                Name Recognition Algorithm (NRA)
                            </label>
                        </div>
                    </div>

                    <div className="scrub-item">
                        <div className="scrub-title">
                            <span>Step 2:</span> Select Scrub Options
                        </div>
                        <img className="img-2" src="/img/arrow-2-2.jpg" alt="arrow" />
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