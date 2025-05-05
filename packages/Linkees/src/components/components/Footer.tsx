import React from 'react';

import '../../css/skeleton.css';
import '../../css/components.css';

function Footer(): JSX.Element {
  return (
    <div className="Footer container">
      <p>
        Powered by <span className="heart">❤️</span> by <a href={'https://jersey.fm'}>JERSEY.FM</a> Musik
      </p>
    </div>
  );
}

export default Footer;
