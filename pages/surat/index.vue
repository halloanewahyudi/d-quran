<script setup>

const { pending, refresh, data: surat } = await useLazyFetch('https://equran.id/api/surat')
const search = ref("")

const list = computed(()=>{
  surat.value = surat.value.filter((item) => item.nama_latin.match(search.value))
   return surat.value
})

watch(search, (newValue) => {
  if(search.value == 0 ){
    refresh()
   console.log('kosong')
  }else{
    console.log(newValue)
  }
})

const back = () => {
  refresh()
  return list
}

</script>
<template>
  <div>
    <Navbar>
      <input type="text" v-model="search" @keydown="back" class="rounded-full py-1 px-4" placeholder="Cari Surat">
    </Navbar>
   
    <div v-if="pending">
        <div class="w-max-screen h-[100vh] flex items-center justify-center">
            loading...
        </div>
    </div>
    <div class="max-w-screen-md mx-auto">
     <ItemSurat 
       v-for="item in list" :key="item" 
       :link="'/surat/'+item.nomor"
       :nomor="item.nomor"
       :nama="item.nama"
       :nama_latin="item.nama_latin"
       :jumlah_ayat="item.jumlah_ayat"
       :tempat_turun="item.tempat_turun"
       :arti="item.arti"
       :deskripsi="item.deskripsi"
       />
      </div>
  </div>
</template>