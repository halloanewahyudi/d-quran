<script setup>
import { useLocalStorage , usePreferredDark  } from '@vueuse/core'

const tampil = ref(false)
const modal = () => {
   tampil.value = true && !tampil.value
}

// is user prefers dark theme
const isDark = usePreferredDark()
</script>
<template>
     <Navbar></Navbar>
     <div class="max-w-screen-md h-[91.5vh] mx-auto flex flex-col gap-4 items-center justify-center">
       <NuxtLink to="/surat" class="rounded-full py-3 px-16 bg-slate-900 text-lime-50 text-xl hover:bg-slate-800"> Baca Quran</NuxtLink>
       <button for="my-modal" @click="modal" class=" rounded-full py-3 px-16 bg-cyan-900 text-lime-50 text-xl hover:bg-cyan-800 "> Baca Tafsir</button>
    </div>
    <!-- The button to open modal -->


<!-- Put this part before </body> tag -->
<div v-if="tampil" class="fixed bg-cyan-900 w-screen h-screen top-0 left-0 flex items-center justify-center z-50">
  <div class="p-4 rounded-lg text-center bg-white">
    <div class="flex flex-col w-full">
      <h3 class="font-bold text-lg">Mohon Maaf!</h3>
    <p class="py-4">Tafsir masih dalam pengembangan!</p>
    </div>
    
    <div class="modal-action">
      <button @click="modal" for="my-modal" class="py-2 px-5 rounded-full bg-slate-900 text-white">Close</button>
    </div>
  </div>
</div>
</template>