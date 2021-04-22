import styles from './styles.module.scss';

import { useAvatarUpload } from '../../hooks/useAvatarUpload';

export function HiddenInput() {
  const { handleFileChange } = useAvatarUpload();

  return (
    <>
      <input
        accept="image/*"
        className={styles.input}
        id="inputUpload"
        onChange={handleFileChange}
        type="file"
      />
    </>
  );
}
