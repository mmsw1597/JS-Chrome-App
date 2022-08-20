const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME = "username";

const onLoginSubmit = (event) => {
    /*input으로부터 사용자 이름 받아 오기*/
    const userName = loginInput.value;
    event.preventDefault();

    /*로컬 저장소에 사용자 이름 저장*/
    localStorage.setItem(USER_NAME, userName);
    loginForm.classList.add(HIDDEN_CLASSNAME);

    /*유저 이름을 기반으로 인삿말 출력*/
    paintGreetings();
}

const paintGreetings = () => {
    const username = localStorage.getItem(USER_NAME);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

/*로컬 저장소에서 유저이름 받아오기*/
const savedUserName = localStorage.getItem(USER_NAME);

/*로컬 저장소에 유저 이름이 있다면 form 출력 그렇지 않으면 인삿말 출력*/
if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
}
