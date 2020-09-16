import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem"

const Sidebar = () => {
    return (
        <Drawer
            anhor="right"
            onClose={() => { }}
        >
            Drawer
        </Drawer>
    );
};

export default Sidebar;