<template>
  <div class="app">
    <h1 class="title">TYP<span class="blinking">I</span>NG</h1>
    <div class="pc">
      <img src="../assets/pc.jpg" alt="" />
    </div>
    <div class="center">
      <div class="tabs">
        <input
          class="input"
          type="radio"
          id="tab1"
          value="1"
          v-model="isActive"
        />
        <label for="tab1">ログイン</label>
        <input
          class="input"
          type="radio"
          id="tab2"
          value="2"
          v-model="isActive"
        />
        <label for="tab2">新規会員登録</label>
      </div>

      <div class="login" v-if="isActive === '1'">
        <p>e-mail:</p>
        <input type="text" placeholder="メールアドレス" v-model="email" />
        <p>password:</p>
        <input type="text" placeholder="パスワード" v-model="password" />
        <button class="button" @click="login">Log in</button>
      </div>
      <div class="login" v-else-if="isActive === '2'">
        <p>name:</p>
        <input type="text" placeholder="ニックネーム" v-model="name" />
        <p>e-mail:</p>
        <input type="text" placeholder="メールアドレス" v-model="email" />
        <p>password:</p>
        <input type="text" placeholder="パスワード" v-model="password" />
        <button class="button" @click="Registration">Registration</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isActive: "1",
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    Registration() {
      axios
        .post("http://127.0.0.1:8000/api/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          this.$router.replace("/");
        })
        .catch((error) => {
          alert(error);
        });
    },
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 3em;
  letter-spacing: 0.5em;
  text-align: center;
  padding-top: 10vh;
}
.pc img {
  margin: 90px 0px 30px 15%;
  width: 20%;
  float: left;
}

.tabs label {
  padding: 5px 20px;
  cursor: pointer;
}

.tabs :checked + label {
  background-color: #042144;
  color: #fff;
}
.center {
  width: 30%;
  float: right;
  margin: 120px 15% 30px 0px;
}

.login {
  border: 1px solid #042144;
  margin-top: 8px;
}
input {
  width: 80%;
  margin: 0 10%;
}

.login p {
  margin: 20px 10% 15px 10%;
}

.input {
  display: none;
}

.button {
  color: white;
  background: #042144;
  padding: 5px;
  border: none;
  margin: 20px 10%;
  display: block;
}

.blinking {
  -webkit-animation: blink 1.5s ease-in-out infinite alternate;
  -moz-animation: blink 1.5s ease-in-out infinite alternate;
  animation: blink 1.5s ease-in-out infinite alternate;
  font-family: serif;
}
@-webkit-keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 768px) {
  .pc img,
  .center {
    float: none;
    margin: 0;
    margin: 40px 0;
  }

  .center {
    width: 70%;
    margin: 20px 15%;
  }
}
</style>
