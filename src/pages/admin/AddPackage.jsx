import '../../styles/admin/admin.css'

import { useState, useEffect } from 'react'
import { useTheme } from '../../hooks/adminThemeProvider'
import { Link } from 'react-router-dom'
import { FaPlus, FaTrash } from 'react-icons/fa6'
import { MdOutlineDynamicFeed } from 'react-icons/md'
import { useAddPackage } from './utils/useAddPackage'

import Header from '../../components/admin/Header'
import Sidebar from '../../components/admin/Sidebar'

function AddPackage () {

    const { theme } = useTheme()

    const {
        formData, 
        errors, 
        isLoading,
        isLivePreview,
        handleChange, 
        generateBenefit, 
        removeBenefit, 
        handleBlur, 
        handleSubmit, 
        validateToEnableButton,
    } = useAddPackage()

    document.title = 'Add Package | Admin'

    return (
        <div className={`admin ${theme === 'light' ? '' : 'dark'}`}>
            <Header />

            <main>
                <Sidebar />

                {
                    !isLivePreview &&
                    <div className="preview-popup">
                        Live Preview will appear here
                    </div>
                }

                <div className="col-two">
                    <h1>Packages</h1>
                    <div className="pills">
                        <Link className="link" to="/admin/packages">
                            <MdOutlineDynamicFeed size={18} style={{ marginBottom: '5px' }} /> Packages
                        </Link>
                        <Link className="link active" to="/admin/add-package">
                            <FaPlus size={18} style={{ marginBottom: '5px' }} /> Add Package
                        </Link>
                    </div>

                    <div className="elements-container">
                        <form onSubmit={handleSubmit}>
                            <div className="panel-A">
                                <div className="banner">
                                    <p><strong>1-</strong> &nbsp;
                                        Fields with (<span className="text-red">*</span>) are required</p>
                                    <p><strong>2-</strong> &nbsp;
                                        Package name must be unique</p>
                                    <p><strong>3-</strong> &nbsp;
                                        Price is in USD</p>
                                    <p><strong>4-</strong> &nbsp;
                                        Detail is optional</p>
                                    <p><strong>5-</strong> &nbsp;
                                        Benefits are optional</p>

                                    <div className="big-circle"></div>
                                </div>

                                <div style={{ display: 'flex', gap: '20px', width: '100%' }}>
                                    <div className="custom-group">
                                        <label htmlFor="name">
                                            Package Name <span className="text-red">*</span>
                                        </label>
                                        <input 
                                            value={formData.name}
                                            className="field" 
                                            id="name" 
                                            name="name" 
                                            onChange={(e) => handleChange(e)}
                                            onBlur={handleBlur}
                                            placeholder="E.g. Platinum"
                                        />
                                    </div>
                                    <div className="custom-group">
                                        <label htmlFor="price">
                                            Package Price <span className="text-red">*</span>
                                        </label>
                                        <input 
                                            value={formData.price}
                                            type="number" 
                                            className="field" 
                                            id="price" 
                                            name="price" 
                                            onChange={(e) => handleChange(e)}
                                            onBlur={handleBlur}
                                            placeholder="E.g. 1000"
                                        />
                                    </div>
                                    <div className="custom-group">
                                        <label htmlFor="duration">
                                            Package Duration <span className="text-red">*</span>
                                        </label>
                                        <select 
                                            value={formData.duration}
                                            className="field" 
                                            id="duration" 
                                            name="duration"
                                            onChange={(e) => handleChange(e)}
                                        >
                                            <option value="0">Select</option>
                                            <option value="1">Per Day</option>
                                            <option value="2">Per Month</option>
                                            <option value="3">Per Year</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div style={{ display: 'flex', gap: '20px', width: '100%' }}>
                                    <div className="custom-group">
                                        <label htmlFor="detail">Package Detail</label>
                                        <textarea 
                                            value={formData.detail}
                                            className="field" 
                                            id="detail" 
                                            name="detail" 
                                            rows="1"
                                            onChange={(e) => handleChange(e)}
                                            onBlur={handleBlur}
                                            placeholder="E.g. You will get..."
                                        ></textarea>
                                        {errors.detail && <p className="text-red">{errors.detail}</p>}
                                    </div>
                                </div>

                                <div className="custom-group">
                                    <label>Package Benefits</label>
                                    <h6>You can add as many benefits as you want</h6>
                                </div>
                                {
                                    formData.benefits.map((benefitItem, index) => (
                                        <div key={index} style={{ display: 'flex', gap: '20px', width: '100%' }}>
                                            <div className="custom-group">
                                                <input 
                                                    value={benefitItem.benefit}
                                                    className="field" 
                                                    id={`benefit-${benefitItem.id}`} 
                                                    name="benefit" 
                                                    onChange={(e) => handleChange(e, benefitItem.id)}
                                                    placeholder={`Benefit # ${benefitItem.id}`}
                                                />                                                    
                                            </div>
                                            {
                                                formData.benefits.length > 1 ? (
                                                    <a 
                                                        className="remove" 
                                                        onClick={() => removeBenefit(index)}
                                                    >
                                                        <FaTrash size={18} />
                                                    </a>
                                                ) : null
                                            }
                                        </div>
                                    ))
                                }

                                <div style={{ display: 'flex', width: '30%' }}>
                                    <div className="custom-group">
                                        <button 
                                            type="button" 
                                            onClick={generateBenefit} 
                                            className="add-more-button"
                                        >
                                            <FaPlus size={16} /> Add Benefit
                                        </button>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', width: '60%' }}>
                                    <div className="custom-group">
                                        <button 
                                            type="submit"  
                                            className={`custom-button ${!validateToEnableButton() || isLoading ? 'disabled' : ''}`}
                                            disabled={!validateToEnableButton() || isLoading}
                                        >
                                            {
                                                isLoading ? 'Please wait...' : 'Create'
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="panel-B">
                                {
                                    isLivePreview &&
                                    formData.name.length > 0 ||
                                    formData.price.length > 0 ||
                                    formData.duration && formData.duration > 0 ? (
                                        <div className="live-preview">
                                            <div className="live-preview-header">
                                                <i className="small-circle">
                                                    <img src="/img/package.png" alt="Package" width={30} /> 
                                                </i>
                                                {
                                                    formData.name && 
                                                    <h4>
                                                        {formData.name.charAt(0).toUpperCase() + formData.name.slice(1)} 
                                                        {
                                                            formData.duration &&
                                                            formData.duration === '1' ? 
                                                            <sub> /Per Day</sub>
                                                            : formData.duration === '2' ?
                                                            <sub> /Per Month</sub>
                                                            : formData.duration === '3' ?
                                                            <sub> /Per Year</sub>
                                                            : null
                                                        }
                                                    </h4>
                                                }
                                                {
                                                    formData.price && 
                                                    <span>
                                                        <img src="/img/dollar.png" alt="Package" width={30} /> 
                                                        {formData.price}
                                                    </span>
                                                }
                                            </div>

                                            <div className="live-preview-body">
                                                {
                                                    formData.benefits.length > 0 && formData.benefits[0].benefit.length > 0 && (
                                                        <menu>
                                                            {
                                                                formData.benefits.map((benefitItem, index) => (
                                                                    <li key={index}>
                                                                        <i>
                                                                            <img src="/img/package.png" alt="Package" width={15} /> 
                                                                        </i>
                                                                        {benefitItem.benefit}
                                                                    </li>
                                                                ))
                                                            }
                                                        </menu>
                                                    )
                                                }
                                                {
                                                    formData.detail && 
                                                    <p>
                                                        {
                                                            formData.detail.slice(0, 2000)
                                                        }
                                                        {
                                                            formData.detail.length > 2000 && '...'
                                                        }
                                                        </p>
                                                }
                                            </div>
                                        </div>
                                    ) : (
                                        null
                                    )
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AddPackage