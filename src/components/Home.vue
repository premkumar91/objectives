<template>
  <div>
    Objectives
    <!-- <router-link to="/map">Go to assesment</router-link> -->
    <!-- <button @click="inc()">inc</button> -->
    <!-- getters{{count}} -->
    <Objectives v-if="isDataFetched" :data="objectives"/>
  </div>
</template>
<script>
import _ from 'lodash';
import {api} from '../api'
import {utils} from '../utils'
import Objectives from './Objectives';
export default {
  name:'home',
  data(){
    return{
      objectives:{}
    }
  },
  components:{
    Objectives
  },
  computed: {
    count(){
      return this.$store.getters['user/count'];
    },
    isDataFetched(){
      return !_.isEmpty(this.objectives)
    }
  },
  methods: {
    inc(){
      //this.$router.push({ path: '/greetings' })
      this.$store.dispatch('user/increment')
    }
  },
  mounted() {
    api.fetchObjectives().then((data)=>{
      this.objectives = utils.mapParentChildObjective(data)
      console.log(this.objectives)
    })
  },
}
</script>

