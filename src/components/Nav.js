import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Nav extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/principles">Principles</Link>
            </div>
        )
    }
}

export default Nav
