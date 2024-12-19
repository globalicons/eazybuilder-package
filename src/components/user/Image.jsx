import { useEffect, useState } from "react";
import { useNode } from "@craftjs/core";

export const Image = ({ src }) => {
  const [imageSrc, setImageSrc] = useState(src || ""); // Default to empty or provided source
  const {
    connectors: { connect, drag },
    actions: { setProp },
    hasSelectedNode,
  } = useNode((state) => ({
    hasSelectedNode: state.events.selected,
  }));

  useEffect(() => {
    // Effect to log the selected state, if needed for debugging
    console.log("Image selected state:", hasSelectedNode);
  }, [hasSelectedNode]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
        setProp((props) => (props.src = reader.result));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={hasSelectedNode ? "node-selected" : ""}
    >
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ marginBottom: "10px" }}
        />
      </div>
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Uploaded preview"
          style={{ maxWidth: "100%" }}
        />
      )}
    </div>
  );
};

Image.craft = {
  rules: {
    canDrag: true,
  },
};
