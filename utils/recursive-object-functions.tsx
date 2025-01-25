export function getAllKeys(obj: Record<string, any>): string[] {
  const keys = Object.keys(obj);

  return keys.reduce<string[]>((acc, key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      return [...acc, key, ...getAllKeys(obj[key])];
    } else {
      return [...acc, key];
    }
  }, []);
}

type NestedObject = Record<string, any>;

export function getNestedValues(input: NestedObject | NestedObject[], keys: string[]): NestedObject | NestedObject[] {
  // If input is an array, apply the logic to each item in the array
  if (Array.isArray(input)) {
    return input.map(obj => {
      let result: NestedObject = {};

      // Helper function to search for keys recursively
      const recursiveSearch = (obj: NestedObject, keys: string[]): void => {
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            // If the current key is in the specified keys list, add it to the result
            if (keys.includes(key)) {
              result[key] = obj[key];
            }

            // If the value is an object or array, continue searching recursively
            if (typeof obj[key] === 'object' && obj[key] !== null) {
              recursiveSearch(obj[key], keys);
            }
          }
        }
      };

      // Start the recursive search for each object in the array
      recursiveSearch(obj, keys);

      return result;
    });
  }

  // If the input is a single object, perform the recursive search directly on it
  let result: NestedObject = {};

  const recursiveSearch = (obj: NestedObject, keys: string[]): void => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        // If the current key is in the specified keys list, add it to the result
        if (keys.includes(key)) {
          result[key] = obj[key];
        }

        // If the value is an object or array, continue searching recursively
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          recursiveSearch(obj[key], keys);
        }
      }
    }
  };

  // Start the recursive search for a single object
  recursiveSearch(input, keys);

  return result;
}
