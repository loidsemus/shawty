<template>
  <div id="app">
    <h1>Shawty</h1>
    <h2>Link shortener using Bit.ly</h2>
    <transition name="fade" mode="out-in">
      <InputArea key="1" v-if="!shortenedLink" />
      <Result key="2" v-else />
    </transition>
    <img id="ribbon" src="./assets/ribbon.svg" alt="" />
  </div>
</template>

<script>
import InputArea from "./components/InputArea";
import Result from "./components/Result";

export default {
  name: "App",
  components: {
    InputArea,
    Result,
  },
  computed: {
    shortenedLink() {
      return this.$store.state.shortenedLink;
    },
  },
};
</script>

<style>
* {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
}

body {
  margin: 0;
  background-color: #f8f8f8;
}

#app {
  padding: 0 10rem;
}

h1 {
  font-weight: 700;
  margin: 12rem 0 0;
  font-size: 4.5rem;
}

h2 {
  font-weight: 400;
  font-size: 2rem;
  margin: 0 0 6rem;
}

#ribbon {
  position: absolute;
  bottom: 5%;
  left: 0;
  right: 0;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 200ms ease-in-out;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-enter {
  transform: translateY(-1rem);
}
.fade-leave-active {
  transform: translateY(1rem);
}
</style>
