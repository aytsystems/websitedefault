import { X_KEY } from '../../configs/configs'

const RESOURCE = 'properties'

export default {
  getProperties(context, params) {
    this.$axios.setHeader('X-key', X_KEY)
    var url = `${RESOURCE}`

    return this.$axios.$get(url, { params: params })
        .then( response => {
          context.commit('STORE', response)
        })
        .catch( errors => reject(errors))
        .finally(() => '')
  },

  async getProperty(context, id){

    this.$axios.setHeader('X-key', X_KEY)
    var url = `${RESOURCE}/` + id
    //var url = "https://rickandmortyapi.com/api/character/"+id
    return await this.$axios.$get(url)
        .then( response => response)
        .catch( errors => reject(errors))
        .finally(() => '')
  },

  getShopWindow(context, params) {
    this.$axios.setHeader('X-key', X_KEY)
    var url = `${RESOURCE}`

    return this.$axios.$get(url, { params: params })
        .then( response => { context.commit('SHOP_WINDOW', response.data) })
        .catch( errors => reject(errors))
        .finally(() => '')
  },

  getDistinctProperties(context, params) {
    this.$axios.setHeader('X-key', X_KEY)
    var url = 'distinctproperties'

    return this.$axios.$get(url, { params: params })
        .then( response => { context.commit('DISTINCT_TIPO_IMOVEL', response.data) })
        .catch( errors => reject(errors))
        .finally(() => '')
  },

  propertyEmail(context, params){
    this.$axios.setHeader('X-key', X_KEY)
    var url = 'propertyemails'

    return this.$axios.$get(url, { params: params })
        .then( response => '')
        .catch( errors => reject(errors))
        .finally(() => '')
  },

  propertyStore(context, params){
    this.$axios.setHeader('X-key', X_KEY)
    var url = 'properties'

    return this.$axios.$post(url, params)
        .then( response => response.data)
        .catch( errors => reject(errors))
        .finally(() => '')
  },

  propertyUpdate(context, params){
    this.$axios.setHeader('X-key', X_KEY)
    var url = 'properties/' + params['id']

    return this.$axios.$put(url, params)
        .then( response => response.data)
        .catch( errors => reject(errors))
        .finally(() => '')
  },

  propertyShowEdit(context, id){
    this.$axios.setHeader('X-key', X_KEY)
    var url = 'properties/' + id

    return this.$axios.$get(url)
        .then( response => response.data)
        .catch( errors => reject(errors))
        .finally(() => '')
  },

  propertyConfirm(context, id){
    this.$axios.setHeader('X-key', X_KEY)
    var url = 'confirmpropertystorewebsite/' + id

    return this.$axios.$get(url)
        .then( response => response.data)
        .catch( errors => reject(errors))
        .finally(() => '')
  },
}
