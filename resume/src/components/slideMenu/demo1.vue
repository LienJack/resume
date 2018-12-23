<template>
  <aside>
    <nav id="menu" style="background-color='black'">
      <header>
        <h2>Menu</h2>
      </header>
    </nav>

    <main id="panel">
      <header>
        <button class="toggle-button">☰</button>
        <h2>Panel</h2>
      </header>
    </main>
  </aside>
</template>

<script>
import  Slideout  from 'assets/frame/slideOut'
export default {
  mounted() {
    var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70
      });

      // Toggle button
      document.querySelector('.toggle-button').addEventListener('click', function() {
        slideout.toggle();
      });
  }
}
</script>

<style scoped>

.slideout-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 256px;
  min-height: 100vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 0;
  display: none;
}

.slideout-menu-left {
  left: 0;
}

.slideout-menu-right {
  right: 0;
}

.slideout-panel {
  position: relative;
  z-index: 1;
  will-change: transform;
  background-color: #FFF; /* A background-color is required */
  min-height: 100vh;
}

.slideout-open,
.slideout-open body,
.slideout-open .slideout-panel {
  overflow: hidden;
}

.slideout-open .slideout-menu {
  display: block;
}
</style>


