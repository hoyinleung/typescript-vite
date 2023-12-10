let value: unknown;
value = 5;
value = 'Hello';
value.toUpperCase()
if (typeof value === 'string') {
  // Type narrowed to string
  console.log(value.toUpperCase());
}

const valueLength = (value as string).length; // Type assertion