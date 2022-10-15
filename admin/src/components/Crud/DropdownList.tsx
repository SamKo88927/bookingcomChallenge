import React, { useState } from 'react'

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { GrAdd } from 'react-icons/gr';

const DropdownList = ({ data, set }) => {
    const [open, setOpen] = useState(false);
    const [clickIndex, setClickIndex] = useState("");
    const [openConditions, setOpenConditions] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div className='mt-3'>
            <label htmlFor={data.id}>{data.name}</label>
            <ListItemButton onClick={handleClick}
                sx={{
                    backgroundColor: "white",
                    border: "1px solid grey",
                    justifyContent: "space-between",
                    color: "black",
                    "&.Mui-selected": {
                        backgroundColor: "white"
                    },
                    "&.Mui-focusVisible": {
                        backgroundColor: "white"
                    },
                }}
            >
                <input id={data.id} className="bg-transparent w-full text-white focus:outline-none"
                    placeholder={`ex.${data.placeholder}`}
                    value={clickIndex} onChange={(e) => setClickIndex(e.target.value)}
                    style={{ color: "black" }} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding
                    sx={{
                        width: '100%',
                        backgroundColor: "white",
                        overflow: 'auto',
                        maxHeight: 250,
                        color: "black",
                        border: "1px solid grey"
                    }}>
                    {set.map((set, i) =>
                        <ListItemButton key={i} sx={{ px: 3, borderBottom: "1px solid lightgrey" }}>
                            <ListItemIcon>
                                <GrAdd />
                            </ListItemIcon>
                            <ListItemText primary={set} sx={{ textAlign: "end" }} onClick={() => setClickIndex(set)} />
                        </ListItemButton>
                    )}
                </List>
            </Collapse>
        </div>
    )
}

export default DropdownList