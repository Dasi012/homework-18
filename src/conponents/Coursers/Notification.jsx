import React from 'react'
import { styled } from 'styled-components'

const Notification = () => {
  return (
    <Contain>

<h1>Go To Notification Page</h1>
<button>Go To Student Page</button>

    </Contain>
  )
}

export default Notification


const Contain = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -550px;
    margin-left: 350px;
    width: 450px;
    width: 1150px;
    height: 450px;
    background-color: aqua;
    button{
        width: 150px;
        height: 30px;
        background-color: greenyellow;
        border-radius: 20px;
        margin-left: 600px;
    }
`