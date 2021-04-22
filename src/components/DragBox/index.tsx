import React from 'react';
import { useAvatarUpload } from '../../hooks/useAvatarUpload';

import styles from './styles.module.scss';

interface DragBoxProps {
  children: React.ReactNode;
}

export function DragBox({ children }: DragBoxProps) {
  const {
    status: { initial, final },
  } = useAvatarUpload();

  return (
    <div className={styles.mainContainer}>
      <div
        data-testid="drag-box-container"
        className={styles.boxContainer}
        style={{ border: !final && !initial ? 'none' : '' }}
      >
        {children}
      </div>
    </div>
  );
}
