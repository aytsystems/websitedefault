<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="mt-4">
       <v-text-field
          v-model="cep"
          v-mask="['#####-###']"
          outlined
          dense
        >
          <template v-slot:label>
              <span>CEP</span>
          </template>
        </v-text-field>
      </div>

      <div class="mt-4">
          {{ hcaptcha }}
          <vue-hcaptcha
              :sitekey="hcaptcha"
              @verify="onVerify"
            >
          </vue-hcaptcha>
      </div>

      <div class="mt-8">
        <no-ssr> <!-- important to add no-ssr-->
          <carousel v-model="model"
                :cycle="cycle"
                height="300px"
                hide-delimiters>
            <img src="https://space-realstate.nyc3.digitaloceanspaces.com/public/uploads/properties/01ddf3b0-0eff-4bb3-a118-8f7fad06e6f0/8c0829de-c1ad-4208-9fe7-318b7e6d68c7/20230824075009-apartamento-decorado-7.webp">

            <img src="https://space-realstate.nyc3.digitaloceanspaces.com/public/uploads/properties/01ddf3b0-0eff-4bb3-a118-8f7fad06e6f0/8c0829de-c1ad-4208-9fe7-318b7e6d68c7/20230824075010-d0e3f8b1b9c76c783d70413fc059ab4d.webp">

            <img src="https://space-realstate.nyc3.digitaloceanspaces.com/public/uploads/properties/01ddf3b0-0eff-4bb3-a118-8f7fad06e6f0/8c0829de-c1ad-4208-9fe7-318b7e6d68c7/20230824075009-apartamento-decorado-7.webp">

            <img src="https://space-realstate.nyc3.digitaloceanspaces.com/public/uploads/properties/01ddf3b0-0eff-4bb3-a118-8f7fad06e6f0/8c0829de-c1ad-4208-9fe7-318b7e6d68c7/20230824075010-d0e3f8b1b9c76c783d70413fc059ab4d.webp">
          </carousel>

        </no-ssr>
      </div>

    </v-col>
  </v-row>
</template>

<script>
import {HCAPTCHA_SITE_KEY} from '../configs/configs'
import VueHcaptcha from '@hcaptcha/vue-hcaptcha';

export default {
  name: 'IndexPage',
  components: {
    VueHcaptcha
  },

  data() {
    return {
      hcaptcha: HCAPTCHA_SITE_KEY,

      cycle: false,
      model: 0,
      dialog_carousel: false,

      cep: ''
    }
  },

  methods: {
    onVerify(token, ekey) {
      this.verified = true;
      this.token = token;
      this.eKey = ekey;
    }
  },
}
</script>
