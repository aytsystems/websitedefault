<template>
  <div>Teste {{ item }}</div>
</template>

<script>
export default {
  name: "id",
  head() {
    if (!this.item.titulo_publicitario) return null
      return {
        title: this.item.titulo_publicitario,
        meta: [
          { hid: "title", name: "title", content: this.item.titulo_publicitario },
          {
            hid: "description",
            name: "description",
            content: this.item.texto_publicitario,
          },
          {
            hid: "og:title",
            property: "og:title",
            content: this.item.titulo_publicitario,
          },
          { hid: "og:type", property: "og:type", content: "website" },
          {
            hid: "og:image",
            property: "og:image",
            content: this.item.first_photo,
          },
          {
            hid: "og:url",
            property: "og:url",
            content: this.item.link,
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
          this.item = response.data;
        })
        .catch((error) => {});
    }
  },

  methods: {},
};
</script>
