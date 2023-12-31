import React, { useState } from 'react';
import { GlobalProvider } from 'utils/GlobalUtils';
import TodoApp from 'components/TodoApp';
import NavigationMenu from 'components/NavigationMenu';
import { Grid, AppBar, Toolbar, IconButton, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import { Box } from "@mui/system";

const drawerWidth = 250; // Set the width of the drawer

export default function App() {
    const [selectedPage, setSelectedPage] = useState('Home');
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const handlePageChange = (page) => {
        setSelectedPage(page);
        setDrawerOpen(false); // Close the drawer when changing the page
    };

    return (
        <GlobalProvider>
            <style>
                {`
          body {
            margin: 0;
            padding: 0;
            background: linear-gradient(180deg, #038a8a, #020112);
          }
        `}
            </style>

            <AppBar style={{ background: 'linear-gradient(180deg,#020112, #038a8a)' }} position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => setDrawerOpen(true)}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <h2 style={{ flexGrow: 1, textAlign: 'center', color:'#020112' }}>{selectedPage}</h2>
                </Toolbar>
            </AppBar>

            <NavigationMenu
                isOpen={isDrawerOpen}
                onClose={() => setDrawerOpen(false)}
                onPageChange={handlePageChange}
            />

            <div style={{ display: 'flex', height: '100vh' }}>
                <Hidden mdDown>
                    {/* Drawer for desktop */}
                    <div
                        style={{
                            flex: '0 0 250px',
                            overflowX: 'hidden',
                        }}
                    >
                        {/* NavigationMenu component */}
                        <NavigationMenu
                            isOpen={isDrawerOpen}
                            onClose={() => setDrawerOpen(false)}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </Hidden>

                <div style={{ flex: '1', overflowX: 'hidden' }}>
                    {/* Content of the page */}
                    {(() => {
                        switch (selectedPage) {
                            case 'Todo':
                                return <TodoApp />;
                            case 'Home':
                                return <HomePage />;
                            case 'About':
                                return <AboutPage />;
                            default:
                                return <div>{`Content of ${selectedPage}`}</div>;
                        }
                    })()}
                </div>
            </div>
        </GlobalProvider>
    );
}
