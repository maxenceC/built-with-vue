new Vue({
  el: '#apps',

  data: () => {
    return {
      apps: []
    }
  },

  mounted: function () {
    this.$nextTick(function () {
      this.fetchApps();
    })
  },

  methods: {
    fetchApps: function () {
      this.$http.get('/api/apps')
      .then(function (users) {
        this.users = users.body
        console.log(this.users);
      })
      .catch(function (err) {
        console.log(err);
      });
    }
  }
});
