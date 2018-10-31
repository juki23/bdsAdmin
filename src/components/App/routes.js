import React, { Component } from 'react';
import Project from './../Admin/Project/Project';
import Contact from './../Admin/Contact/Contact';
import News from './../Admin/News/News';
import User from './../Admin/User/User';
import District from './../Admin/District/District';
import About from './../Admin/About/About';

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Project />
    },
    {
        path: "/project",
        exact: false,
        main: () => <Project />
    },
    {
        path: "/contact",
        exact: false,
        main: () => <Contact />
    },
    {
        path: "/news",
        exact: false,
        main: () => <News />
    },
    {
        path: "/user",
        exact: false,
        main: () => <User />
    },
    {
        path: "/district",
        exact: false,
        main: () => <District />
    },
    {
        path: "/about",
        exact: false,
        main: () => <About />
    }
];

export default routes;