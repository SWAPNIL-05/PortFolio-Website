import React from 'react';


const SocialMedia = () => {

    const handleIconClick = (url) => {
      window.location.href = url; 
    };
  return (
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
      <span className="bannerIcon" onClick={() => handleIconClick("https://www.instagram.com/swapnilmore_swapy/")}>
      <i className="fa-brands fa-instagram" />
      </span>
      <span className="bannerIcon" onClick={() => handleIconClick("https://github.com/SWAPNIL-05")}>
      <i className="fa-brands fa-github" />
      </span>
      <span className="bannerIcon" onClick={() => handleIconClick("https://www.linkedin.com/in/moreswapnil/")}>
        <i className="fa-brands fa-linkedin" />
      </span>
    </div>
      </div>
  );
}

export default SocialMedia;