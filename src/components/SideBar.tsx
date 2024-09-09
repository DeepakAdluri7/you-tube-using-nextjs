import { SideMenu } from "./SideMenu";

export function SideBar() {
    return <div className="grid">
        <div className="mb-3">
            <SideMenu></SideMenu>
        </div>
        <div className="mb-3">
            <SideMenu></SideMenu>
        </div>
        <div className="mb-3">
            <SideMenu></SideMenu>
        </div>
        <div className="mb-3">
            <SideMenu></SideMenu>
        </div>

    </div>
}