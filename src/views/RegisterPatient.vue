<script>
import InputFields from '@/components/InputFields.vue';
import DoctorFee from '@/components/DoctorFee.vue'
export default {
    name: "RegisterPatient",
    msg: {
        require: true,
        String,
    },
    components: { InputFields, DoctorFee }
};
</script>
<template>
  <InputFields></InputFields>
  <DoctorFee></DoctorFee>
  
</template>

<style>

</style>
