import Vue from 'vue'
import Router from 'vue-router'

import BlogDetails from '../components/pages/BlogDetailsPage.vue'
import BlogPage from '../components/pages/BlogPage.vue'
import CategoriesPage from '../components/pages/CategoriesPage.vue'
import IndexPage from '../components/pages/IndexPage.vue' 
import ProjectDetailsPage from '../components/pages/ProjectDetailsPage.vue'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/blogdetails',
            name: 'blogdetails',
            component: BlogDetails
        },
        {
            path: '/blogpage',
            name: 'blogpage',
            component: BlogPage
        },
        {
            path: '/categoriespage',
            name: 'categoriespage',
            component: CategoriesPage
        },
        {
            path: '/indexpage',
            name: 'indexpage',
            component: IndexPage
        },
        {
            path: '/projectdetailspage',
            name: 'projectdetailspage',
            component: ProjectDetailsPage
        },
        
    ]
})
