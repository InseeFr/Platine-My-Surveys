import { useEffect, useState } from "react";
import { Tile } from "@codegouvfr/react-dsfr/Tile";
import { fr } from "@codegouvfr/react-dsfr";

type Props = {
  title: string;
  description: string;
  url: string;
  pictogramUrl: string;
};

export const DocumentTile = ({ title, description, url, pictogramUrl }: Props) => {
  const [file, setFile] = useState<{
    extension: string | undefined;
    size: number | null;
    isDownloadable: boolean;
  }>({
    extension: undefined,
    size: null,
    isDownloadable: false,
  });

  const fetchFileInfo = async () => {
    try {
      const response = await fetch(url, { method: "HEAD" });

      if (response.ok) {
        const size = response.headers.get("Content-Length");
        const extension = url.split(".").pop();

        setFile({ extension: extension, size: size ? parseInt(size) : null, isDownloadable: true });
      } else {
        console.error("Error retrieving file information");
        setFile({ ...file, isDownloadable: false });
      }
    } catch (error) {
      console.error("Error : ", error);
    }
  };

  useEffect(() => {
    fetchFileInfo();
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.setAttribute("data-fr-assess-file", "bytes");
    link.href = url;
    link.download = `ressources.${file.extension}`;
    link.click();
  };

  return (
    <div className="container">
      <Tile
        disabled={!file.isDownloadable}
        desc={description}
        className="fr-mb-3w"
        detail={
          <p style={{ "color": fr.colors.decisions.text.mention.grey.default }} className="fr-text--xs">
            {file.isDownloadable &&
              `${file.extension && `${file.extension.toLocaleUpperCase()} - `} ${file.size && (file.size / 1024).toFixed(0)} Ko`}
          </p>
        }
        imageSvg
        enlargeLinkOrButton
        buttonProps={{ onClick: handleDownload }}
        downloadButton
        imageUrl={pictogramUrl}
        orientation="horizontal"
        small
        title={title}
        titleAs="h4"
      />
    </div>
  );
};
