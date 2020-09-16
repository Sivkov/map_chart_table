import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

const Menu = () => {
    return (
        <AppBar
            position="fixed"
            style={{
                padding: " 20px 0px"
            }}
        >
            <Toolbar>
                <IconButton aria-label="Menu" color="inherit" onClick={() => console.log("OPEN")} >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Menu;