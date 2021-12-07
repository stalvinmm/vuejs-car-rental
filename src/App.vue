<template>
<div>
  <shifthead />
  <chooseyourride />
  <safety />
  <howitworks />
  <contactinfo />
  <shiftfooter />
  <chooseyourridelist />
</div>
</template>

<script>
import shifthead from './components/shifthead';
import chooseyourride from './components/chooseyourride';
import safety from './components/safety';
import howitworks from './components/howitworks';
import contactinfo from './components/contactinfo';
import shiftfooter from './components/shiftfooter';
import Chooseyourridelist from './components/chooseyourridelist.vue';

export default {
  name: 'App',

  components: {
    shifthead,
    chooseyourride,
    safety,
    howitworks,
    contactinfo,
    shiftfooter,
    Chooseyourridelist
  },
};
</script>

    Chooseyourride