// fetchItems.js

const axios = require('axios');
const fs = require('fs');

const SET_URL = 'https://hellforge.vercel.app/api/v1/setitems';

async function fetchItems() {
    try {
        const response = await axios.get(SET_URL);
        const setItems = response.data.map((item, index) => {
            const trimmedItem = {};
            trimmedItem.found = false;
            trimmedItem.itemLvl = item.lvl;
            trimmedItem.id = index;
            trimmedItem.name = item.index;
            trimmedItem.quality = "set";
            trimmedItem.type = item.item;

            return trimmedItem;
        });

        const filteredItems = setItems.filter(item => item.itemLvl);

        fs.writeFileSync('setItems.json', JSON.stringify(filteredItems, null, 2));
        console.log('Set items saved to setItems.json');

    } catch (error) {
        console.error('Error fetching items:', error.message);
    }
}

fetchItems();
