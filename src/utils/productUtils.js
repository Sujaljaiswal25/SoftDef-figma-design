
const allBrands = ['Nike', 'Adidas', 'Puma', 'Reebok', 'New Balance', 'ASICS'];

const allProductTypes = ['Runner', 'Sneaker', 'Casual', 'Sports', 'Athletic', 'Training'];

const colorPrices = {
  red: 120,
  blue: 130,
  green: 110,
  yellow: 100,
  pink: 115,
  purple: 140
};

const colorImages = {
  red: 'https://i.pinimg.com/736x/ef/62/2c/ef622cc489f83b6eefba054434b426be.jpg',
  blue: 'https://i.pinimg.com/736x/9a/b0/d8/9ab0d876ddc083ebd6f70cb88569c6e4.jpg',
  green: 'https://i.pinimg.com/1200x/b1/6b/18/b16b18dab4bb0c4ffb7d3b78b550720f.jpg',
  yellow: 'https://i.pinimg.com/736x/b6/4e/af/b64eafe372ef43b94ece31e45a524b04.jpg',
  pink: 'https://i.pinimg.com/736x/ef/62/2c/ef622cc489f83b6eefba054434b426be.jpg',
  purple: 'https://i.pinimg.com/1200x/a0/db/2e/a0db2e48e5d89bc083f14c4517165214.jpg'
};

function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateProduct(color, id) {
  const brand = getRandomItem(allBrands);
  const productType = getRandomItem(allProductTypes);
  
  const basePrice = colorPrices[color] || 120;
  const price = basePrice + Math.floor(Math.random() * 40) - 10;
  
  const discountPercent = Math.floor(Math.random() * 21) + 10;
  const discountPrice = Math.round(price * (100 - discountPercent) / 100);
  
  const ratingValue = (Math.random() * 1.5 + 3.5).toFixed(1);
  
  const ratingCount = Math.floor(Math.random() * 2000) + 100;
  
  const isHot = Math.random() > 0.7;
  
  return {
    id: id,
    name: `${brand} ${productType} ${id}`,
    price: price,
    discountPrice: discountPrice,
    discountPercent: discountPercent,
    ratingValue: ratingValue,
    ratingCount: ratingCount,
    isHot: isHot,
    colors: [color],
    category: 'Shoes',
    imageUrl: colorImages[color] || colorImages.red
  };
}

export { generateProduct };
