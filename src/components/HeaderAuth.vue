<template>
  <div class="header">
    <h1>TYP<span class="blinking">I</span>NG</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
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
h1 {
  margin: 0px;
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
</style>
