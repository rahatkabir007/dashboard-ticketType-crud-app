import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import RightContent from "./RightContent/RightContent";


const Layout = () => {
    const [open, setOpen] = useState(true);
    const [responsiveOpen, setResponsiveOpen] = useState(false);
    return (
        <div className="flex h-screen overflow-y-hidden">
            <Sidebar open={open} setOpen={setOpen} responsiveOpen={responsiveOpen} />
            {responsiveOpen && (
                <div
                    onClick={() => {
                        setOpen(!open);
                        setResponsiveOpen(false);
                    }}
                    className="fixed z-10 opacity-40 bg-black top-0 left-0 right-0 bottom-0"
                ></div>
            )}

            <div className="flex-1 overflow-y-auto">
                <RightContent open={open} setOpen={setOpen} responsiveOpen={responsiveOpen} setResponsiveOpen={setResponsiveOpen} />
            </div>
        </div>
    );
};
export default Layout;
