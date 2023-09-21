<template>
    <div class="blogs-list">
        <div class="blogs-list-content">
            <div class="blogs-box" v-if="showBlogDetails === false">
                <BlogComponent @showFullBlog="showAll" v-for="blog in filteredItems" :key="blog.id" :blog="blog"></BlogComponent>
            </div>
            <div class="blogs-box" v-if="showBlogDetails === true">
                <BlogComponent @showFullBlog="showAll" :blog="filteredBlog"></BlogComponent>
                <BlogDetailsComponent :blog="filteredBlog"></BlogDetailsComponent>
            </div>
            <div class="tags-box">
                <div class="tag" :class="{'tag-clicked': tag === filterItem}" v-for="tag in getTags" :key="tag.id" @click="tagClick(tag)">{{ tag }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogComponent from './BlogComponent.vue';
import BlogDetailsComponent from './BlogDetailsComponent.vue';
    export default {
        name: 'BlogsListComponent',
        data(){
            return{
                blogs: [
                {
                    id: 1,
                    header: '#1 Let’s Get Solution for Building Construction Work',
                    img: 'mainBlog1.png',
                    date: '26 December,2022',
                    crumbs: 'Interior / Home / Decore',
                    text:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
                        '\n' +
                        'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
                    headerDetails: '#1 Design sprints are great',
                    textDetails: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
                        '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
                        '\n' +
                        '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
                        '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
                    imgDetails: 'detailsBlog1.png',
                    subTextDetails:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    id: 2,
                    header: '#2 Let’s Get Solution for Building Construction Work',
                    img: 'mainBlog2.jpg',
                    date: '26 December,2023',
                    crumbs: 'Interior / Home / Decore',
                    text:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
                        '\n' +
                        'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    tags: ['Kitchen', 'Bedroom', 'Building'],
                    headerDetails: '#2 Design sprints are great',
                    textDetails: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.  \n                    1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. \n                    2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. \n                    3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. ',
                    imgDetails: 'detailsBlog2.jpg',
                    subTextDetails:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    id: 3,
                    header: '#3 Let’s Get Solution for Building Construction Work',
                    img: 'mainBlog3.jpg',
                    date: '26 December,2022',
                    crumbs: 'Interior / Home / Decore',
                    text:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
                        '\n' +
                        'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    tags: ['Kitchen', 'Building', 'Kitchen Planning'],
                    headerDetails: '#3 Design sprints are great',
                    textDetails: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.  \n                    1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. \n                    2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. \n                    3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. ',
                    imgDetails: 'detailsBlog3.jpg',
                    subTextDetails:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
            ],
            filterItem: '',
            filterId: '',
            showBlogDetails: false,
            };
        },

        components:{
            BlogComponent,
            BlogDetailsComponent
        },

        computed: {
            getTags() {
                let tags = [];
                this.blogs.forEach((el) => {
                    tags.push(...el.tags)
                    })
                    return new Set(tags);
                },

            filteredItems() {
                return this.blogs.filter((blog) => {
                    if (this.filterItem === '') {
                        return this.blogs;
                        } else {
                            return blog.tags.includes(this.filterItem);
                        }
                    });
                },

            filteredBlog() {
                const blog = this.blogs.filter((blog) => {
                    return blog.id === Number(this.filterId)
                })

                return blog[0]
            },
        },

    methods: {
        tagClick(tag) {
            if (this.filterItem === tag) {
                this.filterItem = '';
            } else {
                this.filterItem = tag;
            }
        },

        showAll(id) {
            this.filterId === id ? this.filterId = '' : this.filterId = id;
            this.showBlogDetails = !this.showBlogDetails;
        }
    },
        
    }
</script>

<style lang="css" scoped>

</style>