<template>
  <div id="home">
    <div class="intro-bg">
      <span
        v-for="letter in 'FRTE'"
        :key="letter"
        :class="`letter-${letter}`">{{ letter }}</span>
    </div>
    <div class="intro">
      <div>
        <h1 class="font-bold">PORTFOLIO</h1>
        <p>안녕하세요<br>프론트엔드개발자<span class="font-medium">김연주</span>입니다.</p>
        <router-link to="/about">
          포트폴리오 >
        </router-link>
      </div>
      <ul>
        <li v-for="me in profile" :key="me">
          {{ me }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  data() {
    return {
      profile: [
        "김연주",
        "010 9487 1128",
        "yeonjoo8231@naver.com",
        "경기도 수원시 영통구"
      ],
    }
  }
}
</script>
