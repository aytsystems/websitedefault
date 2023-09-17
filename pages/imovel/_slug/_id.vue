<template>
  <div>Teste {{ item }}</div>
</template>

<script>
export default {
  name: "id",
  head() {
    if (!this.item.name) return null
      return {
        title: this.item.name,
        meta: [
          { hid: "title", name: "title", content: this.item.name },
          {
            hid: "description",
            name: "description",
            content: this.item.name,
          },
          {
            hid: "og:title",
            property: "og:title",
            content: this.item.status,
          },
          { hid: "og:type", property: "og:type", content: "website" },
          {
            hid: "og:image",
            property: "og:image",
            content: this.item.image,
          },
          {
            hid: "og:url",
            property: "og:url",
            content: this.item.location.url,
          },
          { hid: "og:locale", property: "og:locale", content: "pt_BR" },
        ],
      };
  },

  data() {
    return {
      item: {},
    };
  },

  async fetch() {
    if (this.$route.params.id && this.$route.params.id != "") {
      await this.$store
        .dispatch("properties/getProperty", this.$route.params.id)
        .then((response) => {
          this.item = response;
        })
        .catch((error) => {});
    }
  },

  methods: {},
};
</script>
