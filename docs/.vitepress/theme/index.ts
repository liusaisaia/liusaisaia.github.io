/*
 * @Description: 
 * @Author: Liu SaiSai
 * @Date: 2023-07-31 17:31:28
 * @LastEditors: Liu SaiSai
 */

import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { h } from 'vue'
import AnimationTitle from '../components/AnimationTitle.vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "home-hero-info": () => h(AnimationTitle),
    })
  },
  enhanceApp({ app }) {},
}
