import Avatar from '@mui/material/Avatar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export default function MainSidebar() {
    return (
        <Sidebar>
            <Menu>
                <MenuItem className="menu1">
                    <div className='flex flex-col items-center justify-center'>
                        <Avatar alt="ANALYZO" src="images/Strategy.png"  />
                        <h2 className='font-semibold'>ANALYZO</h2>
                    </div>
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