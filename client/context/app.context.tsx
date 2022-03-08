import { createContext, useContext, useState, PropsWithChildren } from 'react';
import ProductModel from '../interfaces/product.interface';

export interface IAppContext {
  filter?: (dataProducts: string) => void,
  products: ProductModel[],
}

const AppContext = createContext<IAppContext>({products: []});

export const AppContextProvider = ({ products, children }: PropsWithChildren<IAppContext>): JSX.Element => {
	const [ productsState, setProductsState ] = useState<ProductModel[]>(products);

	const filter = (typeOfDisease: string) => {
    const filterProducts: ProductModel[] = products.filter((product: ProductModel) => product.typeOfDisease == typeOfDisease);
    setProductsState(filterProducts);
  };

	return (
    <AppContext.Provider 
      value={{
       filter,
       products: productsState,
      }}
    >
      {children}
    </AppContext.Provider>);
};

export const useAppContext = () => useContext(AppContext);
