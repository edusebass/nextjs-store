import { ProductsWrapper } from "app/components/store/ProductWrapper";
import { getCollections, getCollectionsProducts } from "app/services/shopify/collections";
import { getProducts } from "app/services/shopify/products";

interface CategoryProps {
    params: {
        categories: string[];
        searchParams?: string;
    };
}

export default async function Category(props: CategoryProps) {
    const { categories } = props.params;
    let products = await getProducts();
    const collections = await getCollections()
    console.log(collections)
    const selectedCollectionId = collections.find((collection) => collection.handle === categories[0]).id
    console.log(selectedCollectionId)

    if(selectedCollectionId){
        products = await getCollectionsProducts(selectedCollectionId)
    } else {
        products = await getProducts()
    }



    return (
        <>
            <ProductsWrapper products={products} />
        </>
    );
}
