import { BrowserRouter } from "react-router-dom"
import Router from "./pages/Router"
import { Provider } from "react-redux"
import { store } from './redux/store'
import { persistStore } from "redux-persist"
      
import { PersistGate } from "redux-persist/integration/react"

const persistor = persistStore(store)

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
