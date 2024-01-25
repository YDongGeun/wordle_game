const answer = "BLOCK";

let attempts = 0;
let index = 0;
let timer;

function appStart() {
  const displayGameover = () => {
    const div = document.createElement("div");
    div.innerText = "Gameover";
    div.style =
      "display: flex; justify-content: center; align-items: center; position: absolute; top:40vh; left: 38%; background-color: white; width: 200px; height:100px;";
    document.body.appendChild(div);
  };

  //게임을 종료시키는 함수
  const gameover = () => {
    console.log("Game Over");
    window.removeEventListener("keydown", handleKeydown);
    displayGameover();
    clearInterval(timer);
  };

  // 다음 줄로 넘어 갈 수 있도록 하는 함수
  const nextLine = () => {
    if (attempts === 6) return gameover();
    attempts++;
    index = 0;
  };

  // enter키를 입력하면 정답을 확인하는 함수
  const handleEnterkey = () => {
    let ansCnt = 0;

    // 정답확인
    for (let i = 0; i < 5; i++) {
      const block = document.querySelector(
        `.board-column[data-index='${attempts}${i}']`
      );
      const eventLetter = block.innerText;
      const answerLetter = answer[i];

      if (eventLetter === answerLetter) {
        block.style.background = "#6aaa64";
        ansCnt++;
      } else if (answer.includes(eventLetter))
        block.style.background = "#c9b458";
      else block.style.background = "#787c7e";

      block.style.color = "white";
    }

    if (ansCnt === 5 || arguments === 6) gameover();
    nextLine();
  };

  // backspace키를 입력하면 입력한 글자가 지워지는 함수
  const handleBackspace = () => {
    if (index > 0) {
      const preBlock = document.querySelector(
        `.board-column[data-index='${attempts}${index - 1}']`
      );
      preBlock.innerText = "";
      if (index !== 0) index--;
    }
  };

  // 키보드를 입력했을때 알파벳만 입력되도록 하는 함수.
  const handleKeydown = (event) => {
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const thisBlock = document.querySelector(
      `.board-column[data-index='${attempts}${index}']`
    );

    if (event.keyCode === 8) handleBackspace();
    else if (index === 5) {
      if (event.keyCode === 13) handleEnterkey();
      else return;
    } else if (65 <= keyCode && keyCode <= 90) {
      thisBlock.innerText = key;
      index++;
    }
  };

  const stratTimer = () => {};
  const stratTime = new Date();

  function sayTime() {
    const currentTime = new Date();
    const lastTime = new Date(currentTime - stratTime);
    const min = lastTime.getMinutes().toString().padStart(2, 0);
    const sec = lastTime.getSeconds().toString().padStart(2, 0);
    const timeDiv = document.querySelector("#timer");
    timeDiv.innerText = `${min}:${sec}`;
  }
  //padStart(자리수, 무엇으로 채울건지);

  timer = setInterval(sayTime, 1000);

  // 키보드를 누르면 이벤트를 발생.
  window.addEventListener("keydown", handleKeydown);
}

appStart();
