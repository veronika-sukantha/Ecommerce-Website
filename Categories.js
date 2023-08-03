import React from 'react'
import { Link } from 'react-router-dom'

function Categories() {
  function navigateToPage(event, path) {
    event.preventDefault();
    window.location.href = path;
  }
  return (
  
    <div>
      <nav>
      
        <Link> <a href="/women-ethnic" className="nav-link active text-dark" aria-current="page"
                  onClick={(e) => navigateToPage(e, '/EarBuds')} > Ear Buds </a> </Link>
        <Link ><a href="/Earbudsnm" className="nav-link active text-dark" aria-current="page"
                  onClick={(e) => navigateToPage(e, '/Watches')} > Watches </a> </Link>
        <Link ><a href="/NeckBands" className="nav-link active text-dark" aria-current="page"
                  onClick={(e) => navigateToPage(e, '/NeckBands')} > NeckBands </a> </Link>
        
      </nav>
    </div>
  )
}

export default Categories