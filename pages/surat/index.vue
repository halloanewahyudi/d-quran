<script setup>
const { pending, data: surat } = await useLazyFetch('https://equran.id/api/surat')

</script>
<template>
     <Navbar>
     </Navbar>
 
    <div class="max-w-screen-md mx-auto">
     <ItemSurat 
       v-for="item in surat" :key="item.id" :ref="search"
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
</template>