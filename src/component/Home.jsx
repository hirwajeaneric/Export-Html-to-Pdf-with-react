import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { MainComponents, Navigation, NavigationComponents } from './StyledComponents'

export default function Home () {
  return (
    <MainComponents>
        <Navigation>
            <h1>Exporting to pdf</h1>
            <NavigationComponents>
                <NavLink to={'/pdf-one'}>Page 1</NavLink>
                <NavLink to={'/pdf-two'}>Page 2</NavLink>
            </NavigationComponents>
        </Navigation>
        <Outlet />
    </MainComponents>
  )
}