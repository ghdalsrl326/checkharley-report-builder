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
      title: '총평 등급',
      name: 'evaluationGrade',
      type: 'string',
    },
    {
      title: '외부 상태 x/5',
      name: 'evaluationExterior',
      type: 'number',
      options: {
        layout: 'radio',
        list: [
          {title: '1', value: 1},
          {title: '2', value: 2},
          {title: '3', value: 3},
          {title: '4', value: 4},
          {title: '5', value: 5},
        ],
      },
    },
    {
      title: '소모품 x/5',
      name: 'evaluationExpendables',
      type: 'number',
      options: {
        layout: 'radio',
        list: [
          {title: '1', value: 1},
          {title: '2', value: 2},
          {title: '3', value: 3},
          {title: '4', value: 4},
          {title: '5', value: 5},
        ],
      },
    },
    {
      title: '전기장치 x/5',
      name: 'evaluationElectronics',
      type: 'number',
      options: {
        layout: 'radio',
        list: [
          {title: '1', value: 1},
          {title: '2', value: 2},
          {title: '3', value: 3},
          {title: '4', value: 4},
          {title: '5', value: 5},
        ],
      },
    },
    {
      title: '도장상태 x/5',
      name: 'evaluationPainting',
      type: 'number',
      options: {
        layout: 'radio',
        list: [
          {title: '1', value: 1},
          {title: '2', value: 2},
          {title: '3', value: 3},
          {title: '4', value: 4},
          {title: '5', value: 5},
        ],
      },
    },
    {
      title: '엔진/파워트레인 x/5',
      name: 'evaluationEngine',
      type: 'number',
      options: {
        layout: 'radio',
        list: [
          {title: '1', value: 1},
          {title: '2', value: 2},
          {title: '3', value: 3},
          {title: '4', value: 4},
          {title: '5', value: 5},
        ],
      },
    },
    {
      title: '폐지 증명서 이상 유무',
      name: 'abolitionCertComment',
      type: 'boolean',
      options: {
        list: [
          {title: '이상 없음', value: 'correct'},
          {title: '이상 있음', value: 'wrong'},
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
      name: 'transferCertwithStampComment',
      type: 'boolean',
      options: {
        list: [
          {title: '이상 없음', value: 'correct'},
          {title: '이상 있음', value: 'wrong'},
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
      name: 'sellerIdCardComment',
      type: 'string',
      options: {
        list: [
          {title: '완료', value: 'correct'},
          {title: '진행중', value: 'wrong'},
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
      name: 'keyCountComment',
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
      name: 'isEngineOilError',
      type: 'boolean',
      options: {
        list: [
          {title: '이상 없음', value: 'correct'},
          {title: '이상 있음', value: 'wrong'},
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
      name: 'isMissionOilError',
      type: 'boolean',
      options: {
        list: [
          {title: '이상 없음', value: 'correct'},
          {title: '이상 있음', value: 'wrong'},
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
      name: 'isPrimaryOilError',
      type: 'boolean',
      options: {
        list: [
          {title: '이상 없음', value: 'correct'},
          {title: '이상 있음', value: 'wrong'},
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
      name: 'isFrontBrakeOilError',
      type: 'boolean',
      options: {
        list: [
          {title: '이상 없음', value: 'correct'},
          {title: '이상 있음', value: 'wrong'},
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
      name: 'isRearBrakeOilError',
      type: 'boolean',
      options: {
        list: [
          {title: '이상 없음', value: 'correct'},
          {title: '이상 있음', value: 'wrong'},
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
      name: 'isFrontTireError',
      type: 'boolean',
      options: {
        list: [
          {title: '이상 없음', value: 'correct'},
          {title: '이상 있음', value: 'wrong'},
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
      name: 'isRearTireError',
      type: 'boolean',
      options: {
        list: [
          {title: '이상 없음', value: 'correct'},
          {title: '이상 있음', value: 'wrong'},
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
      name: 'isFrontBrakePadError',
      type: 'boolean',
      options: {
        list: [
          {title: '이상 없음', value: 'correct'},
          {title: '이상 있음', value: 'wrong'},
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
      name: 'isRearBrakePadError',
      type: 'boolean',
      options: {
        list: [
          {title: '이상 없음', value: 'correct'},
          {title: '이상 있음', value: 'wrong'},
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
      name: 'isFrontBrakeDiskError',
      type: 'boolean',
      options: {
        list: [
          {title: '이상 없음', value: 'correct'},
          {title: '이상 있음', value: 'wrong'},
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
      name: 'isRearBrakeDiskError',
      type: 'boolean',
      options: {
        list: [
          {title: '이상 없음', value: 'correct'},
          {title: '이상 있음', value: 'wrong'},
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
      name: 'isBeltTensionError',
      type: 'boolean',
      options: {
        list: [
          {title: '이상 없음', value: 'correct'},
          {title: '이상 있음', value: 'wrong'},
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
      name: 'isClutchLeverError',
      type: 'boolean',
      options: {
        list: [
          {title: '이상 없음', value: 'correct'},
          {title: '이상 있음', value: 'wrong'},
        ],
        layout: 'radio',
      },
    },
    {
      title: 'F 브레이크 레버 유격',
      name: 'frontBrakeMeasure',
      type: 'string',
    },
    {
      title: 'F 브레이크 레버 유격 이상 유무',
      name: 'isFrontBrakeError',
      type: 'boolean',
      options: {
        list: [
          {title: '이상 없음', value: 'correct'},
          {title: '이상 있음', value: 'wrong'},
        ],
        layout: 'radio',
      },
    },
    {
      title: 'R 브레이크 레버 유격',
      name: 'rearBrakeMeasure',
      type: 'string',
    },
    {
      title: 'R 브레이크 레버 유격 이상 유무',
      name: 'isRearBrakeError',
      type: 'boolean',
      options: {
        list: [
          {title: '이상 없음', value: 'correct'},
          {title: '이상 있음', value: 'wrong'},
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
      name: 'isSparkPlugError',
      type: 'boolean',
      options: {
        list: [
          {title: '이상 없음', value: 'correct'},
          {title: '이상 있음', value: 'wrong'},
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
      name: 'isInitialVoltageError',
      type: 'boolean',
      options: {
        list: [
          {title: '이상 없음', value: 'correct'},
          {title: '이상 있음', value: 'wrong'},
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
      name: 'isChargedVoltageError',
      type: 'boolean',
      options: {
        list: [
          {title: '이상 없음', value: 'correct'},
          {title: '이상 있음', value: 'wrong'},
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
      name: 'isEngineCooldownVoltageError',
      type: 'boolean',
      options: {
        list: [
          {title: '이상 없음', value: 'correct'},
          {title: '이상 있음', value: 'wrong'},
        ],
        layout: 'radio',
      },
    },
    {
      title: '배터리 육안 검사 이상 유무',
      name: 'isBatteryLooksError',
      type: 'boolean',
      options: {
        list: [
          {title: '이상 없음', value: 'correct'},
          {title: '이상 있음', value: 'wrong'},
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
            },
          ],
        },
      ],
    },
  ],
}
