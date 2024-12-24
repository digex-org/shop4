import { reactive } from "vue";

export function useCategory() {
    const state = reactive({
        categories: [
            {
                id: 1,
                name: 'men',
                image: '/images/categories/category-2.png',
                subCategory: [
                    {
                        name: "Shoes",
                        subCategory: [
                            { name: "Classics" },
                            { name: "Lifestyle" },
                            { name: "Running" },
                            { name: "Basketball" },
                            { name: "Motosport" },
                            { name: "GV Special" },
                            { name: "Rider" },
                            { name: "Sandals" },
                        ],
                    },
                    {
                        name: "Clothing",
                        subCategory: [
                            { name: "Hoodies & Sweatshirts" },
                            { name: "Jackets" },
                            { name: "Short" },
                            { name: "Tracksuits" },
                            { name: "Tops" },
                        ],
                    },
                    {
                        name: "Accessories",
                        subCategory: [
                            { name: "Bags & Backpacks" },
                            { name: "Socks" },
                            { name: "Sports Equipment" },
                        ],
                    },
                    {
                        name: "Sports",
                        subCategory: [
                            { name: 'Soccer' },
                            { name: 'Yoga' },
                            { name: 'Golf' },
                            { name: 'Basketball' },
                            { name: 'Running' },
                        ],
                    },
                ],
            },
            {
                id: 2,
                name: 'women',
                image: '/images/categories/category-1.png',
                subCategory: [
                    {
                        name: "Shoes",
                        subCategory: [
                            { name: "Classics" },
                            { name: "Lifestyle" },
                            { name: "Running" },
                            { name: "Basketball" },
                            { name: "Motosport" },
                            { name: "GV Special" },
                            { name: "Rider" },
                            { name: "Sandals" },
                        ],
                    },
                    {
                        name: "Clothing",
                        subCategory: [
                            { name: "Hoodies & Sweatshirts" },
                            { name: "Jackets" },
                            { name: "Short" },
                            { name: "Tracksuits" },
                            { name: "Tops" },
                        ],
                    },
                    {
                        name: "Accessories",
                        subCategory: [
                            { name: "Bags & Backpacks" },
                            { name: "Socks" },
                            { name: "Sports Equipment" },
                        ],
                    },
                    {
                        name: "Sports",
                        subCategory: [
                            { name: 'Soccer' },
                            { name: 'Yoga' },
                            { name: 'Golf' },
                            { name: 'Basketball' },
                            { name: 'Running' },
                        ],
                    },
                ],
            },
            {
                id: 3,
                name: 'kids',
                image: '/images/categories/category-3.png',
                subCategory: [
                    {
                        name: "Shoes",
                        subCategory: [
                            { name: "Classics" },
                            { name: "Lifestyle" },
                            { name: "Running" },
                            { name: "Basketball" },
                            { name: "Motosport" },
                            { name: "GV Special" },
                            { name: "Rider" },
                            { name: "Sandals" },
                        ],
                    },
                    {
                        name: "Clothing",
                        subCategory: [
                            { name: "Hoodies & Sweatshirts" },
                            { name: "Jackets" },
                            { name: "Short" },
                            { name: "Tracksuits" },
                            { name: "Tops" },
                        ],
                    },
                    {
                        name: "Accessories",
                        subCategory: [
                            { name: "Bags & Backpacks" },
                            { name: "Socks" },
                            { name: "Sports Equipment" },
                        ],
                    },
                    {
                        name: "Sports",
                        subCategory: [
                            { name: 'Soccer' },
                            { name: 'Yoga' },
                            { name: 'Golf' },
                            { name: 'Basketball' },
                            { name: 'Running' },
                        ],
                    },
                ],
            },
            {
                id: 4,
                name: 'accessories',
                image: '/images/categories/category3.png',
                subCategory: [
                    {
                        name: "Shoes",
                        subCategory: [
                            { name: "Classics" },
                            { name: "Lifestyle" },
                            { name: "Running" },
                            { name: "Basketball" },
                            { name: "Motosport" },
                            { name: "GV Special" },
                            { name: "Rider" },
                            { name: "Sandals" },
                        ],
                    },
                    {
                        name: "Accessories",
                        subCategory: [
                            { name: "Bags & Backpacks" },
                            { name: "Socks" },
                            { name: "Sports Equipment" },
                        ],
                    },
                    {
                        name: "Sports",
                        subCategory: [
                            { name: 'Soccer' },
                            { name: 'Yoga' },
                            { name: 'Golf' },
                            { name: 'Basketball' },
                            { name: 'Running' },
                        ],
                    },
                ],            },
            {
                id: 5,
                name: 'sale',
                image: '/images/categories/category-1.png',
                subCategory: [
                    {
                        name: "Shoes",
                        subCategory: [
                            { name: "Classics" },
                            { name: "Lifestyle" },
                            { name: "Running" },
                            { name: "Basketball" },
                            { name: "Motosport" },
                            { name: "GV Special" },
                            { name: "Rider" },
                            { name: "Sandals" },
                        ],
                    },
                    {
                        name: "Clothing",
                        subCategory: [
                            { name: "Hoodies & Sweatshirts" },
                            { name: "Jackets" },
                            { name: "Short" },
                            { name: "Tracksuits" },
                            { name: "Tops" },
                        ],
                    },
                    {
                        name: "Accessories",
                        subCategory: [
                            { name: "Bags & Backpacks" },
                            { name: "Socks" },
                            { name: "Sports Equipment" },
                        ],
                    },
                ],
            },
            {
                id: 6,
                name: 'gift',
                image: '/images/categories/category-2.png',
                subCategory: [
                    {
                        name: "Shoes",
                        subCategory: [
                            { name: "Classics" },
                            { name: "Lifestyle" },
                            { name: "Running" },
                            { name: "Basketball" },
                            { name: "Motosport" },
                            { name: "GV Special" },
                            { name: "Rider" },
                            { name: "Sandals" },
                        ],
                    },
                    {
                        name: "Clothing",
                        subCategory: [
                            { name: "Hoodies & Sweatshirts" },
                            { name: "Jackets" },
                            { name: "Short" },
                            { name: "Tracksuits" },
                            { name: "Tops" },
                        ],
                    },
                    {
                        name: "Accessories",
                        subCategory: [
                            { name: "Bags & Backpacks" },
                            { name: "Socks" },
                            { name: "Sports Equipment" },
                        ],
                    },
                    {
                        name: "Sports",
                        subCategory: [
                            { name: 'Soccer' },
                            { name: 'Yoga' },
                            { name: 'Golf' },
                            { name: 'Basketball' },
                            { name: 'Running' },
                        ],
                    },
                ],
            },
        ],
    });

    return {
        categories: state.categories,
    };
}
