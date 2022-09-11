<template>
  <div >
    <h1 id="AP">Admin Page</h1>
    <div class=" row items-start q-gutter-md">

    <q-card id="Card">
      <q-card-section>
        <div class="text-h6">Corrida clandestina</div>
        <div class="text-subtitle2">Feito Reggie Rock Bythewood</div>
      </q-card-section>
    </q-card>
    <q-card id="Card">
      <q-card-section>
        <div class="text-h6">Hot Wheels: AcceleRacers</div>
        <div class="text-subtitle2">Feito Andrew Duncan</div>
      </q-card-section>
    </q-card>
    <q-card id="Card">
      <q-card-section>
        <div class="text-h6">Velozes e furiosos</div>
        <div class="text-subtitle2">Feito Justin Lin</div>
      </q-card-section>
    </q-card>
    <!-- Slider -->
    <div class="Slider">
    <q-slider v-model="value" :min="-200" :max="200" :step="4" label label-always color="purple"/>
    <q-slider v-model="value" :min="-200" :max="200" :step="4" label label-always color="green"/>
  </div>
  </div>
  </div>
  <!-- List -->
  <div id="List">
    <q-list >
      <q-item-label header class="bg-secondary text-black shadow-2 text-center">Gerenciado Tudo</q-item-label>
      <q-item >
        <q-virtual-scroll id="Listas" :items="heavyList" separator v-slot="{ item, index }">
          <q-item :key="index" dense>
            <q-item-section>
              <q-item-label>
                            #{{ index }} - {{ item.label }}
              </q-item-label>
            </q-item-section>
    </q-item>
  </q-virtual-scroll>
      </q-item>
    </q-list>
  </div>

</template>
<script>
  import { ref } from 'vue'
  const maxSize = 101
const heavyList = []

for (let i = 0; i < maxSize; i++) {
  heavyList.push({
    label: 'As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente. '
  })
}

  export default{
    name:"ConteúdoG",
    setup () {
    return {
      value: ref(0),
      label: ref('Click me'),
      label2: ref('Also click me'),
      heavyList,
      group: ref([])
    }
  }
}
</script>
