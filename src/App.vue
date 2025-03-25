<template>
    <Suspense>
        <template #default>
            <div>
                <ThemeSwitcher />
                <div class="card">
                    <DataTable :value="products" tableStyle="min-width: 50rem">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </div>
            </div>
        </template>
        <template #fallback>
            <div>Loading...</div>
        </template>
    </Suspense>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

const products = ref();

onMounted(async () => {
    products.value = await ProductService.getProductsMini();
});
</script>