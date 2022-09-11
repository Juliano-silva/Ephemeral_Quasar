<template>
  <div id="Tempo">
  <h1>Previsão do Tempo</h1>
  <div id="app" :class="typeof weather.main !== 'undefined' && weather.main.temp > 16 ? 'warm' : ''">
        <input
            v-model="query"
            @keypress="fetchWeather"
            type="text"
            class="Pesquisa"
            placeholder="Pesquisar ... "
        >
      <div class="weather-wrap" v-if="typeof weather.main !== 'undefined'">
        <div class="location-box">
          <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
          <div class="date">DATA{{ dateBuilder() }}</div>
        </div>

        <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp)}}°C</div>
          <div class="weather">{{ weather.weather[0].main }}</div>
        </div>
      </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'App',

  data() {
    return {
      API_KEY:  '24c2ef4932e0e86e17541d05b0eafeb0',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query:    '',
      weather:  {},
    }
  },

  methods: {
    fetchWeather(event) {
      if (event.key === 'Enter') {
        this.fetchToAPI()
      }
    },

    fetchToAPI() {
      fetch(`${this.url_base}weather?q=${this.query ? this.query : 'Pelotas'}&units=metric&appid=${this.API_KEY}`)
          .then(res => res.json())
          .then(this.setResults)
          .catch(err => console.log(err))
    },

    setResults(results) {
      this.weather = results
    },

    dateBuilder() {
      let d      = new Date(),
          date   = d.getDate(),
          mes    = d.getMonth()+1,
          year   = d.getFullYear();

      return ` ${date}/${mes}/${year}`
    },
  },

  mounted() {
    this.fetchToAPI()
  },
}
</script>

