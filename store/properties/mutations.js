export default {
  STORE(state, payload){
    state.items = payload
  },

  DISTINCT_TIPO_IMOVEL(state, payload){
    state.distinct_tipo_imovel = payload
  },

  SHOP_WINDOW(state, payload){
    state.shop_window = payload
  },
}
