<script setup>

const route = useRoute()
const router = useRouter()
const {data: surat, pending, refresh } = await useLazyFetch('https://equran.id/api/surat/' + route.params.id,{
  pick:['nama','nama_latin','jumlah_ayat']
})


const namaSurat = ref ("")
watch(surat, (newSurat) => {
  tampilNamaSurat(newSurat.nama)
  refresh()
 // console.log(newSurat.nama)
})

</script>
<template>
  <div>
      <NuxtPage />
  </div>
</template>
