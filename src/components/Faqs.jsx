import React from 'react'


const Faqs = () => {
    return (
        <div className='bg-gradient-to-b from-indigo-950 to-black h-screen md:h-92 p-20 pt-40 '>
            <div className='font-bold px-6 md:px-4 text-center text-lg/snug md:text-3xl/snug tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 mb-10'>
                FAQs
            </div>
            
            <div className=''>
            <div className="collapse bg-indigo-900/10 mb-2 ">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                    What is the purpose of this mining law chatbot? 
                </div>
                <div className="collapse-content"> 
                    <p>This chatbot is designed to provide information about mining laws, regulations, and related queries to users in a convenient and accessible way.
</p>
                </div>
            </div>
            <div className="collapse bg-indigo-900/10 mb-2">
            <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                How can I search for specific mining regulations or legal documents?
                </div>
                <div className="collapse-content"> 
                    <p>You can ask the chatbot to search for specific mining regulations, legal documents, or relevant laws by specifying the name or keyword related to your query.</p>
                </div>
            </div>
            <div className="collapse bg-indigo-900/10 mb-2">
            <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                How can I access the mining laws using this chatbot?
                </div>
                <div className="collapse-content"> 
                    <p>You can simply type your question or request related to mining laws, and the chatbot will provide you with relevant information.
</p>
                </div>
            </div>
            <div className="collapse bg-indigo-900/10 mb-2">
            <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                Is the information provided by this chatbot up-to-date and legally accurate?
                </div>
                <div className="collapse-content"> 
                    <p>The chatbot provides information based on the knowledge available up to its last update in September 2021. However, it's essential to verify information with official sources for the most current and legally accurate details.
</p>
                </div>
            </div>
            <div className="collapse bg-indigo-900/10 mb-2">
            <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                What types of mining laws and regulations can I inquire about?
                </div>
                <div className="collapse-content"> 
                    <p>You can inquire about a wide range of topics, including exploration permits, environmental regulations, safety standards, mining rights, and more.
</p>
                </div>
            </div>
            </div>
            
            
            
            




        </div>
    )
}

export default Faqs