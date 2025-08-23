// commands/Resume.tsx
import { useEffect, useContext } from "react";
import { termContext } from "../Terminal";

// Global set to track downloaded indexes (persists across re-renders)
const downloadedIndexes = new Set<number>();

const Resume: React.FC = () => {
  const { index } = useContext(termContext);

  useEffect(() => {
    if (index === 0 && !downloadedIndexes.has(index)) {
      downloadedIndexes.add(index);

      const link = document.createElement("a");
      link.href = "/Aryan_Jain_Resume.pdf";
      link.download = "Aryan_Jain_Resume.pdf";
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [index]);

  return <span>{index === 0 ? "Downloading resume..." : null}</span>;
};

export default Resume;