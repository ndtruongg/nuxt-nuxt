export const initData = () => {
  // const user = useState('user', () => ({ name: 'Truong', age: 27 }));
  const user = ref({ name: 'Truong', age: 27 })

  return {
    user
  }
}
