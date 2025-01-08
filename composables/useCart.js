import { reactive, computed } from "vue";

const state = reactive({
    cartItems: [
        {
            id: 1,
            details: "(Set of 4)",
            sku: 'J001131826',
            name: 'Warrenton Single Light LED Flush Mount',
            image: '/images/products/product.png',
            limitedTime: true,
            price: 63.00,
            originalPrice: 80.00,
            size: '0.75" H 11" W x 11" D',
            finish: 'Black',
            quantity: 1,
        },
    ],
});

// Reactive computed properties
const totalItems = computed(() => state.cartItems.reduce((total, item) => total + item.quantity, 0));
const itemSubtotal = computed(() =>
    state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
);
const deliveryFee = computed(() => totalItems.value !== 0 ? 4.99 : 0);
const estimatedTax = computed(() => itemSubtotal.value * 0.06); // Example tax rate
const total = computed(() =>   totalItems.value === 0 ? 0 : itemSubtotal.value + deliveryFee.value + estimatedTax.value);
const savings = computed (() => state.cartItems.reduce((sum, product) => sum + (product.originalPrice - product.price) * product.quantity, 0));
export const useCart = () => {
    const addItem = (item) => {
        const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            state.cartItems.push({ ...item, quantity: item.quantity || 1 });
        }
    };

    const removeItem = (itemId) => {
        const index = state.cartItems.findIndex((item) => item.id === itemId);
        if (index !== -1) {
            state.cartItems.splice(index, 1); // Use splice to maintain reactivity
        }
    };

    return {
        cartItems: state.cartItems,
        totalItems,
        itemSubtotal,
        deliveryFee,
        estimatedTax,
        total,
        savings,
        addItem,
        removeItem,
    };
};
