import { BsX } from 'react-icons/bs';
import { useAvatarUpload } from '../../hooks/useAvatarUpload';

import styles from './styles.module.scss';

export function CloseButton({ ...otherProps }) {
  const { handleCancelUpload } = useAvatarUpload();

  return (
    <button
      className={styles.closeButton}
      onClick={handleCancelUpload}
      data-testid="close-button"
      {...otherProps}
    >
      <BsX size="2em" />
    </button>
  );
}
