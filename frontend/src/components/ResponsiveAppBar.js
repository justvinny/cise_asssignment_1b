import { useContext, useState } from "react";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Button,
    MenuItem,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { CurrentUrlContext } from "../context/CurrentUrlContext";

const pages = [
    { title: "Home", url: "/" },
    { title: "Propose Article", url: "propose-article" },
    { title: "View Articles", url: "view-article" },
];

const ResponsiveAppBar = () => {
    // States
    const [selectedPage, setSelectedPage] = useContext(CurrentUrlContext);
    const [anchorElNav, setAnchorElNav] = useState(null);
    const navigate = useNavigate();

    /**
     * Dynamic background color for active non-dropdown menu items.
     * @param {*} url
     * @returns
     */
    const highlightSelected = (url) => {
        return url === selectedPage ? "#09f" : "";
    };

    /**
     * Dynamic text-decoration for active dropdown menu links.
     * @param {*} url
     * @returns
     */
    const underlineSelected = (url) => {
        return url === selectedPage ? "underline" : "";
    };

    /**
     * Handler for clicking a menu link.
     * @param {*} url
     * @returns
     */
    const openMenuLink = (url) => () => {
        handleCloseNavMenu();
        setSelectedPage(url);
        navigate(url);
    };

    /**
     * Handller for opening dropdown menu.
     * @param {*} event
     */
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    /**
     * Handler for closing dropdown menu.
     */
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ bgcolor: "#111" }}>
            <Container maxWidth="xl" sx={{ marginBottom: 0 }}>
                <Toolbar disableGutters>
                    <MenuItem onClick={openMenuLink("/")}>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            SPEED
                        </Typography>
                    </MenuItem>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="menu for speed"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={`${page.title}-1`}
                                    onClick={openMenuLink(page.url)}
                                    sx={{
                                        textDecoration: underlineSelected(
                                            page.url
                                        ),
                                        ":hover": {
                                            textDecoration: "underline",
                                        },
                                    }}
                                >
                                    <Typography textAlign="center">
                                        {page.title}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <MenuItem
                        onClick={openMenuLink("/")}
                        sx={{ marginRight: 0 }}
                    >
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            SPEED
                        </Typography>
                    </MenuItem>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                alignSelf: "stretch",
                                xs: "none",
                                md: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                            },
                        }}
                        data-testid="menu-items"
                    >
                        {pages.map((page) => (
                            <Button
                                key={`${page.title}-2`}
                                onClick={openMenuLink(page.url)}
                                sx={{
                                    bgcolor: highlightSelected(page.url),
                                    borderRadius: 0,
                                    color: "white",
                                    display: "block",
                                    textTransform: "none",
                                    fontWeight: "900",
                                    ":hover": { bgcolor: "#09f" },
                                }}
                            >
                                {page.title}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default ResponsiveAppBar;