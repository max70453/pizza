<template>
  <div class="layout">
    <transition name="fade" appear>
        <main>
          <slot />
        </main>
      </transition>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
@font-face {
  font-family: Muller;
  src: url('../assets/muller/Fontfabric - MullerRegular.woff2');
  font-weight: normal;
}

 .fade-enter-active {
   transition: opacity .5s;
 }

 .fade-enter {
   opacity: 0;
 }

 body {
   font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
   margin:0;
   padding:0;
   line-height: 1.5;
   color: #fff;
   background: linear-gradient(223deg, #1E0C00 0%, #1F0700 31.43%, #170A00 69.37%, #1E0D00 100%);
 }
 *{
   box-sizing: border-box;
   margin: 0;
   padding: 0;
 }
 a{
   text-decoration: none;
   display: block;
 }
 .layout {
   max-width: 1253px;
   margin: 0 auto;
   padding-left: 20px;
   padding-right: 20px;
 }

</style>
