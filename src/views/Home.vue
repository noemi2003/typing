<template>
  <div>
    <Profile />
    <div class="all">
      <h1>あなたが作ったゲーム</h1>
      <div class="boxs" v-for="(text, index) in texts" :key="index">
        <div class="box flex" v-if="index % 2 === 0">
          {{ texts[index][0] }}<br />
          {{ texts[index][1] }}<br />
          <button @click="del(texts[index][1])">消去</button>
        </div>
        <div class="box" v-if="index % 2 === 1">
          {{ texts[index][0] }}<br />
          {{ texts[index][1] }}<br />
          <button @click="del(texts[index][1])">消去</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Profile from "../components/Profile";
export default {
  data() {
    return {
      user: this.$store.state.user.id,
      texts: [],
    };
  },
  components: {
    Profile,
  },
  methods: {
    del(index) {
      axios.delete("http://127.0.0.1:8000/api/drills/" + index);
      this.$router.go({ name: "Home" });
    },
  },
  created() {
    axios
      .get("http://127.0.0.1:8000/api/drills/" + this.user)
      .then((response) => {
        this.title = response.data.data;
        console.log(this.title);

        for (let step = 0; step < this.title.length; step++) {
          let one = this.title[step]["title"];
          let two = this.title[step]["id"];
          this.texts.push([one, two]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.all {
  background: #f7f9f9;
  height: 100vh;
  padding-top: 20px;
}
.boxs {
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap; */
  width: 80%;
  margin: 0 auto;
}
.box {
  width: 45%;
  height: 100px;
  border: 1px solid #042144;
  background: #ffffff;
  margin-bottom: 20px;
}

.flex {
  color: rgb(248, 12, 12);
  float: right;
  margin-bottom: 20px;
}

h1 {
  text-align: center;
  padding-bottom: 30px;
}

/* @media screen and (max-width: 768px){

} */
</style>
