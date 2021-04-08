<template>
  <div style="display: inline-block">
    <input
      v-model="link"
      v-bind:class="{ invalid: invalid }"
      v-bind:placeholder="invalid ? 'That\'s no link' : 'http(s)://example.com'"
      v-on:keydown="invalid = false"
    />
    <button :disabled="loading" v-on:click="shorten">Shorten</button>
  </div>
</template>

<script>
const { Shortener } = require("../shorteners/shortener");

export default {
  name: "InputArea",
  data() {
    return {
      link: null,
      errored: false,
      invalid: false,
      loading: false,
    };
  },
  methods: {
    shorten() {
      this.invalid = false;
      if (!this.link || !this.isValidUrl(this.link)) {
        this.invalid = true;
        return;
      }
      this.loading = true;

      new Shortener("bitly")
        .shorten(this.link)
        .then((shortenedLink) => {
          this.loading = false;
          this.$store.commit("setShortenedLink", shortenedLink);
        })
        .catch(() => {
          this.loading = false;
          this.errored = true;
        });
    },
    isValidUrl(url) {
      const exp = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi;
      return exp.test(url);
    },
  },
};
</script>

<style>
input {
  padding: 1rem 1.5rem;
  border-radius: 16px;
  border: none;
  background-color: #ededed;
  display: inline-block;
  margin-right: 1rem;
  font-weight: 400;
  font-size: 1.2rem;
  transition: box-shadow 200ms ease-out;
  min-width: 40ch;
}

input.invalid {
  box-shadow: 0px 0px 10px 5px rgba(255, 130, 130, 0.8);
}

button {
  border: none;
  background-color: #0066ff;
  color: #fff;
  padding: 1rem 1.5rem;
  border-radius: 16px;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
}

button:disabled {
  cursor: default;
}

*:focus {
  outline: none;
}
</style>