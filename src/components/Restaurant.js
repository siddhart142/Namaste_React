import { useParams } from "react-router-dom";
import { MENU_API } from "../utilis/constants";
import useFetchApi from "../utilis/useFetchApi";
import RestaurantCategory from "./RestaurantCategory";


const Restaurant = () => {

    // const [RestaurantMenu , setRestaurnatMenu] = useState(null)
    const {resId} = useParams();  

    const Api = MENU_API+resId;
    const RestaurantMenu = useFetchApi(Api);

    if(RestaurantMenu===null)
    {
        return (
            <div>Hello</div>
        )
    }

    // console.log(RestaurantMenu)
    const {name, cuisines , costForTwo} = RestaurantMenu?.cards[0]?.card?.card?.info;

    // const {itemCards} = RestaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = RestaurantMenu ?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    

    // console.log(categories);
    return (
        <div className="flex-1 text-center my-6">
            <h1 className="font-bold text-2xl ">{name}</h1>
            <p className="font-bold ">Cusines: {cuisines.join(", ")}</p>
            <p className="font-bold ">Cost for two : Rs{costForTwo/100}</p>
            <p>
            {
                categories.map((category) => <RestaurantCategory key={category.card.card.title} data={category?.card?.card} />)
            }
            </p>
        </div>
    )
}

export default Restaurant;