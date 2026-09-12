import { CartProvider }       from './context/CartContext'
import { OrderProvider }      from './context/OrderContext'
import OrderModal             from './components/Order/OrderModal'
import SpotOnLandingModal     from './components/SpotOnLandingModal'
import Navbar                 from './components/Navbar'
import Hero              from './components/Hero'
import About             from './components/About'
import Menu              from './components/Menu/Menu'
import Events            from './components/Events/Events'
import Gallery           from './components/Gallery'
import HoursLocation     from './components/HoursLocation'
import Footer            from './components/Footer'

export default function App() {
  return (
    <CartProvider>
      <OrderProvider>
        <div className="min-h-screen bg-society-black">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Menu />
            <Events />
            <Gallery />
            <HoursLocation />
          </main>
          <Footer />
          <OrderModal />
          <SpotOnLandingModal />
        </div>
      </OrderProvider>
    </CartProvider>
  )
}
