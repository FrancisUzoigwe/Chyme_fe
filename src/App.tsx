import { RouterProvider } from "react-router-dom";
import { Element } from "./routes/PublicRoute";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./Components/global/store";
import { Provider } from "react-redux";
import Online from "./Components/common/OnlineFeature/Online";
import BackToTopButton from "./Components/common/BackToTopButton/BackToTopButton";

const App = () => {
  const persist = persistStore(store);
  return (
    <PersistGate persistor={persist}>
      <Provider store={store}>
        <RouterProvider router={Element} />
        <Online />
        <BackToTopButton />
      </Provider>
    </PersistGate>
  );
};

export default App;
