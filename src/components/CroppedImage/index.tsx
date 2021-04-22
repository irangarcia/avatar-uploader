import { useState } from 'react';
import Cropper from 'react-easy-crop';

import { useAvatarUpload } from '../../hooks/useAvatarUpload';

import styles from './styles.module.scss';

export function CroppedImage() {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const { imageSrc, zoom, setZoom } = useAvatarUpload();

  return (
    <div className={styles.imageContainer}>
      <Cropper
        image={imageSrc}
        crop={crop}
        aspect={1}
        cropShape="round"
        onCropChange={setCrop}
        zoom={zoom}
        onZoomChange={setZoom}
        disableAutomaticStylesInjection
      />
    </div>
  );
}
