let vm = Vue.createApp({
  data() {
    return {
      message: "Hello, people! 🚀",
    };
  },
  beforeCreate() {
    // this is undefined because the beforeCreate function doesn't have access to any data yet!
    console.log("👾 beforeCreate() called!", this.message);
  },
  created() {
    // created returns this.message
    console.log("👾 created() called!", this.message);
  },
  beforeMount() {
    // returns null as hook is triggered after created but before the app is mounted in the front end.
    console.log("🚀 beforeMount() called", this.$el);
  },
  mounted() {
    // returns the mounted el
    console.log("🚀 mounted() called", this.$el);
  },
  beforeUpdate() {
    // likely used for debugging purposes
    console.log("👁 beforeUpdate() called");
  },
  updated() {
    // likely used for debugging purposes
    console.log("👁 updated() function called!");
  },
  beforeUnmount() {
    console.log("☠️ beforeUnmount() function called!");
  },
  unmounted() {
    console.log("☠️ unmounted() function called!");
  },
  // !IMPORTANT: Search for more informations about beforeUnmount and unmounted lifecycles.
});

vm.mount('#app');

// ?Noted: Mounting the element after 3s
// setTimeout(() => {
//   vm.mount('#app');
// }, 3000);