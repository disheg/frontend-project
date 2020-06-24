import plain from './plain.js';
import stylish from './stylish.js';
import json from './json.js';

export default (obj, format = stylish) => {
  switch (format) {
    case 'plain':
      return plain(obj);
    case 'json':
      return json(obj);
    case 'stylish':
      return stylish(obj);
    default:
      throw new Error(`Invalid format: ${formar}`)
  }
};
