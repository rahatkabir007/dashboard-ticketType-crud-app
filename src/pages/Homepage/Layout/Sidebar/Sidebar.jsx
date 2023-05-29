import React from 'react';
import { images } from "../../../../components/Constants";


const Sidebar = ({ open, setOpen }) => {

    const Menus = [

        { title: "Dashboard", src: images.dashboard },
        { title: "My Tickets", src: images.mytickets },
        { title: "My Profile", src: images.myprofile },
        { title: "Users", src: images.users },
        { title: "Assets", src: images.assets },
        { title: "Tickets Type", src: images.ticketstype },
        { title: "Tickets Queue", src: images.ticketsqueue },

    ];

    return (
        <div
            className={` ${open ? "w-72" : "w-20 "
                } bg-psclightskyblue h-screen pb-5 pt-8 relative duration-300`}
        >
            <img src={images.arrowControl} className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purpleborder-2 rounded-full  ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} alt="" />
            <div className="flex gap-x-4 items-center">
                <img
                    src={images.logo}
                    className={`w-[50px] mx-auto cursor-pointer duration-500  ${open && "rotate-[360deg] w-[80%] px-6"
                        }`}
                    alt=""
                />
            </div>
            <ul className="pt-6 flex flex-col justify-start items-start gap-5">
                {Menus.map((item, index) => (
                    <li
                        key={index}
                        className={`flex w-full rounded-md py-3 px-5 cursor-pointer hover:bg-pscgrey text-psclightblack text-sm items-center gap-x-4 
                             ${index === 5 && "bg-pscgrey"
                            } `}
                    >
                        <img src={`${item.src}`} alt="" className="w-[25px]" />
                        <span className={`${!open && "hidden"} origin-left duration-200 text-xl font-semibold`}>
                            {item.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;