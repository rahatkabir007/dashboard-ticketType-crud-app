import React from 'react';
import { images } from '../../../../components/Constants';
import RightNav from './RightNav/RightNav';

const RightContent = ({ setOpen, open, setResponsiveOpen, responsiveOpen }) => {
    return (
        <div className='flex flex-col'>
            <RightNav open={open} setOpen={setOpen} responsiveOpen={responsiveOpen} setResponsiveOpen={setResponsiveOpen} />
        </div>
    );
};

export default RightContent;