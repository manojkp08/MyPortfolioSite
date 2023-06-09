import React from 'react';

const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section className='section px-2 sm:mt-2 md:mt-2 lg:mt-2 lg:h-72 xl:mt-2 xl:h-72' id='copyright'>
            <div className='container mx-auto h-64 lg:h-48 xl:h-48'>
                <div className="py-10 text-center">
                    <p className="text-white text-[20px]">
                        &copy; {currentYear} Manoj Kumar Pradhan. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Copyright;
