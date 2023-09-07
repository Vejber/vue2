<template>
    <div class="blog" @click="showBlogDetails(blog.id)">
        <div class="blog-content">
            <div class="blog-header">
                <p class="blog-header__text">{{ blog.header }}</p>
            </div>
            <div class="blog-content-img-wrapper">
                <img class="blog-content-img" :src="blog.img" :alt="blog-img">
            </div>
            <div class="blog-footer">
                <div class="blog-date">
                    <p class="blog-date__text">
                        {{ blog.date }}
                    </p>
                </div>
                <div class="blog-crumbs">
                    <p class="blog-crumbs__text">
                        {{ blog.crumbs }}
                    </p>
                </div>
            </div>
            <div class="blog-text">
                {{ blog.text }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BlogComponent',
        props: ['blog'],
        data(){
            return{
                isHidden: true,
            }
        },

        methods: {
        showBlogDetails(id) {
            this.$emit('showFullBlog', id);
            console.log(id);
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>