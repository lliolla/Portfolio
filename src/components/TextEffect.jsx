import React, { useEffect } from "react";

const TextEffect = () => {
  useEffect(() => {
    const target = document.getElementById("text-target");
    let array = ["Frontend","React","VueJs","NodeJS"];
    let wordIndex = 0; //what word in array
    let letterIndex = 0; //what letter in the word

    const creatLetter = () => {
      const letter = document.createElement("span");
      target.appendChild(letter);
      letter.classList.add("letter");
      letter.style.opacity = "0";
      letter.style.animation = "anim 5s ease forwards";
      letter.textContent = array[wordIndex][letterIndex];

      setTimeout(() => {
        letter.remove();
      }, 2000);
    };
    const loop = () => {
        setTimeout(() => {
            if (wordIndex>=array.length){
                wordIndex=0;
                letterIndex=0;
                loop()
            }else if (letterIndex< array[wordIndex].length ){
                creatLetter()
                letterIndex++
                loop()
            }else{
                letterIndex=0;
                wordIndex++
                setTimeout(loop,2100)
            }
           
        }, 80);
    };
    loop();
  }, []);

  return (
    <span className="dynamic-text">
      <span>Développeuse</span>
      <span id="text-target"></span>
      <span id="text-target"></span>
    </span>
  );
};

export default TextEffect;
