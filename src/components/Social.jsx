import React from "react";

const Social = () => {

    const anim =()=>{
        const icons =document.querySelectorAll('.social-network a')  
        icons.forEach(link => {
           link.addEventListener("mouseover", (e)=>{
            link.style.transform =`translate( ${e.offsetX-20 }px, ${e.offsetY-13 }px )`
           })
           link.addEventListener("mouseleave", (e)=>{
            link.style.transform =""
           })
        });
    }


  return (
    <div className="social-network">
      <ul className="content">
        <a href="" target="_blank" rel="noopener noreferer" className="hover"
        onMouseOver={anim} >
          <li>
            <i className="fab fa-twitter"></i>
          </li>
        </a>
        <a href="" target="_blank" rel="noopener noreferer" className="hover" onMouseOver={anim}>
          <li>
            <i className="fab fa-instagram"></i>
          </li>
        </a>{" "}
        <a href="" target="_blank" rel="noopener noreferer" className="hover" onMouseOver={anim}>
          <li>
            <i className="fab fa-facebook"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Social;
