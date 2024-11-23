import { TickerResponse } from '@/services/tickers';
import Typography from '@/ui/Typography';

interface TickerProps {
  ticker: TickerResponse['results'][0];
}

const Ticker: React.FC<TickerProps> = ({ ticker }) => {
  return (
    <div className="shadow-md p-4 rounded-lg dark:bg-gray-900 dark:text-white flex flex-col justify-between gap-4">
      <Typography
        variant="body3Xl"
        className="line-clamp-3 overflow-hidden text-clip"
      >
        {ticker.name}
      </Typography>
      <p>{ticker.ticker}</p>
    </div>
  );
};

export default Ticker;
