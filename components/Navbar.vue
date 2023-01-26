<template>
     <nav class="p-4 bg-primary">
      <div class="max-w-screen-md mx-auto">
        <div class="flex justify-between  flex-wrap">
          <ul class="flex gap-3 items-center">
            <li><nuxt-link to="/">
                <IconHome fill="#F37934" width="20" height="20" />
              </nuxt-link></li>
            <li><nuxt-link to="/surat">
                <IconBook fill="#F37934" width="20" height="20" />
              </nuxt-link></li>
          </ul>
          <slot />
        </div>
      </div>
    </nav>
</template>