import { cilLeaf } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CNavbar,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CContainer,
  CNavItem,
  CNavLink,
  CNavbarNav,
  CRow,
  CCol
} from "@coreui/react";
import { useState } from "react";
import styles from "./Header.module.scss";

function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <CNavbar expand="lg" className={`bg-body-transparent ${styles.header}`}>
      <CContainer fluid>
        <CNavbarBrand href="#" className="ms-5 fw-medium text-white">
        <CIcon icon={cilLeaf} size="xl" className="me-1" style={{ color: 'green' }} />
        Plants Store
        </CNavbarBrand>

        <CNavbarToggler
          aria-label="Toggle navigation"
          aria-expanded={visible}
          onClick={() => setVisible(!visible)}
        />

        <CCollapse className="navbar-collapse" visible={visible}>
          <CRow className="w-100 d-flex justify-content-between">
            <CCol md={9} className="d-flex align-items-center justify-content-center">
              <CNavbarNav className="list-unstyled d-flex">
                <CNavItem className="mx-3 fw-bold">
                  <CNavLink className="text-white" href="#" active>
                    Home
                  </CNavLink>
                </CNavItem>
                <CNavItem className="mx-3">
                  <CNavLink href="#" className="text-white">Shop</CNavLink>
                </CNavItem>
                <CNavItem className="mx-3">
                  <CNavLink href="#" className="text-white">About us</CNavLink>
                </CNavItem>
              </CNavbarNav>
            </CCol>
            <CCol md={3} className="d-flex align-items-center justify-content-center">
            <CNavbarNav className="list-unstyled d-flex">
              <CNavItem>
                <button className="btn btn-primary">Sign in</button>
              </CNavItem>
              </CNavbarNav>
            </CCol>
          </CRow>
        </CCollapse>

      </CContainer>
    </CNavbar>
  );
}

export default Header;
