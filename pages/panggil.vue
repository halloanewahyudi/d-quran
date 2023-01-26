<script setup>
const { pending, data: surat } = await useLazyFetch('https://equran.id/api/surat')
const activeFilter = ref('All');
const todos = ref("")

function filterTodo(type) {
      activeFilter.value = type;
    }

    const getTodos = computed(() => {
      if (activeFilter.value === 'All') {
        return todos.value;
      }
      return todos.value.filter((item) => item.type === activeFilter.value);
    });

    const emptyNote = computed(() => {
      return `There is no tasks with type ${activeFilter.value} so far. Please, add some!`;
    });
</script>
<template>
  <div class="tags-wrapper">
    <p v-for="(filter, index) in surat" :key="index">
      <span
        @click="filterTodo(filter)"
         :class="{ active: filter === activeFilter }"
      >{{ filter.nama_latin }}</span>
    </p>
  </div>
  <ul >
    <li
      v-for="(todo, index) in getTodos"
      :key="index"
      :class="{ done: todo.done }"
    >
       <span class="task" @click="doneTodo(todo)">{{ todo.nama_latin }}</span>
       <span class="label">{{ todo.nama }}</span>
       <button class="remove-btn" @click="removeTodo(todo.id)"></button>
    </li>
  </ul>
</template>