import { useEffect, useState } from 'react';

/**
 * Custom hook that triggers a callback when the user scrolls to the bottom of the page.
 *
 * @param {() => void} onScrollBottom - The function to execute when the bottom of the page is reached.
 * @param {number} [offset=100] - The distance in pixels from the bottom to trigger the callback.
 * @returns {boolean} - A boolean indicating whether the user is currently at the bottom of the page.
 */
const useScrollBottom = ({
  onScrollBottom,
  offset = 100,
}: {
  onScrollBottom: () => void;
  offset?: number;
}): boolean => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight, scrollTop, clientHeight } =
        document.documentElement;
      const isAtBottom = scrollHeight - scrollTop - clientHeight <= offset;

      if (isAtBottom && !isBottom) {
        setIsBottom(true);
        onScrollBottom();
      } else if (!isAtBottom) {
        setIsBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onScrollBottom, offset, isBottom]);

  return isBottom;
};

export default useScrollBottom;
