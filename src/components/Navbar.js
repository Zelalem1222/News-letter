import React from "react";


export const Navbar = ({countryCode}) => {
 
  const handleCountry = (e) => {
    e.preventDefault();
    
    if(e.target.value === 'gb'){
      countryCode(e.target.value);
    }else if(e.target.value === 'us'){
      countryCode(e.target.value);
    }else if(e.target.value === ''){
      countryCode('gb');
    }
  }    

  

    return ( 
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
             <a className="navbar-brand" href="/">News</a>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
             </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
          <a className="nav-link" href="/">Top News <span class="sr-only">(current)</span></a>
       </li>
       <li className="nav-item">
        <a className="nav-link" href="#">Categories</a>
       </li>
      <li className="nav-item">
        <a className="nav-link " href="/search">Search</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <button className="btn btn-outline-success my-2 my-sm-0" value='us' onClick={handleCountry} type="submit">US</button>
      <button className="btn btn-outline-success my-2 my-sm-0" value='gb' onClick={handleCountry} type="submit">GB</button>
    </form>
  </div>
</nav>
        </>       
    )
}