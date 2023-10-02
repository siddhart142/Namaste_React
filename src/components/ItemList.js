
const ItemList = ({items})=>{
    console.log(items)
    return(
        <div >
            {
                items.map(item => <div key={item.card.info.id} className="p-4 m-4 border-b-4 border-gray-200 text-left">
                    <div className="py-4">
                        <span>{item.card.info.name}</span>
                        <span> - RS: {item.card.info.price? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                    </div>
                    <p className="text-xs ">
                        {item.card.info.description}
                    </p>
                </div>)
            }
        </div>
    )
}
export default ItemList;