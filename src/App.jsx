import Clock from './Clock.jsx'
import Background from './Background.jsx'
function App() {
  
  let stars = [];
  for(let i = 0; i < 5; i++){
    let starWidth = Math.random() * (window.screen.width - 0) + 0;
    let starheight = Math.random() * (window.screen.height - 0) + 0;
    stars = [...stars, {top:starheight, right:starWidth, blink:1000, key:i}];
  }
  for(let i = 5; i < 10; i++){
    let starWidth = Math.random() * (window.screen.width - 0) + 0;
    let starheight = Math.random() * (window.screen.height - 0) + 0;
    stars = [...stars, {top:starheight, right:starWidth, blink:500, key:i}];
  }
  for(let i = 5; i < 10; i++){
    let starWidth = Math.random() * (window.screen.width - 0) + 0;
    let starheight = Math.random() * (window.screen.height - 0) + 0;
    stars = [...stars, {top:starheight, right:starWidth, blink:1500, key:i}];
  }
  for(let i = 5; i < 10; i++){
    let starWidth = Math.random() * (window.screen.width - 0) + 0;
    let starheight = Math.random() * (window.screen.height - 0) + 0;
    stars = [...stars, {top:starheight, right:starWidth, blink:2000, key:i}];
  }
  console.log(window.screen.height);

  return (
    <>
      <Clock />
      {stars.map((star,i) => {
        console.log(i);
        return <div key={star.key}> <Background top={`${star.top}px`} right={`${star.right}px`} blink={star.blink} index={i}/></div>
      })}
    </>
  )
}

export default App;
