import CategoryNavigation from "./sections/CategoryNavigation"
import CustomerFavorites from "./sections/CustomerFavorites"
import NewArrivals from "./sections/NewArrivals"
import RegionSpecificCollections from "./sections/RegionSpecificCollections"
import VisualProductGrid from "./sections/VisualProductGrid"

const ProductDiscovery=()=>{
    return(
        <>
        <VisualProductGrid/>
        <CategoryNavigation/>
        <RegionSpecificCollections/>
        <CustomerFavorites/>
        <NewArrivals/>
        </>
    )
}

export default ProductDiscovery