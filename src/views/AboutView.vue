<template>
  <div id="about" class="max-width">
    <div class="title borderB-bold text-center">
      <h2 class="font-bold dot">김 연주</h2>
      <p>Frontend</p>
    </div>
    <div>
      <div class="content" v-for="about in aboutArray" :key="about">
        <h3 class="borderB-dot font-medium">{{ about.title }}</h3>
        <ul>
          <li v-for="aObj in about.array" :key="aObj">
            <span>📍{{ aObj.title }}</span>
            <span v-if="aObj.content">{{ aObj.content }}</span>
            <div v-if="aObj.array">
              <span v-for="obj in aObj.array" :key="obj" style="padding-left: 0.4em;">
                {{ obj }}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="content content-project">
      <h3 class="borderB-dot font-medium">{{ projectArray[0].title }}</h3>
      <ul>
        <li v-for="(project, pIdx) in projectArray[0].array" :key="pIdx">
          <img src="../assets/images/project8.jpg" alt="프로젝트">
          <div>
            <p class="flex-set">
              <span class="font-bold index dot">0{{ pIdx + 1 }}</span>
              <router-link :to="`/detail?index=${pIdx}`" class="btn">더 보기</router-link>
            </p>
            <ul>
              <li class="list-dot" v-for="cont in project.content" :key="cont">{{ cont }}</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="content content-personal">
      <h3 class="borderB-dot font-medium">{{ projectArray[1].title }}</h3>
      <ul>
        <li
          v-for="(project, pIdx) in projectArray[1].array" :key="pIdx"
          class="borderB-dot">
          <a :href="project.url" target="_blank" class="flex-set">
            <!-- <img :src="`${project.src}`" alt="개인 프로젝트"> -->
            <img v-if="pIdx == 0" src="../assets/images/project5.jpg" alt="개인 프로젝트">
            <img v-else-if="pIdx == 1" src="../assets/images/project1.jpg" alt="개인 프로젝트">
            <img v-if="pIdx == 2" src="../assets/images/project6.jpg" alt="개인 프로젝트">
            <img v-if="pIdx == 3" src="../assets/images/project7.jpg" alt="개인 프로젝트">
            <img v-if="pIdx == 4" src="../assets/images/project3.jpg" alt="개인 프로젝트">
            <img v-if="pIdx == 5" src="../assets/images/project2.jpg" alt="개인 프로젝트">
            <div>
              <span class="index font-bold dot">0{{ pIdx + 1 }}</span>
              <table class="project-table">
                <tbody>
                  <tr><th>작업기간</th><td>{{ project.period }}</td></tr>
                  <tr><th>프로젝트 내용</th><td>{{ project.title }}</td></tr>
                  <tr><th>사용언어 및 개발 환경</th><td>{{ project.content }}</td></tr>
                  <tr><th>URL</th><td>{{ project.url }}</td></tr>
                </tbody>
              </table>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AboutView',
    data() {
      return {
        aboutArray: [
          {
            title: '경력',
            array: [
              {
                title: '서흥인터네셔날',
                content: '2021.06 ~ 현재'
              }
            ]
          },
          {
            title: '기술 스택',
            array: [
              {
                title: 'Language',
                array: [ 'Javascript' ]
              },
              {
                title: 'Framework',
                array: [ 'Vue,', 'NodeJS' ]
              },
              {
                title: 'Markup',
                array: [ 'HTML,', 'CSS,', 'SCSS' ]
              },
              {
                title: 'Tool',
                array: [ 'Git,', 'Github' ]
              },
              {
                title: 'Design Tool',
                array: [ 'Photoshop,', 'Illustrator,','3D Max,' , 'Auto CAD' ]
              }
            ]
          },
          {
            title: '교육',
            array: [
              {
                title: 'UI/UX디자인 웹퍼블리셔&프론트엔트 개발자 양성과정',
                content: '2020.12 ~ 2021.05'
              }
            ]
          },
        ],
        projectArray: [
          {
            title: '프로젝트',
            array: [
              {
                src: '../assets/images/project8.jpg',
                content: [
                  '서흥인터네셔날 회사소개 페이지',
                  '회사프로젝트로 vue를 사용하여 진행하였습니다.'
                ]
              },
              {
                src: '../assets/images/project8.jpg',
                content: [
                  '룸앤홈 자사몰 플랫폼',
                  '현재 진행중인 회사프로젝트로 vue를 사용하여 진행하고 있습니다.'
                ]
              }
            ]
          },
          {
            title: '개인 프로젝트',
            array: [
              {
                // src: '../assets/images/project3.jpg',
                period: '2021.05',
                title: '이케아 클론 프로젝트 React 사용경험을 위하여 진행',
                content: 'React, Javascript',
                url: 'https://yeonjoo8231.github.io/react-ikea/#/'
              },
              {
                // src: '../assets/images/project1.jpg',
                period: '2021.01 ~ 02',
                title: '메인페이지, 서브페이지로 구성하고 반응형 페이지로 개발',
                content: 'Jquery',
                url: 'https://yeonjoo8231.github.io/bistro/'
              },
              {
                // src: '../assets/images/project6.jpg',
                period: '2021.01 ~ 02',
                title: '포트폴리오로 원페이지로 개발 (PC 전용)',
                content: 'Jquery',
                url: 'https://yeonjoo8231.github.io/portfolio/'
              },
              {
                // src: '/img/project7.3eaefe8a.jpg',
                period: '2021.02',
                title: '포트폴리오로 원페이지로 개발',
                content: 'Jquery',
                url: 'https://yeonjoo8231.github.io/2021resume/'
              },
              {
                // src: '/img/project5.ebfd5c19.jpg',
                period: '2022.04',
                title: '기존 사이트 메인페이지 리뉴얼 프로젝트',
                content: 'Jquery',
                url: 'https://yeonjoo8231.github.io/taegeuk/'
              },
              {
                // src: '/img/project2.8c4e3d3a.jpg',
                period: '2022.03',
                title: '기존 사이트 메인페이지 리뉴얼 프로젝트',
                content: 'Jquery',
                url: 'https://yeonjoo8231.github.io/jinair/'
              },
            ]
          }
        ]
      }
    }
  }
</script>
