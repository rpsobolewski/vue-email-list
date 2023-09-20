const { createApp } = Vue;
createApp({
  data() {
    return {
      randomEmails: [],
      contatore: 0,
    };
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          console.log(response);
          this.randomEmails.push(response.data.response);
          contatore++;
        });
    }
  },
}).mount("#app");
