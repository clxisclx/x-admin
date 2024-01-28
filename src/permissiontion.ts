import {router} from '@/router'
// @ts-ignore
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to:any,from:any,next:any)=>{
    nprogress.start();
    next();
})

router.afterEach((to:any,from:any)=>{
    nprogress.done();
})


