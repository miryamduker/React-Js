import "../style/nav.css";
import React from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler,
    MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import logo from '../pics/logo.jpg'


export default function Navigation(props) {

    const { user, setUser } = props

    return (
        <MDBNavbar color="black" dark expand="md">
            <MDBNavbarBrand>
                <MDBNavLink className="white-text" to="/"><img src={logo} /></MDBNavLink>
            </MDBNavbarBrand>
            <MDBNavbarToggler />
            <MDBCollapse id="navbarCollapse3" navbar>
                <MDBNavbarNav right>
                    <MDBNavItem >
                        <MDBNavLink to={user?.id ? "/homePage" : ''}>
                            <MDBIcon icon="home" className="white-text pl-2" />
                            דף הבית
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to={user?.id ? "/showBuisness/hairdressers" : ''}>
                            מתסרקות
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to={user?.id ? "/showBuisness/makeupArtists" : ''}>
                            מאפרות
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to={user?.id ? "/showBuisness/shaitelMachers" : ''}>
                            פאניות
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to={user?.id ? "/showBuisness/dressRentals" : ''}>
                            השכרות שמלות
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to={user?.id ? "/showBuisness/flowers" : ''}>
                            פרחים
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to={user?.id ? "/showBuisness/cosmetics" : ''}>
                            קוסמטיקה
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink className="waves-effect waves-light" to={user?.id ? "/favorites" : ''}>
                            <MDBIcon icon="heart" className="white-text pl-1" />
                            מועדפים
                        </MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav left>
                    <MDBNavItem>
                        <MDBNavLink to="/aboutUs">
                            אודותינו
                            <MDBIcon icon="address-card" className="white-text pr-2" />
                        </MDBNavLink>
                    </MDBNavItem>
                    <div hidden={user?.id !== 1}>
                        <MDBNavItem>
                            <MDBNavLink to="/newBusiness">
                                הכנסת עסק
                            </MDBNavLink>
                        </MDBNavItem>
                    </div>
                    <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                {user.userName}
                                <MDBIcon icon="user" className="white-text pr-2" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown-default">
                                <MDBDropdownItem href={user?.id ? "/" : ""}>
                                    יציאה מהחשבון
                                </MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse >
        </MDBNavbar >
    );
}