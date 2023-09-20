const { createApp } = Vue;
createApp({
  data() {
    return {
      randomEmails: [],
      lunghezza: 0,
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    for (let i = 0; i < 10; i++) {
      axios

        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          console.log(response);
          this.randomEmails.push(response.data.response);

          this.lunghezza = this.randomEmails.length;
          console.log(this.lunghezza);
          if (this.randomEmails.length === 10) {
            this.loading = false;
          }
        });
    }
  },
}).mount("#app");
