const { createApp } = Vue;
createApp({
  data() {
    return {
      randomEmail: "",
    };
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        console.log(response);
        this.randomEmail = response.data.response;
      });
  },
}).mount("#app");
