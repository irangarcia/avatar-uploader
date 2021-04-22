import { BsX } from 'react-icons/bs';
import { useAvatarUpload } from '../../hooks/useAvatarUpload';

import styles from './styles.module.scss';

export function CloseButton() {
  const { handleCancelUpload } = useAvatarUpload();

  return (
    <button className={styles.closeButton} onClick={handleCancelUpload}>
      <BsX size="2em" />
    </button>
  );
}
