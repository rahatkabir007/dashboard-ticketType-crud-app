import React from 'react';
import { images } from '../../../../../components/Constants';

const RightNav = () => {
    return (
        <div className='shadow-xl py-5 flex justify-end px-4'>
            <div className='flex flex-row-reverse gap-2 items-center'>
                <div className=''>
                    <img src={images.user} alt="" />
                </div>
                <div>
                    <span className='text-sm text-pscblack'>Hello, <span className='text-lg font-semibold'>Rahat Kabir</span></span>
                </div>
            </div>
        </div>
    );
};

export default RightNav;