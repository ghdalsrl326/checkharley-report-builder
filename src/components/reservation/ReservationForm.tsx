"use client";
import { createReservation } from "@/service/reservation";
import { ChangeEvent, FormEvent, useState } from "react";

type Form = {
  name: string;
  contact: string;
  harleyModel: string;
  preferredDate: string;
};

const DEFAULT_DATA = {
  name: "",
  contact: "",
  harleyModel: "",
  preferredDate: "",
};

const ReservationForm = () => {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [privacyAgreement, setPrivacyAgreement] = useState<boolean>(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!privacyAgreement) {
      alert("개인정보 수집 및 이용동의에 동의해주세요.");
      return;
    }

    createReservation(form)
      .then(() => {
        setForm(DEFAULT_DATA);
        alert(
          "예약 정보가 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다."
        );
      })
      .catch(() => {
        alert("예약 정보 전송에 실패했습니다. 다시 시도해주세요.");
      });
  };

  return (
    <section className="rounded-md mx-auto">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              성함
            </label>
            <input
              name="name"
              type="text"
              value={form.name}
              placeholder="성함을 입력해주세요"
              onChange={onChange}
              className="p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              연락처
            </label>
            <input
              name="contact"
              type="text"
              value={form.contact}
              placeholder="연락처를 입력해주세요"
              onChange={onChange}
              className="p-2 w-full border rounded-md"
              required
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              구매를 고려중인 할리데이비슨
            </label>
            <input
              name="harleyModel"
              type="text"
              value={form.harleyModel}
              placeholder="판매글 또는 판매자 연락처 기재"
              onChange={onChange}
              className="p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              점검 희망일
            </label>
            <input
              name="preferredDate"
              type="date"
              value={form.preferredDate}
              placeholder="점검 희망일을 선택해주세요"
              onChange={onChange}
              className="p-2 w-full border rounded-md"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            개인정보 수집 및 이용동의 (필수)
          </label>
          <div className="text-sm bg-white text-gray-700 border rounded-md p-4">
            <p>
              체크할리는 개인정보보호법 등 관련 법률에 따라 개인정보 수집 시
              정보 주체에게 사전 고지하고 이에 대한 동의를 받습니다.
            </p>
            <br />
            <ul className="list-disc pl-5">
              <li>
                개인정보의 수집 및 이용 목적 : 체크할리 점검 예약하기 서비스
                이용
              </li>
              <li>
                수집하는 개인정보 항목 : 성함, 연락처, 이메일, 구매를 고려하는
                할리 데이비슨 판매글 또는 판매자 연락처, 점검 희망일
              </li>
              <li>개인정보 보유 및 이용 기간 : 동의일로부터 6개월</li>
            </ul>
            <br />
            <p>
              귀하는 동의를 거부할 권리가 있으나, 상기 사항에 동의하지 않으실
              경우 점검 예약하기 서비스 이용에 제한을 받으실 수 있습니다.
            </p>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="privacyAgreement"
              checked={privacyAgreement}
              onChange={(e) => setPrivacyAgreement(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="privacyAgreement" className="text-sm text-gray-700">
              개인정보 수집 및 이용에 동의합니다
            </label>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="px-4 py-2 w-fit bg-[#FF3C00] opacity-90 text-white"
          >
            {"제출하기"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ReservationForm;
