import React, {useEffect} from 'react';

const Mouse = () => {
    useEffect(() => {
    const cursor= document.querySelector(".cursor")
    //get aal mouvement of mousse
    window.addEventListener('mousemove',(e)=>{
        cursor.style.top=e.y+"px";
        cursor.style.left=e.x+"px"
    })
    document.querySelectorAll(".hover").forEach((link)=>{
       link.addEventListener('mouseover',()=>{
        cursor.classList.add("hovered");
       })
       link.addEventListener('mouseleave',()=>{
        cursor.style.transition="0.3s ease-out";
        cursor.classList.remove("hovered");
       })
    })
    }, [])
    
    return (
       <span className="cursor"></span>
    );
};

export default Mouse;