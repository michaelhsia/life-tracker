<template>
  <div class="grid">
    <div class="col-12">
      <MeterGroup class="mb-2" :value="value" :max="200" />
    </div>

  </div>
  <div class="grid">
    <div class="col-12 md:col-6 lg:col-3">
      <Card style="overflow: hidden">
        <template #header>
          <img style="width: 100%; height: 250px; object-fit: cover;" alt="user header"
            src="https://plus.unsplash.com/premium_photo-1715876234432-aee502a59dcd?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </template>
        <template #title>Advanced Card</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam
            deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate
            neque
            quas!
          </p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <Button label="Cancel" severity="secondary" outlined class="w-full" />
            <Button label="Save" class="w-full" />
          </div>
        </template>
      </Card>
    </div>
    <div class="col-12 md:col-6 lg:col-3">
      <Card style="overflow: hidden">
        <template #header>
          <img style="width: 100%; height: 250px; object-fit: cover;" alt="user header"
            src="https://plus.unsplash.com/premium_photo-1715876234432-aee502a59dcd?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </template>
        <template #title>Advanced Card</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam
            deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate
            neque
            quas!
          </p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <Button label="Cancel" severity="secondary" outlined class="w-full" />
            <Button label="Save" class="w-full" />
          </div>
        </template>
      </Card>
    </div>
    <div class="col-12 md:col-6 lg:col-3">
      <Card style="overflow: hidden">
        <template #header>
          <img style="width: 100%; height: 250px; object-fit: cover;" alt="user header"
            src="https://plus.unsplash.com/premium_photo-1715876234432-aee502a59dcd?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </template>
        <template #title>Advanced Card</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam
            deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate
            neque
            quas!
          </p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <Button label="Cancel" severity="secondary" outlined class="w-full" />
            <Button label="Save" class="w-full" />
          </div>
        </template>
      </Card>
    </div>
    <div class="col-12 md:col-6 lg:col-3">
      <Card style="overflow: hidden">
        <template #header>
          <img style="width: 100%; height: 250px; object-fit: cover;" alt="user header"
            src="https://plus.unsplash.com/premium_photo-1715876234432-aee502a59dcd?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </template>
        <template #title>Advanced Card</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam
            deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate
            neque
            quas!
          </p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <Button label="Cancel" severity="secondary" outlined class="w-full" />
            <Button label="Save" class="w-full" />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref([
  { label: 'Apps', color: '#34d399', value: 16 },
  { label: 'Messages', color: '#fbbf24', value: 8 },
  { label: 'Media', color: '#60a5fa', value: 24 },
  { label: 'System', color: '#c084fc', value: 10 }
]);
</script>