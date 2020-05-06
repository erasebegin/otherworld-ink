import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import LegalNav from '../components/legal/LegalNav'
import AcceptableUse from '../components/legal/AcceptableUse'
import Customer from '../components/legal/Customer'
import Return from '../components/legal/Return'
import Privacy from '../components/legal/Privacy'

export default function Legal() {
    const [currentDisplay, setCurrentDisplay] = useState(<Customer />)

    const setCurrent = (tab) => {
        if (tab === "privacy") {
            setCurrentDisplay(<Privacy />)
        } else if (tab === "return") {
            setCurrentDisplay(<Return />)
        } else if (tab === "use") {
            setCurrentDisplay(<AcceptableUse />)
        } else if (tab === "customer") {
            setCurrentDisplay(<Customer />)
        }

    }


    return (
        <Layout>
            <LegalNav passCurrent={setCurrent} />
            <LegalContainer>
                {currentDisplay}
            </LegalContainer>
        </Layout>
    )
}

const LegalContainer = styled.div`

    padding: 0 20%;
    margin-bottom: 3em;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
        padding: 0 10%;
    }

    p {
        color: gray;
    }

    ul {
        color: gray;
    }

    h1 {
        margin: 1em 0;
    }

    h2 {
        margin: .5em 0;
    }

    a {
        color: var(--pink);
    }
`
