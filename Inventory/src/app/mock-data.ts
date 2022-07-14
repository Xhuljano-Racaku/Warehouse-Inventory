export const addItem = (newItem: any) => {
    newItem["item_number"] = mockData.length +1;
    console.log(newItem);
    mockData.push(newItem);
}

export const removeItem = (index: number) => {
    mockData.splice(index,1);
}

export const updateItem = (updatedItem: any, index: number) => {
    mockData.splice(index,1, updatedItem);
}


export const mockData = [{
    "item_number": 1,
    "item_image": "http://dummyimage.com/100x100.png/dddddd/000000",
    "item_description": "Tarts Assorted",
    "category": "Outdoors",
    "price": "4819.42",
    "metal": "Wood"
  }, {
    "item_number": 2,
    "item_image": "http://dummyimage.com/100x100.png/dddddd/000000",
    "item_description": "Apple - Fuji",
    "category": "Outdoors",
    "price": "4780.98",
    "metal": "Steel"
  }, {
    "item_number": 3,
    "item_image": "http://dummyimage.com/100x100.png/dddddd/000000",
    "item_description": "Cactus Pads",
    "category": "Movies",
    "price": "2256.78",
    "metal": "Steel"
  }, {
    "item_number": 4,
    "item_image": "http://dummyimage.com/100x100.png/ff4444/ffffff",
    "item_description": "Drambuie",
    "category": "Clothing",
    "price": "2400.68",
    "metal": "Vinyl"
  }, {
    "item_number": 5,
    "item_image": "http://dummyimage.com/100x100.png/dddddd/000000",
    "item_description": "Wine - Casablanca Valley",
    "category": "Grocery",
    "price": "4637.04",
    "metal": "Rubber"
  }, {
    "item_number": 6,
    "item_image": "http://dummyimage.com/100x100.png/dddddd/000000",
    "item_description": "Nantucket Pine Orangebanana",
    "category": "Games",
    "price": "2662.10",
    "metal": "Steel"
  }, {
    "item_number": 7,
    "item_image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    "item_description": "Cake - Sheet Strawberry",
    "category": "Clothing",
    "price": "4418.75",
    "metal": "Glass"
  }, {
    "item_number": 8,
    "item_image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    "item_description": "Tuna - Sushi Grade",
    "category": "Books",
    "price": "2724.04",
    "metal": "Aluminum"
  }, {
    "item_number": 9,
    "item_image": "http://dummyimage.com/100x100.png/ff4444/ffffff",
    "item_description": "Skirt - 24 Foot",
    "category": "Sports",
    "price": "4242.41",
    "metal": "Plexiglass"
  }, {
    "item_number": 10,
    "item_image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    "item_description": "Cognac - Courvaisier",
    "category": "Shoes",
    "price": "128.87",
    "metal": "Stone"
  }]