import { useState } from "react";

export const Image = ({ 
  src,
  alt = "Image",
  onImageChange,
  showUploader = true,
  style = {},
  className = ""
}) => {
  const [imageSrc, setImageSrc] = useState(src || "");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
        if (onImageChange) {
          onImageChange(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={className}>
      {showUploader && (
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ marginBottom: "10px" }}
          />
        </div>
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          style={{ maxWidth: "100%", ...style }}
        />
      )}
    </div>
  );
}; 