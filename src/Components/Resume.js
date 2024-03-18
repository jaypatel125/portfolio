import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../resume/Resume.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  return (
    <div className="page1" style={{ height: "unset" }}>
      <div>
        <Document file={resume}>
          <Page pageNumber={1} />
        </Document>
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
