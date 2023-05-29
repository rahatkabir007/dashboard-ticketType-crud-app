import React from 'react';
import { images } from '../../../../../components/Constants';
import { FaBars } from "react-icons/fa";
const RightNav = ({ setOpen, open, setResponsiveOpen, responsiveOpen }) => {
    return (
        <div className='flex flex-row py-6 justify-between shadow-xl'>
            <div className="flex-1 flex items-center pl-[24px]">
                <FaBars
                    className={`cursor-pointer hidden w-5 h-5 lg:block duration-300 text-black`}
                    onClick={() => {
                        setOpen(!open);
                        setResponsiveOpen(false);
                    }}
                />
                <FaBars
                    className={`cursor-pointer w-5 h-5 block lg:hidden duration-300 ease-in text-black`}
                    onClick={() => {
                        setResponsiveOpen(!responsiveOpen);
                        setOpen(true);
                    }}
                />
            </div>
            <div className='flex flex-row-reverse gap-2 items-center mr-5'>
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