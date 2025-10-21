import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-python";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Button } from "./components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function Section() {
  const PAGE_WIDTH = document.documentElement.clientWidth * 0.5;
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [files, setFiles] = useState<{ [key: string]: string }>({});
  const [editingFile, setEditingFile] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const codeRefs = useRef<Record<string, HTMLDivElement | null>>({}); // 코드 블록
  const rightSectionRef = useRef<HTMLDivElement | null>(null); // 우측 섹션 ref 추가
  const observerInitialized = useRef(false); // Observer 초기화 플래그
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const listResponse = await fetch(`./section${id}/files.json`);
        const { files: fileList } = await listResponse.json();

        const filePromises = fileList.map(async (fileName: string) => {
          try {
            const response = await fetch(`/section${id}/${fileName}`);
            const text = await response.text();
            return { [fileName]: text };
          } catch (err) {
            console.error(`Failed to load ${fileName}:`, err);
            return { [fileName]: "" };
          }
        });

        const results = await Promise.all(filePromises);
        const allFiles = results.reduce(
          (acc, curr) => ({ ...acc, ...curr }),
          {}
        );
        setFiles(allFiles);
      } catch (error) {
        console.error("Failed to load files:", error);
      }
    };

    if (id) {
      getData();
    }
  }, [id]);

  useEffect(() => {
    if (numPages === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // 초기화 중이 아닐 때만 currentPage 업데이트
        if (!observerInitialized.current) return;

        // 현재 보이는 페이지들을 수집하고 가장 작은 페이지 번호를 선택
        const visiblePages = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => Number(entry.target.getAttribute("data-page-number")))
          .sort((a, b) => a - b);

        if (visiblePages.length > 0) {
          setCurrentPage(visiblePages[0]); // 가장 작은 페이지 번호 선택
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // 페이지의 50%가 보일 때 감지
      }
    );

    // 모든 페이지 요소를 observe
    Object.values(pageRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Observer 초기화 완료 후 약간의 딜레이를 두고 활성화
    const timer = setTimeout(() => {
      observerInitialized.current = true;
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      observerInitialized.current = false;
    };
  }, [numPages]);

  // id가 변경될 때 currentPage를 1로 초기화
  useEffect(() => {
    setCurrentPage(1);
    observerInitialized.current = false;
  }, [id]);

  // Prism 하이라이트 적용
  useEffect(() => {
    Prism.highlightAll();
  }, [files, editingFile]);

  // PDF 페이지 변경 시 해당하는 코드로 자동 스크롤
  useEffect(() => {
    if (currentPage && rightSectionRef.current) {
      const paddedPageNumber = currentPage.toString().padStart(2, "0");

      // 가능한 확장자들로 파일명 찾기
      const possibleExtensions = [".py", ".js", ".ts", ".tsx"];
      let targetFileName = "";

      for (const ext of possibleExtensions) {
        const fileName = `${paddedPageNumber}${ext}`;
        if (files[fileName]) {
          targetFileName = fileName;
          break;
        }
      }

      // 해당 파일의 ref가 있으면 스크롤
      if (targetFileName && codeRefs.current[targetFileName]) {
        const targetElement = codeRefs.current[targetFileName];
        const rightSection = rightSectionRef.current;

        if (targetElement && rightSection) {
          // 해당 요소의 상단 위치 계산
          const elementTop = targetElement.offsetTop;
          // 부드럽게 스크롤
          rightSection.scrollTo({
            top: elementTop - 20, // 약간의 여백 추가
            behavior: "smooth",
          });
        }
      }
    }
  }, [currentPage, files]);

  const getLanguage = (fileName: string) => {
    if (fileName.endsWith(".js")) return "javascript";
    if (fileName.endsWith(".py")) return "python";
    if (fileName.endsWith(".ts")) return "typescript";
    if (fileName.endsWith(".tsx")) return "tsx";
    return "javascript";
  };

  const handleFileChange = (fileName: string, newContent: string) => {
    setFiles((prev) => ({
      ...prev,
      [fileName]: newContent,
    }));
  };

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-full h-10 bg-red-500">
        <Button variant="outline" onClick={() => navigate(-1)}>
          <ArrowLeftIcon className="w-4 h-4" />
          Back
        </Button>
        <div className="">
          현재 페이지: {currentPage} / {numPages}
        </div>
      </div>
      <div className="w-full h-full flex flex-row">
        <section className="w-1/2 h-full overflow-y-scroll">
          <Document
            file={`./section${id}/section${id}.pdf`}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {numPages &&
              Array.from({ length: numPages }, (_, index) => (
                <div
                  key={index}
                  ref={(el: HTMLDivElement | null) => {
                    pageRefs.current[index + 1] = el;
                  }}
                  data-page-number={index + 1}
                >
                  <Page pageNumber={index + 1} width={PAGE_WIDTH} />
                </div>
              ))}
          </Document>
        </section>
        <section
          ref={rightSectionRef}
          className="w-1/2 h-full overflow-y-scroll"
        >
          <div className="text-2xl font-bold mb-4">Section {id}</div>
          {Object.entries(files).map(([fileName, content]) => {
            const isEditing = editingFile === fileName;
            const language = getLanguage(fileName);

            return (
              <div
                key={fileName}
                ref={(el: HTMLDivElement | null) => {
                  codeRefs.current[fileName] = el;
                }}
                className="mb-8 border rounded-lg p-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{fileName}</h3>
                  <button
                    onClick={() => setEditingFile(isEditing ? null : fileName)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    {isEditing ? "미리보기" : "편집"}
                  </button>
                </div>

                {isEditing ? (
                  <textarea
                    value={content}
                    onChange={(e) => handleFileChange(fileName, e.target.value)}
                    className="w-full h-[80vh] p-4 font-mono text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{
                      fontFamily: 'Consolas, Monaco, "Courier New", monospace',
                      fontSize: "14px",
                      lineHeight: "1.5",
                      tabSize: 2,
                    }}
                    spellCheck={false}
                  />
                ) : (
                  <pre className="rounded-lg !m-0">
                    <code className={`language-${language}`}>{content}</code>
                  </pre>
                )}
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
