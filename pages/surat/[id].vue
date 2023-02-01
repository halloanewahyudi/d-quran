<script setup>
import { onClickOutside, useStorage   } from '@vueuse/core'
const route = useRoute()
const { pending, data: surat } = await useLazyFetch('https://equran.id/api/surat/' + route.params.id)
const tampil = ref(false)
const modal = () => {
   tampil.value = true && !tampil.value
}


</script>
<template>
    <!-- بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْم -->
 
 <Navbar>
            <div class="text-cyan-100 flex items-center gap-3">
                <span class="text-orange-200 text-2xl ar">{{ surat.nama }} </span>  <span>{{ surat.nama_latin }}</span>  
            <span class="text-sm ">{{ surat.jumlah_ayat }} Ayat</span>
            </div>
           
        </Navbar>
    <div v-if="pending">
        <div class="w-max-screen h-[100vh] flex items-center justify-center">
            loading...
        </div>
    </div>

        <nav v-if="route.name == 'surat-id'" class="bg-gradient-to-b from-cyan-900 to-cyan-800 p-4">
      <figure class="max-w-screen-md mx-auto">
        <audio class="w-full h-8" controls :src="surat.audio">
          <a :href="surat.audio">
            Download audio
          </a>
        </audio>
      </figure>
    </nav>
        <div class="max-w-screen-md mx-auto">
            <div v-if="route.params.id > 1 || route.params.id == 9 ">
                <div class="flex justify-center text-2xl font-bold ar py-6 my-4 border-b border-cyan-100"> 
                    بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْم 
                </div>
                
            </div>
        <ul>
            <li v-for="ayat in surat.ayat" :key="ayat"
                class="border-b border-cyan-50 text-slate-900 hover:bg-cyan-50 transition" :id="'ayat_'+ayat.nomor">
                <div class="flex justify-between items-center relative ">
                    <div class=" p-4 shrink-0 text-center">
                        <button @click="modal"
                            class="w-8 h-8  rounded-full inline-block bg-white font-semibold shadow-lg text-center text-sm pt-1.5">
                            {{ ayat.nomor }}
                        </button>
                    </div>
                    <div class="text-right w-full p-4 leading-[220%] ar tracking-[1px] text-2xl font-semibold  ">
                        {{ ayat.ar }} <br>
                    </div>
                </div>
                <div class="text-right text-md text-slate-700 mb-4 p-4">
                    {{ ayat.idn }}
                </div>
            </li>
        </ul>
    </div>
    <!-- modal -->
<div v-if="tampil" class="fixed bg-cyan-900 w-screen h-screen top-0 left-0 flex items-center justify-center z-50">
 <klik-ayat >
    <button @click="modal" class="py-1 px-3 bg-slate-900 text-orange-200 rounded-full mb-4 hover:bg-slate-800"> Batal </button>
</klik-ayat>
</div>

</template>