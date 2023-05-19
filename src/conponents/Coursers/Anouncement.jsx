import React from 'react'
import { styled } from 'styled-components'

const Anouncement = () => {
  return (
    <Contain>
<h1>Anouncement</h1>
<button>Go To Student Page</button>
    </Contain>
  )
}

export default Anouncement

const Contain = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -550px;
    margin-left: 350px;
    width: 1150px;
    height: 450px;
    background-color: aqua;

    button{
        width: 150px;
        height: 30px;
        background-color: greenyellow;
        border-radius: 20px;
        margin-left: 550px;
    }

`