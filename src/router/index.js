import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import index1 from '@/components/index1'
import home from '@/components/home'
import categories from '@/components/categories'
import brand from '@/components/brand'
import brand_list from '@/components/brand_list'
import product from '@/components/product'
import about from '@/components/about'
Vue.use(Router)
 
export default new Router({
  //mode:'history',
  routes: [
    	{
      path: '/',
      name: 'index',
      component: index,
    	},
    	{
      path: '/index1',
      name: 'index1',
      component: index1,
      children: [
			            {
			                path: "home",
			                component: home,
			                meta: {
			                  requiresAuth: true,
			                }
			            },
			            {
			                path: "categories",
			                component: categories,
			                meta: {
			                  requiresAuth: true,
			                }
			            }, 
			            {
			                path: "brand",
			                component: brand,
			                meta: {
			                  requiresAuth: true,
			                }
			            },
			            {
			                path: "brand_list",
			                component: brand_list,
			                meta: {
			                  requiresAuth: true,
			                }
			            },
			            {
			                path: "product",
			                component: product,
			                meta: {
			                  requiresAuth: true,
			                }
			            },
			            {
			                path: "about",
			                component: about,
			                meta: {
			                  requiresAuth: true,
			                }
			            }
       					] 
    	} 
     
  ]
})
