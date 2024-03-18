'use client';
import React from 'react';
import Link from 'next/link';


const Navbar = () => {
    return (
        <div id="navbarBody">

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="">
                <Link className="navbar-brand" href="/">Zesty.io</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="/about">About</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>            
        </div>
    )
}

export default Navbar