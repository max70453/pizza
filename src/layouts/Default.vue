<template>
  <div class="layout">
    <!-- <header class="header"> -->
      <!-- <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong> -->
      <!-- <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav> -->
    <!-- </header> -->
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
  background: linear-gradient(223deg, #1E0C00 0%, #1F0700 31.43%, #170A00 69.37%, #1E0D00 100%);
}
*{
  box-sizing: border-box;
}
a{
  text-decoration: none;
}
.layout {
  max-width: 1253px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

/* .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
} */

/* .nav__link {
  margin-left: 20px;
} */
</style>
