// bot press api key 
// bp_pat_vVsQWTW9aj7KuoRApXcAKvJsa5ifPN8gse6S
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTBiMDM3NzItYzg5Yy00NzgyLTkwMDYtY2JiNWY5NTZhYmFjIiwidHlwZSI6ImFwaV90b2tlbiJ9.tBMkcsOQgqPS6ey40Cn7zwyRSO6rC0w06F2T9YXP3iM





















function resp(d) {
    if(d===false){
      var ol = document.createElement("p")
      ol.className='otp'
      ol.innerHTML="   <img src='favicon.ico' alt='!' style='height: 5vh; margin-right:2%; display:inline;animation:img 1s;'><div style='display:inline-flex;'> Thanks for asking me. <br> Here's my answer.. <br> Sorry I don't know the answer!</div>"
      document.getElementById('gpt').appendChild(ol)
    }
    else{
  
      var o = document.createElement("p")
      o.className='otp'
      o.innerHTML="<img src='favicon.ico' alt='!' style='height: 5vh; margin-right:2%; display:inline;animation:img 1s;'><div style='display:inline-flex;'>Thanks for asking me. <br> Here's my answer.. <br>"
      + d + "</div>"
      document.getElementById('gpt').appendChild(o)
    }
}  

export const check = pop=>{
    var a = pop
    if(a==='hi'){
    var o = document.createElement("p")
    o.className='otp'
    o.innerHTML="<img src='favicon.ico' alt='!' style='height: 5vh; margin-right:2%; display:inline;animation:img 1s;'><div style='display:inline-flex;'>Hi!<br>Thanks for using me.<br>How can I help you?"
    document.getElementById('gpt').appendChild(o)
    }
    else if(a===""){
      var olh = document.createElement("p")
      olh.className='otp'
      olh.innerHTML=
      "<img src='favicon.ico' alt='!' style='height: 5vh; margin-right:2%; display:inline;animation:img 1s;'><div style='display:inline-flex;'>Sorry, I couldn't understand. Please clarify your question. <br>Thanks for using me.<br>How can I help you?"
      document.getElementById('gpt').appendChild(olh)
    
    }
    else if (a==="how are you"){
      resp("I am fine")
    }
    else{
      var ol = document.createElement("p")
      ol.className='otp'
      ol.innerHTML=
      "<img src='favicon.ico' alt='!' style='height: 5vh; margin-right:2%; display:inline;animation:img 1s;'><div style='display:inline-flex;'>Sorry, I don't know the answer. <br>Thanks for using me.<br>How can I help you?"
      document.getElementById('gpt').appendChild(ol)
      
    }
    
    }