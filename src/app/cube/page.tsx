import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Similarity API | Documentation',
  description: 'Free & open-source text similarity API',
}

export default function CubeWrapper() {
  return (
    <div className="h-screen relative z-1 flex flex-col items-center justify-center">
      <iframe
        style={{
          display: "block",
          marginTop: "15px",
          border: 0,
          width: "100%",
          height: "100%",
        }}
        src={`/cube/index.html`}
      ></iframe>
    </div>
  );
}
