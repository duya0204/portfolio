<template>
    <div id="detail" class="max-width">
        <div class="title borderB-bold">
            <h2 class="font-medium">0{{ parseInt($route.query.index, 10) + 1 }}.{{ dataList.title }}</h2>
        </div>
        <img v-if="$route.query.index == 0" src="../assets/images/page.gif" alt="프로젝트 이미지">
        <img v-else src="../assets/images/category.gif" alt="카테고리 gif">
        <table class="project-table">
            <tbody>
                <tr>
                    <th>작업 기간</th>
                    <td>{{ dataList.period }}</td>
                </tr>
                <tr>
                    <th>인력 구성(기여도)</th>
                    <td>{{ dataList.man }}</td>
                </tr>
                <tr>
                    <th>프로젝트 목적</th>
                    <td>{{ dataList.purpose }}</td>
                </tr>
                <tr>
                    <th>프로젝트 내용</th>
                    <td>{{ dataList.content }}</td>
                </tr>
                <tr>
                    <th>주요 업무 및 상세 역할</th>
                    <td>
                        <ul>
                            <li v-for="detail in dataList.detail" :key="detail">
                                {{ detail }}
                            </li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="title borderB-bold pt-md">
            <h3 class="font-bold">기능 소개</h3>
        </div>
        <mapComponent v-if="$route.query.index == 0"/>
        <submitComponent v-if="$route.query.index == 0" />
        <categoryComponent1 v-if="$route.query.index == 1" />
        <categoryComponent2 v-if="$route.query.index == 1" />
    </div>
</template>
<script>
import detailData from '../assets/json/detail.json'
import mapComponent from '../components/MapComponent.vue'
import submitComponent from '../components/SubmitComponent.vue'
import categoryComponent1 from '../components/CategoryComponent1.vue'
import categoryComponent2 from '../components/CategoryComponent2.vue'

export default {
    name: 'detailPage',
    components: { mapComponent, submitComponent, categoryComponent1, categoryComponent2 },
    data() {
        return {
            dataList: {},
        }
    },
    mounted() {
        window.scrollTo(0, 0)
        if (this.$route.query.index) {
            const index = this.$route.query.index
            this.dataList = detailData[index]
        }
    }
}
</script>
