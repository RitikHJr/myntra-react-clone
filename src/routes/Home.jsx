// import HomeItem from "../components/HomeItem";
// import { useSelector } from "react-redux";

const Home = () => {
  // const items = useSelector((store) => store.items);

  return (
    <main>
      <div className="banner_container">
        <img className="banner_img" src="images/banner.jpg" alt="Main Banner" />
      </div>
      <div className="category_heading">Medal worthy brands to bag</div>
      <div className="category_items">
        <a href="#">
          <img className="sale_item" src="images/offers/1.png" />
        </a>
        <a href="#">
          <img className="sale_item" src="images/offers/2.png" />
        </a>
        <a href="#">
          <img className="sale_item" src="images/offers/3.png" />
        </a>
        <a href="#">
          <img className="sale_item" src="images/offers/4.png" />
        </a>
        <a href="#">
          <img className="sale_item" src="images/offers/5.png" />
        </a>
        <a href="#">
          <img className="sale_item" src="images/offers/6.png" />
        </a>
        <a href="#">
          <img className="sale_item" src="images/offers/7.png" />
        </a>
        <a href="#">
          <img className="sale_item" src="images/offers/8.png" />
        </a>
        <a href="#">
          <img className="sale_item" src="images/offers/9.png" />
        </a>
        <a href="#">
          <img className="sale_item" src="images/offers/10.png" />
        </a>
        <a href="#">
          <img className="sale_item" src="images/offers/11.png" />
        </a>
        <a href="#">
          <img className="sale_item" src="images/offers/12.png" />
        </a>
      </div>

      <div className="category_heading">Shop by category</div>
      <div className="category_items">
        <a href="#">
          <img className="sale_item" src="images/categories/1.jpg" />
        </a>
        <a href="#">
          <img className="sale_item" src="images/categories/2.jpg" />
        </a>
        <a href="#">
          <img className="sale_item" src="images/categories/3.jpg" />
        </a>
        <a href="#">
          <img className="sale_item" src="images/categories/4.jpg" />
        </a>
        <a href="#">
          <img className="sale_item" src="images/categories/5.jpg" />
        </a>
        <a href="#">
          <img className="sale_item" src="images/categories/6.jpg" />
        </a>
        <a href="#">
          <img className="sale_item" src="images/categories/7.jpg" />
        </a>
        <a href="#">
          <img className="sale_item" src="images/categories/8.jpg" />
        </a>
        <a href="#">
          <img className="sale_item" src="images/categories/9.jpg" />
        </a>
        <a href="#">
          <img className="sale_item" src="images/categories/10.jpg" />
        </a>
      </div>
    </main>
  );
};

export default Home;

{
  /* <main>
      <div className="items-container">
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main> */
}
