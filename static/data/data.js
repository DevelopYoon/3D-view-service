var APP_DATA = {
  "scenes": [
    {
      "id": "0-start",
      "name": "start",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 0.03852917541448164,
        "pitch": -0.08274491125028582,
        "fov": 1.510284771193917
      },
      "linkHotspots": [
        {
          "yaw": 0.12284188551632269,
          "pitch": 0.34752916977888226,
          "rotation": 0,
          "target": "1-enter"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.09931493277348125,
          "pitch": -0.37203240606425325,
          "title": "단국대학교",
          "text": "<font color=\"#e0e0e0\" face=\"Pretendard JP, Pretendard, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Noto Sans KR, Noto Sans CJK KR, NanumBarunGothic, Roboto, Segoe UI, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif, emoji\"><span style=\"font-size: 15px; background-color: rgb(28, 29, 31);\">단국대학교는 대한민국에 현존하는 대학 중 8.15 광복 이후 최초로 민족자본과 민족사학으로 설립된 4년제 정규 사립대학이다. 1947년 독립운동가 범정 장형 선생과 혜당 조희재 여사가 설립하였으며, 백범 김구를 비롯한 대한민국 임시정부 요인들의 후원이 있었다. 단국(檀國)이란 교명 역시 김구 선생의 영향으로 정해졌다</span></font><br>"
        }
      ]
    },
    {
      "id": "1-enter",
      "name": "enter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 0.05150722288000509,
        "pitch": 0.11732598154752338,
        "fov": 1.510284771193917
      },
      "linkHotspots": [
        {
          "yaw": -0.6883146321482609,
          "pitch": 0.14709782675196692,
          "rotation": 18.06415775814132,
          "target": "2-ict-parking"
        },
        {
          "yaw": 3.0800802427878775,
          "pitch": 0.15500725211417787,
          "rotation": 0,
          "target": "0-start"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ict-parking",
      "name": "ICT parking",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.08771927315592976,
          "pitch": 0.010884748194778027,
          "rotation": 0,
          "target": "5-sw_b1_hall-enter"
        },
        {
          "yaw": 2.1528876945015814,
          "pitch": 0.3261452569237413,
          "rotation": 0,
          "target": "1-enter"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.47460581687924375,
          "pitch": -0.03299415263989047,
          "title": "소프트웨어 ICT관",
          "text": "소프트웨어학과, 사이버보안학과 등 다양한 연구실과 강의실, 산학협력공간을 갖추고 있으며, 컴퓨터공학과, 통계데이터과학과 등의 학과는 서로 다른 건물에 위치해 있다."
        }
      ]
    },
    {
      "id": "3-sw_gs",
      "name": "sw_GS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 0.29246202839094515,
        "pitch": 0.6190180396930067,
        "fov": 1.510284771193917
      },
      "linkHotspots": [
        {
          "yaw": -2.7923356844099203,
          "pitch": 0.6041908518985561,
          "rotation": 0,
          "target": "4-ict-media-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-ict-media-center",
      "name": "ICT-media center",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 0.3380584214801754,
        "pitch": -0.14902477475816234,
        "fov": 1.510284771193917
      },
      "linkHotspots": [
        {
          "yaw": -1.8373697682436951,
          "pitch": 0.11066513905511499,
          "rotation": 12.566370614359176,
          "target": "7-sw_1_back-hall"
        },
        {
          "yaw": -0.01110652882946539,
          "pitch": 0.05869782470649909,
          "rotation": 0,
          "target": "8-sw_1_enter"
        },
        {
          "yaw": 1.2602748365018304,
          "pitch": 0.034184168970265105,
          "rotation": 0.7853981633974483,
          "target": "14-media_1_enter"
        },
        {
          "yaw": 2.1610820909926662,
          "pitch": -0.03199218939719728,
          "rotation": 0.7853981633974483,
          "target": "3-sw_gs"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.38291257405861856,
          "pitch": -0.14397363837552923,
          "title": "소프트웨어 ICT관",
          "text": "소프트웨어학과, 사이버보안학과 등 다양한 연구실과 강의실, 산학협력공간을 갖추고 있으며, 컴퓨터공학과, 통계데이터과학과 등의 학과는 서로 다른 건물에 위치해 있다."
        },
        {
          "yaw": 1.1221385102891652,
          "pitch": -0.3203493026180517,
          "title": "미디어센터",
          "text": "설명"
        }
      ]
    },
    {
      "id": "5-sw_b1_hall-enter",
      "name": "sw_b1_hall enter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": -0.6729470981410781,
        "pitch": 0.01161949155168962,
        "fov": 1.510284771193917
      },
      "linkHotspots": [
        {
          "yaw": -1.3879039106960782,
          "pitch": 0.07104255528160763,
          "rotation": 5.497787143782138,
          "target": "2-ict-parking"
        },
        {
          "yaw": 0.02556063189230784,
          "pitch": 0.07993205659992952,
          "rotation": 0,
          "target": "6-sw_b1_hall"
        },
        {
          "yaw": -2.6195944352718747,
          "pitch": 0.04238580893001043,
          "rotation": 0,
          "target": "7-sw_1_back-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-sw_b1_hall",
      "name": "sw_b1_hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 0.3454726928918266,
        "pitch": -0.11966737258092941,
        "fov": 1.510284771193917
      },
      "linkHotspots": [
        {
          "yaw": 1.2031650551509028,
          "pitch": 0.020082643668182243,
          "rotation": 7.0685834705770345,
          "target": "5-sw_b1_hall-enter"
        },
        {
          "yaw": -0.09810024942674289,
          "pitch": 0.11502103989045054,
          "rotation": 0,
          "target": "8-sw_1_enter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-sw_1_back-hall",
      "name": "sw_1_back hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": -0.03877107469418206,
        "pitch": -0.13752525255834946,
        "fov": 1.510284771193917
      },
      "linkHotspots": [
        {
          "yaw": 0.7185371188850311,
          "pitch": -0.045839552537927375,
          "rotation": 6.283185307179586,
          "target": "11-sw_2_end-hall"
        },
        {
          "yaw": 0.7062951834749569,
          "pitch": 0.11297095843772098,
          "rotation": 3.141592653589793,
          "target": "5-sw_b1_hall-enter"
        },
        {
          "yaw": -3.140262407265876,
          "pitch": 0.07880752823957415,
          "rotation": 0,
          "target": "8-sw_1_enter"
        },
        {
          "yaw": -2.388083300094518,
          "pitch": 0.14782813588571564,
          "rotation": 0.7853981633974483,
          "target": "4-ict-media-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-sw_1_enter",
      "name": "sw_1_enter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2733354178812215,
          "pitch": 0.052761413189308826,
          "rotation": 0,
          "target": "15-media_1_hall"
        },
        {
          "yaw": -2.58861961505915,
          "pitch": 0.5036070122475849,
          "rotation": 0,
          "target": "4-ict-media-center"
        },
        {
          "yaw": -1.1228233610829115,
          "pitch": -0.05555989523083582,
          "rotation": 0,
          "target": "9-sw_2_hall"
        },
        {
          "yaw": -1.126855754553187,
          "pitch": 0.05217478515053031,
          "rotation": 3.141592653589793,
          "target": "6-sw_b1_hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-sw_2_hall",
      "name": "sw_2_hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5397097013528942,
          "pitch": 0.029865747564830514,
          "rotation": 0,
          "target": "10-sw_2_side-hall"
        },
        {
          "yaw": -0.20580432351228417,
          "pitch": 0.08999283183714901,
          "rotation": 3.141592653589793,
          "target": "8-sw_1_enter"
        },
        {
          "yaw": -2.949829299453457,
          "pitch": 0.04860051114539132,
          "rotation": 0,
          "target": "17-media_2_hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-sw_2_side-hall",
      "name": "sw_2_side hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 2.21171982390209,
        "pitch": 0.011752498287128432,
        "fov": 1.510284771193917
      },
      "linkHotspots": [
        {
          "yaw": 2.8140577293766835,
          "pitch": 0.14656209508798668,
          "rotation": 0,
          "target": "12-sw_2_staracademy"
        },
        {
          "yaw": 1.2852837568796325,
          "pitch": 0.016487906187554913,
          "rotation": 0,
          "target": "11-sw_2_end-hall"
        },
        {
          "yaw": -1.8074413065274761,
          "pitch": 0.051141445374899064,
          "rotation": 0,
          "target": "9-sw_2_hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-sw_2_end-hall",
      "name": "sw_2_end hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 2.314143472690848,
        "pitch": -0.21004074019321806,
        "fov": 1.510284771193917
      },
      "linkHotspots": [
        {
          "yaw": 1.7525656975553359,
          "pitch": 0.040649981836152094,
          "rotation": 0,
          "target": "10-sw_2_side-hall"
        },
        {
          "yaw": -3.1206635139344012,
          "pitch": 0.10324538005495043,
          "rotation": 0.7853981633974483,
          "target": "13-sw_2_seminar"
        },
        {
          "yaw": -0.43120371568561566,
          "pitch": 0.2994833593422275,
          "rotation": 3.141592653589793,
          "target": "7-sw_1_back-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-sw_2_staracademy",
      "name": "sw_2_starAcademy",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4302354672829924,
          "pitch": 0.15969755622079163,
          "rotation": 0,
          "target": "10-sw_2_side-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.7706156565696762,
          "pitch": -0.049779159769400394,
          "title": "star Academy",
          "text": "강의실중 하나"
        }
      ]
    },
    {
      "id": "13-sw_2_seminar",
      "name": "sw_2_seminar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": -0.026929541049991457,
        "pitch": -0.06781176552342139,
        "fov": 1.510284771193917
      },
      "linkHotspots": [
        {
          "yaw": -2.9755590756705246,
          "pitch": 0.1062326160934326,
          "rotation": 0,
          "target": "11-sw_2_end-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2093198290166196,
          "pitch": -0.0916667974798333,
          "title": "상담학과 스터디룸",
          "text": "공부하는 곳"
        }
      ]
    },
    {
      "id": "14-media_1_enter",
      "name": "media_1_enter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": -0.8764015982662805,
        "pitch": -0.07570822314636416,
        "fov": 1.510284771193917
      },
      "linkHotspots": [
        {
          "yaw": -1.5016374244283206,
          "pitch": 0.23770592928926249,
          "rotation": 5.497787143782138,
          "target": "4-ict-media-center"
        },
        {
          "yaw": -0.36236275558340836,
          "pitch": 0.12113510816773498,
          "rotation": 0,
          "target": "15-media_1_hall"
        },
        {
          "yaw": 1.197613145799595,
          "pitch": 0.006440152778468544,
          "rotation": 0,
          "target": "16-media_2_stair"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-media_1_hall",
      "name": "media_1_hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 0.7282858626473843,
        "pitch": -0.08407514260121829,
        "fov": 1.510284771193917
      },
      "linkHotspots": [
        {
          "yaw": 0.11003993020556635,
          "pitch": 0.05011782856136726,
          "rotation": 0,
          "target": "14-media_1_enter"
        },
        {
          "yaw": 1.5815289536855008,
          "pitch": 0.015467777852576248,
          "rotation": 0.7853981633974483,
          "target": "8-sw_1_enter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-media_2_stair",
      "name": "media_2_stair",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": -1.538807263467568,
        "pitch": 0.00620205550506725,
        "fov": 1.510284771193917
      },
      "linkHotspots": [
        {
          "yaw": -2.3034525806086954,
          "pitch": 0.15805865530702867,
          "rotation": 3.141592653589793,
          "target": "14-media_1_enter"
        },
        {
          "yaw": 1.488336713572381,
          "pitch": 0.06421756439358006,
          "rotation": 0,
          "target": "17-media_2_hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-media_2_hall",
      "name": "media_2_hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": -0.5043989796289488,
        "pitch": -0.2538524908415276,
        "fov": 1.510284771193917
      },
      "linkHotspots": [
        {
          "yaw": 0.3628883267307934,
          "pitch": 0.020354771254393,
          "rotation": 0,
          "target": "16-media_2_stair"
        },
        {
          "yaw": 1.916973320633904,
          "pitch": 0.03256192244027645,
          "rotation": 0,
          "target": "9-sw_2_hall"
        },
        {
          "yaw": -2.5916413483049787,
          "pitch": 0.25082443512798136,
          "rotation": 3.141592653589793,
          "target": "15-media_1_hall"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
