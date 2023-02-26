import {createRouter,createWebHistory,RouteRecordRaw,} from "vue-router";

console.log('loca', window.location.href)
let getComponent=(file_name:string)=>{
    const route= import(`./vue/backend/pages/${file_name}Component.vue`);
    return route;
  }
const prefix="/portal";
let setRoute=(url:string,name:string,path:string)=>{
    return {
      path: prefix+url,
      name: name,
      component:()=> getComponent(path),

    }
  }

  const routes =[
    {
        path: "/portal/dashboard",
        redirect: { name: 'dashboard' }
    },
    {
      path: "/dashboard",
      redirect: { name: 'dashboard' }
  },
    {
        path: "/",
        redirect: { name: 'dashboard' }
    },
    setRoute('/:catchAll(.*)','404','error/404'),
    setRoute('/dashboard/overview','dashboard','dashboard/Dashboard'),
    setRoute('/users','users','user/Users'),
    setRoute('/user/create','user-create','user/CreateUser'),
    setRoute('/user/edit/:uid','user-edit','user/EditUser'),
    setRoute('/roles','roles','role/Roles'),
    setRoute('/permissions','permissions','permission/Permissions'),
    setRoute('/settings','settings','setting/Settings'),
    setRoute('/settings','settings','setting/Settings'),
    setRoute('/stripe-integration','stripe-integration','payment/Stripe'),
    setRoute('/paypal-integration','paypal-integration','payment/Paypal'),
    setRoute('/transactions','transactions','transition/Transitions'),
    setRoute('/my-transactions','my-transactions','transition/MyTransitions'),
    setRoute('/invoices','invoices','invoice/Invoices'),
    setRoute('/my-invoices','my-invoices','invoice/MyInvoices'),

    setRoute('/create-invoice','create-invoice','invoice/Invoices'),
    setRoute('/my-wallet','wallet','wallet/Wallets'),
    setRoute('/wallet-history','wallet-history','wallet/WalletHistory'),
    setRoute('/my-cards','my-cards','payment/cards/PaymentCards'),
    setRoute('/hospitals','hospitals','hospital/Hospitals'),
    setRoute('/hospital/edit/:uid','hospital-edit','hospital/EditHospital'),





];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth',
            }
        }
    },
});

router.beforeEach((to, from, next) => {

    next()

  });
export default router;
