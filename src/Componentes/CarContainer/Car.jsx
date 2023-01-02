import { useState } from 'react';
import { Header } from '../Carshop/Carshop';
import { ProductList } from '../Carshop/ProductList';
import "../Carshop/Carshop.css";


function Car() { /* funcion para el carrito y lista de productos */
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

	return (
		<>{/* retorna el header y el productlist */}
			<Header
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>	
			<ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
		</>
	);
}

export default Car;