import { FaStar } from 'react-icons/fa'

function ScrubReq() {
    return (
        <div className="tab">
            <h3>Requirements for Scrub File Upload</h3>
            <p>To successfully upload and process a scrub file, ensure the following requirements are met:</p>
            <ol>
                <li>
                    <h4 style={{ margin: '0 0 5px 20px', fontWeight: 'bold' }}>File Format:</h4>
                    <ul style={{ marginLeft: '20px' }}>
                        <li style={{ listStyleType: 'disc'}}>
                            The file must be in `.csv` format.
                        </li>
                    </ul>
                </li>
                <li>
                    <h4 style={{ margin: '0 0 5px 20px', fontWeight: 'bold' }}>File Content:</h4>
                    <ul style={{ marginLeft: '20px' }}>
                        <li style={{ listStyleType: 'disc'}}>
                            The file should contain a column with phone numbers.
                        </li>
                        <li style={{ listStyleType: 'disc'}}>
                            The column containing phone numbers should be clearly labeled.
                        </li>
                    </ul>
                </li>
                <li>
                    <h4 style={{ margin: '0 0 5px 20px', fontWeight: 'bold' }}>File Preparation:</h4>
                    <ul style={{ marginLeft: '20px' }}>
                        <li style={{ listStyleType: 'disc'}}>
                            Ensure the file is properly formatted with headers.
                        </li>
                        <li style={{ listStyleType: 'disc'}}>
                            Validate that the phone numbers are in a consistent and recognizable format.
                        </li>
                    </ul>
                </li>
                <li>
                    <h4 style={{ margin: '0 0 5px 20px', fontWeight: 'bold' }}>Upload Process:</h4>
                    <ul style={{ marginLeft: '20px' }}>
                        <li style={{ listStyleType: 'disc'}}>
                            Upload the `.csv` file by dragging it into the designated upload area or using the file selector.
                        </li>
                        <li style={{ listStyleType: 'disc'}}>
                            After uploading, select the column that contains the phone numbers for scrubbing. 
                            The selected column name will be displayed (e.g., "Contact").
                        </li>
                    </ul>
                </li>
                <li>
                    <h4 style={{ margin: '0 0 5px 20px', fontWeight: 'bold' }}>Scrub Options:</h4>
                    <ul style={{ marginLeft: '20px' }}>
                        <li style={{ listStyleType: 'disc'}}>
                            Choose the appropriate scrub options:
                            <ul style={{ marginLeft: '20px' }}>
                                <li style={{ listStyleType: 'circle'}}>
                                    <strong>TCPA / TCPA Troll:</strong> Identify numbers associated with TCPA litigants.
                                </li>
                                <li style={{ listStyleType: 'circle'}}>
                                    <strong>DNC Complainers:</strong> Identify numbers from individuals who have filed DNC complaints.
                                </li>
                                <li style={{ listStyleType: 'circle'}}>
                                    <strong>Federal DNC:</strong> Check numbers against the Federal Do Not Call (DNC) list.
                                </li>
                                <li style={{ listStyleType: 'circle'}}>
                                    <strong>State DNC:</strong> This option is on auto detection, it will check numbers against the State Do Not Call (DNC) list.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <h4 style={{ margin: '0 0 5px 20px', fontWeight: 'bold' }}>Database Selection:</h4>
                    <ul style={{ marginLeft: '20px' }}>
                        <li style={{ listStyleType: 'disc'}}>
                            Specify which database to scrub against:
                            <ul style={{ marginLeft: '20px' }}>
                                <li style={{ listStyleType: 'circle'}}>
                                    Select individual states if required under "Scrub against Federal Database."
                                </li>
                                <li style={{ listStyleType: 'circle'}}>
                                    Ensure at least one option is selected for processing.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <h4 style={{ margin: '0 0 5px 20px', fontWeight: 'bold' }}>Start Scrubbing:</h4>
                    <ul style={{ marginLeft: '20px' }}>
                        <li style={{ listStyleType: 'disc'}}>
                            Once all selections are made, initiate the scrubbing process by clicking the "Start scrub" button.
                        </li>
                    </ul>
                </li>
            </ol>
            <p>By following these requirements, your scrub file will be ready for processing to ensure compliance and clean data.</p>
        </div>
    )
}

export default ScrubReq