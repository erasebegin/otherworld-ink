import React from 'react'
import styled from 'styled-components'

export default function LegalNav({passCurrent}) {
    const passCurrentTab = (tab) => {
        passCurrent(tab)
    }

    return (
        <Nav>
            <li>
                <button className="nav-link uppercase" onClick={()=>passCurrentTab("customer")}>Customer Service Policy</button>
            </li>
            <li>
                <button className="nav-link uppercase" onClick={()=>passCurrentTab("privacy")}>Privacy Policy</button>
            </li>
            <li>
                <button className="nav-link uppercase" onClick={()=>passCurrentTab("return")}>Refund Policy</button>
            </li>
            <li>
                <button className="nav-link uppercase" onClick={()=>passCurrentTab("use")}>Acceptable Use Policy</button>
            </li>
        </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5em;
    background: rgb(54, 0, 54);
    width: 100%;
    list-style: none;
    margin-top: 1em;

    button {
        color: var(--purple3);
        background: none;
        border: none;
        box-shadow: none;

        &:hover {
            color: var(--pink);
            border: none;
        }

        &:active {
            border: none;
            outline: none;
        }
    }

    @media (max-width: 768px) {
    flex-direction: column;
  }
`
