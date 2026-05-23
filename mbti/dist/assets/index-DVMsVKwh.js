(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();const p=[{id:1,prompt:"当你有一个周末空闲，你更喜欢",a:"外出参加聚会/活动",b:"独处或和少数亲密的人相处",dimension:"EI",weight:1.12,step:"EI",leftPole:"E",rightPole:"I"},{id:2,prompt:"你更倾向于关注",a:"当下的现实、具体事实",b:"未来的可能性、抽象想法",dimension:"SN",weight:1.22,step:"SN",leftPole:"S",rightPole:"N"},{id:3,prompt:"做决定时，你更看重",a:"逻辑、客观利弊",b:"个人感受、他人需求",dimension:"TF",weight:1.14,step:"TF",leftPole:"T",rightPole:"F"},{id:4,prompt:"对于计划，你更喜欢",a:"提前规划、确定安排",b:"灵活随性、随机应变",dimension:"JP",weight:1.21,step:"JP",leftPole:"J",rightPole:"P"},{id:5,prompt:"社交场合中，你通常",a:"主动开启话题，越聊越有精力",b:"被动回应，社交后需要独处恢复",dimension:"EI",weight:1.18,step:"EI",leftPole:"E",rightPole:"I"},{id:6,prompt:"你对新想法的态度是",a:"先看是否实用、落地",b:"先看是否有趣、有新意",dimension:"SN",weight:1.14,step:"SN",leftPole:"S",rightPole:"N"},{id:7,prompt:"评价他人时，你更优先",a:"能力、对错标准",b:"人品、相处感受",dimension:"TF",weight:1.02,step:"TF",leftPole:"T",rightPole:"F"},{id:8,prompt:"面对截止日期，你习惯",a:"尽早完成，避免拖延",b:"临近截止再高效完成",dimension:"JP",weight:1.28,step:"JP",leftPole:"J",rightPole:"P"},{id:9,prompt:"你获取能量的方式是",a:"与人互动交流",b:"安静独处思考",dimension:"EI",weight:1.05,step:"EI",leftPole:"E",rightPole:"I"},{id:10,prompt:"你更擅长记住",a:"细节、具体经历",b:"整体印象、模式规律",dimension:"SN",weight:.96,step:"SN",leftPole:"S",rightPole:"N"},{id:11,prompt:"冲突发生时，你倾向",a:"理性分析对错，直接解决",b:"顾及对方情绪，温和化解",dimension:"TF",weight:1.18,step:"TF",leftPole:"T",rightPole:"F"},{id:12,prompt:"生活上你更偏好",a:"规律、有序、有计划",b:"随性、自由、无束缚",dimension:"JP",weight:1.15,step:"JP",leftPole:"J",rightPole:"P"},{id:13,prompt:"你更容易被",a:"热闹、多人环境吸引",b:"安静、个人空间吸引",dimension:"EI",weight:.92,step:"EI",leftPole:"E",rightPole:"I"},{id:14,prompt:"学习新知识时，你喜欢",a:"一步步按流程学",b:"跳跃式联想、举一反三",dimension:"SN",weight:1.07,step:"SN",leftPole:"S",rightPole:"N"},{id:15,prompt:"做选择时，你更在意",a:"公平、原则、规则",b:"和谐、体谅、人情",dimension:"TF",weight:.95,step:"TF",leftPole:"T",rightPole:"F"},{id:16,prompt:"你对待任务的态度",a:"做完一件再开始下一件",b:"同时进行多个任务",dimension:"JP",weight:.94,step:"JP",leftPole:"J",rightPole:"P"},{id:17,prompt:"你更常",a:"先行动，后思考",b:"先思考，后行动",dimension:"EI",weight:1.08,step:"EI",leftPole:"E",rightPole:"I"},{id:18,prompt:"你更相信",a:"经验、亲身经历",b:"灵感、预感",dimension:"SN",weight:1.19,step:"SN",leftPole:"S",rightPole:"N"},{id:19,prompt:"你更容易",a:"客观看待问题，不带情绪",b:"代入情感，共情他人",dimension:"TF",weight:1.07,step:"TF",leftPole:"T",rightPole:"F"},{id:20,prompt:"你讨厌",a:"临时变动、不确定性",b:"死板规则、被约束",dimension:"JP",weight:1.08,step:"JP",leftPole:"J",rightPole:"P"},{id:21,prompt:"陌生人面前你通常",a:"大方健谈",b:"拘谨内敛",dimension:"EI",weight:1.15,step:"EI",leftPole:"E",rightPole:"I"},{id:22,prompt:"你看待事物",a:"关注表面、现状",b:"深挖背后、未来趋势",dimension:"SN",weight:1.03,step:"SN",leftPole:"S",rightPole:"N"},{id:23,prompt:"别人夸你时，你更认可",a:"理智、靠谱",b:"温柔、体贴",dimension:"TF",weight:.86,step:"TF",leftPole:"T",rightPole:"F"},{id:24,prompt:"旅行时你习惯",a:"做好详细行程攻略",b:"随性出发，边走边看",dimension:"JP",weight:1.19,step:"JP",leftPole:"J",rightPole:"P"},{id:25,prompt:"你更愿意",a:"分享想法，主动表达",b:"保留想法，内心思考",dimension:"EI",weight:.95,step:"EI",leftPole:"E",rightPole:"I"},{id:26,prompt:"你对创意的理解",a:"基于现实改良",b:"颠覆现有，大胆创新",dimension:"SN",weight:.88,step:"SN",leftPole:"S",rightPole:"N"},{id:27,prompt:"批评他人时，你倾向",a:"直接指出问题",b:"委婉顾及面子",dimension:"TF",weight:1.12,step:"TF",leftPole:"T",rightPole:"F"},{id:28,prompt:"房间/桌面你更喜欢",a:"整洁规整",b:"随意放松",dimension:"JP",weight:.87,step:"JP",leftPole:"J",rightPole:"P"},{id:29,prompt:"长时间独处你会",a:"感到无聊，想找人",b:"感到舒适，享受宁静",dimension:"EI",weight:1.02,step:"EI",leftPole:"E",rightPole:"I"},{id:30,prompt:"描述一件事，你习惯",a:"讲细节、过程",b:"讲重点、整体意义",dimension:"SN",weight:1.11,step:"SN",leftPole:"S",rightPole:"N"},{id:31,prompt:"团队合作中，你优先",a:"目标达成、效率",b:"氛围融洽、大家开心",dimension:"TF",weight:1,step:"TF",leftPole:"T",rightPole:"F"},{id:32,prompt:"你做决定通常",a:"快速果断",b:"反复权衡",dimension:"JP",weight:1.23,step:"JP",leftPole:"J",rightPole:"P"},{id:33,prompt:"聚会结束后你感觉",a:"精力充沛",b:"疲惫想休息",dimension:"EI",weight:1.2,step:"EI",leftPole:"E",rightPole:"I"},{id:34,prompt:"你更擅长",a:"实操、动手做事",b:"构想、脑力规划",dimension:"SN",weight:.82,step:"SN",leftPole:"S",rightPole:"N"},{id:35,prompt:"面对不公平，你",a:"直接指出对错",b:"优先安抚情绪",dimension:"TF",weight:1.15,step:"TF",leftPole:"T",rightPole:"F"},{id:36,prompt:"你喜欢的工作模式",a:"有明确期限和流程",b:"自由灵活无强制",dimension:"JP",weight:.91,step:"JP",leftPole:"J",rightPole:"P"},{id:37,prompt:"你更常主动联系别人",a:"是的",b:"很少",dimension:"EI",weight:.88,step:"EI",leftPole:"E",rightPole:"I"},{id:38,prompt:"你对理论的态度",a:"没用就不关注",b:"喜欢钻研抽象理论",dimension:"SN",weight:1.24,step:"SN",leftPole:"S",rightPole:"N"},{id:39,prompt:"你更在意",a:"道理是否正确",b:"感受是否舒服",dimension:"TF",weight:.9,step:"TF",leftPole:"T",rightPole:"F"},{id:40,prompt:"突发计划变动你会",a:"烦躁不安",b:"觉得新鲜有趣",dimension:"JP",weight:1.03,step:"JP",leftPole:"J",rightPole:"P"},{id:41,prompt:"你说话风格",a:"直接外放",b:"含蓄内敛",dimension:"EI",weight:1.1,step:"EI",leftPole:"E",rightPole:"I"},{id:42,prompt:"你看待未来",a:"基于现实预判",b:"充满想象和可能性",dimension:"SN",weight:1.05,step:"SN",leftPole:"S",rightPole:"N"},{id:43,prompt:"你更像",a:"理性派",b:"感性派",dimension:"TF",weight:1.09,step:"TF",leftPole:"T",rightPole:"F"},{id:44,prompt:"你喜欢提前定好",a:"安排、计划",b:"不做安排",dimension:"JP",weight:1.11,step:"JP",leftPole:"J",rightPole:"P"},{id:45,prompt:"你更喜欢",a:"群体活动",b:"一对一深度交流",dimension:"EI",weight:.98,step:"EI",leftPole:"E",rightPole:"I"},{id:46,prompt:"你处理信息",a:"接收具体事实",b:"联想多种可能性",dimension:"SN",weight:.91,step:"SN",leftPole:"S",rightPole:"N"},{id:47,prompt:"帮助别人时你",a:"给出理性解决方案",b:"给予情感安慰陪伴",dimension:"TF",weight:.83,step:"TF",leftPole:"T",rightPole:"F"},{id:48,prompt:"你对待时间",a:"守时，提前完成",b:"随性，卡点完成",dimension:"JP",weight:.82,step:"JP",leftPole:"J",rightPole:"P"},{id:49,prompt:"情绪低落时你会",a:"找人倾诉",b:"独自消化",dimension:"EI",weight:1.03,step:"EI",leftPole:"E",rightPole:"I"},{id:50,prompt:"你对细节",a:"敏感，注意细节",b:"不在意细节，抓大意",dimension:"SN",weight:1.13,step:"SN",leftPole:"S",rightPole:"N"},{id:51,prompt:"争论时你",a:"坚持逻辑和原则",b:"优先避免争吵",dimension:"TF",weight:1.16,step:"TF",leftPole:"T",rightPole:"F"},{id:52,prompt:"你习惯",a:"提前规划生活",b:"走一步看一步",dimension:"JP",weight:1.14,step:"JP",leftPole:"J",rightPole:"P"},{id:53,prompt:"你更在意外部评价",a:"是的，社交反馈",b:"内心自我认可",dimension:"EI",weight:.85,step:"EI",leftPole:"E",rightPole:"I"},{id:54,prompt:"你更相信",a:"眼见为实",b:"直觉预感",dimension:"SN",weight:.78,step:"SN",leftPole:"S",rightPole:"N"},{id:55,prompt:"你做决定时",a:"很少受情绪影响",b:"容易被情绪左右",dimension:"TF",weight:.97,step:"TF",leftPole:"T",rightPole:"F"},{id:56,prompt:"你喜欢秩序",a:"喜欢",b:"反感",dimension:"JP",weight:.77,step:"JP",leftPole:"J",rightPole:"P"},{id:57,prompt:"你在人群中",a:"存在感强",b:"安静低调",dimension:"EI",weight:1.14,step:"EI",leftPole:"E",rightPole:"I"},{id:58,prompt:"你思考问题",a:"线性、一步步",b:"发散、跳跃联想",dimension:"SN",weight:1.21,step:"SN",leftPole:"S",rightPole:"N"},{id:59,prompt:"你认为更重要的是",a:"公正",b:"仁慈",dimension:"TF",weight:1.1,step:"TF",leftPole:"T",rightPole:"F"},{id:60,prompt:"未完成的事会让你",a:"焦虑，想立刻做完",b:"无所谓，以后再说",dimension:"JP",weight:1.26,step:"JP",leftPole:"J",rightPole:"P"},{id:61,prompt:"你主动发起社交",a:"经常",b:"很少",dimension:"EI",weight:1.06,step:"EI",leftPole:"E",rightPole:"I"},{id:62,prompt:"你对新奇事物",a:"谨慎观望",b:"好奇尝试",dimension:"SN",weight:.85,step:"SN",leftPole:"S",rightPole:"N"},{id:63,prompt:"你更擅长",a:"分析推理",b:"共情理解",dimension:"TF",weight:.89,step:"TF",leftPole:"T",rightPole:"F"},{id:64,prompt:"规则对你来说",a:"必须遵守",b:"可以灵活变通",dimension:"JP",weight:.96,step:"JP",leftPole:"J",rightPole:"P"},{id:65,prompt:"你表达情绪",a:"外放明显",b:"隐藏内敛",dimension:"EI",weight:.9,step:"EI",leftPole:"E",rightPole:"I"},{id:66,prompt:"你看待问题",a:"立足当下",b:"着眼长远",dimension:"SN",weight:1,step:"SN",leftPole:"S",rightPole:"N"},{id:67,prompt:"别人求助你",a:"讲利弊给建议",b:"共情安慰为主",dimension:"TF",weight:1.04,step:"TF",leftPole:"T",rightPole:"F"},{id:68,prompt:"任务清单你会",a:"逐项完成划掉",b:"想到哪做到哪",dimension:"JP",weight:1.05,step:"JP",leftPole:"J",rightPole:"P"},{id:69,prompt:"热闹环境让你",a:"兴奋",b:"疲惫",dimension:"EI",weight:1.17,step:"EI",leftPole:"E",rightPole:"I"},{id:70,prompt:"你学习靠",a:"实践经验",b:"想象领悟",dimension:"SN",weight:1.16,step:"SN",leftPole:"S",rightPole:"N"},{id:71,prompt:"你容易忽略",a:"他人情绪",b:"客观事实",dimension:"TF",weight:1.13,step:"TF",leftPole:"T",rightPole:"F"},{id:72,prompt:"你喜欢生活",a:"有节奏",b:"无节奏",dimension:"JP",weight:.8,step:"JP",leftPole:"J",rightPole:"P"},{id:73,prompt:"你交朋友",a:"广而浅",b:"少而深",dimension:"EI",weight:1.01,step:"EI",leftPole:"E",rightPole:"I"},{id:74,prompt:"你更关注",a:"事物本身",b:"事物意义",dimension:"SN",weight:.93,step:"SN",leftPole:"S",rightPole:"N"},{id:75,prompt:"你决策时",a:"对事不对人",b:"对人不对事",dimension:"TF",weight:.92,step:"TF",leftPole:"T",rightPole:"F"},{id:76,prompt:"你讨厌拖延",a:"非常讨厌",b:"可以接受",dimension:"JP",weight:1.2,step:"JP",leftPole:"J",rightPole:"P"},{id:77,prompt:"你表达观点",a:"快速直接",b:"深思后再说",dimension:"EI",weight:.82,step:"EI",leftPole:"E",rightPole:"I"},{id:78,prompt:"你喜欢传统稳妥",a:"是的",b:"喜欢突破创新",dimension:"SN",weight:1.08,step:"SN",leftPole:"S",rightPole:"N"},{id:79,prompt:"你认为人情比规则重要",a:"是的",b:"不是",dimension:"TF",weight:1.06,step:"TF",leftPole:"T",rightPole:"F"},{id:80,prompt:"临时惊喜你",a:"不安",b:"开心",dimension:"JP",weight:.9,step:"JP",leftPole:"J",rightPole:"P"},{id:81,prompt:"你需要外界刺激",a:"多",b:"少",dimension:"EI",weight:1.09,step:"EI",leftPole:"E",rightPole:"I"},{id:82,prompt:"你描述未来",a:"现实可行",b:"天马行空",dimension:"SN",weight:.8,step:"SN",leftPole:"S",rightPole:"N"},{id:83,prompt:"你批评人时",a:"客观严厉",b:"温和委婉",dimension:"TF",weight:.84,step:"TF",leftPole:"T",rightPole:"F"},{id:84,prompt:"你做事有条理",a:"很强",b:"不强",dimension:"JP",weight:1.17,step:"JP",leftPole:"J",rightPole:"P"},{id:85,prompt:"你独处时效率更高",a:"是的",b:"不是",dimension:"EI",weight:.87,step:"EI",leftPole:"E",rightPole:"I"},{id:86,prompt:"你对概念",a:"务实理解",b:"抽象联想",dimension:"SN",weight:1.1,step:"SN",leftPole:"S",rightPole:"N"},{id:87,prompt:"你重视公平",a:"优先",b:"其次",dimension:"TF",weight:1.11,step:"TF",leftPole:"T",rightPole:"F"},{id:88,prompt:"你喜欢确定性",a:"喜欢",b:"不喜欢",dimension:"JP",weight:1.01,step:"JP",leftPole:"J",rightPole:"P"},{id:89,prompt:"你带动气氛",a:"擅长",b:"不擅长",dimension:"EI",weight:1.11,step:"EI",leftPole:"E",rightPole:"I"},{id:90,prompt:"你更看重",a:"实际成果",b:"灵感创意",dimension:"SN",weight:1.18,step:"SN",leftPole:"S",rightPole:"N"},{id:91,prompt:"你容易心软妥协",a:"是的",b:"不轻易妥协",dimension:"TF",weight:1.17,step:"TF",leftPole:"T",rightPole:"F"},{id:92,prompt:"你喜欢安排别人",a:"是的",b:"不喜欢",dimension:"JP",weight:1.13,step:"JP",leftPole:"J",rightPole:"P"},{id:93,prompt:"整体上你",a:"外向、主动、爱社交",b:"内向、内敛、爱独处",dimension:"EI",weight:1.16,step:"EI",leftPole:"E",rightPole:"I"}],b=new Map(p.map(e=>[e.id,e])),P=[{key:"EI",label:"词对题",subtitle:"精力获取",dimensionLabel:"E / I"},{key:"SN",label:"判断题",subtitle:"认知模式",dimensionLabel:"S / N"},{key:"TF",label:"描述题",subtitle:"决策模式",dimensionLabel:"T / F"},{key:"JP",label:"终测题",subtitle:"生活模式",dimensionLabel:"J / P"}],$=P.map(e=>e.key),I={EI:p.filter(e=>e.step==="EI").sort((e,t)=>e.id-t.id),SN:p.filter(e=>e.step==="SN").sort((e,t)=>e.id-t.id),TF:p.filter(e=>e.step==="TF").sort((e,t)=>e.id-t.id),JP:p.filter(e=>e.step==="JP").sort((e,t)=>e.id-t.id)},a=$.flatMap(e=>I[e].map(t=>t.id)),C={INTJ:{type:"INTJ",name:"建筑师型",aliases:["战略家","幕后智囊"],groupCode:"NT",groupName:"分析家（NT理性组）",coreTraits:"内向+直觉+思考+判断",description:"极具长远眼光和全局思维，擅长拆解复杂问题、搭建体系、布局未来。做事极度理性、自律、有原则，不喜欢无效社交和无意义内耗。习惯独立深度思考，对自我和他人标准极高。擅长预判风险、制定长期规划，是天生的战略决策者。",weaknesses:"过于高冷克制，不懂人情世故，容易过度完美主义，忽视自身情绪和他人感受。"},INTP:{type:"INTP",name:"逻辑学家型",aliases:["思想家","究极学者"],groupCode:"NT",groupName:"分析家（NT理性组）",coreTraits:"内向+直觉+思考+感知",description:"极致的逻辑思辨者，热爱钻研理论、拆解原理、探索未知。思维发散、脑洞极大，擅长抽象思考、举一反三，对一切事物抱有怀疑和探究心态。随性松弛，不喜欢刻板规则和束缚，更享受思考过程而非功利结果。",weaknesses:"执行力偏弱，容易拖延、思绪内耗，不擅长落地琐事，社交被动、略显疏离。"},ENTJ:{type:"ENTJ",name:"指挥官型",aliases:["领导者","统帅"],groupCode:"NT",groupName:"分析家（NT理性组）",coreTraits:"外向+直觉+思考+判断",description:"天生的领袖人格，自信果断、气场强大，擅长统筹团队、制定目标、推进落地。眼光长远、杀伐果断，逻辑清晰、目标感极强，擅长发现问题、整合资源、高效解决难题。热爱挑战、不甘平庸，极具掌控力和执行力。",weaknesses:"强势强势、过于强势，容易刚愎自用，忽视他人情绪，显得功利、不近人情。"},ENTP:{type:"ENTP",name:"辩论家型",aliases:["智辩者","创新鬼才"],groupCode:"NT",groupName:"分析家（NT理性组）",coreTraits:"外向+直觉+思考+感知",description:"思维敏捷、口才出众，擅长思辨、抬杠、创新脑洞。不喜欢循规蹈矩，擅长打破固有模式、发现新可能。社交灵活、反应极快，擅长多角度看待问题，创意十足、善于变通，是天生的创新者和谈判者。",weaknesses:"三分钟热度，容易虎头蛇尾，耐心不足，喜欢反驳他人，容易显得尖锐、浮躁。"},INFJ:{type:"INFJ",name:"咨询师型",aliases:["知己","治愈者","最稀有人格"],groupCode:"NF",groupName:"外交家（NF理想组）",coreTraits:"内向+直觉+情感+判断",description:"洞察力顶级，擅长读懂人心、看透本质，内心温柔且有坚定底线。拥有极强的共情能力和理想主义，追求真诚、纯粹、有意义的人生。做事沉稳自律、思虑周全，习惯默默付出、暗中成就他人，擅长长期深耕、自我沉淀。",weaknesses:"极度内耗、想太多，习惯性委屈自己、过度利他，不擅长表达自我需求。"},INFP:{type:"INFP",name:"调停者型",aliases:["治愈者","梦想家"],groupCode:"NF",groupName:"外交家（NF理想组）",coreTraits:"内向+直觉+情感+感知",description:"纯粹的理想主义者，内心柔软、善良通透，拥有丰富的精神世界和细腻的感知力。热爱自由、厌恶虚伪功利，追求自我价值和内心契合，擅长文字、艺术、创意类事物。待人温柔包容，极度共情、懂得换位思考。",weaknesses:"敏感玻璃心，逃避现实、抗压能力弱，执行力差，容易沉浸内耗、拖延摆烂。"},ENFJ:{type:"ENFJ",name:"教育家型",aliases:["主人公","引导者"],groupCode:"NF",groupName:"外交家（NF理想组）",coreTraits:"外向+直觉+情感+判断",description:"天生的温暖领导者，情商极高、善于共情、擅长带动他人、赋能他人。热心利他、真诚热忱，擅长洞察他人需求、调节氛围、统筹人际关系。有责任感、有格局，乐于帮助他人成长，追求和谐共赢。",weaknesses:"过度在意他人看法，容易过度付出、自我感动，喜欢掌控他人节奏，略显强势。"},ENFP:{type:"ENFP",name:"竞选者型",aliases:["快乐小狗","灵感达人"],groupCode:"NF",groupName:"外交家（NF理想组）",coreTraits:"外向+直觉+情感+感知",description:"热情开朗、元气满满，脑洞丰富、创意无限，擅长社交、自带感染力。热爱新鲜事物、向往自由，共情力极强，待人真诚温暖，擅长发现他人闪光点、活跃氛围。思维灵活、不受束缚，极具创造力和感染力。",weaknesses:"专注力差、容易三分钟热度，情绪波动大，想法太多落地太少，容易冲动决策。"},ISTJ:{type:"ISTJ",name:"物流师型",aliases:["严谨实干家","靠谱担当"],groupCode:"SJ",groupName:"守护者（SJ传统组）",coreTraits:"内向+实感+思考+判断",description:"极致靠谱、踏实稳重，遵守规则、坚守原则，做事严谨细致、一丝不苟。注重现实、尊重经验，擅长落地执行、统筹琐事、把控细节。自律守信、责任感极强，不浮躁、不投机，是团队和生活中最值得信赖的实干者。",weaknesses:"思维保守、不懂变通，过于固执刻板，抗拒新鲜事物和突发变动。"},ISFJ:{type:"ISFJ",name:"守卫者型",aliases:["温柔守护者","老好人"],groupCode:"SJ",groupName:"守护者（SJ传统组）",coreTraits:"内向+实感+情感+判断",description:"温柔体贴、细心顾家，极具责任心和奉献精神。擅长观察细节、记住他人喜好，习惯性默默付出、照顾身边人。踏实专一、低调隐忍，重视亲情友情、珍惜安稳生活，做事认真负责、极致靠谱。",weaknesses:"过度讨好、不懂拒绝，习惯性委屈自己，过于保守、不敢突破舒适区。"},ESTJ:{type:"ESTJ",name:"总经理型",aliases:["实干管理者","务实领袖"],groupCode:"SJ",groupName:"守护者（SJ传统组）",coreTraits:"外向+实感+思考+判断",description:"务实强势、执行力拉满，擅长落地管理、统筹事务、把控秩序。尊重规则、注重效率，目标明确、雷厉风行，擅长处理现实问题、整合资源、落地结果。责任感极强，做事干脆利落、不拖泥带水。",weaknesses:"强势专制、思想传统，不懂变通，过于看重结果，忽视人情与情绪。"},ESFJ:{type:"ESFJ",name:"执政官型",aliases:["社交暖王","人情高手"],groupCode:"SJ",groupName:"守护者（SJ传统组）",coreTraits:"外向+实感+情感+判断",description:"高情商、会处事，擅长社交、维系人际关系、照顾集体氛围。热心仗义、体贴周到，重视人情世故、遵守传统规则，乐于帮助他人、维护集体和谐。责任心强、踏实靠谱，是人群中的暖心担当。",weaknesses:"过度在意他人评价，容易随波逐流，害怕冲突、不敢坚持自我，略显世俗。"},ISTP:{type:"ISTP",name:"鉴赏家型",aliases:["冷静实干家","技术大佬"],groupCode:"SP",groupName:"探险家（SP艺术组）",coreTraits:"内向+实感+思考+感知",description:"冷静理智、观察力极强，擅长实操、动手能力顶级，擅长临场应变、解决突发问题。性格松弛、低调佛系，不爱废话、做事高效，逻辑清晰、擅长拆解技术和现实难题。热爱自由、讨厌束缚。",weaknesses:"性格冷淡疏离，不擅长表达情感，缺乏长期规划，随性散漫、容易摆烂。"},ISFP:{type:"ISFP",name:"探险家型",aliases:["艺术家","温柔小众者"],groupCode:"SP",groupName:"探险家（SP艺术组）",coreTraits:"内向+实感+情感+感知",description:"细腻温柔、审美极佳，感知力敏锐，擅长发现生活中的美好与细节。性格低调佛系、待人真诚，不争抢、不功利，热爱自由、随性洒脱。擅长艺术、手工、审美相关领域，活在当下、享受生活。",weaknesses:"极度敏感、内心脆弱，缺乏安全感，逃避压力，不擅长规划未来。"},ESTP:{type:"ESTP",name:"企业家型",aliases:["实干冒险家","社交达人"],groupCode:"SP",groupName:"探险家（SP艺术组）",coreTraits:"外向+实感+思考+感知",description:"自信洒脱、反应超快，擅长临场发挥、社交博弈、把握现实机遇。行动力极强、敢闯敢拼，不纠结、不内耗，擅长处理现实琐事、对接人脉、落地利益。热爱刺激、敢于冒险。",weaknesses:"目光短浅、容易冲动，缺乏耐心和长远规划，做事三分钟热度、略显浮躁。"},ESFP:{type:"ESFP",name:"表演者型",aliases:["快乐达人","气氛担当"],groupCode:"SP",groupName:"探险家（SP艺术组）",coreTraits:"外向+实感+情感+感知",description:"活泼开朗、热情外放，自带气场、擅长活跃气氛、带动他人情绪。观察力敏锐、懂人情、会共情，热爱生活、乐于分享，擅长社交、表现力极强。活在当下、乐观积极，极具感染力。",weaknesses:"专注力差、容易浮躁，害怕独处、耐不住寂寞，缺乏长远规划、容易冲动消费/决策。"}};function Q(e){return{result:e,profile:C[e.type]}}const x={A:2,a:1,mid:0,b:-1,B:-2},k={EI:"I",SN:"N",TF:"F",JP:"P"};function L(e){return e<=20?"轻微倾向":e<=40?"中等倾向":"强烈倾向"}function A(e){return e<=5?"该维度分差较小，说明你的这一组偏好更均衡，可根据情境灵活切换。":null}function O(e,t,r){return r===e?t:e}function q(e){if(Object.keys(e).length!==p.length)return null;const r={EI:{leftPole:"E",rightPole:"I",leftScore:0,rightScore:0},SN:{leftPole:"S",rightPole:"N",leftScore:0,rightScore:0},TF:{leftPole:"T",rightPole:"F",leftScore:0,rightScore:0},JP:{leftPole:"J",rightPole:"P",leftScore:0,rightScore:0}};for(const o of p){const s=e[o.id];if(!s)return null;const d=x[s],c=Math.abs(d)*o.weight,g=r[o.dimension];d>0&&(g.leftScore+=c),d<0&&(g.rightScore+=c)}const n=Object.entries(r).map(([o,s])=>{const d=s.leftScore-s.rightScore,c=Number(Math.abs(d).toFixed(2)),g=d>0?s.leftPole:d<0?s.rightPole:k[o];return{dimension:o,leftPole:s.leftPole,rightPole:s.rightPole,leftScore:Number(s.leftScore.toFixed(2)),rightScore:Number(s.rightScore.toFixed(2)),winner:g,loser:O(s.leftPole,s.rightPole,g),diff:c,strength:L(c),closeGapNote:A(c)}});return{type:n.map(o=>o.winner).join(""),dimensions:n}}const S="mbti-form-m-state",w={answers:{},currentQuestionId:1,result:null};function u(){try{const e=window.localStorage.getItem(S);if(!e)return w;const t=JSON.parse(e);return{answers:t.answers??{},currentQuestionId:t.currentQuestionId??1,result:t.result??null}}catch{return w}}function N(e){window.localStorage.setItem(S,JSON.stringify(e))}function M(e,t,r,n){const i=u();return i.answers[e]=t,i.currentQuestionId=r,i.result=n,N(i),i}function T(e){const t=u();return t.currentQuestionId=e,N(t),t}function B(e){const t=u();return t.result=e,N(t),t}function j(){return window.localStorage.removeItem(S),{...w}}const F=document.querySelector("#app");if(!F)throw new Error("App root not found");const m=F,R=[{value:"A",label:"非常像A"},{value:"a",label:"比较像A"},{value:"mid",label:"居中"},{value:"b",label:"比较像B"},{value:"B",label:"非常像B"}];let l=G(u());function G(e){const t=b.has(e.currentQuestionId)?e.currentQuestionId:a[0];return{answers:e.answers??{},currentQuestionId:t,result:e.result}}function f(){const e=a.indexOf(l.currentQuestionId);return e>=0?e:0}function E(){return b.get(a[f()])??p[0]}function J(e){var t;return((t=b.get(e))==null?void 0:t.step)??"EI"}function D(e){const t=I[e];return{answered:t.filter(n=>l.answers[n.id]).length,total:t.length}}function K(){return p.filter(e=>l.answers[e.id]).length}function H(e){const t=a[e];t&&(l.currentQuestionId=t,T(t),h())}function z(e){const t=E();l.answers[t.id]=e,M(t.id,e,t.id,l.result);const r=q(l.answers);if(r){l.result=r,B(r),_();return}const n=f(),i=Math.min(n+1,a.length-1);l.currentQuestionId=a[i],T(l.currentQuestionId),h()}function v(e,t){const r=P.findIndex(o=>o.key===e),n=P[r]??P[0],i=D(e);return`
    <section class="hero">
      <div class="hero__inner hero__inner--compact">
        <div class="topbar">
          <div class="topbar__main">
            <div class="topbar__title">MBTI性格测试</div>
            <div class="topbar__sub">${n.label} · 第 ${r+1} 步</div>
          </div>
          <div class="topbar__stats">${i.answered}/${i.total}</div>
        </div>
        <div class="stepper stepper--compact">
          ${P.map((o,s)=>`
                <div class="stepper__item ${o.key===e?"stepper__item--active":""}">
                  <div class="stepper__circle">${s+1}</div>
                </div>
              `).join("")}
        </div>
        <div class="progress progress--compact">
          <div class="progress__bar">
            <div class="progress__value" style="width: ${t/p.length*100}%"></div>
          </div>
          <div class="progress__meta">${t}/${p.length}</div>
        </div>
      </div>
    </section>
  `}function W(){const e=E(),t=l.answers[e.id],r=f(),n=J(e.id),i=P.find(s=>s.key===n)??P[0],o=r===0;return`
    ${v(n,K())}
    <main class="page">
      <section class="card question-card">
        <div class="question-card__meta">
          <span class="pill">原题号 ${e.id}</span>
          <span class="pill">${i.dimensionLabel}</span>
          <span class="pill">权重 ${e.weight.toFixed(2)}</span>
        </div>
        <h2 class="question-card__title">${e.prompt}</h2>
        <div class="options-grid">
          <div class="option option--a">
            <div class="option__tag">A</div>
            <div class="option__text">${e.a}</div>
          </div>
          <div class="option option--b">
            <div class="option__tag">B</div>
            <div class="option__text">${e.b}</div>
          </div>
        </div>
        <div class="answer-grid">
          ${R.map(s=>`
                <button class="answer-btn ${t===s.value?"answer-btn--selected":""}" data-answer="${s.value}">
                  ${s.label}
                </button>
              `).join("")}
        </div>
        <div class="question-card__actions">
          <button class="secondary-btn" data-action="prev" ${o?"disabled":""}>上一题</button>
          <button class="ghost-btn" data-action="restart">重新开始</button>
        </div>
      </section>

      <section class="footer-card">
        <h3>完成测试后，您将获得</h3>
        <div class="footer-card__columns">
          <ul>
            <li>获取您的4字母类型测试结果</li>
            <li>知悉您的偏好优势和类型描述</li>
            <li>了解您的沟通风格和学习习惯</li>
          </ul>
          <ul>
            <li>发现适合您性格类型的职业</li>
            <li>评估您与恋人的长期相处情况</li>
            <li>查看与您为同一性格的名人</li>
          </ul>
        </div>
      </section>
    </main>
  `}function _(){if(!l.result){h();return}const e=Q(l.result);m.innerHTML=`
    ${v(J(a[a.length-1]),p.length)}
    <main class="page">
      <section class="card result-hero">
        <p class="result-hero__eyebrow">测试完成</p>
        <h2 class="result-hero__type">${e.profile.type}</h2>
        <h3 class="result-hero__name">${e.profile.name}</h3>
        <p class="result-hero__group">${e.profile.groupName}</p>
        <div class="result-hero__aliases">${e.profile.aliases.join(" / ")}</div>
      </section>

      <section class="card result-summary">
        <h3>四维偏好摘要</h3>
        <div class="summary-grid">
          ${e.result.dimensions.map(t=>`
                <div class="summary-item">
                  <div class="summary-item__title">${t.leftPole} / ${t.rightPole}</div>
                  <div class="summary-item__value">${t.winner}</div>
                  <div class="summary-item__desc">${t.strength}</div>
                  ${t.closeGapNote?`<div class="summary-item__note">${t.closeGapNote}</div>`:""}
                </div>
              `).join("")}
        </div>
      </section>

      <section class="card result-detail">
        <h3>类型说明</h3>
        <div class="detail-row">
          <span class="detail-row__label">核心特质</span>
          <span>${e.profile.coreTraits}</span>
        </div>
        <div class="detail-block">
          <h4>详细说明</h4>
          <p>${e.profile.description}</p>
        </div>
        <div class="detail-block">
          <h4>短板提醒</h4>
          <p>${e.profile.weaknesses}</p>
        </div>
      </section>

      <section class="result-actions">
        <button class="secondary-btn" data-action="restart">重新测试</button>
      </section>
    </main>
  `,y()}function h(){m.innerHTML=W(),y()}function y(){var e;m.querySelectorAll("[data-answer]").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.answer;z(r)})}),(e=m.querySelector('[data-action="prev"]'))==null||e.addEventListener("click",()=>{const t=f();t>0&&H(t-1)}),m.querySelectorAll('[data-action="restart"]').forEach(t=>{t.addEventListener("click",()=>{l=j(),l.currentQuestionId=a[0],h()})})}l.result?_():h();
