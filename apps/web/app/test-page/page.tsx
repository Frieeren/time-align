"use client";

import { useState } from "react";
import { useAddPet, useFindPetsByStatus, useGetPetById } from "../../shared/api/endpoints/pet/pet";

export default function TestPage() {
  const [selectedPetId, setSelectedPetId] = useState<number | null>(null);

  // 상태별 펫 목록 조회
  const { data: pets, isLoading } = useFindPetsByStatus(
    { status: ["available"] },
    {
      query: {
        staleTime: 1000 * 60 * 5, // 5분
      },
    }
  );

  // 선택된 펫 상세 정보 조회
  const { data: selectedPet } = useGetPetById(selectedPetId ?? 0, {
    query: {
      enabled: !!selectedPetId,
    },
  });

  // 새 펫 추가 mutation
  const { mutate: addPet, isPending } = useAddPet();

  // 새 펫 추가 핸들러
  const handleAddPet = () => {
    addPet({
      data: {
        name: "새로운 펫",
        photoUrls: ["https://example.com/pet.jpg"],
        status: "available",
        category: {
          id: 1,
          name: "강아지",
        },
        tags: [
          {
            id: 1,
            name: "귀여움",
          },
        ],
      },
    });
  };

  if (isLoading) return <div>로딩 중...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">펫 스토어 테스트</h1>

      {/* 펫 추가 버튼 */}
      <button
        type="button"
        onClick={handleAddPet}
        disabled={isPending}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        {isPending ? "추가 중..." : "새 펫 추가"}
      </button>

      {/* 펫 목록 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pets?.map(pet => (
          <button
            key={pet.id}
            type="button"
            onClick={() => pet.id && setSelectedPetId(pet.id)}
            className="border p-4 rounded cursor-pointer hover:bg-gray-50 text-left w-full"
          >
            <h2 className="font-bold">{pet.name}</h2>
            <p>상태: {pet.status}</p>
          </button>
        ))}
      </div>

      {/* 선택된 펫 상세 정보 */}
      {selectedPet && (
        <div className="mt-8 border-t pt-4">
          <h2 className="text-xl font-bold mb-2">선택된 펫 상세 정보</h2>
          <pre>{JSON.stringify(selectedPet, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
