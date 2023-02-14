<template lang="">
    <div>
        <div class="mb-3 is-loading">
            <input class="form-control" :placeholder="label" v-model="query" v-on:keyup="searchQuery">
            <small>Search characters should be greater than two.</small>
            <div class="spinner-border spinner-border-sm text-primary" v-if="loading"></div>
        </div>
    </div>
</template>

<script>
    export default {
      props: {
        label: {
          type: String,
          default: "Search",
        },
        query: {
          type: String,
          default: "",
        },
        apiurl: {
          type: String,
          default: "",
        },
      },
      data() {
        return {
          query: "",
          loading:false,
        };
      },
      methods: {
        //asyncdata
        searchQuery: _.debounce(
          function () {

            setTimeout(() => {
              this.search();
            }, 500);
          },
          500 // 500 milliseconds
        ),
        async search() {
          if (this.query.length > 2) {
            this.$emit("loading", true);
            await axios.get(this.apiurl + "&query=" + this.query).then((response) => {
                this.$emit("loading", false);
                this.$emit("filterData", response.data);
                this.$emit("query", this.query);
              });
          }
        },
      },
      watch: {
        query() {
          if (this.query == "") {
            this.query = "";
            this.$emit("query", this.query);
            this.$emit("reload");
          }
        },
      },
    };
</script>
    