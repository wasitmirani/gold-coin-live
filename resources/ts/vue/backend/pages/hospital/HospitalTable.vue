<template>
    <div class="table-responsive text-nowrap">
        <table class="table">
            <caption class="ms-4">Hospitals List</caption>
            <thead>
                <tr>
                    <th v-for="(head, index) in headers" :key="index"> {{ head.text }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in Hospitals?.data" :key="index">
                    <td> {{ item.id ?? "N/A" }}</td>
                    <td> {{ item.name ?? "N/A" }}</td>
                    <td> {{ item.email ?? "N/A" }}</td>
                    <td> {{ item.phone ?? "N/A" }}</td>
                    <td> {{ item.city ?? "N/A" }}</td>
                    <td> {{ item.country ?? "N/A" }}</td>
                    <td> <span class="badge bg-label-success" text-capitalized="">Active</span></td>
                    <td> {{$filters.DateTimeFormat(item.created_at)}}</td>
                    <td>
                        <div class="d-flex align-items-center">
                            <router-link  :to="`/portal/hospital/edit/${item.uid}`"  class="text-dark"><i class="ti ti-edit ti-sm me-2"></i></router-link>
                            <a role="button" @click="deleteItem(item)" class="text-danger delete-record"><i class="ti ti-trash ti-sm mx-2"></i></a>

                        </div>

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: "DataTableComponent",
    props: ["headers", "Hospitals"],
    data: () => ({
    }),
    methods: {
        deleteItem: function (item) {
            return this.$emit("deleteItem", item);
        },
        editItem: function (item) {
            return this.$emit("editItem", item);
        }
    },
    mounted() {
    }
}
</script>
