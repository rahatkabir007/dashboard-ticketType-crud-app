import React from 'react';
import RightNav from './RightNav/RightNav';
import RightTable from './RightTable/RightTable';
import AddTicket from './AddTicket/AddTicket';

const RightContent = ({ setOpen, open, setResponsiveOpen, responsiveOpen }) => {
    return (
        <div className='flex flex-col'>
            <RightNav open={open} setOpen={setOpen} responsiveOpen={responsiveOpen} setResponsiveOpen={setResponsiveOpen} />
            <div className='my-[25px] mx-[45px]'>
                <AddTicket />
                <RightTable />
            </div>
        </div>
    );
};

export default RightContent;