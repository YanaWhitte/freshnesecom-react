import CategoryMenuItem from "./CategoryMenuItem";

const CategoryMenu = ({ title, menuItems }) => {
  return (
    <div className="column menu">
      <p className="title">{title}</p>
      <ul>
        {menuItems.map(({ path, body }) => <CategoryMenuItem key={body} path={path} body={body} />)}
        <div className="more-btn row">
          <a href="#">More categories</a>
          <img src="icons/arrow-black-right.svg" alt="arrow icon" />
        </div>
      </ul>
    </div>
  )
}

export default CategoryMenu;