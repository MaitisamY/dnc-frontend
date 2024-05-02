import React from 'react'

function Banner() {
    return (
        <div 
            className="breadcrumb-area text-center shadow dark text-light bg-cover" 
            style={{ backgroundImage: 'url(/img/banner/18.jpg)' }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1>
                            Dashboard
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner