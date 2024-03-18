import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../resume/Resume.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const DisplayDocument = ({ documentPath }) => {
  const [wid, setWid] = useState(window.innerWidth);
  const [centerVertically, setCenterVertically] = useState(false);

  const handleResize = () => {
    setWid(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Adding empty array as second argument ensures this effect runs only once after initial render

  useEffect(() => {
    if (wid < 700) {
      setCenterVertically(true);
    } else {
      setCenterVertically(false);
    }
  }, [wid]); // Update centering state when window width changes

  return (
    <div
      className="document-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: centerVertically ? "center" : "unset",
        height: centerVertically ? "75vh" : "unset",
      }}
    >
      <Document file={documentPath}>
        <Page pageNumber={1} scale={wid < 700 ? (wid > 700 ? 0.7 : 0.5) : 1} />
      </Document>
    </div>
  );
};

const Resume = () => {
  return (
    <div className="page1" style={{ height: "unset" }}>
      <div style={{ zIndex: 0 }}>
        <DisplayDocument documentPath={resume} />
      </div>

      <br />
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        download="Resume.pdf"
        style={{ textAlign: "center" }}
      >
        <p className="downloadCV">
          <FontAwesomeIcon icon={faDownload} style={{ marginRight: "10px" }} />
          Download
        </p>
      </a>
    </div>
  );
};

export default Resume;
