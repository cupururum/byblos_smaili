import MenuItem from "../../components/menu/menu-item"

function MenuItemsGrid(props) {

    return (
        <div className="z-0 pt-5 space-y-10 md:gap-y-10 md:space-y-0 md:grid lg:pt-0 md:grid-cols-2 4xl:grid-cols-3 ">
                        {props.menuItems.map((menuItem) => 
                                <MenuItem   key={menuItem._id}
                                            pic={menuItem.dishImage.asset.url}
                                            vegeterian={menuItem.vegeterian}
                                            title={menuItem.title}
                                            alt={menuItem.title}
                                            ingredients={menuItem.ingredients}
                                            price={menuItem.price}
                                            new={menuItem.new}
                                            />
                        )}
        </div>
    )
}

export default MenuItemsGrid