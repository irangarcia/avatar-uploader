import Cropper from 'react-easy-crop';

import { DragBox } from '../DragBox';
import { CloseButton } from '../CloseButton';
import { Slider } from '../Slider';
import { Label } from '../Label';
import { CroppedImage } from '../CroppedImage';
import { useAvatarUpload } from '../../hooks/useAvatarUpload';
import { HiddenInput } from '../HiddenInput';
import { Error } from '../Error';

export default function AvatarUpload() {
  const {
    imageSrc,
    status: { initial, final, error },
  } = useAvatarUpload();

  return (
    <DragBox>
      {initial && (
        <>
          <Label />
          <HiddenInput />
        </>
      )}
      {imageSrc && !final && (
        <>
          <CroppedImage />
          <Slider />
        </>
      )}
      {final && (
        <>
          <CroppedImage />
          <Label />
          <HiddenInput />
        </>
      )}
      {error && <Error />}
      {!initial && !final && <CloseButton />}
    </DragBox>
  );
}
