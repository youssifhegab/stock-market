import ChangeLang from '@/common/components/ChangeLang';
import ChangeMode from '@/common/components/ChangeMode';

const Header = () => {
  return (
    <div className="flex justify-between gap-4 p-4">
      Nasdaq
      <div className="flex items-center gap-4 flex-shrink-0">
        <ChangeLang />
        <ChangeMode />
      </div>
    </div>
  );
};

export default Header;
