import SmallProductCard from "./SmallProductCard"

const SmallProductCardsHolder = () => {
  return <>
    <SmallProductCard
      title={"Product Title"} description={"Space for a small product description"} price={"1.48 USD"} oldPrice={false} discount={false} />
    <SmallProductCard
      title={"Product Title"} description={"Space for a small product description"} price={"0.28 USD"} oldPrice={"48.56"} discount={"- 36 %"} />
    <SmallProductCard
      title={"Product Title"} description={"Space for a small product description"} price={"1.12 USD"} oldPrice={"48.56"} discount={"- 36 %"} />
  </>
}

export default SmallProductCardsHolder;