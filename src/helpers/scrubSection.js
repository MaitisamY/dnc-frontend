import { useState, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import Papa from 'papaparse'
import axios from 'axios'

export const useScrubSection = () => {

    // Scrub Items
    const [scrubItems, setScrubItems] = useState([])

    // tabs
    const [tab, setTab] = useState(0)

    // Scrub options
    const [tcpa, setTcpa] = useState(0)
    const [complainers, setComplainers] = useState(0)
    const [federal, setFederal] = useState(0)
    const [stateDNC, setStateDNC] = useState(0)
    const [NRA, setNRA] = useState(true)

    // File upload
    const [fileName, setFileName] = useState(null)
    const fileInputRef = useRef(null);

    // csv data
    const [csvData, setCsvData] = useState([])

    // Column selection
    const [column, setColumn] = useState('')

    // Drag and drop
    const [isDragging, setIsDragging] = useState(false)

    // Errors
    const [errors, setErrors] = useState({})

    // Dropdown 
    const [isDropped, setIsDropped] = useState(false)

    // Dropdown ref
    const dropdownRef = useRef(null);

    // Selected dropdown items
    const [selectedItems, setSelectedItems] = useState([])

    // Loader
    const [isLoading, setIsLoading] = useState(false)

    // Tabs changing function
    const handleTab = (id) => {
        setTab(id)
    }

    // Dropdown functions
    const handleIsDropped = () => {
        setIsDropped(!isDropped)
    }

    // Dropdown selection
    const handleSelection = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(item => item !== id))
        } else {
            setSelectedItems([...selectedItems, id])
        }
    }

    // Handle column selection
    const handleColumnSelection = (columnName) => {
        setColumn(columnName)
    }

    // Scrub option functions
    const handleNRAChange = () => {
        setNRA(!NRA)
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

    const handleStateDNCChange = () => {
        selectedItems.length > 0 ? setStateDNC(1) : setStateDNC(0)
    }
    
    // File upload functions
    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    }

    const handleDragLeave = () => {
        setIsDragging(false);
    }

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        handleFileChange(e.dataTransfer.files[0]);
    }

    const handleFileChange = (file) => {
        if (file && file.type === 'text/csv') {
            setFileName(file.name);
            const reader = new FileReader();
            reader.onload = () => {
                const result = reader.result;
                const parsedData = Papa.parse(result, { header: true }).data;
                setCsvData(parsedData);
            };
            reader.readAsText(file);
        } else {
            setFileName(null);
        }
    }

    const handleBrowseClick = () => {
        fileInputRef.current.click();
    }

    // Form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if a file is selected
        if (!fileName) {
            toast.error('Please select a file', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })

            setErrors({
                fileError: 1
            })

            return;
        }

        if (!column) {
            toast.error('Please select a column', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })

            setErrors({
                columnError: 1
            })
            return;
        }
    
        // Check if at least one required field is selected
        if (tcpa === 0 && complainers === 0 && federal === 0 && selectedItems.length === 0) {
            toast.error('Please select at least one option', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })

            setErrors({
                zeroSelection: 1
            })
            return;
        }
        
        else {
            setIsLoading(true);

            const formData = new FormData();
            const file = fileInputRef.current.files[0];
            formData.append('file', file);
            
            // Prepare options array
            const options = [];
            if (tcpa === 1) options.push('TCPA');
            if (complainers === 1) options.push('DNC Complainers');
            if (federal === 1) options.push('Federal DNC');

            try {
        
                const response = await axios.post('https://dnc-backend.vercel.app/scrub', formData, {
                    params: {
                        column: column,
                        options: options,
                        selectedItems: selectedItems
                    },
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                const scrubItems = response.data.scrubbedData;
                
                setScrubItems((prevItems) => [scrubItems, ...prevItems]);

                toast.success(response.data.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })

                // Reset form
                setTcpa(0);
                setComplainers(0);
                setFederal(0);
                setStateDNC(0);
                setNRA(true);
                fileInputRef.current.value = '';
                setFileName(null);
                setCsvData([]);
                setColumn('');
                setSelectedItems([]);
                setErrors({});
        
            // Handle response
            } catch (error) {
                toast.error(error.response.data.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        }
        setIsLoading(false);
    }    

    const getScrubItems = async () => {
        try {
            const response = await axios.get('https://dnc-backend.vercel.app/scrub/items');

            setScrubItems(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getScrubItems();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropped(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    useEffect(() => {
        if (tcpa === 1 && complainers === 1 && federal === 1 && selectedItems.length > 0) {
            setErrors({
                zeroSelection: ''
            })
        }
        if (fileName) {
            setErrors({
                fileError: ''
            })
        }
    }, [tcpa, complainers, federal, selectedItems, fileName])

    return {
        scrubItems,
        tab,
        fileName,
        fileInputRef,
        csvData,
        tcpa,
        complainers,
        federal,
        stateDNC,
        NRA,
        isDragging,
        selectedItems,
        isDropped,
        dropdownRef,
        errors,
        isLoading,
        column,
        handleColumnSelection,
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
        handleBrowseClick,
        handleSubmit
    }
}