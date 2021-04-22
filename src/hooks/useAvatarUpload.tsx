import React, { useState, useContext, createContext, Dispatch } from 'react';

interface AvatarProviderProps {
  children: React.ReactNode;
}

interface Status {
  initial: boolean;
  final: boolean;
  error: boolean;
}

interface AvatarContextData {
  imageSrc: string | undefined;
  status: Status;
  zoom: number;
  setZoom: Dispatch<React.SetStateAction<number | number[]>>;
  handleSave: () => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCancelUpload: () => void;
}

export const AvatarContext = createContext<AvatarContextData>(undefined);

export const AvatarProvider = ({ children }: AvatarProviderProps) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [status, setStatus] = useState<Status>({
    initial: true,
    final: false,
    error: false,
  });

  const acceptedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      console.log(file);
      if (!acceptedTypes.includes(file.type)) {
        setImageSrc(undefined);
        setStatus({ initial: false, final: false, error: true });

        return null;
      }
      setZoom(1);
      setStatus({ ...status, initial: false, final: false });

      let imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
    }
  };

  const readFile = (file: File) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  };

  const handleCancelUpload = () => {
    setImageSrc(undefined);
    setStatus({ initial: true, final: false, error: false });
  };

  const handleSave = () => {
    setStatus({ initial: false, final: true, error: false });
  };

  return (
    <AvatarContext.Provider
      value={{
        imageSrc,
        status,
        handleSave,
        handleFileChange,
        handleCancelUpload,
        zoom,
        setZoom,
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatarUpload = () => {
  const context = useContext<AvatarContextData>(AvatarContext);

  return context;
};
