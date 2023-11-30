import React from 'react';
import { Drawer, List, ListItem, ListItemText, Typography, Hidden } from '@mui/material';
import { styled } from '@mui/system';

const drawerWidth = 250; // Set your desired width for the drawer

const StyledDrawer = styled(Drawer)({
    width: drawerWidth,
    flexShrink: 0,
});

const StyledDrawerContent = styled('div')({
    background: 'linear-gradient(180deg, #038a8a, #020112)',
    height: '100%',
    width: drawerWidth, // Set the width of the content area to match the drawer width
});

const StyledTitle = styled(Typography)({
    textAlign: 'center',
    padding: '16px',
    color: '#038a8a',
    fontWeight: 'bold',
    background: 'linear-gradient(180deg,#020112, #037d7f)',
});

const StyledListItem = styled(ListItem)({
    '&:hover': {
        backgroundColor: '#03b0b0',
        color: '#020112',
    },
});

const NavigationMenu = ({ isOpen, onClose, onPageChange }) => {
    return (
        <>
            {/* Permanent Drawer for Desktop */}
            <Hidden mdDown>
                <StyledDrawer variant="permanent" anchor="left" open>
                    <StyledDrawerContent>
                        <StyledTitle variant="h6">DuoDo</StyledTitle>
                        <List>
                            {['Home', 'Todo', 'About'].map((page) => (
                                <StyledListItem
                                    button
                                    key={page}
                                    onClick={() => onPageChange(page)}
                                >
                                    <ListItemText primary={page} />
                                </StyledListItem>
                            ))}
                        </List>
                    </StyledDrawerContent>
                </StyledDrawer>
            </Hidden>

            {/* Temporary Drawer for Mobile */}
            <Hidden lgUp>
                <StyledDrawer anchor="left" open={isOpen} onClose={onClose} variant="temporary">
                    <StyledDrawerContent>
                        <StyledTitle variant="h6">DuoDo</StyledTitle>
                        <List>
                            {['Home', 'Todo', 'About'].map((page) => (
                                <StyledListItem
                                    button
                                    key={page}
                                    onClick={() => onPageChange(page)}
                                >
                                    <ListItemText primary={page} />
                                </StyledListItem>
                            ))}
                        </List>
                    </StyledDrawerContent>
                </StyledDrawer>
            </Hidden>
        </>
    );
};

export default NavigationMenu;