<template>
  <div>
    <div class="header">
      <h1>TYP<span class="blinking">I</span>NG</h1>
    </div>
    <div class="all">
      <div class="smile">
        <img src="../assets/smile.jpg" alt="" />
        <div class="profile">
          <div class="name">
            <h1>user_name:{{ this.user_name }}</h1>
            <h1>your-id：{{ this.user }}</h1>
          </div>

          <div>
            <button>設定</button>
          </div>
        </div>
      </div>
      <ul>
        <li class="li-first" @click="home">ホーム</li>
        <li @click="allgame">みんなのゲーム</li>
        <li @click="make">ゲームを作る</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "Profile",
  data() {
    return {
      user: this.$store.state.user.id,
      email: this.$store.state.user.email,
      user_name: this.$store.state.user.name,
    };
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    make() {
      this.$router.push("/makegame");
    },
    allgame() {
      this.$router.push("/allgame");
    },
  },
};
</script>

<style scoped>
.header {
  color: aliceblue;
  background: #042144;
  text-align: center;
  padding: 15px;
  font-size: 1.5em;
  letter-spacing: 0.5em;
}
.header h1 {
  margin: 0px;
}
.blinking {
  font-family: serif;
}
.all {
  width: 65%;
  margin: 0 auto;
  padding: 48px 0;
}
.smile img {
  width: 8%;
  background: #fec700;
  padding: 10px;
  border-radius: 50px;
}

.smile {
  border-bottom: 1px solid rgba(238, 17, 17, 0.342);
  padding-bottom: 30px;
}

.smile,
.profile {
  display: flex;
}

.profile {
  justify-content: space-between;
  align-items: center;
  width: 90%;
}

.name {
  margin: 20px;
}

.name h1 {
  padding: 3px;
}

button {
  background: white;

  border: 1px solid rgb(177, 177, 177);
}
ul {
  display: flex;
  margin: 40px 10% 20px;
}

li {
  list-style: none;
  margin-right: 20px;
  font-size: 15px;
}
li:hover {
  background: #6cf1ddb9;
}

/* @media screen and (max-width: 768px) {
  }
} */

@media screen and (max-width: 768px) {
  img {
    display: none;
  }
  li {
    font-size: 2px;
  }
}
</style>
