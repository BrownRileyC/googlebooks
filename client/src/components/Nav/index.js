import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className='container-fluid'>
    <a className="navbar-brand" href="/">
            GoogleBooks, Search and Save
      </a>
      <div className='row justify-content-end'>
        <div className='col'>
          <a className="navbar-brand" href="/books">
            Saved Books
      </a>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Nav;
