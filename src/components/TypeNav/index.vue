<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <h2 class="all">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <div
        class="sort">
        <div class="all-sort-list2" @click="goSearch">
          <div class="item bo" v-for="c1 in categoryList" :key="c1.categoryId">
            <!-- 一级分类 -->
            <h3>
              <a
                :data-name="c1.categoryName"
                :data-id="c1.categoryId"
                :data-level="1"
                >{{ c1.categoryName }}</a
              >
            </h3>
            <div class="item-list clearfix">
              <!-- 二级分类 -->
              <div
                class="subitem"
                v-for="c2 in c1.categoryChild"
                :key="c2.categoryId"
              >
                <dl class="fore">
                  <dt>
                    <a
                      :data-name="c2.categoryName"
                      :data-id="c2.categoryId"
                      :data-level="2"
                      >{{ c2.categoryName }}</a
                    >
                  </dt>
                  <dd>
                    <!-- 三级分类 -->
                    <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                      <a
                        :data-name="c3.categoryName"
                        :data-id="c3.categoryId"
                        :data-level="3"
                        >{{ c3.categoryName }}</a
                      >
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "TypeNav",
  // async mounted() {
  //   const res = await reqGetCategoryList();
  //   console.log(res);
  // },
  mounted() {
    this.getCategoryList();
    // console.log(this.categoryList);
  },
  computed: {
    ...mapState("home", ["categoryList"]),
  },
  methods: {
    ...mapActions("home", ["getCategoryList"]),
    goSearch(e) {
      //获取自定义属性
      console.log(e.target.dataset);
      const { id, level, name } = e.target.dataset;
      if (!id) return;

      this.$router.push({
        name: "Search",
        query: {
          categoryName: name,
          [`category${level}Id`]: id,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;

            margin: 0;

            a {
              display: block;
              padding: 0 20px;
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            background-color: yellowgreen;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
