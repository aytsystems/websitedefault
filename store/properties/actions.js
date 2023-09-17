import { X_KEY } from '../../configs/configs'

const RESOURCE = 'properties'

export default {

  async getProperty(context, id){

    this.$axios.setHeader('X-key', X_KEY)
    var url = "https://rickandmortyapi.com/api/character/"+id
    return await this.$axios.$get(url)
        .then( response => response)
        .catch( errors => reject(errors))
        .finally(() => '')
  }

}
