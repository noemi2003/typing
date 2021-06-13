<template>
  <div>
    <Profile />
    <div class="all">
      <div class="center">
        <input class="title" type="text" placeholder="title" v-model="title" />
      </div>

      <div class="flex">
        <div class="box" v-for="(text, index) in texts" :key="index">
          <input
            class="word"
            type="text"
            placeholder="word"
            v-model="texts[index][0]"
          />
          <textarea
            class="mean"
            name=""
            id=""
            cols="50"
            rows="3"
            placeholder="mean"
            v-model="texts[index][1]"
          ></textarea>
        </div>
      </div>
      <button @click="addInput">追加</button>
      <button @click="addDril">完了</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Profile from "../components/Profile";
export default {
  data() {
    return {
      title: "",
      texts: [{ 0: "", 1: "" }],
      number: "",
    };
  },
  components: {
    Profile,
  },
  methods: {
    addInput() {
      this.texts.push(["", ""]);
      console.log(this.texts);
    },
    addDril() {
      axios
        .post("http://127.0.0.1:8000/api/drills", {
          user_id: this.$store.state.user.id,
          title: this.title,
        })
        .then((response) => {
          console.log(response.data.data.id);
          this.number = response.data.data.id;
          for (let step = 0; step < this.texts.length; step++) {
            axios
              .post("http://127.0.0.1:8000/api/word", {
                mean: this.texts[step][1],
                drill_id: this.number,
                text: this.texts[step][0],
              })
              .then((respomse) => {
                console.log(respomse);
              });
          }
          this.$router.push("/");
        });
    },
  },
};
</script>

<style scoped>
.center {
  text-align: center;
}
.all {
  background: #f7f9f9;
  height: 100vh;
}

input {
  border: none;
  border-bottom: 1px solid #042144;
}

.title {
  border: none;
  border-bottom: 1px solid #042144;
  width: 30%;
  margin-top: 20px;
}

.box {
  width: 30%;
  height: 100px;
  border: 1px solid #042144;
  margin-top: 2%;
  padding: 8px 0;
  margin-left: 2.5%;
}

.word,
.mean {
  width: 85%;
  margin: 0 7.5% 10px 7.5%;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

button {
  margin: 15px auto;
  background: white;  
}
</style>
