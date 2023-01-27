<script setup>
const data = ref([
  {
    nama:'Wahyudi',
    umur:44
  },
  {
    nama:'Nurdianah',
    umur:36,
  },
  {
    nama:'Muhammad Alfatih',
    umur:14,
  },
  {
    nama:'Muhammad Alfaizi',
    umur:12,
  },
  {
    nama:'Muhammad Farel Ardafa',
    umur:4
  }
])
const { pending, refresh, data: surat } = await useLazyFetch('https://equran.id/api/surat')
const search = ref("")

const list = computed(()=>{
  surat.value = surat.value.filter((item) => item.nama_latin.toLowerCase().match(search.value))
   return surat.value
})

watch(search, (newValue) => {
  if(search.value == 0 ){
    refresh()
   console.log('kosong')
  }else{
    console.log(newValue)
  }
  console.log(search.value)
})

</script>
<template>
  <div>
    <input type="text" v-model="search">
<ul>
  <li v-for="item in list" :key="item">
    {{ item.nama_latin }}
  </li>
</ul>
  </div>
</template>