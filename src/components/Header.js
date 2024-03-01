import React from 'react';

const Header = ({ currentUser, onSignOut }) => {
  return (
    <header>
      <h1>My Blog</h1>
      <nav>
        {currentUser ? (
          <>
            <span>Welcome, {currentUser.displayName}</span>
            <button onClick={onSignOut}>Sign Out</button>
          </>
        ) : (
          <a href="/login">Login</a>
        )}
      </nav>
    </header>
  );
};

export default Header;
