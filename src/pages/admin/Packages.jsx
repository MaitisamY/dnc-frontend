import '../../styles/admin/admin.css'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/adminThemeProvider'
import { FaPlus } from 'react-icons/fa6'
import { MdOutlineDynamicFeed, MdFormatListBulleted, MdGridView } from 'react-icons/md'
import { useAddPackage } from './utils/useAddPackage'

import Header from '../../components/admin/Header'
import Sidebar from '../../components/admin/Sidebar'

function AdminPackages () {

    const { theme } = useTheme()

    const {
        packages,
    } = useAddPackage()

    const [view, setView] = useState(1)

    const toggleView = (view) => {
        setView(view)
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

    document.title = 'Packages | Admin'

    return (
        <div className={`admin ${theme === 'light' ? '' : 'dark'}`}>
            <Header />

            <main>
                <Sidebar />

                <div className="col-two">
                    <h1>Packages</h1>
                    <div className="pills">
                        <Link className="link active" to="/admin/packages">
                            <MdOutlineDynamicFeed size={18} style={{ marginBottom: '5px' }} /> Packages
                        </Link>
                        <Link className="link" to="/admin/add-package">
                            <FaPlus size={18} style={{ marginBottom: '5px' }} /> Add Package
                        </Link>
                    </div>

                    {
                        packages.length > 0 ? (
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
                        ) : (
                            null
                        )  
                    }

                    <div className="elements-container">
                    {
                        packages.length > 0 ? (
                            packages.map((packageItem, index) => (
                                <div key={index} className="scrub-history-card" style={{ width: view === 1 ? '31%' : '95%' }}>
                                    <div className="scrub-history-card-header">
                                        <i className={getCircleClass(packages.indexOf(packageItem) + 1)}>
                                            {packages.indexOf(packageItem) + 1}
                                        </i>
                                        <h4 style={{ marginTop: '5px' }}>{packageItem.name}</h4>
                                        <span>
                                            <img src="/img/dollar.png" alt="cost coins image" width={30} /> 
                                            {packageItem.price}
                                        </span>
                                    </div>

                                    <div className="scrub-history-card-body">
                                        {
                                            packageItem.benefits && packageItem.benefits.length > 0 && (
                                                view === 2 ? (
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Created At</th>
                                                                <th>Status</th>
                                                                <th>Duration</th>
                                                                <th>Benefits</th>
                                                                <th>Detail</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>{packageItem.created_at}</td>
                                                                <td>{packageItem.status}</td>
                                                                <td>{packageItem.duration}</td>
                                                                <td>
                                                                    {
                                                                        packageItem.benefits.map((benefitItem, index) => (
                                                                            <p key={index} style={{ margin: '0', textAlign: 'left' }}>
                                                                                <strong>{packageItem.benefits.indexOf(benefitItem) + 1}-</strong> {benefitItem} 
                                                                            </p>
                                                                        ))
                                                                    }
                                                                </td>
                                                                <td style={{ width: '50%', textAlign: 'justify' }}>{packageItem.detail}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                ) : (
                                                    <>
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="left">Created At</td>
                                                                    <td className="right">{packageItem.created_at}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="left">Status</td>
                                                                    <td className="right">
                                                                        {packageItem.status === 1 ? 'Active' : 'Inactive'}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="left">Duration</td>
                                                                    <td className="right">
                                                                        {
                                                                            packageItem.duration === 1 ? 'Daily' 
                                                                            : packageItem.duration === 2 ? 'Monthly' 
                                                                            : 'Yearly'
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <h4>Benefits</h4>
                                                        <menu>
                                                            {
                                                                packageItem.benefits.map((benefitItem, index) => (
                                                                    <li key={index}>
                                                                        <i>
                                                                            <img src="/img/package.png" alt="Package" width={15} /> 
                                                                        </i>
                                                                        {benefitItem}
                                                                    </li>
                                                                ))
                                                            }
                                                        </menu>
                                                        <h4>Detail</h4>
                                                        <p>{packageItem.detail && packageItem.detail}</p>
                                                    </>
                                                )
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        ) : (
                            <h5 className="text-red">No packages found</h5>
                        )
                    }
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AdminPackages
