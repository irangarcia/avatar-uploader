import { Slider as SliderMaterial } from '@material-ui/core';

import styles from './styles.module.scss';
import { useAvatarUpload } from '../../hooks/useAvatarUpload';

export function Slider() {
  const { zoom, setZoom, handleSave } = useAvatarUpload();
  return (
    <div className={styles.sliderContainer}>
      <p>Crop</p>
      <SliderMaterial
        value={zoom}
        min={1}
        max={3}
        step={0.1}
        onChange={(e, zoom) => setZoom(zoom)}
        style={{ color: '#407efa' }}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
