import Footer from './Footer';
import Header from './Header';
import TickerList from './TickerList';

const HomePage = () => {
  return (
    <div className="bg-white relative dark:bg-gray-800 flex-1 flex flex-col">
      <Header />

      <TickerList />

      <Footer />
    </div>
  );
};

export default HomePage;
