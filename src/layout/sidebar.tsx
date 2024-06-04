import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export default function MainSidebar() {
    return (
        <Sidebar>
            <Menu>
                <MenuItem className="menu1">
                    <h2>ANALYZO</h2>
                </MenuItem>
                <MenuItem> نمای کلی </MenuItem>
                <MenuItem> روندها </MenuItem>
                <SubMenu label="مشتریان">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu>
                <SubMenu label="محصولات">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu>
                <SubMenu label="تنظیمات">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    );
}