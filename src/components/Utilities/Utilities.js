export const randomId = () => {
  const id = Math.floor(1000 + Math.random() * 9000);
  return id.toString();
}