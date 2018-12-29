import React, { Component } from 'react';
import Project from './../Admin/Project/Project';
import Contact from './../Admin/Contact/Contact';
import News from './../Admin/News/News';
import District from './../Admin/District/District';
import AboutActionPage from './../../pages/AboutPage/AboutActionPage';
import UserActionPage from './../../pages/UserPage/UserActionPage';

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
        main: () => <UserActionPage />
    },
    {
        path: "/district",
        exact: false,
        main: () => <District />
    },
    {
        path: "/about",
        exact: false,
        main: () => <AboutActionPage />
    }
];

export default routes;