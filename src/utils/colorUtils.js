// Map of color names to their closest match in COLOR_FILTERS
const COLOR_MAPPING = {
   
  red: 'red',
  blue: 'blue',
  green: 'green',
  yellow: 'yellow',
  pink: 'pink',
  purple: 'purple',
  
  // Common color variations
  black: 'black',
  white: 'white',
  grey: 'blue',   
  gray: 'blue',     
  orange: 'red',  
  violet: 'purple',
  indigo: 'purple',
  teal: 'green',
  lime: 'green',
  emerald: 'green',
  cyan: 'blue',
  sky: 'blue',
  fuchsia: 'pink',
  rose: 'pink',
};

export const mapToFilterColors = (colors) => {
  if (!colors || !Array.isArray(colors)) return [];
  
   
  const mappedColors = colors.map(color => {
    const lowerColor = color.toLowerCase();
    return COLOR_MAPPING[lowerColor] || 'blue';  
  });
  
   //for duplicates 
  return [...new Set(mappedColors)];
};

export const getColorClass = (color) => {
  switch(color.toLowerCase()) {
    case 'red':
      return 'bg-red-500';
    case 'blue':
      return 'bg-blue-500';
    case 'green':
      return 'bg-green-500';
    case 'yellow':
      return 'bg-yellow-500';
    case 'pink':
      return 'bg-pink-500';
    case 'purple':
      return 'bg-purple-500';
    default:
      return 'bg-gray-500'; 
  }
};
