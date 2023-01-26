
<script>
export default {
    data() {
        return {
            buka:false,
        }
    },
    props: {
        link: { type: String },
        nomor: { type: Number },
        nama: { type: String },
        nama_latin: { type: String },
        jumlah_ayat: { type: String },
        tempat_turun: { type: String },
        arti: { type: String },
        deskripsi: { type: String },
    },
    methods: {
        toggle(){
         this.buka = !this.buka
         console.log(this.buka)
        }
    },
}
</script>
<template>
    <div  class=" p-4 flex justify-between border-b border-light hover:bg-line  ">
            <nuxt-link :to="link" class="flex gap-2 justify-between w-full">
                <div class="text-primary"> 
                    <div class="rounded-full bg-primary text-warning font-semibold  w-8 h-8 inline-flex items-center justify-center mr-3">
                        {{ nomor }}
                    </div>
               
                <span class=""> {{ nama_latin }}</span> 
               </div>
                
                <h5 class="font-bold text-2xl text-primary ar">{{ nama }} </h5>
            </nuxt-link>
        <button :class="bg-buka ? bg-line : !buka" @click="toggle" class="pl-3">
           <IconTitik fill="primary" />
        </button>
    </div >
    <div class="p-5 transition-all duration-200 bg-light  text-primary" v-if="buka">
        <p>Jumlah Ayat : {{ jumlah_ayat }}</p>
        <p>Tempat Turun: {{ tempat_turun }}</p>
        <p>Arti: {{ arti }}</p>
        <p class="my-3" v-html="deskripsi"></p>
        <nuxt-link :to="link" class="py-1 px-4 text-white bg-secondary border-primary border-2 rounded-full hover:bg-gradient-to-r from-primary to-secondary hover:shadow-xl ">Baca</nuxt-link>
    </div>
</template>