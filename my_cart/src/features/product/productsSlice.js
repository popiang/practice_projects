import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            id: 1,
            name: "Wireless Headphones",
            price: 50.0,
            image: "https://via.placeholder.com/150?text=Wireless+Headphones",
        },
        {
            id: 2,
            name: "Gaming Mouse",
            price: 30.0,
            image: "https://via.placeholder.com/150?text=Gaming+Mouse",
        },
        {
            id: 3,
            name: "Mechanical Keyboard",
            price: 75.0,
            image: "https://via.placeholder.com/150?text=Mechanical+Keyboard",
        },
        {
            id: 4,
            name: "Smartphone Case",
            price: 15.0,
            image: "https://via.placeholder.com/150?text=Smartphone+Case",
        },
        {
            id: 5,
            name: "Smart Watch",
            price: 120.0,
            image: "https://via.placeholder.com/150?text=Smart+Watch",
        },
        {
            id: 6,
            name: "Portable Charger",
            price: 25.0,
            image: "https://via.placeholder.com/150?text=Portable+Charger",
        },
        {
            id: 7,
            name: "Bluetooth Speaker",
            price: 40.0,
            image: "https://via.placeholder.com/150?text=Bluetooth+Speaker",
        },
        {
            id: 8,
            name: "Laptop Stand",
            price: 35.0,
            image: "https://via.placeholder.com/150?text=Laptop+Stand",
        },
        {
            id: 9,
            name: "External Hard Drive (1TB)",
            price: 70.0,
            image: "https://via.placeholder.com/150?text=External+Hard+Drive",
        },
        {
            id: 10,
            name: "LED Desk Lamp",
            price: 20.0,
            image: "https://via.placeholder.com/150?text=LED+Desk+Lamp",
        },
    ],
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
});

export default productsSlice.reducer;
