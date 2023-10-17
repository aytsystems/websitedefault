<template>
  <div>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="mt-8">
         <v-btn color="primary" @click="testVuetify()">
          Teste Vuetify
         </v-btn>
      </div>

      <div class="mt-8">
         <money class="monetary" v-model="valor_monetario" v-bind="valor_venda"></money>
      </div>
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

    </v-col>
  </v-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {

      cycle: false,
      model: 0,
      dialog_carousel: false,

      cep: '',

      valor_monetario: '',

      valor_venda: {
        decimal: ',',
        thousands: '.',
        prefix: 'Venda R$ ',
        suffix: '',
        precision: 2,
        masked: false,
        min: Number.MIN_SAFE_INTEGER,
        max: Number.MAX_SAFE_INTEGER
      },

    }
  },

  methods: {
    onVerify(token, ekey) {
      this.verified = true;
      this.token = token;
      this.eKey = ekey;
    },

    testVuetify(){
      console.log('entrou')
        this.$snotify.error('Erro')
        this.$snotify.success('Sucesso')
    }
  },
}
</script>
