Vue.createApp({
  data() {
    return {
      colors: ["#8d81f3", "green", "red"],
      selectedColor: "#8d81f3",
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      successMessage: false,
    };
  },
  methods: {
    reset() {
      this.perspective = 100;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
      this.selectedColor = "#8d81f3";
    },
    copy() {
      const el = document.createElement("textarea");

      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      el.value = `background:${this.box.background}; transform:  ${this.box.transform}`;
      console.log(el.value);

      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      this.successMessage = true;
    },
  },
  computed: {
    box() {
      return {
        background: `${this.selectedColor}`,
        transform: `
          perspective(${this.perspective}px)
          rotateX(${this.rotateX}deg)
          rotateY(${this.rotateY}deg)
          rotateZ(${this.rotateZ}deg)
        `,
      };
    },
  },
  watch: {
    successMessage(newValue) {
      if (newValue) {
        setTimeout(() => {
          this.successMessage = false;
        }, 1000)
      }
    },
  },
}).mount("#app");