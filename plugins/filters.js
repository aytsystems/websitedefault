import Vue from 'vue'

Vue.filter('toCurrency', function (value) {
  if (typeof value !== "number") {
      return value;
  }
  var formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
  });
  return formatter.format(value);
});

Vue.filter('urlUpload', function (value) {
  if (!value) return ''
  if(value.urlremoto != ''){
      return value.urlremoto
  }
})

Vue.filter('urlYoutube', function (value) {
  if (!value) return ''
  return 'https://www.youtube.com/watch?v=' + value
})

Vue.filter('alertColor', function (value) {
  if(!value) return ''
  if(value == 'info') return 'blue lighten-1'
  else if(value == 'success') return 'green lighten-1'
  else if(value == 'error') return 'red lighten-1'
  else if(value == 'warning') return 'orange lighten-1'
  else return ''
})

Vue.filter('str_limit', function (value, size) {
  if (!value) return '';
  value = value.toString();

  if (value.length <= size) {
    return value;
  }
  return value.substr(0, size) + '...';
})
