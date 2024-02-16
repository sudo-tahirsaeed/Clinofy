<script setup>
import { ref, onMounted } from "vue";

const isSidebarOpen = ref(false);
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
onMounted(() => {
  // Function to update current time
  function updateTime() {
    const currentTimeElement = document.getElementById("currentTime");
    const currentDateElement = document.getElementById("currentDate");
    if (currentTimeElement) {
      const now = new Date();

      const timeString = now.toLocaleTimeString("en-US", { hour12: true });

      // Get date in format 9 FEB 2024
      const dateString = now.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });

      // Get day in format Friday
      const dayString = now.toLocaleDateString("en-US", { weekday: "long" });

      // Combine the components
      const formattedDateTime = `${timeString}\n`;
      const dat = `${dateString}\n${dayString}`;
      currentTimeElement.textContent = formattedDateTime;
      currentDateElement.textContent = dat;
    }
  }

  // Update time every second
  setInterval(updateTime, 1000);

  // Initial call to display time immediately
  updateTime();
});
</script>

<template>
  <div class="mainHead">
    <div></div>
    <div id="app">
      <div id="Header">
        <div class="imageHead">
          <img src="./assets/medicine.png" height="30" />
          <h2 id="HeaderText">Welcome To Clinofy</h2>
        </div>

        <div style="display: flex; flex-direction: column; margin-right: 13px">
          <p id="currentTime"></p>
          <p id="currentDate"></p>
        </div>
      </div>

      <div></div>
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
      </button>
    </div>
    
    <router-view> </router-view>
  </div>
  
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@100&display=swap");
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
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
  height: 8vh;
  padding-top: 30px;
  background-image: linear-gradient(
    to right bottom,
    #051d39,
    #022247,
    #011e3f,
    #001a37,
    #0b386e
  );
  display: flex;
  letter-spacing: 2px;
  font-size: 30px;
  margin-left: 250px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: center;
}
#currentTime {
  color: rgb(168, 255, 97);
  font-size: 20px;
  font-weight: 600;
  font-family: "Roboto Condensed";
  text-align: right;
  letter-spacing: 2px;
  margin-right: 10px;
}
#currentDate {
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 600;
  font-family: "Roboto Condensed";
  text-align: right;
  letter-spacing: 2px;
  margin-right: 10px;
  margin-bottom: 30px;
}
#HeaderText {
  font-family: "Roboto Condensed";

  font-size: large;
  margin-left: 10px;
}
.imageHead {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-left: 5px;
  margin-bottom: 20px;
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

.hamburger-menu .bar {
  display: block;
  width: 20px;
  height: 2px;
  background-color: #0c203a;
  margin-bottom: 5px;
}

/* Media queries for responsive behavior */
@media (min-width: 768px) and (max-width: 1080px) {
}
@media (min-width: 360px) and (max-width: 768px) {
  .mainHead {
    grid-template-columns: 1fr; /* Single column layout for mobile */
  }
  #Header {
    height: 6vh;
    margin-left: 0px;
    flex-direction: row;
  }
  #HeaderText {
    font-size: 12px;
    margin-bottom: 24px;
    margin-left: 5px;
  }
  #currentTime {
    font-size: 15px;
    display: none;
  }
  #currentDate {
    display: none;
  }
  .side-panel.active {
    transform: translateX(0);
  }
  .side-panel {
    transform: translateX(-250px); /* Move the side panel out of view */
  }
  .hamburger-menu {
    display: block;
    width: 25px; /* Set the width */
    height: 25px; /* Set the height */
  }
}
</style>
