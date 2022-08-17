import React from 'react';

const Spinner: React.FC = () => {
    return (
        <div className='text-center text-green-600 overscroll-y-none'><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
    );
};

export default Spinner;
