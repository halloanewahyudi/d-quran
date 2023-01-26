<script setup>
import { onClickOutside, useStorage   } from '@vueuse/core'
const route = useRoute()
const { pending, data: surat } = await useLazyFetch('https://equran.id/api/surat/' + route.params.id)
const modal = ref(false)
const modalRef = ref(null)
onClickOutside(
    modalRef,
    (event) => {
        console.log(event)
        modal.value = false
    },
)
</script>
<template>

    <div v-if="pending">
        <div class="w-max-screen h-[100vh] flex items-center justify-center">
            loading...
        </div>
    </div>
    <div v-else>
        <Navbar>
            <div class="text-info flex items-center gap-3">
                <span class="text-warning text-2xl ar">{{ surat.nama }} </span>  <span>{{ surat.nama_latin }}</span>  
            <span class="text-sm ">{{ surat.jumlah_ayat }} Ayat</span>
            </div>
           
        </Navbar>
        <nav v-if="route.name == 'surat-id'" class="bg-secondary p-4">
      <figure class="max-w-screen-md mx-auto">
        <audio class="w-full h-8" controls :src="surat.audio">
          <a :href="surat.audio">
            Download audio
          </a>
        </audio>
      </figure>
    </nav>
        <div class="max-w-screen-md mx-auto">
        <ul>
            <li v-for="ayat in surat.ayat" :key="ayat"
                class="border-b border-line text-primary hover:bg-line">
                <div class="flex justify-between items-center relative ">
                    <div class=" p-4 shrink-0 text-center">
                        <button @click="ayat.modal = true"
                            class="w-8 h-8  rounded-full inline-block bg-white text-primary font-semibold shadow-lg text-center text-sm pt-1.5">
                            {{ ayat.nomor }}
                        </button>
                    </div>
                    <div class="text-right w-full p-4 leading-[220%] ar tracking-[1px] text-2xl font-medium  ">
                        {{ ayat.ar }}</div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>