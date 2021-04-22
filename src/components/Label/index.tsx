import { BsCardImage } from 'react-icons/bs';

import styles from './styles.module.scss';

export function Label() {
  return (
    <p className={styles.label}>
      <span>
        <BsCardImage title="Image Icon" />
        <strong>Organization Logo</strong>
      </span>
      Drop the image here or click to browse.
    </p>
  );
}
