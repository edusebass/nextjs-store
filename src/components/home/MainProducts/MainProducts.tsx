const getProducts = async () => {
    const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
        headers: new Headers({
            'X-Shopify-Access-Token': process.env.SHOPIFY_ACESS_TOKEN || ""
        })
    })

    const data = await response.json()
    return console.log(data)
}
export const MainProducts = async () => {
    const products = await getProducts()
    return(
        <>
            <section>
                <h1>MainProducts</h1>
            </section>
        </>
    )
}