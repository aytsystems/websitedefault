import { PROPERTY_ITEMS } from '~/configs/configs'

export default {

  methods: {
    preLoading(status){
      this.$store.dispatch('preloading/preLoading', status)
    },


    whatsApp(phone) {
      var phone1 = phone.normalize("NFD").replace(/([^0-9a-zA-Z])/g, '')
      window.open("https://api.whatsapp.com/send?phone=55" + phone1);
    },

    changeLoading (){
      this.loading = !this.loading
    },

    makeBreadCrumb(routerParams, path){
      const bread = routerParams

      const items = []
      items.push(
        { text: 'Home', disabled: false, href: '/' },
      )

      if(bread.setor == null){
        if(path == '/ofertarimovel'){
          items.push(
            { text: 'Divulgue seu Imovel', disabled: false, href: '/' + path },
          )
        }
        if(path == '/faleconosco'){
          items.push(
            { text: 'Fale Conosco', disabled: false, href: '/' + path },
          )
        }
        if(path == '/favoritos'){
          items.push(
            { text: 'Favoritos', disabled: false, href: '/' + path },
          )
        }
        if(path == '/sobrenos'){
          items.push(
            { text: 'Sobre Nós', disabled: false, href: '/' + path },
          )
        }
        if(path == '/comprar'){
          items.push(
            { text: 'Comprar', disabled: false, href: '/' + path },
          )
        }
        if(path == '/alugar'){
          items.push(
            { text: 'Alugar', disabled: false, href: '/' + path },
          )
        }
      }


      if(bread.setor && bread.setor != ''){
        if(bread.setor == 'locacao'){
          items.push(
            { text: 'Alugar', disabled: false, href: '/imoveis/locacao/todos-tipos/todos-bairros/todas-cidades/todas-finalidades' },
          )
        }
        if(bread.setor == 'venda'){
          items.push(
            { text: 'Comprar', disabled: false, href: '/imoveis/venda/todos-tipos/todos-bairros/todas-cidades/todas-finalidades' },
          )
        }

        if(bread.tipo != '' && bread.tipo != 'todos-tipos'){
          items.push(
            { text: this.capitalizeFirstLetter(bread.tipo), disabled: false, href: '/imoveis/venda/' + bread.tipo + '/todos-bairros/todas-cidades/todas-finalidades'},
          )
        }

        if(bread.bairro != '' && bread.bairro != 'todos-bairros'){
          items.push(
            { text: this.capitalizeFirstLetter(bread.bairro), disabled: false, href: '/imoveis/venda/' + bread.tipo + '/' + bread.bairro + '/todas-cidades/todas-finalidades'},
          )
        }
      }

      return items
    },

    capitalizeFirstLetter(string) {
      const upper = [];
      string.split("_").forEach((word) => {
        upper.push(word.charAt(0).toUpperCase() + word.slice(1))
      })
      return upper.join(" ");

      //var result = string.replaceAll('_',' ')
      //return string.charAt(0).toUpperCase() + string.slice(1);
    },

    makeLink(params) {
        var link = 'tipo_imovel-' + this.setParamLink(params.tipo_imovel);
        link += '-para-' + this.setParamLink(params.setor);
        link += '-bairro-' + this.setParamLink(params.bairro);
        if(params.dormitorios && params.dormitorios > 0){
            link += '-dormitorios-' + params.dormitorios;
        }
        if(params.banheiros && params.banheiros > 0){
            link += '-banheiros-' + params.banheiros;
        }
        if(params.valor_venda && params.valor_venda > 0){
            link += '-valor-venda-RS-' + params.valor_venda;
        }
        if(params.valor_locacao && params.valor_locacao > 0){
            link += '-valor-locacao-RS-' + params.valor_locacao;
        }
        const url = '/imovel/' + link + '/' + params.id
        return url
    },

    setParamLink(pr){
      var check = pr.replaceAll(' - ','0').replaceAll(',','0').replaceAll(' ','999')
      var check2 = check.normalize("NFD").replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')
      var check3 = check2.replaceAll('0','-').replaceAll('999','_')
      return check3.toLowerCase()
    },

    capitalize(value){
      return value.replace(/(?:^|\s|-)\S/g, x => x.toUpperCase());
    },

    setParamSearch(pr){
      //var check = this.capitalizeFirstLetter(pr)
      var check = pr.replaceAll('_',' ')
      var check2 = this.capitalize(check)
      return check2
    },

    filterBranchImage(imagetype){
      var image = ''
      if(this.branch.branchimages && this.branch.branchimages.length > 0){
        const result = this.branch.branchimages.filter(model => model.description == imagetype)
        if(result.length > 0){
          image = result[0].urlremoto
        }
      }
      return image
    },

    filterPropertyItems(search){
      if(search.model && search.model != '' && search.model != undefined){
          var results = PROPERTY_ITEMS.filter(model => model.model == search.model)
          if(search.tipos && search.tipos != ''){
              var tipos = []
              results.forEach(i => {
                  var item = i.tipos.includes(search.tipos)
                  if(item == true){
                      tipos.push(i)
                  }
              })
              results = tipos
          }

          if(search.regioes && search.regioes != ''){
              var regioes = []
              results.forEach(i => {
                  var item = i.regioes.includes(search.regioes)
                  if(item == true){
                      regioes.push(i)
                  }
              })
              results = regioes
          }

          // order
          var ordem = 'order'
          if(search.order && search.order != ''){
              ordem = search.order
          }

          if(ordem == 'description'){
              return results.sort(function(a, b){
                  if(a.description > b.description) { return 1 }
                  if(a.description < b.description) { return -1 }
                  return 0
              })
          }

          if(ordem == 'order'){
              return results.sort((a, b) =>
                  a.order-b.order
              )
          }
      }
  },



  },

}
