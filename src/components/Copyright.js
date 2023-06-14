import React from 'react';

const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section className='section shadow-2xl bg-white/5 backdrop-blur-2xl px-2 h-96 sm:mt-2 sm:h-80 md:mt-2 md:h-80 lg:mt-2 lg:h-80 xl:mt-2 xl:h-60' id='copyright'>
            <div className='container mx-auto h-96 sm:h-80 md:h-80 lg:h-80 xl:h-60'>
                <div className="py-10 text-center">
                    <p className="text-yellow-400 text-[20px]">
                        &copy; {currentYear} Manoj Kumar Pradhan. All rights reserved.
                    </p>
                </div>
                <div className='px-2 text-start'>
                    <p className='text-yellow-300 text-[15-px]'>
                        Manoj Kumar Pradhan <br/>
                        Contact : +91 7999696305 <br/> 
                        Email: manojkpr92806@gmail.com
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Copyright;
