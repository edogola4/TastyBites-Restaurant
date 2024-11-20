import images from './images';

const wines = [
  {
    title: 'The Vineyard Shiraz',
    price: '$75',
    imgUrl: images.wine01,
    tags: 'Local | Bottle',
    description: 'A bold and rich Shiraz with notes of blackberries, spice, and a hint of oak. Perfect with red meats or grilled dishes.',
  },
  {
    title: 'Golden Valley Malbec',
    price: '$68',
    imgUrl: images.wine02,
    tags: 'Imported | Bottle',
    description: 'A smooth and full-bodied Malbec with dark fruit flavors and a velvety finish. Pairs well with steak and hearty meals.',
  },
  {
    title: 'Sunset Rose',
    price: '$50',
    imgUrl: images.wine03,
    tags: 'French | 750 ml',
    description: 'A delicate and crisp Rosé with subtle floral and citrus notes. Ideal for light salads, seafood, and summer gatherings.',
  },
  {
    title: 'Coastal Pale Ale',
    price: '$40',
    imgUrl: images.beer01,
    tags: 'Craft | 750 ml',
    description: 'A refreshing and hoppy pale ale with bright citrus flavors and a clean finish. Enjoy it with grilled fish or spicy dishes.',
  },
  {
    title: 'Belfast Guinness',
    price: '$30',
    imgUrl: images.beer02,
    tags: 'Irish | 750 ml',
    description: 'A rich and creamy stout with roasted malt flavors and a smooth texture. Perfect with hearty stews, roasted meats, or dark chocolate desserts.',
  },
];

const cocktails = [
  {
    title: 'Vino Spritz',
    price: '$18',
    imgUrl: images.cocktail01,
    tags: 'Prosecco | Aperol | Soda | 30 ml',
    description: 'A refreshing spritz made with Prosecco, Aperol, and a splash of soda. Perfect for a light and bubbly aperitif.',
  },
  {
    title: "Rum 'N' Storm",
    price: '$22',
    imgUrl: images.cocktail02,
    tags: 'Dark rum | Ginger beer | Lime wedge',
    description: 'A zesty and spicy cocktail made with dark rum, ginger beer, and a lime wedge. Ideal for a bold and refreshing taste.',
  },
  {
    title: 'Tropical Daiquiri',
    price: '$15',
    imgUrl: images.cocktail03,
    tags: 'Rum | Fresh lime | Simple syrup',
    description: 'A tropical and sweet cocktail made with rum, fresh lime juice, and a touch of simple syrup. Enjoy it on a sunny day.',
  },
  {
    title: 'Classic Old Fashioned',
    price: '$35',
    imgUrl: images.cocktail04,
    tags: 'Bourbon | Sugar cube | Angostura bitters',
    description: 'A timeless cocktail made with bourbon, a sugar cube, and a few dashes of Angostura bitters. A must-try for whiskey lovers.',
  },
  {
    title: 'Citrus Negroni',
    price: '$28',
    imgUrl: images.cocktail05,
    tags: 'Gin | Sweet Vermouth | Campari | Orange twist',
    description: 'A sophisticated cocktail with gin, sweet vermouth, and Campari, topped with a citrus twist. Ideal for a stylish evening.',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Michelin Star',
    subtitle: 'Awarded for outstanding culinary excellence.',
  },
  {
    imgUrl: images.award01,
    title: 'Best New Restaurant',
    subtitle: 'Recognized for our innovative menu and ambiance.',
  },
  {
    imgUrl: images.award05,
    title: 'Excellence in Service',
    subtitle: 'Awarded for exceptional customer service and dining experience.',
  },
  {
    imgUrl: images.award03,
    title: 'Top Chef of the Year',
    subtitle: 'Honored for creative and outstanding cuisine.',
  },
];

// export default { wines, cocktails, awards };

// Assign object to a variable before export to avoid eslint warning
const data = { wines, cocktails, awards };

export default data;
