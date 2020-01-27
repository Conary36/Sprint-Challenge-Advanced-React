import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
   display: flex;
   flex-flow: column nowrap;
   border-radius: 10%;
   width: 33%;
   border 2px solid palevioletred;
   align-items: center;
   position: relative;

 `;

export default function PlayerCard ({name, country,searches}){

    return(
        <section>
            <Div>
                <h2>Name: {name}</h2>
                <p>Country:{country}</p>
                <p>Searches:{searches}</p>
            </Div>
        </section>
    )
}