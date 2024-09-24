import { Toolbar, Avatar, Typography, ButtonGroup, Button, AppBar } from "@mui/material";
import React from "react";
import Search from "./Search.tsx";
import SearchIconWrapper from "./SearchIconWrapper.tsx";
import SearchIcon from '@mui/icons-material/Search';
import StyledInputBase from "./StyledInputBase.tsx";
import logo from '../d2rlogo2.png';

function AppHeader({handleStatsClick, handleUniquesClick, handleSetsClick, handleOtherClick}): React.JSX.Element {
    return (
        <AppBar position='static'>
            <Toolbar >
                <Avatar src={logo} sx={{ width: 36, height: 36, mr: 2 }} />
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Grail Tracker
                </Typography>
                <ButtonGroup size='small' sx={{ ml: 'auto', mr: 'auto' }}>
                    <Button variant="contained" color="inherit" onClick={handleStatsClick}>stats</Button>
                    <Button variant="contained" color="inherit" onClick={handleUniquesClick}>uniques</Button>
                    <Button variant="contained" color="inherit" onClick={handleSetsClick}>sets</Button>
                    <Button variant="contained" color="inherit" onClick={handleOtherClick}>other</Button>
                </ButtonGroup>
                <Search sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Toolbar>
        </AppBar>
    )
}

export default AppHeader;