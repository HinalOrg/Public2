import { useEffect } from 'react';
import { centerWindow, getCurrentWindow } from '../lib/overwolf';
import { getLocalStorageItem, setLocalStorageItem } from '../lib/utils/storage';

const useCenterWindow = () => {
  useEffect(() => {
    const doCenter = async () => {
      const window = await getCurrentWindow();
      const alreadyCentered = getLocalStorageItem(
        `centered-${window.name}`,
        false
      );
      if (!alreadyCentered) {
        const primaryDisplay = window.name !== 'second_screen';
        await centerWindow(window, primaryDisplay);
        setLocalStorageItem(`centered-${window.name}`, { primaryDisplay });
      }
    };

    doCenter();
  }, []);
};

export default useCenterWindow;
