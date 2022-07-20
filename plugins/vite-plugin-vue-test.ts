import { baseParse } from "@vue/compiler-core";
import { PluginOption } from "vite";
import { baseParse } from "@vue/compiler-core";

export const test = (): PluginOption => {
    return {
        name: "test",
        transform(code: string, id: string) {
            const str = `
            <script setup lang="ts">
            import { ref } from "vue";
            const value = ref<string>("");
            const darkMode = ref<boolean>(false);
            </script>
            <template>
	        <v-markdown v-model:value="value" v-model:dark-mode="darkMode"></v-markdown>
            </template>
            <style lang="scss" scoped></style>
            `;
            baseParse(str);
        }
    }
}