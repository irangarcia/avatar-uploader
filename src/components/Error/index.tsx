import { useAvatarUpload } from '../../hooks/useAvatarUpload';

import errorIcon from '../../assets/error.svg';
import styles from './styles.module.scss';

export function Error() {
  const { handleCancelUpload } = useAvatarUpload();

  return (
    <>
      <img
        src={errorIcon}
        className={styles.image}
        alt="Image contains Error"
      />
      <p className={styles.label}>
        Sorry, the upload failed.
        <strong onClick={handleCancelUpload}>Try again</strong>
      </p>
    </>
  );
}
