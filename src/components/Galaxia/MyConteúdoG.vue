<template>
  <div>
    <h1>Admin Page</h1>
    <div class="q-pa-md row items-start q-gutter-md">

    <q-card class="my-card text-white" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
    </q-card>
    <q-card class="my-card text-white" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
    </q-card>
    <q-card class="my-card text-white" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
    </q-card>
    <!-- Graficos -->
    <div class="q-pa-md">
    <q-badge color="secondary">
      Model: {{ value }} (-20 to 20, step 4)
    </q-badge>

    <q-slider
      v-model="value"
      :min="-20"
      :max="20"
      :step="4"
      label
      :label-value="value + 'px'"
      label-always
      color="purple"
    />

    <q-badge color="secondary">
      Model: {{ value }} (-20 to 20, step 4)
    </q-badge>

    <q-slider
      v-model="value"
      :min="-20"
      :max="20"
      :step="4"
      label
      :label-value="value + 'px'"
      label-always
      color="red"
    />
  </div>
  </div>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <div class="cursor-pointer" style="width: 100px">
        {{ label }}
        <q-popup-edit v-model="label" class="bg-accent text-white" v-slot="scope">
          <q-input dark color="white" v-model="scope.value" dense autofocus counter @keyup.enter="scope.set">
            <template v-slot:append>
              <q-icon name="edit" />
            </template>
          </q-input>
        </q-popup-edit>
      </div>

      <div class="cursor-pointer" style="width: 100px">
        {{ label2 }}
        <q-popup-edit v-model="label2" :cover="false" :offset="[0, 10]" v-slot="scope">
          <q-input color="accent" v-model="scope.value" dense autofocus counter @keyup.enter="scope.set">
            <template v-slot:prepend>
              <q-icon name="record_voice_over" color="accent" />
            </template>
          </q-input>
        </q-popup-edit>
      </div>
    </div>
  </div>
  <div class="q-pa-md">
    <q-list class="bg-grey-10 text-white shadow-2 rounded-borders" style="max-width: 250px; width: 100%;">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar6.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>Jane</q-item-section>
      </q-item>

      <q-separator color="orange" inset />

      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar3.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>Lily</q-item-section>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar5.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>Mary</q-item-section>
      </q-item>
    </q-list>
  </div>
  <div class="q-pa-md q-gutter-md">
    <q-list bordered class="rounded-borders" style="max-width: 350px">
      <q-item-label header class="bg-primary text-white shadow-2">Friends</q-item-label>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Brunch this weekend?</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">Janet</span>
            -- I'll be in your neighborhood doing errands this
            weekend. Do you want to grab brunch?
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>

      <q-separator inset="item" />

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar4.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Linear Project</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">John</span>
            -- Can we schedule a call for tomorrow?
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-virtual-scroll
    style="max-height: 300px;"
    :items="heavyList"
    separator
    v-slot="{ item, index }"
  >
    <q-item
      :key="index"
      dense
    >
      <q-item-section>
        <q-item-label>
          #{{ index }} - {{ item.label }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-virtual-scroll>
  <div class="q-pa-md">
    <q-option-group
      :options="options"
      type="checkbox"
      v-model="group"
    />
  </div>
</div>
</template>
<script>
  import { ref } from 'vue'
  const maxSize = 10000
const heavyList = []

for (let i = 0; i < maxSize; i++) {
  heavyList.push({
    label: 'Option ' + (i + 1)
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
      group: ref([]),
      options: [
        { label: 'Battery too low', value: 'bat' },
        { label: 'Friend request', value: 'friend', color: 'green' },
        { label: 'Picture uploaded', value: 'upload', color: 'red' }
      ]
    }
  }
}
</script>
