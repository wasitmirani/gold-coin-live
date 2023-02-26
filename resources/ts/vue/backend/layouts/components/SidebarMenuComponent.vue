<template >
    <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
        <div class="app-brand demo ">
            <router-link to='/' class="app-brand-link">
                <span class="app-brand-text demo menu-text fw-bold">{{ config?.app_name }}</span>
            </router-link>

            <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto">
                <i class="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i>
                <i class="ti ti-x d-block d-xl-none ti-sm align-middle"></i>
            </a>
        </div>

        <!-- <div class="menu-inner-shadow"></div> -->



        <ul class="menu-inner py-1">
            <!-- Dashboards -->
            <!-- class="menu-item active open" -->
            <li v-for="item in sidebar_menu" :key="item.id" :class="getClass(item)">
                <span class="menu-header-text"
                    v-if="item?.heading && isAllowed(item?.heading_can)">{{ item.heading }}</span>
                <router-link v-if="item.type == 'single_link' && isAllowed(item.can)" :to="item.route"
                    class="menu-link">
                    <i :class="`menu-icon tf-icons ti ${item.icon}`"></i>
                    <div>{{ item.title }}</div>
                </router-link>
                <a href="javascript:void(0);" v-if="item.type == 'multi' && isAllowed(item.can)"
                    class="menu-link menu-toggle">
                    <i :class="`menu-icon tf-icons ti ${item.icon}`"></i>
                    <div data-i18n="Dashboards">{{ item.title }}</div>
                    <!-- <div class="badge bg-label-primary rounded-pill ms-auto">3</div> -->
                </a>
                <ul class="menu-sub" v-if="item?.sub_menu">
                    <li class="menu-item" v-for="submenu in item.sub_menu" :key="submenu.id">
                        <router-link class="menu-link" v-if="isAllowed(submenu?.can)" :to="submenu.route">
                            <div>{{ submenu.title }}</div>
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </aside>
</template>
<script>
export default {
    data() {
        return {
            config: app_config,
            sidebar_menu: [],            index: 0,
            loading: false,
        }
    },
    methods: {
        logout() {
            window.location.href = window.location.origin + "/logout";
        },
        isAllowed(value) {
            if (permissions.includes(value))
                return true;
            else
                return false;
        },
        getClass(item) {
            if (item?.heading) {
                return 'menu-header small text-uppercase'
            }
            if (item.type == 'single_link') {
                return 'menu-item'
            } else {
                // menu-item active open
                return 'menu-item'
            }
        },
        getSideBarMenu() {
            this.loading = true;
            axios.get('/config/sidebar-menu').then(response => {
                this.sidebar_menu = response.data.sidebar_menu;
                this.loading = false;
            });
        }
    },
    mounted() {
        //    console.log("mounted",sidebarmenu);
        this.getSideBarMenu();
    },
}
</script>
<style lang="">

</style>
