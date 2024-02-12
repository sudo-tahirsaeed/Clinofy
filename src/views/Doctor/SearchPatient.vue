<template>
  <div class="main">
    <h1 style="text-align: center; color: #000000; background-color: yellow">
      Search Patient Records
    </h1>
    <div
      style="
        margin: 50px;
        max-width: 100%;
        justify-content: center;

        display: flex;
      "
    >
      <div
        style="max-width: 80%; height: 50px"
        class="card flex flex-column md:flex-row gap-3"
      >
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-user"></i>
          </InputGroupAddon>
          <InputText style="padding: 7px" placeholder="Enter CNIC" />
        </InputGroup>
        <button
          style="
            justify-content: center;
            display: flex;
            flex-direction: row;
            align-items: center;
          "
          class="button1"
        >
          <img
            src="../../assets/search.png"
            height="10"
            style="margin-right: 10px"
          />Search
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
</script>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {
      InputText,
      InputNumber,
      InputGroup,
      InputGroupAddon,
    };
  },
});
</script>

<style scoped>
.main {
  position: relative; /* Required for positioning the pseudo-element */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.button1 {
  position: relative;

  border-radius: 6px;
  margin-left: 25px;
  margin-right: 25px;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: #de294c;
  transition: all 0.2s ease;
}
.main::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/searchbg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(2px); /* Adjust the blur intensity as needed */
  z-index: -1; /* Ensure the pseudo-element is behind other content */
}

.button1 {
  position: relative;

  padding: 3px 25px;
  border-radius: 6px;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: #de294c;
  transition: all 0.2s ease;
}

.button1:active {
  transform: scale(0.96);
}

.button1:before,
.button1:after {
  position: absolute;
  content: "";
  width: 150%;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
  z-index: -1000;
  background-repeat: no-repeat;
}

.button1:hover:before {
  top: -70%;
  background-image: radial-gradient(circle, #e8762a 20%, transparent 20%),
    radial-gradient(circle, transparent 20%, #7d2ae8 20%, transparent 30%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%);
  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
    10% 10%, 18% 18%;
  background-position: 50% 120%;
  animation: greentopBubbles 0.8s ease;
}

@keyframes greentopBubbles {
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
      40% 90%, 55% 90%, 70% 90%;
  }

  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
      50% 50%, 65% 20%, 90% 30%;
  }

  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
      50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}

.button1:hover::after {
  bottom: -70%;
  background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%);
  background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
  background-position: 50% 0%;
  animation: greenbottomBubbles 0.6s ease;
}

@keyframes greenbottomBubbles {
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
      70% -10%, 70% 0%;
  }

  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
      105% 0%;
  }

  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
      110% 10%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}
</style>
