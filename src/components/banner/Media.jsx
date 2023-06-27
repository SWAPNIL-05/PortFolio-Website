import React from 'react';

const Media = () => {
  const handleIconClick = (url) => {
    window.location.href = url; 
  };
  
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
          <span className="bannerIcon" onClick={() => handleIconClick("https://www.instagram.com/swapnilmore_swapy/")}>
          <i className="fa-brands fa-instagram" />
      </span>
      <span className="bannerIcon" onClick={() => handleIconClick("https://github.com/SWAPNIL-05")}>
      <i className="fa-brands fa-github" />
      </span>
      <span className="bannerIcon" onClick={() => handleIconClick("https://www.linkedin.com/in/moreswapnil/")}>
      <i className="fa-brands fa-linkedin"/>
      </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon"  onClick={() => handleIconClick("https://html.com/")}>
            <i className="fa-brands fa-html5" />
            </span>
            <span className="bannerIcon" onClick={() => handleIconClick("https://www.w3schools.com/css/default.asp")}>
            <i className="fa-brands fa-css3-alt" />
            </span>
            <span className="bannerIcon" onClick={() => handleIconClick("https://legacy.reactjs.org/")}>
            <i className="fa-brands fa-react" />
            </span>
            <span className="bannerIcon" onClick={()=>handleIconClick("https://getbootstrap.com/")}>
            <i className="fa-brands fa-bootstrap" />
            </span>
            <span className="bannerIcon" onClick={()=>handleIconClick("https://www.javascripttutorial.net/")}>
            <i className="fa-brands fa-square-js" />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media