<script>
import axios from 'axios';

export default{
  name: 'App',
  data() {
    return{
      base_url: 'http://127.0.0.1:8000',
      project_api:'/api/project',
      projects:[],
    }
  },
  methods: {
    getProjects() {
      axios
      .get(this.project_api)
      .then(response => { 
        console.log(response);
        this.projects = response.result
      })
      .catch(err => {
      console.error(err);
      })
    }
  },
  mounted() {
    
  }
}
</script>

<template>
  <div>
   
  </div>
 
</template>

<style>
</style>
