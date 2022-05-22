<template>
  <div class="home">
    <blog-post :post="welcomeScreen"/>
    <blog-post :post="post" v-for="(post, index) in sampleBlogPosts" :key="index"/>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <blog-card :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import BlogCard from '../components/BlogCard.vue';
import BlogPost from '../components/BlogPost.vue';
export default {
  name: "Home",
  components: {BlogPost, BlogCard},
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPosts: [
        {
          title: "This is a sample",
          blogHTML: "This is just a sample text",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a sample",
          blogHTML: "This is just a sample text",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
      sampleBlogCards: [
        { blogTitle: "Blog 1", blogCoverPhoto: "stock-1", blogDate: "May 1 2021" },
        { blogTitle: "Blog 2", blogCoverPhoto: "stock-2", blogDate: "May 3 2021" },
        { blogTitle: "Blog 3", blogCoverPhoto: "stock-3", blogDate: "May 7 2021" },
        { blogTitle: "Blog 4", blogCoverPhoto: "stock-4", blogDate: "May 9 2021" },
      ]
    };
  },
};
</script>


<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
