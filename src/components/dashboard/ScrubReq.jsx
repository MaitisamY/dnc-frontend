import { FaStar } from 'react-icons/fa'

function ScrubReq() {
    return (
        <div className="tab">
            <h3>Know How</h3>
            <ul>
                <li>
                    <FaStar style={{ color: '#0059fc', margin: '0 5px 5px 0' }} /> 
                    Phone number should be exactly 10 digits (No country code)
                </li>
                <li>
                    <FaStar style={{ color: '#0059fc', margin: '0 5px 5px 0' }} /> 
                    We accept multiple phone columns in file. Columns should be named accordingly
                </li>
                <li>
                    <FaStar style={{ color: '#0059fc', margin: '0 5px 5px 0' }} /> 
                    Phone numbers column will be auto-detected. Column name should contain one of following words: 
                    'phone', 'cell', 'mobile', 'telephone', 'phone_number'
                </li>
                <li>
                    <FaStar style={{ color: '#0059fc', margin: '0 5px 5px 0' }} /> 
                    First name column will be auto-detected. Column name should contain one of following 
                    words: 'first name', 'first_name', 'f_name', 'fname', 'firstname'
                </li>
                <li>
                    <FaStar style={{ color: '#0059fc', margin: '0 5px 5px 0' }} /> 
                    Last name column will be auto-detected. Column name should contain one of following words: 
                    'last name', 'last_name', 'l_name', 'lname', 'lastname'
                </li>
                <li>
                    <FaStar style={{ color: '#0059fc', margin: '0 5px 5px 0' }} /> 
                    If there are several Sheets in Excel file, software will try to read from all sheets. 
                    Multiple sheets may cause errors in results
                </li>
            </ul>

            <h3 className="border-top">State Scrub</h3>
            <p>
                If States selected, application will be scrubbing out phone numbers of requested States. 
                Including TCPA, TCPA Trolls, State DNC, DNC Complainers.
            </p>
            <p>
                Federal DNC scrub is Not dependent from States selection. Federal DNC will scrub out all matched phone numbers.
            </p>

            <h3 className="border-top">File Format</h3>
            <p>
                We only accept .csv format.
            </p>
        </div>
    )
}

export default ScrubReq