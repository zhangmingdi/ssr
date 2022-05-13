import React from 'react';
import { Link } from 'react-router-dom';
import router from '../../route/route.config';

function Header() {
  return (
    <div>
      {
        router.map((v) => (
          <Link key={v.path} to={v.path}>
            {v.name}
          </Link>
        ))
      }
    </div>
  );
}

export default Header;
