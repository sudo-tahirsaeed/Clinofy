<template>
  <div class="mainHead">
    <div></div>
    <div id="#app" style="height: 5vh; align-content: center">
      <h2
        style="
          text-align: center;
          margin-left: 5px;
          margin-top: 5px;
          font-family: sans-serif;
          background-color: red;
        "
      >
        Welcome To clinofy
      </h2>
    </div>
  </div>
  <div class="mainHead">
    <div>
      <div class="side-panel" :class="{ active: isSidebarOpen }">
        <div class="user-info">
          <p class="username">Tahir Saeed</p>
          <p class="designation">Doctor</p>
        </div>
        <nav class="nav-links">
          <a href="#" class="active">Dashboard</a>
          <a href="#">Billing</a>
          <a href="#">History</a>
        </nav>
      </div>

      <button class="hamburger-menu" @click="toggleSidebar">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #d4d4d4;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Global styles */
body {
  font-family: sans-serif;
  background-color: #131111;
}

.side-panel {
  min-height: 100vh; /* Extend side panel to full height */
  width: 250px; /* Consistent width in both desktop and mobile views */
  background-color: #160d0d; /* Use a neutral dark color for the sidebar */
  color: #fff; /* Clear white text for readability */
  position: fixed; /* Fix sidebar to the left side */
  top: 0; /* Align sidebar to the top */
  left: 0; /* Avoid gaps on the left side */
  transition: transform 0.3s ease-in-out; /* Smooth transition for collapsing on mobile */
  z-index: 999;
}

.user-info {
  text-align: center;
  padding: 20px;
  border-bottom: 1px solid #222;
}

.username {
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 5px;
}

.designation {
  font-size: 0.8em;
  color: #ccc;
}

.nav-links {
  list-style: none;
  padding: 20px;
}

.nav-links a {
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  color: #fff;
  border-bottom: 1px solid #222;
  transition: background-color 0.2s ease-in-out;
}

.nav-links a:hover,
.nav-links a.active {
  background-color: #de294c;
}

.hamburger-menu {
  display: none; /* Initially hidden on desktop */
  position: fixed; /* Change to fixed positioning */
  top: 20px;
  right: 20px;
  padding: 8px;
  cursor: pointer;
  background-color: transparent; /* Remove default button styling */
  border: none;
  z-index: 999; /* Ensure the hamburger menu stays on top */
}

.hamburger-menu:hover {
  opacity: 0.8;
}

.hamburger-menu .bar {
  display: block;
  width: 20px;
  height: 2px;
  background-color: #940000;
  margin-bottom: 5px;
}
.mainHead {
  display: grid;
  grid-template-columns: 250px 1fr;
}
/* Media queries for responsive behavior */
@media (max-width: 768px) {
  .mainHead {
    grid-template-columns: 1fr; /* Single column layout for mobile */
  }
  .side-panel {
    transform: translateX(-250px); /* Collapse sidebar on mobile */
  }

  .side-panel.active {
    transform: translateX(
      0
    ); /* Expand sidebar when hamburger menu is clicked */
  }

  .hamburger-menu {
    display: block; /* Show hamburger menu only on mobile */
  }
}
</style>
