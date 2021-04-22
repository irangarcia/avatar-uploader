import styles from './styles.module.scss';

import { useAvatarUpload } from '../../hooks/useAvatarUpload';

export function HiddenInput() {
  const { handleFileChange } = useAvatarUpload();

  return (
    <input
      accept="image/*"
      aria-label="input-upload"
      className={styles.input}
      id="inputUpload"
      placeholder="Upload your file here"
      onChange={handleFileChange}
      type="file"
    />
  );
}
