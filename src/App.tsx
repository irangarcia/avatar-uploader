import AvatarUpload from './components/AvatarUpload';
import { AvatarProvider } from './hooks/useAvatarUpload';

export function App() {
  return (
    <>
      <AvatarProvider>
        <AvatarUpload />
      </AvatarProvider>
    </>
  );
}
