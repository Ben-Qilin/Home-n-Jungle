import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import Filters from "../Filters/Filters";
import Products from "../Products/Products";
import products from "../Products/data";

const MainHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  // const [purchases, setPurchases] = useState([])
  const [purchases, setPurchases] = useState({})
  //  const addToPurchase = (product) => {
  //    setPurchases([...purchases, product])
  //  }

  const addToPurchase = (product) => {
    setPurchases(prevPurchases => {
      if (prevPurchases[product.id]) {
        // Si le produit existe déjà dans le panier, incrémentez la quantité.
        return {
          ...prevPurchases,
          [product.id]: {
            ...prevPurchases[product.id],
            quantity: prevPurchases[product.id].quantity + 1,
          },
        };
      } else {
        // Si le produit n'est pas déjà dans le panier, ajoutez-le avec une quantité de 1.
        return {
          ...prevPurchases,
          [product.id]: {
            ...product,
            quantity: 1,
          },
        };
      }
    });
  };
  const incrementQuantity = (productId) => {
    setPurchases(prevPurchases => {
      if (prevPurchases[productId]) {
        return {
          ...prevPurchases,
          [productId]: {
            ...prevPurchases[productId],
            quantity: prevPurchases[productId].quantity + 1,
          },
        };
      } else {
        return prevPurchases;
      }
    });
  };
  
  const decrementQuantity = (productId) => {
    setPurchases(prevPurchases => {
      if (prevPurchases[productId] && prevPurchases[productId].quantity > 1) {
        return {
          ...prevPurchases,
          [productId]: {
            ...prevPurchases[productId],
            quantity: prevPurchases[productId].quantity - 1,
          },
        };
      } else if (prevPurchases[productId] && prevPurchases[productId].quantity === 1) {
        const newPurchases = { ...prevPurchases };
        delete newPurchases[productId];
        return newPurchases;
      } else {
        return prevPurchases;
      }
    });
  };
  
 
  // const addToPurchase = (product) => {
  //   const existingProductIndex = purchases.findIndex(item => item.id === product.id);
  //   if (existingProductIndex === -1) {
  //     setPurchases([...purchases, {...product, quantity: 1}]);
  //   } else {
     
  //     alert("Le produit existe déjà dans le tableau des achats.");
  //   }
  // }
  const handleRemove = (productName) => {
    setPurchases(purchases.filter(purchase => purchase.name !== productName));
};
  
  

  
  console.log(purchases)
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main style={{ position: 'relative', display: 'flex', flexDirection: 'row', flexGrow: 1, height: '86vh' }}>
     <SideBar isOpen={isOpen} toggleOpen={toggleOpen} purchases={purchases} handleRemove={handleRemove} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} />
      <div style={{ flexGrow: 1, transition: 'all 0.2s ease-in-out', marginLeft: isOpen ? '16rem' :'3rem', boxSizing: 'border-box' }}>
        <div style={{backgroundColor: 'rgba(255, 255, 255, 0.248)', padding: 16, height: '83vh', display: 'flex' ,flexDirection: 'column',alignItems: 'center', gap: '1rem',boxSizing: 'border-box' }}>
          <Filters setFilteredProducts={setFilteredProducts}/>
          <Products filteredProducts={filteredProducts} addToPurchase={addToPurchase}   />
        </div>
      </div>
    </main>
  );
}

export default MainHome;