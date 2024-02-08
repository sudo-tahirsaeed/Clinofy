<script setup>
import { ref } from "vue";

const isSidebarOpen = ref(false);
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
  <div class="mainHead">
    <div></div>
    <div id="app">
      
      <h2 id="Header">Welcome To clinofy</h2>
    </div>
  </div>
  <div class="mainHead">
    <div>
      <div class="side-panel" :class="{ active: isSidebarOpen }">
        <div class="user-info">
          <p class="username">Reception</p>
        </div>
        <nav class="nav-links">
          <a href="#">
            <img
              src="../src/assets/register.png"
              alt="Dashboard Icon"
              width="24"
              height="24"
            />
            Register Patient
          </a>
          <a href="#">
            <img
              src="../src/assets/search.png"
              alt="Dashboard Icon"
              width="24"
              height="24"
            />
            Search Patient
          </a>
          <a href="#">
            <img
              src="../src/assets/bill.png"
              alt="Dashboard Icon"
              width="24"
              height="24"
            />
            Billing
          </a>
        </nav>
      </div>

      <button class="hamburger-menu" @click="toggleSidebar">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>
    <div>
      <router-view>

      </router-view>
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #d4d4d4;
  color: #3c3633;
  background-color: #e0ccbe;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto";
}

/* Global styles */
body {
  background-color: #f4f4f4;
}
#Header {
  height: 10vh;
}
.side-panel {
  min-height: 100vh; /* Extend side panel to full height */
  width: 250px; /* Consistent width in both desktop and mobile views */
  // background-color: #0c203a; /* Use a neutral dark color for the sidebar */
  color: #fff; /* Clear white text for readability */
  position: fixed; /* Fix sidebar to the left side */
  top: 0; /* Align sidebar to the top */
  left: 0; /* Avoid gaps on the left side */
  transition: transform 0.3s ease-in-out; /* Smooth transition for collapsing on mobile */
  background-image: linear-gradient(
    to right bottom,
    #04274f,
    #022247,
    #011e3f,
    #001a37,
    #00152f
  );
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
  letter-spacing: 2px;
}

.designation {
  font-size: 0.8em;
  color: #ccc;
}

.nav-links {
  list-style: none;
  padding: 20px;
}

.nav-links a img {
  display: inline-block;
  vertical-align: middle; /* Align images vertically to the middle */
}

.nav-links a {
  display: inline-block;
  padding: 10px 15px;
  text-decoration: none;
  color: #fff;
  border-bottom: 1px solid #222;
  transition: background-color 0.2s ease-in-out;
  margin-bottom: 12px; /* Add margin-bottom to create space between links */
}

.nav-links a:hover,
.nav-links a.active {
  background-image: linear-gradient(
    to right bottom,
    #2466b4,
    #306ebb,
    #3b77c2,
    #457fc8,
    #4f88cf
  );
  border-radius: 20px;
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
  background-color: #0c203a;
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
