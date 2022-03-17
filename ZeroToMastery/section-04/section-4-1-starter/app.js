let vm = Vue.createApp({
  data() {
    return {
      message: "Hello people!"
    }
  }
})


vm.mount('#app');

// !IMPORTANT Mounting the element after 3s
// setTimeout(() => {
//   vm.mount('#app');
// }, 3000);