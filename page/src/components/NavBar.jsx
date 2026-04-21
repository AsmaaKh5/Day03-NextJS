import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  const {data:session} = useSession()
  if(session){
    return (
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="/products">Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="/recipes">Recipes</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link" href="/quotes">Quotes</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link" href="/users">Users</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="/api/auth/signout" onClick={()=>signOut}>SignOut</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    );
  }
};

export default NavBar;