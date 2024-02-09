<template>
  <div class="mainHead">
    <div></div>
    <div id="#app" >
      <br>
    </div>
  </div>
  <div class="mainHead">
    <div>
      <div class="side-panel" :class="{ active: isSidebarOpen }">
        <div class="user-info">
          <img src="./assets/logo.png" alt="" width="60" height="60">
          <p class="name">Clinofy</p>
          <!-- <p class="designation">Doctor</p> -->
        </div>
        <nav class="nav-links">
          <div class="item">
            <img src="./assets/doctor.png" alt="" height="30" width="30">
          <a href="#" class="active">Dashboard</a>
        </div>
        <div class="item">
            <img src="./assets/pharmacy.png" alt="" height="30" width="30">
          <a href="#">Pharmacy</a>
        </div>
        <div class="item">
            <img src="./assets/laboratory.png" alt="" height="30" width="30">
          <a href="#" >Laboratory</a>
        </div>
        <div class="item">
            <img src="./assets/appointment.png" alt="" height="30" width="30">
          <a href="#" >Reception</a>
        </div>
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

  background-color: #fff;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Global styles */
body {
  font-family: sans-serif;
  background-color: #f4f4f4;
}

.side-panel {
  min-height: 100vh; /* Extend side panel to full height */
  width: 250px; /* Consistent width in both desktop and mobile views */
  background-color: #336bfb; /* Use a neutral dark color for the sidebar */
  color: #fff; /* Clear white text for readability */
  position: fixed; /* Fix sidebar to the left side */
  top: 0; /* Align sidebar to the top */
  left: 0; /* Avoid gaps on the left side */
  transition: transform 0.3s ease-in-out; /* Smooth transition for collapsing on mobile */
}

.user-info { 
  display: flex;
  flex-direction: row;
  /* text-align: center; */
  padding: 20px;
  align-items: center;

}

.name {
  font-size: 2em;
  font-weight: 600;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.designation {
  font-size: 0.8em;
  color: #ccc;
}

.nav-links {
  list-style: none;
  padding: 20px;
}
.item{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;
}

.nav-links a {
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  color: #fff;
  /* border-bottom: 1px solid #222; */
  transition: background-color 0.2s ease-in-out;
  font-size: 15x;
}

.nav-links a:hover,
.nav-links a.active {
  color:#09c1e6

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
  background-color: #346cfc;
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
