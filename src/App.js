import './style.css';
import {check} from './check'
const link = ()=>{
  document.getElementById('gpt').innerHTML=
  "<img src='favicon.ico' alt='@' height='50vh' style='animation:imgs 1s infinite' /><br>"+
  '<div id=cont">'+
"<a href='mailto:sushantmnaik2008@gmail.com'><button><div class='logo'><svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' fill='white' class='bi bi-envelope-paper-fill' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M6.5 9.5 3 7.5v-6A1.5 1.5 0 0 1 4.5 0h7A1.5 1.5 0 0 1 13 1.5v6l-3.5 2L8 8.75l-1.5.75ZM1.059 3.635 2 3.133v3.753L0 5.713V5.4a2 2 0 0 1 1.059-1.765ZM16 5.713l-2 1.173V3.133l.941.502A2 2 0 0 1 16 5.4v.313Zm0 1.16-5.693 3.337L16 13.372v-6.5Zm-8 3.199 7.941 4.412A2 2 0 0 1 14 16H2a2 2 0 0 1-1.941-1.516L8 10.072Zm-8 3.3 5.693-3.162L0 6.873v6.5Z'></path></svg></div> Mail my Developer....  </button></a>"+
              '</div>'

}



const abut = '<div id="about"><img src="favicon.ico" alt="@" height="50vh" style="animation:imgs 1s infinite" />' +
              '<br>'+
              'Hello, I am WaideekGPT working hard to get artificial intelligence.. <br> but failed to do so..  </div>'

const about=()=>{document.getElementById('gpt').innerHTML=abut}
const home=()=>{document.getElementById('gpt').innerHTML=''}


function App() {
  return (
    <>
      <nav>
    <div id="hd"> <img id='dp' src="favicon.ico" alt="@" height="50vh" /> Waideek....</div>
    <div id="hd"> WaideekGPT</div>
    <div id="tool">
      <button id="h" onClick={home}>Home</button>
      <button id="ab" onClick={()=>about()}>About</button>
      <button id="i" onClick={link}>Contact us</button>
    </div>
  </nav>
      <div>
        <h1>Welcome to Waideek-GPT !</h1>
        <h1>What do you want?</h1>
        <input type="search" name="src" className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border-input bg-transparent hover:text-accent-foreground absolute shadow-none border-0 hover:bg-transparent p-0 outline-none ring-0 focus-visible:ring-0 focus-visible:ring-transparent transition-all w-[20px] h-[20px] right-[1rem] bottom-[15px]' id="src" autoFocus  placeholder="Enter here..."
        onKeyDown={(p)=>{
          if(p.key==='Enter'){
            var a = document.createElement("p")
            a.className='inp'
            a.innerHTML=document.getElementById('src').value
            document.getElementById('gpt').appendChild(a)
            check(a.textContent)
          }
      }}
        />
        <input type="submit" value="Searh" onClick={() => { 
          var a = document.createElement("p")
          a.className='inp'
          a.innerHTML=document.getElementById('src').value
          document.getElementById('gpt').appendChild(a)
          check(a.innerText)
          }} />
      </div>
      <div id="respons">

      </div>
    </>
  );
}

export default App;
