// fetchItems.js

const axios = require('axios');
const fs = require('fs');

const UNIQUE_URL = 'https://hellforge.vercel.app/api/v1/uniqueitems';

async function fetchItems() {
    try {
        const response = await axios.get(UNIQUE_URL);
        const uniqueItems = response.data.map((item, index) => {
            const trimmedItem = {};
            trimmedItem.found = false;
            trimmedItem.itemLvl = item.lvl;
            trimmedItem.id = index + 128;
            trimmedItem.name = item.index;
            trimmedItem.quality = "unique";
            trimmedItem.type = item.code;
            console.log(trimmedItem);
            return trimmedItem;
        });

        fs.writeFileSync('uniqueItems.json', JSON.stringify(uniqueItems, null, 2));
        console.log('Unique items saved to uniqueItems.json');

    } catch (error) {
        console.error('Error fetching items:', error.message);
    }
}

fetchItems();
