<template>
     <nav class="p-4 bg-cyan-900">
      <div class="max-w-screen-md mx-auto">
        <div class="flex justify-between  flex-wrap">
          <ul class="flex gap-3 items-center">
            <li><nuxt-link to="/">
                <IconHome fill="#Fed7aa" width="20" height="20" />
              </nuxt-link></li>
            <li><nuxt-link to="/surat">
                <IconBook fill="#Fed7aa" width="20" height="20" />
              </nuxt-link></li>
          </ul>
          <slot />
        </div>
      </div>
    </nav>
</template>