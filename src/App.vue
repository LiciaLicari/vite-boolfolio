<script>
import axios from 'axios';

export default{
  name: 'App',
  data() {
    return{
      base_url: 'http://127.0.0.1:8000',
      project_api:'/api/projects',
      projects:[],
    }
  },
  methods: {
    getProjects() {
      axios
      .get(this.base_url + this.project_api)
      .then(response => { 
        console.log(response);
        this.projects = response.data.result
      })
      .catch(err => {
      console.error(err);
      })
    }
  },
  mounted() {
    this.getProjects();
  }
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Boolfolio</a>
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link active" href="#" aria-current="page"
                >Home <span class="visually-hidden">(current)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-5">
        <div class="col" v-for="project in projects">
          <div class="card h-100 d-flex flex-column justify-content-around">
            <div class="card-img-top text-center">
              <img class="img-fluid" :src="project.cover_image" alt="" />
            </div>
            <div class="card-body">
              <h4 class="card-title">{{ project.title }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer></footer>
</template>

<style>
</style>
