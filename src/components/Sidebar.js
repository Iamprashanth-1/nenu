import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 75px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 3.4em;      /* Stay at the top */
  background-color: #222; /* Black */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
`;
const StyledNavItem = styled.div`
  height: 70px;
  width: 75px; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */
  a {
    font-size: 2.7em;
    color: ${(props) => props.active ? "white" : "#9FFFCB"};
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
    }  
  }
`;
const NavIcon = styled.div`
`;
class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
      }
    render() {
        const { active } = this.props;
      return (
        <StyledNavItem active={active}>
        <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
          <NavIcon></NavIcon>
        </Link>
      </StyledNavItem>
      );
    }
  }
class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          activePath: '/',
          items: [
            {
              path: '/', /* path is used as id to check which NavItem is active basically */
              name: 'Home',
              css: 'fa fa-fw fa-home',
              key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
            },
            {
              path: '/about',
              name: 'About',
              css: 'fa fa-fw fa-clock',
              key: 2
            },
            {
              path: '/NoMatch',
              name: 'NoMatch',
              css: 'fas fa-hashtag',
              key: 3
            },
          ]
        }  
      }
      onItemClick = (path) => {
        this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
      }
}
export default class Sidebar extends React.Component {
  render() {
    return (
        <StyledSideNav></StyledSideNav>
    );
  }
}