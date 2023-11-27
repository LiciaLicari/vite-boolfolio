<script>
export default {
    name: 'HomeView',
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="body">
        <section class="intro">
            <div class="wrapper pt-5 d-flex flex-column align-items-center justify-content-center">
                <h1 class=" text-danger-emphasis text-center">Fullstack Web Developer</h1>
                <h4 class="text-center">Languages are my oxygen.</h4>
                <div class="pt-4">
                    <img height="200" src="../assets/img/avataaars.png" alt="">
                </div>
                <div>
                    <img class="pt-4 mb-0"
                        src="https://www.netsolutions.com/assets/images/software-development-company-implementing-code-bugs.svg"
                        alt="" srcset="">
                </div>
            </div>
        </section>
        <section class="aboutMe bg-danger-subtle py-5">
            <div class="wrapper">
                <h2 class="text-center text-danger-emphasis fw-bolder">
                    Hello, I'm Licia, welcome!
                </h2>
                <p class="text-center text-danger-emphasis pt-2 pb-2 px-5">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officia assumenda delectus deleniti vero sed, suscipit excepturi placeat quia quam vel impedit fugit voluptate? Minima culpa ipsa accusantium eum labore!
                </p>
            </div>
        </section>
        <section class="tech">
            <div class="container py-5">
                <div class="row row-cols-1 row-cols-md-2">
                    <div class="col types">
                        <div class="card rounded-0 shadow border-dangr text-start">
                            <div class="card-body">
                                <h4 class="card-title">Title</h4>
                                <p class="card-text">Body</p>
                            </div>
                        </div>
                    </div>
                    <div class="col technologies">
                        <div class="card rounded-0 shadow border-dangr text-start">
                            <div class="card-body">
                                <h4 class="card-title">Title</h4>
                                <p class="card-text">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.body {
    background-color: #f8fbff;

    .wrapper {
        max-width: 1440px;
        margin: auto;
        width: 60%;
    }

    .certificates {
        .card {
            border: dotted rgb(255, 104, 245) 2px;
        }
    }
}
</style>