import ChangeLang from '@/common/components/ChangeLang';
import ChangeMode from '@/common/components/ChangeMode';
import Typography from '@/ui/Typography';
import SearchField from '../SearchField';

const Header = () => {
  return (
    <nav className="flex justify-between items-center gap-4 p-4 shadow-md bg-gray-200 dark:bg-gray-800 sticky top-0 w-screen">
      <Typography
        variant="heading4Xl"
        className="text-primary-default dark:text-white"
      >
        Nasdaq
      </Typography>
      <div>
        <SearchField />
      </div>
      <div className="flex items-center gap-4 flex-shrink-0">
        <ChangeLang />
        <ChangeMode />
      </div>
    </nav>
  );
};

export default Header;
