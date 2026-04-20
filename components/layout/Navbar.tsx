"use client";

import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="navbar">
      <div className="navbar-inner">

        <div className="logo">Nitisetu</div>

        <div className="nav-links">

          {/* PRODUCTS */}
          <div
            className="nav-item"
            onMouseEnter={() => setActive("products")}
            onMouseLeave={() => setActive(null)}
          >
            <span>Products ▾</span>

            {active === "products" && (
              <div className="dropdown mega glass">
                <div className="dropdown-grid">

                  <div className="dropdown-card">
                    <h4>Captions</h4>
                    <p>Generate and edit videos with AI.</p>
                  </div>

                  <div className="dropdown-card">
                    <h4>API</h4>
                    <p>Build using the Mirage platform.</p>
                  </div>

                </div>

                <div className="dropdown-footer">
                  <span>Get started</span>
                  <span>Docs</span>
                </div>
              </div>
            )}
          </div>

          {/* RESEARCH */}
          <div className="nav-item">
            <span>Research</span>
          </div>

          {/* RESOURCES */}
          <div
            className="nav-item"
            onMouseEnter={() => setActive("resources")}
            onMouseLeave={() => setActive(null)}
          >
            <span>Resources ▾</span>

            {active === "resources" && (
              <div className="dropdown resources glass">
                <div className="dropdown-columns">

                  <div className="dropdown-col">
                    <p className="dropdown-title">Learn</p>
                    <span>Blog</span>
                    <span>Help Center</span>
                    <span>Safety and security</span>
                  </div>

                  <div className="dropdown-col">
                    <p className="dropdown-title">Company</p>
                    <span>About us</span>
                    <span>Careers</span>
                  </div>

                </div>
              </div>
            )}
          </div>

        </div>

        <div className="nav-buttons">
          <button className="btn primary">Login</button>
        </div>

      </div>
    </div>
  );
}