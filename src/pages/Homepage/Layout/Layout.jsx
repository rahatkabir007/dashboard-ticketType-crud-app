import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import RightContent from "./RightContent/RightContent";


const Layout = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className="flex">
            <Sidebar open={open} setOpen={setOpen} />
            <div className="h-screen flex-1">
                <RightContent />
            </div>
        </div>
    );
};
export default Layout;
