import { useState } from "react";

export const useScrubSection = () => {

    const [tab, setTab] = useState(0)

    const [tcpa, setTcpa] = useState(0)
    const [complainers, setComplainers] = useState(0)
    const [federal, setFederal] = useState(0)
    const [state, setState] = useState(0)
    const [NRA, setNRA] = useState(true)

    const [fileName, setFileName] = useState(null);
    const [isDragging, setIsDragging] = useState(false)

    const [isDropped, setIsDropped] = useState(false)

    const handleIsDropped = () => {
        setIsDropped(!isDropped)
    }

    const [selectedItems, setSelectedItems] = useState([])

    const handleSelection = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(item => item !== id))
        } else {
            setSelectedItems([...selectedItems, id])
        }
    }

    const handleNRAChange = () => {
        setNRA(!NRA)
    }

    const handleTab = (id) => {
        setTab(id)
    }

    const handleTcpaChange = (e) => {
        setTcpa(e.target.value)
    }

    const handleComplainersChange = (e) => {
        setComplainers(e.target.value)
    }

    const handleFederalChange = (e) => {
        setFederal(e.target.value)
    }

    const handleStateChange = (e) => {
        setState(e.target.value)
    }

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

    return {
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
    }
}