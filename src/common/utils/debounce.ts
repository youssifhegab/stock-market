let timeOutId: ReturnType<typeof setTimeout>;

/**
 * Calls the given callback after the given wait time has passed since the last call to debounce.
 * If debounce is called again before the wait time has passed, the callback will not be called
 * until the wait time has passed since the last call to debounce.
 * @param callback The callback to be called after the wait time has passed.
 * @param waitTime The time in milliseconds to wait before calling the callback.
 */
export const debounce = (callback: () => void, waitTime: number): void => {
  clearTimeout(timeOutId);
  timeOutId = setTimeout(() => {
    callback();
  }, waitTime);
};
