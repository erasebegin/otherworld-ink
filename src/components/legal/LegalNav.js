import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

export default function LegalNav({passCurrent}) {
    const passCurrentTab = (tab) => {
        passCurrent(tab)
    }

    return (
        <Nav>
            <li>
                <a href="#" className="nav-link uppercase" onClick={()=>passCurrentTab("customer")}>Customer Service Policy</a>
            </li>
            <li>
                <a href="#" className="nav-link uppercase" onClick={()=>passCurrentTab("privacy")}>Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="nav-link uppercase" onClick={()=>passCurrentTab("return")}>Refund Policy</a>
            </li>
            <li>
                <a href="#" className="nav-link uppercase" onClick={()=>passCurrentTab("use")}>Acceptable Use Policy</a>
            </li>
        </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(54, 0, 54);
    width: 100%;
    list-style: none;

    a {
        color: var(--purple3);

        &:hover {
            color: var(--pink)
        }
    }

    @media (max-width: 768px) {
    flex-direction: column;
  }
`
