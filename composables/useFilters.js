import { reactive } from "vue";
import { useCategory } from "~/composables/useCategory";

export function useFilters() {
    const { categories } = useCategory();
    const state = reactive({
        filters: [
            {
                key: "categories",
                type: "checkbox",
                label: "Category",
                options: computed(() =>
                    categories.map((category) => ({
                        label: category.name,
                        value: category.name,
                    }))
                ),
            },
            {
                key: "colors",
                type: "checkbox",
                label: "Color",
                options: [
                    { label: "Black", value: "Black" },
                    { label: "White", value: "White" },
                    { label: "Blue", value: "Blue" },
                ],
            },
            {
                key: "delivery",
                label: "Delivery Options",
                type: "toggle",
                options: [
                    {label: "Fast Delivery: 63122", value: "fast-delivery"},
                    {label: "Delivery before Christmas", value: "before-christmas"},
                ],
            },
            {
                key: "priceRanges",
                type: "checkbox",
                label: "Price Range",
                options: [
                    { label: "Under $50", value: "under-50" },
                    { label: "$50 - $100", value: "50-100" },
                    { label: "Above $100", value: "above-100" },
                ],
            },
        ]
    });

    return {
        filters: state.filters
    }
}