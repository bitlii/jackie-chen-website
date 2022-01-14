import "./header.scss";
import {Menu} from "semantic-ui-react";


export default function Header() {
    return (
        <Menu fixed="top" borderless>
            <Menu.Item href="#home"> Home </Menu.Item>
            <Menu.Item href="#about"> About </Menu.Item>
            <Menu.Item href="#experience"> Experience </Menu.Item>
            <Menu.Item href="#education"> Education </Menu.Item>
            <Menu.Item href="#skills"> Skills </Menu.Item>
            <Menu.Item href="#projects"> Projects </Menu.Item>
        </Menu>
    )
}
