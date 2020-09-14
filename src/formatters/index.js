import renderPlain from './plain.js';
import renderStylish from './stylish.js';
import renderJson from './json.js';

export default (obj, format = 'stylish') => {
  switch (format) {
    case 'plain':
      return renderPlain(obj);
    case 'json':
      return renderJson(obj);
    case 'stylish':
      return renderStylish(obj);
    default:
      throw new Error(`Invalid format: ${format}`);
  }
};
