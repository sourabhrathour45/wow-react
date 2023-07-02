// import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  
  console.log("body is rendered")
  
  useEffect(() => {
    fetchData();
  }, []);
  // console.log("hellloooooo");
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    console.log("fuck offfff!!!!")
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  //!using custom hook onlinestatus
  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false)
    return (<h1>Looks like you are offline!!
      Please check your internet connection</h1>);

 //!conditional rendering
//   if (listOfRestaurants.length === 0) {
//     return <Shimmer />;
// }
    
    
    //using ternary operator
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            onClick={() => {
              //filter rest card and update ui
              // console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
            </button>
            
        </div>
        <button
          className="filter-btn"
            onClick={() => {
              console.log("button click is working");
            //!filter logic

              const filteredList = listOfRestaurants.filter(
            
              (res) => res.data.avgRating > 4.2
              );
               console.log(filteredList);
              setListOfRestaurants(filteredList);
              
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.data.id}
            to={"/restaurant/" + restaurant.data.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;