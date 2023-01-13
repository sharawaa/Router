import { useState } from "react";
import "../style/login.css"

export default function Login(prop) {
  const { LoginCheck } = prop;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function loginHandler(e) {
    /* */
    e.preventDefault();
    setUserName(e.target.userName.value);
    setPassword(e.target.password.value);
    LoginCheck(userName, password);
  }
  console.log("password:", password);
  console.log("username:", userName);
  return (
    <>
      <div className="container">
        <form onSubmit={loginHandler}>
          <input type="text" placeholder="username" name="userName" />
          <input type="text" placeholder="Password" name="password" />
          <button type="submit">Log in </button>
          <input type="button" value="Register" />
        </form>

        {/* <div>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Sign in
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Sign in
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <input
                    onChange={(e) => setDataName(e.target.value)}
                    type="text"
                    placeholder="User name"
                  />

                  <input
                    onChange={(e) => setDataPass(e.target.value)}
                    type="text"
                    placeholder="Password"
                  />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={saveButton}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

// export default function Login() {
//   return (
//     <>
//       <Header />

//     </>
//   );
// }
