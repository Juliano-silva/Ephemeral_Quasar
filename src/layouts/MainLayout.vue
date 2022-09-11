<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated id="Bk">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer"/>
        <q-toolbar-title class="text-center text-gold">
          Ephemeral
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      id="Bk"
    >
      <q-list >

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: '2D',
    link: '/'
  },
  {
    title: 'Noodle',
    link: 'MySenha'
  },
  {
    title: 'Ace',
    link: 'MyGalaxy'
  },
  {
    title: 'Russel',
    link: 'MyTempo'
  },
  {
    title: 'Mudoc',
    link: 'MyForum'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
