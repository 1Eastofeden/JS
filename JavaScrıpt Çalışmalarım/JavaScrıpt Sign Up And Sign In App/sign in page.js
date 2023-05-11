const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

if (usernameInput && passwordInput) {
  // Kayıtlı kullanıcı adı ve şifreyi al
  const registeredUsername = localStorage.getItem("username");
  const registeredPassword = localStorage.getItem("password");

  // Kullanıcı adı ve şifreyi girilen değerlerle karşılaştır
  const signInButton = document.querySelector(".btn");
  signInButton.addEventListener("click", () => {
    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

    if (enteredUsername === registeredUsername && enteredPassword === registeredPassword) {
      console.log("username : ", usernameInput.value);
      console.log("password : ", passwordInput.value)
    } else {
      console.warn("Kullanıcı adı veya şifre yanlış");
    }
  });
}
