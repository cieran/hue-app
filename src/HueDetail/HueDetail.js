import React, { Component } from 'react'
import './HueDetail.css'

const HueDetail = props => {

    const data = props.client

    return (
        <div>
            <p>{data}</p>
        </div>


    )

}

export default HueDetail