import rootReducer from "./src/Redux/reducer/reducer";
import { createStore } from "redux";


const Store=createStore(rootReducer);


export default Store;