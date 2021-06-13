<template>
  <div>
    <Headers />
    <div id="app">
      <div v-if="playing">
        <span>{{ pressed }}</span
        >{{ word }}
        <br />
        <br />
      </div>
      <div v-else>Spaceでスタート</div>
    </div>
  </div>
</template>

<script>
import Headers from "../components/HeaderAuth";
export default {
  data() {
    return {
      words: ["<div v-else></div>", "banana", "grape"],
      word: "",
      pressed: "",
      miss: 0,
      playing: false,
    };
  },
  components: {
    Headers,
  },

  created() {
    addEventListener("keydown", (e) => {
      if (e.key !== " " || this.playing) {
        return;
      }
      this.playing = true;
      this.setWord();
      this.keyDown();
    });
  },
  methods: {
    setWord() {
      this.word = this.words.splice(
        Math.floor(Math.random() * this.words.length),
        1
      )[0];
    },
    keyDown() {
      addEventListener("keydown", (e) => {
        if (e.key !== this.word[0]) {
          this.miss++;
          return;
        }
        this.pressed += e.key;
        this.word = this.word.slice(1);
        if (this.word.length === 0) {
          this.pressed = "";
          if (this.words.length === 0) {
            this.word = "おしまい";
            return;
          }
          this.setWord();
        }
      });
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

span {
  opacity: 0.5;
}
</style>
