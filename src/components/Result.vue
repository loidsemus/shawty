<template>
  <div style="display: inline-block">
    <a :href="shortenedLink">{{ shortenedLink }}</a>
    <button v-on:click="reset">Reset</button>
  </div>
</template>

<script>
export default {
  name: "Result",
  computed: {
    shortenedLink() {
      return this.$store.state.shortenedLink;
    },
  },
  methods: {
    reset() {
      this.$store.commit("setShortenedLink", null);
    },
  },
};
</script>

<style>
a,
a:visited {
  background-color: #ededed;
  padding: 1rem 1.5rem;
  border-radius: 16px;
  font-weight: 400;
  font-size: 1.2rem;
  color: rgb(36, 36, 36);
  text-decoration: none;
  transition: color 100ms ease-in-out;
  margin-right: 1rem;
}

a:hover {
  color: #0066ff;
}
</style>