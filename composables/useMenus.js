import { reactive } from "vue";

export function useMenus() {
    const state = reactive({
        menus: [
            {
                id: 1,
                name: 'men',
                image: '/images/category2.png',
                subMenu: [
                    {
                        name: "Shoes",
                        image: '/images/categories/category2.png'
                    },
                    {
                        name: "Clothing",
                        image: '/images/categories/category2.png'

                    },
                    {
                        name: "Accessories",
                        image: '/images/categories/category2.png'

                    },
                    {
                        name: "Sports",
                        image: '/images/categories/category2.png'

                    },
                ],
            },
            {
                id: 2,
                name: 'women',
                image: '/images/category1.png',
                subMenu: [
                    {
                        name: "Shoes",
                        image: '/images/categories/category2.png'

                    },
                    {
                        name: "Clothing",
                        image: '/images/categories/category2.png'

                    },
                    {
                        name: "Accessories",
                        image: '/images/categories/category2.png'

                    },
                    {
                        name: "Sports",
                        image: '/images/categories/category2.png'

                    },
                ],
            },
            {
                id: 3,
                name: 'kids',
                image: '/images/category4.png',
                subMenu: [
                    {
                        name: "Shoes",
                        image: '/images/categories/category2.png'

                    },
                    {
                        name: "Clothing",
                        image: '/images/categories/category2.png'

                    },
                    {
                        name: "Accessories",
                        image: '/images/categories/category2.png'

                    },
                    {
                        name: "Sports",
                        image: '/images/categories/category2.png'

                    },
                ],
            },
            {
                id: 4,
                name: 'accessories',
                image: '/images/category3.png',
                subMenu: [
                    {
                        name: "Shoes",
                        image: '/images/categories/category2.png'

                    },
                    {
                        name: "Accessories",
                        image: '/images/categories/category2.png'

                    },
                    {
                        name: "Sports",
                        image: '/images/categories/category2.png'

                    },
                ],
            },
            {
                id: 5,
                name: 'sale',
                image: '/images/category1.png',
                subMenu: [
                    {
                        name: "Shoes",
                        image: '/images/categories/category2.png'

                    },
                    {
                        name: "Clothing",
                        image: '/images/categories/category2.png'

                    },
                    {
                        name: "Accessories",
                        image: '/images/categories/category2.png'

                    },
                ],
            },
            {
                id: 6,
                name: 'gift',
                image: '/images/category2.png',
                subMenu: [
                    {
                        name: "Shoes",
                        image: '/images/categories/category2.png'

                    },
                    {
                        name: "Clothing",
                        image: '/images/categories/category2.png'

                    },
                    {
                        name: "Accessories",
                        image: '/images/categories/category2.png'

                    },
                    {
                        name: "Sports",
                        image: '/images/categories/category2.png'

                    },
                ],
            },
        ],
    });

    return {
        menus: state.menus,
    };
}
