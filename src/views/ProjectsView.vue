<script>
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: 'ProjectsView',
    data() {
        return {

        }
    },
    components: {
        ProjectCard,
    }
}
</script>

<template>
    <section>
        <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
              <h1 class="display-5 fw-bold">Hey there!</h1>
              <h2>I'm Licia, welcome to my portfolio</h2>
              <p class="col-md-8 fs-4">Take a look!</p>
              <button class="btn btn-primary btn-lg" type="button"></button>
            </div>
          </div>
    </section>
    <!-- <section class="intro bg-danger-subtle">
        <div class="container">
            <div class="row align-items-md-stretch">
                <div class="col-md-6">
                    <div class="h-100 p-5 text-danger-emphasis  border rounded-3">
                        <h2>Take a look</h2>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ipsa, doloremque tenetur tempore pariatur neque illo iure animi dolor illum consequatur placeat culpa reiciendis sed voluptatem vel blanditiis iusto explicabo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section> -->

    <ProjectCard />

    <div class="container">
        <div class="pagination my-3">
            <nav aria-label="Page navigation">
                <ul class="pagination    ">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>

