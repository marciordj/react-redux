import { useSelector } from "react-redux";

const Catalog = () => {
  const catalog = useSelector(state => state.hero);

  console.log(catalog)
  return (
    <h1>Catalogo</h1>
  )
}


export default Catalog;