import { ProductsWrapper } from "app/components/store/ProductWrapper";
import { getProducts } from "app/services/shopify";

interface CategoryProps {
    params: {
        categories: string[];
        searchParams?: string;
    };
}

export default async function Category(props: CategoryProps) {
    const products = await getProducts();

    const { categories } = props.params;
    console.log(categories);

    return (
        <>
            <ProductsWrapper products={products} />
        </>
    );
}
