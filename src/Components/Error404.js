import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const Error404 = props => {
    return (
        <div>
        <h2>Oops!</h2>
        <section className="goToHome">
            <p>We don't have a page called { props.location.pathname }!</p>

            <NavLink onClick={props.resetState} to="/">
                <button>Go to homepage</button>
            </NavLink>
        </section>
        </div>
    )
}

export default withRouter(Error404);