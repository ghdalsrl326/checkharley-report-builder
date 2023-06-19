export default {
  title: 'Report',
  name: 'report',
  type: 'document',
  fields: [
    {
      title: '정비사',
      name: 'mechanic',
      type: 'string',
    },
    {
      title: '바이크 모델명',
      name: 'bikeModelName',
      type: 'string',
    },
    {
      title: '오토바이 번호',
      name: 'bikeNumber',
      type: 'string',
    },
    {
      title: '연식',
      name: 'modelYear',
      type: 'number',
    },
    {
      title: '주행거리',
      name: 'mileage',
      type: 'number',
    },
    {
      title: '판매 가격',
      name: 'price',
      type: 'number',
    },
    {
      title: '셀러 이름',
      name: 'sellerName',
      type: 'string',
    },
    {
      title: '셀러 연락처',
      name: 'sellerPhone',
      type: 'string',
    },
    {
      title: '바이크 위치',
      name: 'bikeLocation',
      type: 'string',
    },
    {
      title: '판매 게시글 캡처 이미지',
      name: 'salesArticleCaptureImage',
      type: 'image',
    },
    {
      title: '판매 게시글 주소',
      name: 'salesArticleURL',
      type: 'url',
    },
    {
      title: '총평 코멘트',
      name: 'evaluationComment',
      type: 'string',
    },
    {
      title: '폐지 증명서 이상 유무',
      name: 'abolitionCertCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: '폐지 증명서 이미지',
      name: 'abolitionCertImage',
      type: 'image',
    },
    {
      title: '자동차 양도 증명서 / 도장 이상 유무',
      name: 'transferCertwithStampCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: '자동차 양도 증명서 / 도장 이미지',
      name: 'transferCertwithStampImage',
      type: 'image',
    },
    {
      title: '셀러 신분증 사본 확보 여부',
      name: 'sellerIdCardCondition',
      type: 'string',
      options: {
        list: [
          {title: '완료', value: '완료'},
          {title: '진행중', value: '진행중'},
        ],
        layout: 'radio',
      },
    },
    {
      title: '셀러 신분증 이미지 확보 이미지',
      name: 'sellerIdCardImage',
      type: 'image',
    },
    {
      title: '열쇠 개수 (키팝/열쇠)',
      name: 'keyCountCondition',
      type: 'string',
    },
    {
      title: '열쇠 개수 (키팝/열쇠) 이미지',
      name: 'keyCountImage',
      type: 'image',
    },
    {
      title: '오일 코멘트',
      name: 'oilComment',
      type: 'string',
    },
    {
      title: '오일 이미지 리스트',
      name: 'oilImages',
      type: 'array',
      of: [
        {
          title: '오일 이미지',
          name: 'oilImage',
          type: 'image',
        },
      ],
    },
    {
      title: '엔진오일 양',
      name: 'engineOilMeasure',
      type: 'string',
    },
    {
      title: '엔진오일 이상 유무',
      name: 'engineOilCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
          {title: '확인필요', value: '확인필요'},
          {title: '해당없음', value: '해당없음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: '미션오일 양',
      name: 'missionOilMeasure',
      type: 'string',
    },
    {
      title: '미션오일 이상 유무',
      name: 'missionOilCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
          {title: '확인필요', value: '확인필요'},
          {title: '해당없음', value: '해당없음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: '프라이머리오일 양',
      name: 'primaryOilMeasure',
      type: 'string',
    },
    {
      title: '프라이머리오일 이상 유무',
      name: 'primaryOilCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
          {title: '확인필요', value: '확인필요'},
          {title: '해당없음', value: '해당없음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: 'F 브레이크 오일 양',
      name: 'frontBrakeOilMeasure',
      type: 'string',
    },
    {
      title: 'F 브레이크 오일 이상 유무',
      name: 'frontBrakeOilCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
          {title: '확인필요', value: '확인필요'},
          {title: '해당없음', value: '해당없음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: 'R 브레이크 오일 양',
      name: 'rearBrakeOilMeasure',
      type: 'string',
    },
    {
      title: 'R 브레이크 오일 이상 유무',
      name: 'rearBrakeOilCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
          {title: '확인필요', value: '확인필요'},
          {title: '해당없음', value: '해당없음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: '타이어 코멘트',
      name: 'tireComment',
      type: 'string',
    },
    {
      title: '타이어 이미지 리스트',
      name: 'tireImages',
      type: 'array',
      of: [
        {
          title: '오일 이미지',
          name: 'tireImage',
          type: 'image',
        },
      ],
    },
    {
      title: 'F 타이어 트레드 깊이',
      name: 'frontTireMeasure',
      type: 'string',
    },
    {
      title: 'F 타이어 트레드 이상 유무',
      name: 'frontTireCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
          {title: '확인필요', value: '확인필요'},
          {title: '해당없음', value: '해당없음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: 'R 타이어 트레드 깊이',
      name: 'rearTireMeasure',
      type: 'string',
    },
    {
      title: 'R 타이어 트레드 이상 유무',
      name: 'rearTireCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
          {title: '확인필요', value: '확인필요'},
          {title: '해당없음', value: '해당없음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: '브레이크 코멘트',
      name: 'brakeComment',
      type: 'string',
    },
    {
      title: '브레이크 이미지 리스트',
      name: 'brakeImages',
      type: 'array',
      of: [
        {
          title: '브레이크 이미지',
          name: 'brakeImage',
          type: 'image',
        },
      ],
    },
    {
      title: 'F 브레이크 패드',
      name: 'frontBrakePadMeasure',
      type: 'string',
    },
    {
      title: 'F 브레이크 패드 이상 유무',
      name: 'frontBrakePadCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
          {title: '확인필요', value: '확인필요'},
          {title: '해당없음', value: '해당없음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: 'R 브레이크 패드',
      name: 'rearBrakePadMeasure',
      type: 'string',
    },
    {
      title: 'R 브레이크 패드 이상 유무',
      name: 'rearBrakePadCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
          {title: '확인필요', value: '확인필요'},
          {title: '해당없음', value: '해당없음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: 'F 브레이크 디스크',
      name: 'frontBrakeDiskMeasure',
      type: 'string',
    },
    {
      title: 'F 브레이크 디스크 이상 유무',
      name: 'frontBrakeDiskCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
          {title: '확인필요', value: '확인필요'},
          {title: '해당없음', value: '해당없음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: 'R 브레이크 디스크',
      name: 'rearBrakeDiskMeasure',
      type: 'string',
    },
    {
      title: 'R 브레이크 디스크 이상 유무',
      name: 'rearBrakeDiskCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
          {title: '확인필요', value: '확인필요'},
          {title: '해당없음', value: '해당없음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: '기타 코멘트',
      name: 'extraComment',
      type: 'string',
    },
    {
      title: '기타 이미지 리스트',
      name: 'extraImages',
      type: 'array',
      of: [
        {
          title: '기타 이미지',
          name: 'extraImage',
          type: 'image',
        },
      ],
    },
    {
      title: '벨트 텐션',
      name: 'beltTensionMeasure',
      type: 'string',
    },
    {
      title: '벨트 텐션 이상 유무',
      name: 'beltTensionCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
          {title: '확인필요', value: '확인필요'},
          {title: '해당없음', value: '해당없음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: '클러치 레버 유격',
      name: 'clutchLeverMeasure',
      type: 'string',
    },
    {
      title: '클러치 레버 유격 이상 유무',
      name: 'clutchLeverCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
          {title: '확인필요', value: '확인필요'},
          {title: '해당없음', value: '해당없음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: 'F 브레이크 레버 유격',
      name: 'frontBrakeLeverMeasure',
      type: 'string',
    },
    {
      title: 'F 브레이크 레버 유격 이상 유무',
      name: 'frontBrakeLeverCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
          {title: '확인필요', value: '확인필요'},
          {title: '해당없음', value: '해당없음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: 'R 브레이크 레버 유격',
      name: 'rearBrakeLeverMeasure',
      type: 'string',
    },
    {
      title: 'R 브레이크 레버 유격 이상 유무',
      name: 'rearBrakeLeverCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
          {title: '확인필요', value: '확인필요'},
          {title: '해당없음', value: '해당없음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: '스파크 플러그',
      name: 'sparkPlugMeasure',
      type: 'string',
    },
    {
      title: '스파크 플러그 이상 유무',
      name: 'sparkPlugCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
          {title: '확인필요', value: '확인필요'},
          {title: '해당없음', value: '해당없음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: '충전 시스템 코멘트',
      name: 'chargingSystemComment',
      type: 'string',
    },
    {
      title: '충전 시스템 이미지 리스트',
      name: 'chargingSystemImages',
      type: 'array',
      of: [
        {
          title: '충전 시스템 이미지',
          name: 'chargingSystemImage',
          type: 'image',
        },
      ],
    },
    {
      title: '최초 배터리전압',
      name: 'initialVoltageMeasure',
      type: 'string',
    },
    {
      title: '최초 배터리전압 이상 유무',
      name: 'initialVoltageCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: '충전 전압',
      name: 'chargedVoltageMeasure',
      type: 'string',
    },
    {
      title: '충전 전압 이상 유무',
      name: 'chargedVoltageCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: '엔진 쿨다운(15분) 전압 회복 ',
      name: 'engineCooldownVoltageMeasure',
      type: 'string',
    },
    {
      title: '엔진 쿨다운(15분) 전압 회복 이상 유무',
      name: 'engineCooldownVoltageCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: '배터리 육안 검사 이상 유무',
      name: 'batteryLooksCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: '도장 도막 코멘트',
      name: 'paintingsComment',
      type: 'string',
    },
    {
      title: '도장 도막 이미지 리스트',
      name: 'paintingsImages',
      type: 'array',
      of: [
        {
          title: '도장 도막 이미지',
          name: 'paintingsImage',
          type: 'image',
        },
      ],
    },
    {
      title: 'F 휀다',
      name: 'frontFenderMeasure',
      type: 'string',
    },
    {
      title: 'F 휀다 이상 유무',
      name: 'frontFenderCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: 'R 휀다',
      name: 'rearFenderMeasure',
      type: 'string',
    },
    {
      title: 'R 휀다 이상 유무',
      name: 'rearFenderCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: '연료 탱크',
      name: 'fuelTankMeasure',
      type: 'string',
    },
    {
      title: '연료 탱크 이상 유무',
      name: 'fuelTankCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: '사이드 커버',
      name: 'sideCoverMeasure',
      type: 'string',
    },
    {
      title: '사이드 커버 이상 유무',
      name: 'sideCoverCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: '새들백',
      name: 'saddleBagMeasure',
      type: 'string',
    },
    {
      title: '새들백 이상 유무',
      name: 'saddleBagCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: '투어백',
      name: 'tourBagMeasure',
      type: 'string',
    },
    {
      title: '투어백 이상 유무',
      name: 'tourBagCondition',
      type: 'string',
      options: {
        list: [
          {title: '이상없음', value: '이상없음'},
          {title: '이상있음', value: '이상있음'},
        ],
        layout: 'radio',
      },
    },
    {
      title: '악세사리 ACC / 튜닝 코멘트',
      name: 'accTuningComment',
      type: 'string',
    },
    {
      title: '악세사리 ACC / 튜닝 리스트',
      name: 'accTuningList',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: '제품명',
              name: 'accTuningName',
              type: 'string',
            },
            {
              title: '이미지',
              name: 'accTuningImage',
              type: 'image',
            },
            {
              title: '위치',
              name: 'accTuningLocation',
              type: 'string',
            },
            {
              title: '브랜드',
              name: 'accTuningBrand',
              type: 'string',
            },
            {
              title: '상태',
              name: 'accTuningGrade',
              type: 'string',
              options: {
                list: [
                  {title: '상', value: '상'},
                  {title: '중', value: '중'},
                  {title: '하', value: '하'},
                ],
                layout: 'radio',
              },
            },
            {
              title: '악세사리 이상 유무',
              name: 'accTuningCondition',
              type: 'string',
              options: {
                list: [
                  {title: '이상없음', value: '이상없음'},
                  {title: '이상있음', value: '이상있음'},
                ],
                layout: 'radio',
              },
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'bikeModelName',
      subtitle: 'bikeNumber',
      media: 'salesArticleCaptureImage',
    },
  },
}
