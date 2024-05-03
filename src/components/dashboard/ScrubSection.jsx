import '../../styles/scrub-section.css'

import { useState } from 'react'
import { CgAlbum, CgList } from 'react-icons/cg'
import { FiInfo } from 'react-icons/fi'
import { FaFileUpload } from 'react-icons/fa'

import ScrubReq from './ScrubReq'
import TcpaPerState from './TcpaPerState'
import SuppressionList from './SuppressionList'

function ScrubSection() {

    const [tab, setTab] = useState(0)

    const handleTab = (id) => {
        setTab(id)
    }

    const [fileName, setFileName] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        handleFileChange(e.dataTransfer.files[0]);
    };

    const handleFileChange = (file) => {
        if (file && file.type === 'text/csv') {
            setFileName(file.name);
            
        } else {
            setFileName(null);
        }
    };

    const handleBrowseClick = () => {
        document.getElementById('fileInput').click();
    };

    return (
        <div className="scrub-section">
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
                <div className="scrub-item bg-light-blue">

                </div>
            </div>
        </div>
    )
}

export default ScrubSection