import { RouterProvider } from "react-router-dom"
import { mainRoute } from "./router/mainRoute"
import { Provider } from "react-redux"
import { store } from "./global/store"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"

const App = () => {
  const persist = persistStore(store)
  return (
    <div>
      <PersistGate persistor={persist}>
        <Provider store={store}>
          <RouterProvider router={mainRoute} />
        </Provider>
      </PersistGate>
    </div>
  )
}

export default App