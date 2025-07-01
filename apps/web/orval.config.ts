import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: {
      target: "../../docs/api-docs.json",
    },
    output: {
      mode: "tags-split", // API 태그별로 파일 분리
      clean: ["./shared/api/endpoints", "./shared/api/model"],
      target: "./shared/api/endpoints",
      schemas: "./shared/api/model", // 타입 정의 저장 위치
      client: "react-query", // TanStack Query 통합
      override: {
        query: {
          useQuery: true,
          useInfinite: true,
          useSuspenseQuery: true,
        },
        mutator: {
          path: "./shared/api/http.ts",
          name: "httpClient",
        },
      },
      mock: true,
    },
  },
  zod: {
    input: {
      target: "../../docs/api-docs.json",
    },
    output: {
      mode: "tags-split",
      client: "zod",
      target: "./shared/api/endpoints",
      fileExtension: ".zod.ts",
    },
  },
});
