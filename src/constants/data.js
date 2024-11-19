import images from './images';

const wines = [
  {
    title: 'The Vineyard Shiraz',
    price: '$75',
    tags: 'Local | Bottle',
  },
  {
    title: 'Golden Valley Malbec',
    price: '$68',
    tags: 'Imported | Bottle',
  },
  {
    title: 'Sunset Rose',
    price: '$50',
    tags: 'French | 750 ml',
  },
  {
    title: 'Coastal Pale Ale',
    price: '$40',
    tags: 'Craft | 750 ml',
  },
  {
    title: 'Belfast Guinness',
    price: '$30',
    tags: 'Irish | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Vino Spritz',
    price: '$18',
    tags: 'Prosecco | Aperol | Soda | 30 ml',
  },
  {
    title: "Rum 'N' Storm",
    price: '$22',
    tags: 'Dark rum | Ginger beer | Lime wedge',
  },
  {
    title: 'Tropical Daiquiri',
    price: '$15',
    tags: 'Rum | Fresh lime | Simple syrup',
  },
  {
    title: 'Classic Old Fashioned',
    price: '$35',
    tags: 'Bourbon | Sugar cube | Angostura bitters',
  },
  {
    title: 'Citrus Negroni',
    price: '$28',
    tags: 'Gin | Sweet Vermouth | Campari | Orange twist',
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

export default { wines, cocktails, awards };
