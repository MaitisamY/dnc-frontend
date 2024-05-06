import { useState, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

export const useScrubSection = () => {

    const [tab, setTab] = useState(0)

    const [tcpa, setTcpa] = useState(0)
    const [complainers, setComplainers] = useState(0)
    const [federal, setFederal] = useState(0)
    const [stateDNC, setStateDNC] = useState(0)
    const [NRA, setNRA] = useState(true)

    const [fileName, setFileName] = useState(null);
    const [isDragging, setIsDragging] = useState(false)

    const [errors, setErrors] = useState({})

    const [isDropped, setIsDropped] = useState(false)
    const dropdownRef = useRef(null);

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

    const handleStateDNCChange = (e) => {
        selectedItems.length > 0 ? setStateDNC(1) : setStateDNC(0)
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (tcpa === 0 && complainers === 0 && federal === 0 && stateDNC === 0) {
            setErrors({
                zeroSelection: 'Please select at least one option'
            })
            return
        }
        if (!fileName) {
            setErrors({
                fileError: 'Please select a file'
            })
            return
        }

        try {
            const formData = new FormData();
            formData.append('file', fileName);
            formData.append('tcpa', tcpa);
            formData.append('complainers', complainers);
            formData.append('federal', federal);
            formData.append('stateDNC', stateDNC);
            formData.append('NRA', NRA);

            const response = await axios.post('/api/scrub', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        } catch (error) {
            toast.error(error.response.data.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropped(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return {
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
    }
}