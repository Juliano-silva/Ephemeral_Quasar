<template>
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lff" container id="CorpoGalaxy" class="shadow-3 rounded-borders">
      <q-header elevated class="bg-purple-9">
        <q-toolbar>
          <q-toolbar-title class="text-center text-yellow shadow">Admin Page</q-toolbar-title>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px;" class="bg-purple-9">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Inbox
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" class="text-white" />
              </q-item-section>

              <q-item-section  class="text-white">
                Star
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Send
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://i.pinimg.com/564x/90/f9/e3/90f9e359e41b33083e6f1383c13fd50b.jpg" style="height: 150px">
          <div class="absolute-bottom bg-transparent text-yellow">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="../../Arquivo/Eu.jpg">
            </q-avatar>
            <div class="text-weight-bold">Juliano Silva de Almeida</div>
            <div>@ju.liano1841</div>
          </div>
        </q-img>
      </q-drawer>
      <!-- Contéudo -->
      <q-page-container id="ContainerConteúdo">
        <MyConteúdoGVue/>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import MyConteúdoGVue from './MyConteúdoG.vue'
export default defineComponent({
  name:"MyGalaxy",
  components:{
    MyConteúdoGVue
  },
  setup () {
    return {
      drawer: ref(false)
    }
  }
})
</script>
