let originalBodyOverflow,defaultDomain="app.gpt-trainer.com";
function cookieExist(e){
    return document.cookie.includes(e+"=")
}
function generateIcon(e,t,n,i,o){
    var a=document.createElement("img");a.id=n,a.src=i,a.alt=o}
    // Object.assign(a.style,
    //     {width:"25px",height:"25px",filter:"#ffffff"===t.chat_bubble_text_color?"invert(100%)":"",display:t?.open_by_default?n.includes("open")?"none":"flex":n.includes("open")?"flex":"none"}),e.appendChild(a)}function handleWindowWidthChange(e,t){t=window.innerWidth<640?{height:"100%",maxHeight:"100%",width:"100%",bottom:0,borderRadius:0,border:0,..."left"===t?.widget_vertical_align?{left:0}:{right:0}}:{bottom:"80px",border:"1px solid "+("light"===t.theme?"#e5e7eb":"#343f50"),
    //     borderRadius:"0.75rem",height:"85vh",maxHeight:"800px",width:"450px",..."left"===t?.widget_vertical_align?{left:"1rem"}:{right:"1rem"}};Object.assign(e.style,t)}
    function appendMessage(n,e,t,i)
        {const o=document.createElement("div");o.id="gpt-trainer-message-bubble-"+t,o.innerText=e,Object.assign(o.style,{cursor:"pointer",transition:"all 0.3s",position:"relative",..."left"===i?.widget_vertical_alig?{marginRight:"auto"}:{marginLeft:"auto"},boxShadow:"rgba(150, 150, 150, 0.2) 0px 10px 30px 0px",border:"1px solid rgb(229, 231, 235)",borderRadius:"0.5rem",backgroundColor:"#FFFFFF",color:"#303030",textAlighn:"right",width:"fit-content",opacity:0,fontSize:"14px",lineHeight:"24px",padding:"15px 20px"}),o.addEventListener("click",()=>{
            var e=document.getElementById("gpt-trainer-open-chat-icon"),
            t=document.getElementById("gpt-trainer-close-chat-icon");
            document.getElementById("gpt-trainer-window-iframe").style.display="flex",
            e.style.display="none",t.style.display="flex",
            n&&n.remove()}),
            n&&n.appendChild(o),
            setTimeout(()=>{o.style.opacity=1},500*t)}function generateCloseButton(e,t)
            {const n=document.createElement("button");var i=document.createElement("img");
            i.setAttribute("id","gpt-trainer-close-message-container-icon"),
            i.src=`https://${defaultDomain}/img/widget-images/close-icon.svg`,
            i.style.width="20px",
            i.style.height="20px",
            n.id="gpt-trainer-messages-close-icon",
            n.append(i),
            Object.assign(n.style,{padding:"4px",
            opacity:0,
            borderRadius:"50%",
            fontSize:"12px",
            width:"28px",
            height:"28px",
            boxShadow:"rgba(150, 150, 150, 0.2) 0px 10px 30px 0px",
            backgroundColor:"rgb(241, 245, 249)",
            position:"absolute",
            zIndex:1,top:0,border:"none",..."left"===t.widget_vertical_align?{left:0}:{right:0}}),
            e&&(e.appendChild(n),e.addEventListener("mouseover",()=>{n.style.opacity=1}),
            e.addEventListener("mouseleave",()=>{n.style.opacity=0})),
            n.addEventListener("mouseover",()=>{n.style.backgroundColor="rgb(226, 232, 240)"}),
            n.addEventListener("mouseleave",()=>{n.style.backgroundColor="rgb(241, 245, 249)"}),
            n.addEventListener("click",()=>
            {e&&e.remove()})}function bubbleMessagesValidToAppend(e,t){return 0<t.initial_messages.length&&-1<t.show_initial_messages_time&&!t?.open_by_default&&!cookieExist("gpt-trainer-initial-messages-shown-"+e)}
            function appendBubbleMessages(t,n){const i=document.createElement("div");
            i.id="gpt-trainer-message-bubbles-container",
            Object.assign(i.style,{border:"none",position:"fixed",bottom:"80px",..."left"===n?.widget_vertical_align?{left:"1rem"}:{right:"1rem"},zIndex:9999999,maxHeight:"400px",maxWidth:"500px",display:"flex",flexDirection:"column",gap:"1rem",paddingTop:"0.5rem"}),document.body.appendChild(i),setTimeout(()=>{generateCloseButton(i,n),n.initial_messages.forEach((e,t)=>{appendMessage(i,e,t+1,n)});var e=new Date;e.setDate(e.getDate()+7),document.cookie=`gpt-trainer-initial-messages-shown-${t}=true; expires=${e.toUTCString()}; path=/;`},1e3*n.show_initial_messages_time)}function appendIframe(e,t,n){const i=document.createElement("iframe");i.src=`https://${defaultDomain}/widget/${e}?${t?t+"&":""}theme=${n.theme}&widget=true`,i.id="gpt-trainer-window-iframe",Object.assign(i.style,{position:"fixed",boxShadow:"rgba(150, 150, 150, 0.2) 0px 10px 30px 0px",bottom:"80px",height:"85vh",maxHeight:"800px",width:"450px",zIndex:999999999,borderRadius:"0.75rem",border:"1px solid "+("light"===n.theme?"#e5e7eb":"#343f50"),
            background:"transparent",display:n?.open_by_default?"flex":"none"}),
            document.body.appendChild(i),handleWindowWidthChange(i,n),
            window.addEventListener("resize",()=>handleWindowWidthChange(i,n)),
            window.addEventListener("message",e=>{var t,n;"gpt-trainer-close-iframe"===e.data&&(e=window.innerWidth<640,t=document.getElementById("gpt-trainer-open-chat-icon"),n=document.getElementById("gpt-trainer-close-chat-icon"),i.style.display="none",t.style.display="flex",n.style.display="none",e)&&(document.body.style.overflow=originalBodyOverflow)})}function appendWidget(e){const t=document.createElement("button");t.id="gpt-trainer-window-button",Object.assign(t.style,{width:"50px",height:"50px",borderRadius:"9999px",boxShadow:"rgba(0, 0, 0, 0.2) 0px 4px 8px 0px",cursor:"pointer",zIndex:999999999,border:0,transition:"all 0.2s ease-in-out 0s",transform:"scale(1)",color:"white",backgroundColor:e.chat_bubble_color,position:"fixed",bottom:"1rem",padding:0,..."left"===e?.widget_vertical_align?{left:"1rem"}:{right:"1rem"},right:"1rem",display:"flex",alignItems:"center",justifyContent:"center"}),generateIcon(t,e,"gpt-trainer-open-chat-icon","https://"+defaultDomain+e.button_picture,"Open Icon"),generateIcon(t,e,"gpt-trainer-close-chat-icon",`https://${defaultDomain}/img/widget-images/down-arrow.svg`,"Close Icon"),t.addEventListener("mouseover",()=>{t.style.transform="scale(1.05)"}),t.addEventListener("mouseout",()=>{t.style.transform="scale(1)"}),t.addEventListener("click",()=>{var e=window.innerWidth<640,t=e=>document.getElementById(e),[n,i,o]=["gpt-trainer-open-chat-icon","gpt-trainer-close-chat-icon","gpt-trainer-window-iframe"].map(t),t=(t("gpt-trainer-message-bubbles-container")?.remove(),"none"===o.style.display);o.style.display=t?"flex":"none",n.style.display=t?"none":"flex",i.style.display=t?"flex":"none",e&&t&&(originalBodyOverflow=document.body.style.overflow,document.body.style.overflow="hidden")}),document.body.appendChild(t)}function watchForAuthToken(){let n=window?.GPTTConfig?.token;setInterval(()=>{var e,t=window?.GPTTConfig?.token;n!==t&&(n=t,e=document.getElementById("gpt-trainer-window-iframe"))&&t!==(t=new URL(e.src)).searchParams.get("token")&&(t.searchParams.set("token",window.GPTTConfig.token),e.src=t.toString())},1e3)}async function fetchChatbot(){if(window&&window.GPTTConfig&&!window.GPTTConfig.embedSuccess)try{var e,t,n,{uuid:i,domain:o,token:a}=window.GPTTConfig;i?(o&&(defaultDomain=o),(e=await(await 
            fetch(`https://${defaultDomain}/api/chatbot/`+ i)).json()).error?(t=e["error"],
            console.error("GPT-trainer - "+(t.charAt(0).toUpperCase()+t.slice(1)))):
            ((n=JSON.parse(e.meta_json))?.webhook_auth?.enabled&&watchForAuthToken(),
            appendWidget(n),appendIframe(i,a,n),
            bubbleMessagesValidToAppend(i,n)&&appendBubbleMessages(i,n),window?.GPTTConfig&&(window.GPTTConfig.embedSuccess=!0))):console.error("GPT-trainer - Can't find valid uuid")}catch(e)
            {console.error("GPT-trainer - "+e)}}"complete"===document.readyState?fetchChatbot():window.addEventListener("load",fetchChatbot());