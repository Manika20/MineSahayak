import React from 'react'

const Faqs = () => {
    return (
        <div className='bg-gradient-to-b from-indigo-950 to-black h-screen md:h-92'>
            <div className="collapse bg-base-200">
            <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                    Click me to show/hide content
                </div>
                <div className="collapse-content"> 
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse bg-base-200">
            <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                    Click me to show/hide content
                </div>
                <div className="collapse-content"> 
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse bg-base-200">
            <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                    Click me to show/hide content
                </div>
                <div className="collapse-content"> 
                    <p>hello</p>
                </div>
            </div>

        </div>
    )
}

export default Faqs