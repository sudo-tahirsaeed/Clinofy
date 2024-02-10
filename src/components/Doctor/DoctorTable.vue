<template>
  <div class="topdiv">
    <div v-if="showModal">
      <DoctorModal @toggle="toggleComponent" />
    </div>
    <div v-else class="main-table-containter">
      <div class="title-table-container">
        <div class="subtitle">
          <h3 class="heading" style="display: flex; align-items: center">
            <img
              src="../../assets/heading.png"
              height="30"
              style="margin: 5px"
            />
            Your Patients
          </h3>
        </div>
        <div class="InputContainer">
          <input
            placeholder="Search.."
            id="input"
            class="input"
            name="text"
            type="text"
          />
        </div>
        <button class="select-button1">Remaining: 6</button>
      </div>
      <div>
        <table>
          <tbody>
            <th>Patient Name</th>
            <th>Patient Id</th>
            <th>Date Time</th>
            <th>Bill Status</th>
            <th>Actions</th>

            <tr v-for="(patient, index) in displayedPatients" :key="index">
              <td>
                <div class="icono-texto">
                  <img
                    src="../../assets/patient.png"
                    alt="Image"
                    class="patientIcon"
                    height="35"
                  />
                  <div>{{ patient.name }}</div>
                </div>
              </td>
              <td>{{ patient.patientId }}</td>
              <td>{{ patient.dateTime }}</td>
              <td>{{ patient.billStat }}</td>
              <td>
                <button @click="toggleComponent" class="button">
                  <span class="button-content">View</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div ref="sentinel" style="height: 1px"></div>
      </div>
    </div>
  </div>
</template>
<script>
import DoctorModal from "../Doctor/DetailsModal.vue";

export default {
  name: "DoctorTable",
  components: {
    DoctorModal, // Register ComponentB
  },
  data() {
    return {
      showModal: false,
      currentPatients: [
        {
          patientId: "4405",
          name: "tahir",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4415",
          name: "saeed",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4405",
          name: "tahir",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4415",
          name: "saeed",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4405",
          name: "tahir",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4415",
          name: "saeed",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4405",
          name: "tahir",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4415",
          name: "saeed",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4405",
          name: "tahir",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4415",
          name: "saeed",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4405",
          name: "tahir",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4415",
          name: "saeed",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4405",
          name: "tahir",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4415",
          name: "saeed",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4405",
          name: "tahir",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4415",
          name: "saeed",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4405",
          name: "tahir",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4415",
          name: "saeed",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4405",
          name: "tahir",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4415",
          name: "saeed",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4405",
          name: "tahir",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4415",
          name: "saeed",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4405",
          name: "tahir",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4415",
          name: "saeed",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4405",
          name: "tahir",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4415",
          name: "saeed",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4405",
          name: "tahir",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4415",
          name: "saeed",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4405",
          name: "tahir",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4415",
          name: "saeed",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4405",
          name: "tahir",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4415",
          name: "saeed",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4405",
          name: "tahir",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4415",
          name: "saeed",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4405",
          name: "tahir",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4415",
          name: "saeed",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4405",
          name: "tahir",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4415",
          name: "saeed",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4405",
          name: "tahir",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4415",
          name: "saeed",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4405",
          name: "tahir",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4415",
          name: "saeed",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4405",
          name: "tahir",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4415",
          name: "saeed",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4405",
          name: "tahir",
          dateTime: "5 mar",
          billStat: "Paid",
        },
        {
          patientId: "4415",
          name: "saeed",
          dateTime: "5 mar",
          billStat: "Paid",
        },
      ],
      displayedPatients: [],
      pageSize: 15,
    };
  },
  mounted() {
    const observer = new IntersectionObserver(this.onIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Load more when sentinel is 50% visible
    });
    observer.observe(this.$refs.sentinel);
  },
  methods: {
    toggleComponent() {
      // Toggle the value of showComponent to show/hide the component

      console.log("OK");
      this.showModal = !this.showModal;
    },
    onIntersection(entries) {
      if (
        entries[0].isIntersecting &&
        this.displayedPatients.length < this.currentPatients.length
      ) {
        const nextPage = this.displayedPatients.length / this.pageSize + 1;
        const startIdx = (nextPage - 1) * this.pageSize;
        const endIdx = Math.min(
          startIdx + this.pageSize,
          this.currentPatients.length
        );
        this.displayedPatients = this.displayedPatients.concat(
          this.currentPatients.slice(startIdx, endIdx)
        );
      }
    },
  },
};
</script>
<style scoped>
.topdiv {
  display: flex;
  margin-top: 5%;
  flex: 1;
  justify-content: center;
  align-items: center;
}
.home {
  background-color: rgb(255, 255, 255);
  flex: 1;
  width: 100%;
  height: 100%;
  color: black;
  text-align: left;
  display: block;
}
.heading {
  color: rgb(255, 255, 255);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.main-table-containter {
  border-radius: 3vmin;
  background-color: #f6f6f4;
  max-width: 900px;
  width: 100%;

  padding: 0.4rem 1rem;
  box-shadow: 0px 2px 5px 0px #00000033;
  height: 80vh; /* Adjust the height as needed */
  overflow-y: auto;
}

.title-table-container {
  display: flex;
  justify-content: space-between;

  align-items: center;
  padding: 0rem 1.5rem;

  background-image: linear-gradient(
    to right bottom,
    #04274f,
    #022247,
    #011e3f,
    #001a37,
    #00152f
  );
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 8px;
  position: sticky;
  top: 0;
  z-index: 10;
  margin-bottom: 10px;
}

.subtitle {
  font-weight: 600;
}

.select-button {
  padding: 0.45rem 1rem;
  padding-right: 1.5rem;
  position: relative;
  border-radius: 0.5rem;
  border: 2px solid lightgrey;
  font-weight: 600;
  border: none;
  box-shadow: 0px 1px 2px 0px #0000003b, -1px 0px 2px 0px #ffffff33;
}
.select-button1 {
  padding: 0.6rem 1rem;
  padding-right: 1.5rem;
  position: relative;
  border-radius: 0.5rem;
  border: 2px solid lightgrey;
  font-weight: 600;
  border: none;
  background-color: #c00000;
  color: white;
  font-size: 18px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  box-shadow: 0px 1px 2px 0px #0000003b, -1px 0px 2px 0px #ffffff33;
}
.select-button2 {
  padding: 0.4rem 0.4rem;

  position: relative;
  border-radius: 0.5rem;
  border: 2px solid lightgrey;
  font-weight: 600;
  border: none;
  background-color: #32b34e;
  color: white;
  font-size: 14px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  box-shadow: 0px 1px 2px 0px #0000003b, -1px 0px 2px 0px #ffffff33;
}

.select-button:after {
  content: " ";
  position: absolute;
  height: 0.7vmin;
  width: 0.7vmin;
  border: 1px solid black;
  border-bottom: none;
  border-left: none;
  right: 10%;
  top: 30%;
  transform: rotate(134deg);
}

.dot {
  height: 15px;
  width: 15px;
}

table {
  width: 100%;
  height: 100%;
  font-weight: 600;
  font-size: 11px;
  border-collapse: COLLAPSE;
  color: #474747;
}

tr {
  transition: background-color 0.2s;
  border-bottom: 1px solid #b9b9b9; /* Added border style */
}

td {
  padding: 1rem;
  border: none;
}

td {
  text-align: center;
}
th {
  text-align: center;
  font-weight: 700;
  color: #cf5858;
  font-size: 15px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  border-bottom: 2px solid #b9b9b9; /* Added border style */
  margin-bottom: 10px;
}
td:first-child {
  border-radius: 1.5rem 0rem 0rem 1.5rem;
  text-align: left;
}
.patientIcon {
  margin-left: 10px;
}
td:last-child {
  border-radius: 0rem 1.5rem 1.5rem 0rem;
}

.icono-texto {
  display: flex;
  align-items: CENTER;
}

.icono-texto > div {
  margin-left: 10px;
}
.contenedor-svg {
  background-color: #e090c9;
  border-radius: 0.7rem;
  padding: 10px;
}
.dolar {
  height: 15px;
  width: 15px;
}

.pendiente {
  background: linear-gradient(to top, #0ba360 0%, #3cba92 100%);

  color: #e8aa71;
  padding: 0.5rem;
  border-radius: 0.5rem;
}
.pendiente:hover {
  background: linear-gradient(to top, #0ba360 0%, #3cba92 100%);

  color: #e8aa71;
  padding: 0.5rem;
  border-radius: 0.9rem;
}

.completado {
  background-color: #e6ece9;
  color: #80aba4;
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.cancelado {
  background-color: #f3dedc;
  color: #cf5858;
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.otro-dolar {
  background-color: #b3afec;
}

@media (max-width: 750px) {
  td:nth-child(2) {
  }
  .select-button1 {
    margin: 6px;
    width: 32%;
    padding: 5px;
    position: relative;
    border-radius: 0.5rem;
    border: 2px solid lightgrey;
    font-weight: 400;
    border: none;
    background-color: #c00000;
    color: white;
    font-size: 14px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    box-shadow: 0px 1px 2px 0px #0000003b, -1px 0px 2px 0px #ffffff33;
  }

  td:nth-child(3) {
  }
}

.button {
  position: relative;
  overflow: hidden;
  height: 2rem;
  padding: 0 2rem;
  border-radius: 1.5rem;
  background: #28bd4d;
  background-size: 400%;
  color: #fff;
  border: none;
  cursor: pointer;
}

.button:hover::before {
  transform: scaleX(1);
}

.button-content {
  position: relative;
  z-index: 1;
}

.button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: 0 50%;
  width: 100%;
  height: inherit;
  border-radius: inherit;
  background: linear-gradient(
    82.3deg,
    rgb(235, 86, 0) 10.8%,
    rgb(189, 55, 2) 94.3%
  );
  transition: all 0.475s;
}

.InputContainer {
  width: 210px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to bottom,
    rgb(227, 213, 255),
    rgb(255, 231, 231)
  );
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
}

.input {
  width: 200px;
  height: 30px;
  border: none;
  outline: none;
  caret-color: rgb(255, 81, 0);
  background-color: rgb(255, 255, 255);
  border-radius: 30px;
  padding-left: 15px;
  letter-spacing: 0.8px;
  color: rgb(19, 19, 19);
  font-size: 13.4px;
}
</style>
