import "./PricingCard.css"
import React from 'react'
import { Link } from 'react-router-dom'

const PricingCard = () => {
  return (
    <>
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>-- Basic-- </h3>
                <span className="bar"></span>
                <p className="btc">$ 10</p>
                <p>__ 3 Days __</p>
                <p>__ 3 Pages __</p>
                <p>__ Featured __</p>
                <p>__ Responsive Layout __</p>
                <Link to={"/contact"} className="btn">Interseted?</Link>
            </div>
            {/* 2nd card */}
            <div className="card">
                <h3>-- Premium --</h3>
                <span className="bar"></span>
                <p className="btc">$ 30</p>
                <p>__ 2 Days __</p>
                <p>__ 5 Pages __</p>
                <p>__ Featured __</p>
                <p>__ Responsive Layout __</p>
                <Link to={"/contact"} className="btn">Interseted?</Link>
            </div>
            {/* 3rd Card */}
            <div className="card">
                <h3>-- Business --</h3>
                <span className="bar"></span>
                <p className="btc">$ 50</p>
                <p>__ 2 Days __</p>
                <p>__ 8 Pages __</p>
                <p>__ Featured __</p>
                <p>__ Responsive Layout __</p>
                <Link to={"/contact"} className="btn">Interseted?</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default PricingCard