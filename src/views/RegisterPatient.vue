<script>
import InputFields from '@/components/InputFields.vue';
import SearchField from '@/components/SearchField.vue';

export default {
    name: "RegisterPatient",
    msg: {
        require: true,
        String,
    },
    components: { InputFields, SearchField}
};
</script>
<template>
  <SearchField></SearchField>
  <InputFields></InputFields>
  
  
</template>

<style>

</style>
