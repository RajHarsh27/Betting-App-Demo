import React from 'react';

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        
          <a className="navbar-brand" href="#">SPORTS11</a>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Cricket</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Football</a>
              </li>
            </ul>

            <input className="form-control me-4" type="search" placeholder="Welcome to India’s ultimate sports & casino destination" aria-label="Search"/>

          </div>
        </div>

        <div className="container-fluid">
          
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Tennis</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Politics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Dreamwheel</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Teenpatti</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Poker</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Kabaddi</a>
              </li>
            </ul>



            <form className="d-flex" role="search">
              
              <button className="btn btn-warning" type="submit" style={{margin: "3px", borderRadius: '5px'}}>LOGIN</button>
              <button type="button" class="btn btn-outline-warning">REGISTER</button>

            </form>

          </div>
        </div>
      </nav>

      
    )
}