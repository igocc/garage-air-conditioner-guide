# 车库空调页面全面内容缺口研究

研究日期：2026-09-21  
市场范围：美国住宅车库，重点是附建车库、长期占用的功能化车库，以及需要制冷、制热、除湿、空气质量或物品保护的场景  
用途：为当前 GitHub demo 页补充会改变用户选型、安装、配件、安全、维护或使用方式的内容。本文不是施工图、规范解释或当地许可意见。

## 研究边界与证据规则

- **已确认事实**：由 EPA、DOE、ENERGY STAR、FEMA、CPSC、OSHA、UL Solutions、U.S. Access Board、ICC 公布文本或设备厂商说明支持。它不等于每台设备、每个州或每个车库都相同。
- **合理推测**：技术机理和来源成立，但“这是普遍车库痛点”或“对某一具体车库一定发生”尚无统一数据。页面可以作为筛查问题，不能写成普遍结论。
- **当地要求无法统一验证**：许可、采用的规范版本、消防分隔、排水、冷媒、噪音和电气要求由州、市、县或 Authority Having Jurisdiction (AHJ) 决定。页面只能提示核实，不能给全国统一答案。
- Reddit、零售评论和 Amazon 适合发现用户语言，不用于证明安全、法规或性能。本轮新增项以一手机构材料为主；未使用论坛内容支持技术结论。
- 已先审阅 `INTERNET_PAIN_POINT_RESEARCH.md`、`RESEARCH.md`、`PRODUCT_RESEARCH.md`、`GARVEE_SERVICE_ACCESSORY_FACTS.md`、`PPT_COVERAGE_AUDIT.md` 和当前 `src`。野火烟雾、负压与回流、冷凝水、特殊窗型、断电重启、结构传声、售后可维修性、多联机共享能力、智能控制、沿海腐蚀、害虫封堵、维护可达性等已被页面覆盖，本文件不把它们重新包装成新发现。

## 最应优先新增的主题

| 优先级 | 新增主题 | 为什么会改变决策 | 证据状态 | 与当前页重叠 |
|---|---|---|---|---|
| P0 | 低温车库中的除湿机结霜与容量下降 | “买一台除湿机”不等于冬季或冷车库可用 | 已确认 | 当前只说可能需要除湿机，未说明低温边界 |
| P0 | 颗粒过滤不等于去除 VOC、汽油蒸气或 CO | 会改变空气净化配件和安全停机条件 | 已确认 | 当前区分空调与通风，但未完整解释过滤边界 |
| P0 | A2L / R-32 / R-454B 过渡与安装说明 | 会改变具体 SKU、安装工具、房间面积、标签和服务能力核对 | 已确认，具体要求随型号与 AHJ 变化 | 缺失 |
| P0 | 锂电池、e-bike 和工具电池充电区 | 空调不是电池消防措施；充电器、位置和看护方式才是关键 | 已确认，工具电池温度范围需按品牌手册 | 缺失 |
| P1 | 热泵热水器与车库 HVAC 的相互作用 | 它会冷却、除湿并占用空气体积，冬夏负荷方向不同 | 已确认 | 只有一句提示，尚未进入选型逻辑 |
| P1 | “长期占用”不等于合法的居住空间 | 会触发消防分隔、通风、许可和用途边界 | 已确认有通用规范原则；当地采用版本无法统一验证 | 缺失 |
| P1 | 低位车库或功能转换后的氡筛查 | 空调和普通空气净化不能解决氡 | 条件性已确认 | 缺失 |
| P1 | 湿车、融雪和洗车水属于液态水问题 | 大量液态水不能只靠空调潜热能力处理 | 机理已确认；车库发生频率为合理推测 | 仅覆盖湿度和冷凝水，未覆盖地面积水 |
| P1 | 洪水、风暴潮和地面积水下的设备高度 | 会改变室外机、室内机、断电装置和电气设备位置 | 已确认 | 缺失 |
| P1 | EV 预调温与“给整间车库空调”不是同一策略 | 车辆自身热管理通常更直接；避免为 EV 盲目放大车库冷量 | 已确认车辆预调温价值；整车库替代效果不可统一 | 仅覆盖 EV 充电负荷竞争 |
| P2 | 高顶、夹层和吊扇的真实作用 | 风扇改善体感或混合空气，但不增加制冷量 | 已确认 | 已有层高/分区，缺少“风扇不是容量”边界 |
| P2 | 除湿机的显热回送 | 除湿机可能让车库更暖，需与 AC 协同 | 已确认 | 缺失 |

## 1. 低温车库：除湿机可能结霜、反复化霜而不怎么除水

**状态：已确认事实。**

### 已确认的新痛点

ENERGY STAR 说明，当环境温度低于约 65°F 时，冷凝盘管可能结霜，导致压缩机反复启停而不有效除湿；低温车库应选择明确标注低温运行能力的产品。不同型号的最低运行温度和自动除霜逻辑不同，不能用“带除湿功能”代替具体温度范围核对。

### 为什么改变决策

- 冷湿季节往往正是储藏、工具防锈和霉菌控制最需要除湿的时候，但也是普通冷冻式除湿机性能下降的时段。
- 页面当前推荐湿度计和独立除湿机，却未提醒用户核对最低运行温度、低温容量、化霜方式和排水冻结风险。
- 这会改变配件推荐：用户可能需要低温额定机型、在较暖时段运行、先维持最低空间温度，或采用适合该温度范围的另一种湿度策略。

### 建议页面模块 / 位置

放在“Humidity / Door condensation”之后，增加一个 **Cold garage dehumidifier gate**；同时在 Complete Kit 的 dehumidifier 配件卡中增加低温核对项。

### 可安全直接使用的页面文案

> **A dehumidifier can lose capacity before the garage feels frozen.** Below about 65°F, frost can form on some refrigerated coils and trigger repeated defrost cycles. Check the exact model's minimum operating temperature, low-temperature capacity, drain-freeze risk, and auto-defrost behavior before treating it as winter moisture protection.

### 来源

- [ENERGY STAR, Dehumidifiers: operating temperature and frost behavior](https://www.energystar.gov/products/dehumidifiers)
- [ENERGY STAR, Dehumidifier testing and capacity](https://www.energystar.gov/products/dehumidifier_testing_and_capacity)
- [GE Appliances, model-family operating-condition example](https://products.geappliances.com/appliance/gea-support-search-content?contentId=54)

### 与现有内容是否重叠

**轻度重叠。** 当前页已经建议独立除湿机，但没有低温性能筛查。应扩展，不应重复“空调不能总替代除湿机”的原句。

## 2. 除湿机会把热量留在车库里，不能只按“每天多少品脱”购买

**状态：已确认事实。**

### 已确认的新痛点

ENERGY STAR 明确提醒，独立除湿机在除水时会让设备周围的空气稍微升温。除湿机把水蒸气凝结掉，同时压缩机和风机的电能最终也成为室内热量。因此高温高湿车库可能出现“湿度下降，但空调显热负荷上升”的系统交互。

### 为什么改变决策

- 只看品脱数会忽略温度副作用、噪音、排水和电路占用。
- 夏季车库可能需要 AC 与除湿机协调控制，而不是两个设备同时长时间抢目标。
- 温和潮湿季节，增加少量显热有时不是问题；极热天气则可能需要把这部分热量纳入负荷和运行费用。

### 建议页面模块 / 位置

放入“Build the complete climate system”中的 **Cooling + moisture interaction** 小图，并在 Advisor 结果中给出“AC only / dehumidifier only / coordinated pair”三种运行模式，而不是简单添加一个产品。

### 可安全直接使用的页面文案

> **A dehumidifier removes water but returns heat to the room.** In mild, damp weather that trade can be useful. In a hot garage, it can add to the cooling load. Compare temperature, humidity, operating range, noise, drainage, and circuit capacity as one system.

### 来源

- [ENERGY STAR, Dehumidifiers](https://www.energystar.gov/products/dehumidifiers)

### 与现有内容是否重叠

**无实质重叠。** 当前页把除湿机当作补充设备，尚未呈现热量回送及协同运行。

## 3. HEPA / MERV 解决颗粒，不代表能处理汽油蒸气、溶剂、VOC、CO 或氡

**状态：已确认事实。**

### 已确认的新痛点

EPA 说明，大多数空气净化器主要处理颗粒物；没有专门气相介质的设备不能去除气态污染物。即使有活性炭或其他吸附介质，也只对特定气体、一定浓度和一定寿命范围有效，不能假定能去除所有车库气体。EPA 还指出，普通住宅气相过滤不应被当作捕集一氧化碳的手段。臭氧发生器会主动引入肺刺激物，不应作为有人空间的“除味”方案。

### 为什么改变决策

- 用户可能把“HEPA”“活性炭”“除味”“空气净化”误认为对尾气、汽油、油漆、溶剂和焊接烟气同样有效。
- 这会改变配件推荐：颗粒空气净化器需要按 smoke CADR 或颗粒物目标选；化学品、尾气和工艺污染仍要源头控制、局部排风、储存隔离和停机条件。
- CO 报警器是检测和备用保护，不是通风设计；空气净化器也不是 CO 控制设备。

### 建议页面模块 / 位置

新增一个 **What each device cannot do** 对照表，四列分别为 AC / particle cleaner / gas-phase media / source exhaust。放在安全警示之前，并与产品推荐分开。

### 可安全直接使用的页面文案

> **Particle filtration is not gas control.** A HEPA or high-CADR cleaner can reduce airborne particles when correctly sized, but it does not make gasoline vapor, solvent vapor, carbon monoxide, radon, or welding fumes safe. Gas-phase media is pollutant-specific and has a finite service life. Control the source, ventilate for the process, and never use ozone as an occupied-space shortcut.

### 来源

- [EPA, Will air cleaners reduce health risks?](https://www.epa.gov/indoor-air-quality-iaq/will-air-cleaners-reduce-health-risks)
- [EPA, Improving indoor air quality](https://www.epa.gov/indoor-air-quality-iaq/improving-indoor-air-quality)
- [EPA, Ionizers and ozone-generating air cleaners](https://www.epa.gov/indoor-air-quality-iaq/what-are-ionizers-and-other-ozone-generating-air-cleaners)
- [EPA, Residential Air Cleaners: A Technical Summary](https://www.epa.gov/sites/default/files/2018-07/documents/residential_air_cleaners_-_a_technical_summary_3rd_edition.pdf)

### 与现有内容是否重叠

**深化现有边界。** 页面已说空调不能替代通风和空气净化，但尚未告诉用户“净化器也不能替代气态污染控制”。

## 4. MERV 13 不是可以直接塞进任何设备的通用升级

**状态：已确认事实。**

### 已确认的新痛点

EPA 在野火和过滤指南中建议使用系统能承受的 MERV 13 或更高等级过滤，但明确要求先确认风机和滤槽是否兼容。过滤器尺寸、密封旁通和压降共同决定实际效果。典型无管道室内机的可洗网滤不能自动等同于 MERV 13 或有已知 smoke CADR 的空气净化器。

### 为什么改变决策

- 过高阻力可能降低风量和设备表现；不合尺寸的过滤器会旁通。
- 用户不能把一个炉用 MERV 滤网临时贴在 mini-split 回风口上就当作合规升级。
- 车库空气净化配件应按独立设备的 CADR、噪音和空间布置选择，或按具体 HVAC 厂商允许的过滤方案执行。

### 建议页面模块 / 位置

与 Smoke Mode 合并为 **Filter fit, airflow and CADR** 折叠卡；避免再添加一张重复的野火痛点卡。

### 可安全直接使用的页面文案

> **Use the highest-efficiency filter the equipment can actually support.** Filter rating, pressure drop, fit, bypass, fan runtime, and replacement condition all matter. Do not improvise a high-MERV filter on a ductless head unless the manufacturer provides an approved path; use a correctly sized portable air cleaner when separate particle control is needed.

### 来源

- [EPA, Wildfires and Indoor Air Quality](https://www.epa.gov/emergencies-iaq/wildfires-and-indoor-air-quality-iaq)
- [EPA, Indoor Air Filtration](https://www.epa.gov/wildfires/indoor-air-filtration)
- [EPA, Best Practices Guide for Wildland Fire Smoke Events](https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P101HCVK.txt)

### 与现有内容是否重叠

**中度重叠。** Smoke Mode 已存在，但过滤器压降、旁通和 mini-split 兼容性没有被操作化。

## 5. A2L / R-32 / R-454B 过渡：冷媒名称会改变安装和服务核对

**状态：已确认事实；具体安装要求随设备标签、厂商说明和当地采用的规范而变化。**

### 已确认的新痛点

EPA 的 HFC Technology Transitions Program 推动车载以外的住宅和轻商空调转向较低 GWP 冷媒。R-32 与 R-454B 被列为 A2L，即较低可燃性等级。EPA 明确说明，A2L 冷媒不能用于未按其设计的系统。UL Solutions 的 A2L 安装检查表强调：最终合规由当地 Building Code Official / AHJ 判断，并依赖设备认证、标签和厂商安装说明。某些系统会涉及房间最小面积、现场充注记录、泄漏缓解或特定部件要求，不能从“R-32”三个字符推导出一套通用做法。

### 为什么改变决策

- 2025 之后的新旧库存和不同冷媒机型可能并存，用户不能把室内机、室外机、接头、工具或冷媒混搭。
- 安装商是否具备该型号、该冷媒和相关检测工具的能力，会直接影响可安装性和售后。
- 页面如果只写“抽真空、检漏”已不够，应要求核对 refrigerant type、matched system、charge、room-area restrictions、labels、approved tools 和 local adoption。

### 建议页面模块 / 位置

放在 Installation concept 的 **installer qualification gate**，并在具体 mini-split 产品卡增加冷媒类型和“read model-specific A2L instructions”字段。不要把 A2L 当作营销优点或恐吓标签。

### 可安全直接使用的页面文案

> **The refrigerant is part of the installation decision.** New lower-GWP systems may use A2L refrigerants such as R-32 or R-454B. Never mix components or retrofit a refrigerant into equipment that was not designed for it. Confirm the matched system, labels, charge, room-area limits, approved tools, leak-mitigation requirements, and the code edition adopted by the local authority.

### 来源

- [EPA, Technology Transitions Program](https://www.epa.gov/hfcs/technology-transitions-program)
- [EPA, Frequently Asked Questions on the HFC phasedown](https://www.epa.gov/hfcs/frequent-questions-phasedown-hydrofluorocarbons)
- [EPA, Substitutes in Residential and Light Commercial Air Conditioning and Heat Pumps](https://www.epa.gov/snap/substitutes-residential-and-light-commercial-air-conditioning-and-heat-pumps)
- [UL Solutions, A2L HVAC installation and inspection checklists](https://www.ul.com/thecodeauthority/knowledge/hvac-system-installation-and-inspection-support-checklists)

### 与现有内容是否重叠

**缺失。** 当前页只笼统提到冷媒管、抽真空和专业安装。

## 6. Section 608 与“DIY-ready”不是同一个概念

**状态：已确认联邦要求；许可、执照和电气要求仍由当地决定。**

### 已确认的新痛点

EPA 说明，只要安装、维护或维修活动可以合理预期会破坏固定式空调的冷媒回路完整性，就需要 Section 608 技术员认证。EPA 的问答明确把连接或断开软管和预充冷媒管、加减冷媒、切割冷媒管等列入范围。购买预充设备本身不等于购买者获得了进行所有冷媒工作的资格。

### 为什么改变决策

- “DIY kit”“pre-charged”可能只描述产品形态，不能自动回答冷媒连接、检漏、充注、电气、许可和保修责任。
- 安装服务页面应按工作类型拆分：用户准备、普通建筑穿孔、电气、冷媒回路、启动调试和最终验收。
- 对快接式机型也应核对具体说明，而不是宣称一律无需认证或一律必须做传统扩口。

### 建议页面模块 / 位置

在 Installation Service 的 responsibility matrix 中加一行 **Refrigerant-circuit work**，显示“EPA-certified technician when the work can open or disturb the circuit”；许可和执照另列为 local/AHJ。

### 可安全直接使用的页面文案

> **“Pre-charged” does not settle the labor boundary.** EPA technician certification is required when the work can reasonably be expected to open or disturb the stationary refrigerant circuit. Separate homeowner preparation from refrigerant work, electrical work, permits, commissioning, and warranty documentation before comparing installation quotes.

### 来源

- [EPA, Refrigerant Management Program Q&A for Section 608 technicians](https://www.epa.gov/section608/epas-refrigerant-management-program-questions-and-answers-section-608-certified)
- [EPA, Section 608 technician certification](https://www.epa.gov/section608/section-608-technician-certification-0)

### 与现有内容是否重叠

**轻度重叠。** 当前 FAQ 提到 conventional line sets 可能涉及冷媒和许可，但没有把工作边界做成用户可执行的报价核对项。

## 7. 锂电池充电区：空调不能替代正确充电器、看护和召回检查

**状态：已确认事实。e-bike / e-scooter 有明确 CPSC 指引；工具电池的温度边界以品牌手册为准。**

### 已确认的新痛点

CPSC 建议 e-bike、e-scooter 等 micromobility 产品只使用配套充电器和认可的替换电池，充电时人在场，不在睡眠时充电，充满后按说明断开，不使用被非合格人员改装或由回收电芯重组的电池。CPSC 的电池资料也记录了消费电池和电动工具充电器在使用、储存及充电阶段的过热、火灾、触电和爆裂风险。工具电池的允许充电温度是型号专属信息；例如某 Makita 电池资料给出 50°F 至 104°F 的充电范围，这不能推广为所有品牌通用数字。

### 为什么改变决策

- 把车库维持在“舒适温度”不能纠正错误充电器、损坏电池、召回产品、无人看护或靠近可燃物的问题。
- 充电架不应放在 AC 冷凝水、湿车滴水、直射热源、火花作业、燃油和溶剂旁边。
- 规划空调、电路和收纳时，应把 e-bike / 工具电池充电台当作独立安全区，而不是普通插座负荷。

### 建议页面模块 / 位置

在 workshop、auto/detailing、storage 三个场景中增加 **Battery charging zone** stop card；Complete Kit 可推荐“非商品化核对清单”，不要把普通烟雾报警器、风扇或空调包装成锂电消防解决方案。

### 可安全直接使用的页面文案

> **Cooling is not battery-fire protection.** Use the supplied or manufacturer-approved charger, follow the battery's charging-temperature limits, stay present while micromobility products charge, and stop using damaged, recalled, modified, or repurposed packs. Keep charging away from water, sparks, fuels, solvents, and blocked exits.

### 来源

- [CPSC, Micromobility Battery Charging Safety](https://www.cpsc.gov/node/65775)
- [CPSC, Warning on universal micromobility chargers](https://www.cpsc.gov/Newsroom/News-Releases/2024/CPSC-Urges-Consumers-to-Not-Buy-or-Use-Universal-Chargers-with-Micromobility-Products-Due-to-Fire-Hazard)
- [CPSC, Batteries topic page](https://www.cpsc.gov/Regulations-Laws--Standards/Voluntary-Standards/Topics/Batteries)
- [Makita, example lithium-ion battery charging-temperature instructions](https://cdn.makitatools.com/apps/cms/doc/prod/Lit/0c4c6f0a-77aa-4a3c-bf5c-9a85c931c4ea_Lithiumi-Ion_Battery_BL0715.pdf)

### 与现有内容是否重叠

**缺失。** 当前页只说 EV charger、焊机和压缩机可能争用电力，没有电池充电安全区。

## 8. EV 电池预调温通常由车辆完成，不能直接推导出“车库越冷越要买大空调”

**状态：车辆预调温价值已确认；整间车库空调对具体车辆寿命和充电速度的收益无法统一验证。**

### 已确认的新痛点

DOE 资料说明，许多现代纯电动车可在仍连接电网时对乘员舱和电池进行预调温，从电网获取预调温能量。DOE/AFDC 也强调电池温度限制、车辆热管理和充电设备运行范围是型号专属。车辆高压电池通常自带热管理与保护系统。

### 为什么改变决策

- 用户可能把“保护 EV 电池”当作给整个车库长期恒温的理由，但页面不能替代车辆厂商的储存和充电说明。
- 更合理的决策顺序是：核对车辆预调温、插电策略和充电设备温度范围，再决定车库 HVAC 是否还为人、物品、管线或其他设备提供独立价值。
- EVSE 仍需要单独的电路、负荷、碰撞保护、电缆和通道规划。

### 建议页面模块 / 位置

放在 auto/detailing 场景的 **EV owner reality check**；不要放进 AC 产品卖点。

### 可安全直接使用的页面文案

> **Condition the vehicle first, then justify conditioning the whole garage.** Many EVs can precondition the cabin and battery while plugged in. Check the vehicle manual, charger operating range, and utility load plan before sizing garage HVAC around battery protection. The garage system should still earn its place through human comfort, moisture control, plumbing protection, or other documented needs.

### 来源

- [DOE, Impact of Cold Ambient Temperatures and Extreme Conditions on Electric Vehicles](https://www.energy.gov/sites/default/files/2024-10/Impact_of_Cold_Ambient_Temperature_on_BEV_Performance_v15_TechEditFinal_12Sep2024__0.pdf)
- [DOE, Winterizing Your Electric Vehicle](https://www.energy.gov/articles/winterizing-your-electric-vehicle)
- [Alternative Fuels Data Center, EV maintenance and safety](https://afdc.energy.gov/vehicles/electric-maintenance)
- [Alternative Fuels Data Center, charging electric vehicles at home](https://afdc.energy.gov/fuels/electricity-charging-home)

### 与现有内容是否重叠

**轻度重叠。** 现有 electrical-collision 卡只讨论容量与回路竞争，未处理“是否值得为空间整体恒温”的认知误区。

## 9. 热泵热水器会成为车库里的第二台热泵，并改变夏冬负荷

**状态：已确认事实。**

### 已确认的新痛点

ENERGY STAR 说明，一体式热泵热水器从周围空气取热并排出更冷、更干的空气。许多机型要求约 450 或 700 立方英尺自由空气体积或按说明进行通风，并需要排放冷凝水。其风机和压缩机会产生噪音。温暖季节这可能给车库带来少量“免费”冷却和除湿；寒冷季节则可能增加车库供热需求或更频繁进入电阻加热，具体取决于机型、温度和通风布置。

### 为什么改变决策

- 同一个车库内的 AC、热泵热水器、除湿机和排风设备会互相改变空气温度、湿度、压力和电力负荷。
- 不能把 HPWH 当作房间负荷意义上的空调；也不能忽略它的进排风空间、滤网、冷凝水和服务净空。
- ENERGY STAR 明确警告，不应只把 HPWH 的进气或排气单独接到室外，因为可能造成压力不平衡；不得通过车库与住宅之间的风管把车库污染物带入居住区。

### 建议页面模块 / 位置

把当前 supporting system 的一句 HPWH 提示升级成 **Shared garage heat map**，显示季节、热量方向、冷凝水、噪音和空间体积五个维度。

### 可安全直接使用的页面文案

> **A heat-pump water heater changes the room around it.** It pulls heat from garage air and exhausts cooler, drier air, while adding fan noise, condensate, airflow, and service-clearance needs. In warm weather that interaction may help; in cold weather it can add to the space-heating load. Follow the exact water-heater airflow and ducting instructions before sizing garage HVAC.

### 来源

- [ENERGY STAR, Heat Pump Water Heater Design Considerations](https://www.energystar.gov/partner-resources/residential_new/educational_resources/sup_program_guidance/heat_pump_water_heater_guide/design_considerations)
- [ENERGY STAR, Heat Pump Water Heater Installation Best Practices](https://www.energystar.gov/partner-resources/residential_new/educational_resources/sup_program_guidance/heat_pump_water_heater_guide/installation_best_practices)

### 与现有内容是否重叠

**中度重叠。** 当前 `supportingSystems` 已有 HPWH 卡，但缺少空间体积、压力、季节负荷、冷凝水和噪音的完整决策逻辑。

## 10. 长期办公、健身或影音使用，不自动把车库变成合法“居住空间”

**状态：已确认有通用消防与机械分隔原则；项目是否需要许可、是否允许改变用途以及采用哪一版规范无法全国统一验证。**

### 已确认的新痛点

ICC 的住宅规范文本包含住宅与私人车库之间的开口、穿透和防火分隔要求，并禁止私人车库直接开向睡眠房间。机械规范也禁止从车库抽取住宅供暖或空调系统的回风。EPA Indoor airPLUS 要求保护 garage-to-house 空气边界。安装独立 mini-split 只解决热舒适，不会自动解决用途、消防分隔、出口、通风、烟雾 / CO 探测或当地许可问题。

### 为什么改变决策

- 用户可能把“办公室 / 健身 / 影音”与“合法卧室 / ADU / 居住空间”混为一谈。
- 对保留车辆、汽油、溶剂或工作工艺的车库，长期占用的污染控制要求与单纯温控不同。
- 页面应明确：舒适升级和用途转换是两条工作流，后者必须先问当地建筑部门或 AHJ。

### 建议页面模块 / 位置

在八大场景入口前增加 **Comfort use vs. occupancy conversion** 双路径选择；在 My Garage Plan 输出中把“local use/permit check”列为 stop condition，而不是安装报价中的小字。

### 可安全直接使用的页面文案

> **Comfort does not change the legal use of the garage.** A dedicated AC can improve an office, gym, or studio, but it does not by itself satisfy fire separation, ventilation, egress, sleeping-room, electrical, or change-of-use requirements. If the project creates living or sleeping space, verify the locally adopted code and permit path before equipment selection.

### 来源

- [ICC, 2021 IRC Chapter 3: dwelling-garage opening and separation provisions](https://codes.iccsafe.org/content/IRC2021P1/chapter-3-building-planning)
- [ICC, 2024 IMC Chapter 6: return-air restrictions](https://codes.iccsafe.org/content/IMC2024V2.1/chapter-6-duct-systems)
- [EPA Indoor airPLUS, benefits and attached-garage protection](https://www.epa.gov/indoorairplus/benefits-and-features-indoor-airplus-homes)

### 与现有内容是否重叠

**缺失。** 页面有 rental/HOA 场景和独立 HVAC 提醒，但没有清楚区分舒适使用与用途转换。

## 11. 功能转换后，氡筛查可能成为比空调更早的步骤

**状态：条件性已确认；并非所有车库都必须检测。**

### 已确认的新痛点

EPA 建议在住宅最低的长期有人层测试氡；如果居住模式改变，开始经常使用更低的一层，应在该层重新测试。普通颗粒空气净化器不能去除氡。对于地面或半地下车库改成长期办公室、健身或娱乐空间的项目，是否需要测试取决于它是否成为最低的规律占用空间、当地氡潜势、楼板和地基条件，以及州 / 地方要求。

### 为什么改变决策

- 空调可能让用户在原本不长期停留的低位空间每天停留数小时，从而改变暴露情景。
- 氡问题不能通过把 mini-split 开大、加 HEPA 或普通除味滤芯解决。
- 测试通常应在装修密封和长期使用前进入项目清单，以免后续缓解更困难。

### 建议页面模块 / 位置

仅在“lowest regularly occupied level / below-grade or slab-adjacent”条件触发时显示，不要给所有用户制造无差别警报。归入 **Before you finish the walls** 清单。

### 可安全直接使用的页面文案

> **If the garage becomes the home's lowest regularly occupied level, revisit radon testing.** EPA recommends retesting when living patterns move to a lower level. Air conditioning and ordinary particle filtration do not control radon; use the state radon program or a qualified provider for testing and mitigation guidance.

### 来源

- [EPA, How often should I test or retest my home for radon?](https://www.epa.gov/radon/how-often-should-i-testretest-my-home-radon)
- [EPA, Remodeling your home and indoor air quality](https://www.epa.gov/indoor-air-quality-iaq/remodeling-your-home-and-indoor-air-quality)
- [EPA, Air-cleaner health-risk limits](https://www.epa.gov/indoor-air-quality-iaq/will-air-cleaners-reduce-health-risks)

### 与现有内容是否重叠

**缺失。**

## 12. 湿车、融雪和洗车水是液态水管理，不只是相对湿度

**状态：水分控制机理已确认；“某用户每天带入多少水”无法统一验证。**

### 已确认的新痛点

EPA 将水分来源分为液态水、空气携带水分、毛细水和水汽扩散，并强调湿材料应尽快干燥、保持 RH 低于 60%（理想范围通常为 30% 至 50%），发现冷表面结露时应先消除水源和干燥表面。湿车、积雪、融雪、洗车和湿装备带来的地面积水属于 bulk water；空调或除湿机只能处理已经蒸发到空气中的部分，不能替代坡度、地面排水、刮水、湿物收纳和安全行走路径。

### 为什么改变决策

- 一味提高除湿容量可能让设备长时间运行，却让液态水继续浸湿纸箱、石膏板、木材、门底或电气设备。
- 地漏是否存在、能否接收某类排水、含盐或清洗化学品能否排放，属于当地管道和环保要求，不能由本页面统一回答。
- 湿车事件还会造成冷金属结露、腐蚀、打滑和冷凝水泵周边积水的混合风险。

### 建议页面模块 / 位置

增加 **Water hierarchy**：1) stop entry, 2) contain / drain liquid, 3) dry surfaces, 4) dehumidify vapor, 5) verify RH recovery。放在 humidity chapter 中，替代再加一张普通湿度卡。

### 可安全直接使用的页面文案

> **Liquid water comes before humidity control.** Snowmelt, a wet vehicle, detailing water, and soaked gear must be contained, drained, or dried before the AC or dehumidifier can manage the remaining vapor. Keep water away from electrical equipment and storage, and verify any floor-drain or discharge route with local requirements.

### 来源

- [EPA, A Brief Guide to Mold, Moisture and Your Home](https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home)
- [DOE Building Science Education, moisture-flow fundamentals](https://bsesc.energy.gov/energy-basics/building-enclosure-building-science-intro-moisture-flow)
- [EPA, Mold Course Chapter 4: drying wet materials](https://www.epa.gov/mold/mold-course-chapter-4)

### 与现有内容是否重叠

**深化现有湿度主题。** 当前有 door condensation 和 condensate failure，但没有地面积水与 bulk-water 顺序。

## 13. 洪水区、低洼车库和风暴潮会改变室内外设备的安装高度

**状态：已确认事实；具体 flood protection level 与许可由当地和项目条件决定。**

### 已确认的新痛点

FEMA 指出，多数 HVAC 部件并非为浸水设计，抬高或迁移通常是降低洪水风险最有效的方法。室外压缩机、室内设备、断电装置、控制板和相关电气部件都需要考虑。抬高设备还必须维持厂商净空、服务空间、结构锚固、风荷载和冷媒 / 电气连接条件。

### 为什么改变决策

- 仅使用普通几英寸混凝土垫可能不能应对已知积水或 flood elevation。
- 为防洪选择墙架或高平台可能增加结构传声、风荷载、梯子维护和无障碍冲突，需要综合权衡。
- 移动空调也不是天然防洪：地面设备、插座、排水泵和延长线都可能处在危险高度。

### 建议页面模块 / 位置

在 Installation scope 的 outdoor placement 中增加 **Flood / standing-water exposure** 问题；与 snow height、roof drip、coastal corrosion 并列为 regional siting gate。

### 可安全直接使用的页面文案

> **A standard equipment pad is not a flood plan.** If the garage or outdoor location has a history of standing water, flood exposure, or storm surge, set equipment and electrical heights from the local flood and permit requirements. Elevation must still preserve airflow, service access, structural anchorage, wind resistance, drainage, and manufacturer clearances.

### 来源

- [FEMA, Wet Floodproofing guidance for building utilities](https://www.fema.gov/sites/default/files/documents/fema_rsl_nfip-technical-bulletin-7-wet-floodproofing-guidance_042025.pdf)
- [FEMA, Homeowner's Guide to Retrofitting](https://www.fema.gov/sites/default/files/2020-07/fema_nfip_homeowners-guide-retrofitting_2014.pdf)
- [FEMA, Urban Flooding guidance for homeowners and renters](https://www.fema.gov/sites/default/files/documents/fema_urban_flooding_guidance_for_homeowners_and_renters.pdf)

### 与现有内容是否重叠

**缺失。** 当前只覆盖雪深、结霜水和基础墙排水。

## 14. 高顶、夹层和吊扇：改善体感与混合，不等于增加制冷量

**状态：已确认事实。**

### 已确认的新痛点

ENERGY STAR 强调吊扇让人感觉更凉，但不降低房间本身的温度；无人时应关闭。高顶空间还可能出现垂直温度分层，空气混合在采暖时尤其有价值。设备选型仍需按空间体积、外壳、太阳得热、人员和设备负荷、送风覆盖与同时使用区域计算，而不是把风扇 CFM 当成 BTU/h。

### 为什么改变决策

- 吊扇可让健身、工作台或休息区在更高设定温度下仍舒适，从而减少压缩机负担，但它不能为收藏品、服务器或无人储藏提供同等“体感收益”。
- 在有门轨、车举升机、灯具或高货架的车库，风扇位置还会与安全净空和 mini-split 送风方向冲突。
- loft / partition 可能需要多个送风点或独立区域；简单放大单个 wall head 不能保证气流到达。

### 建议页面模块 / 位置

放入 high-ceiling Advisor 结果，显示 **capacity / distribution / occupied-air-speed** 三个不同问题；不要只按层高机械增加 BTU。

### 可安全直接使用的页面文案

> **Fans solve air movement, not missing capacity.** A ceiling or circulation fan can improve occupied comfort and reduce temperature layering, but it does not lower the room temperature by itself. In a tall, divided, or lofted garage, check volume, supply-air reach, return path, fan clearances, and simultaneous zone loads separately.

### 来源

- [ENERGY STAR, Ceiling Fan Basics](https://www.energystar.gov/products/ceiling_fans/ceiling_fan_basics)
- [ENERGY STAR, Ceiling Fans Made Easy](https://www.energystar.gov/sites/default/files/asset/document/Ceiling%20Fan%20FS%20v14.pdf)
- [DOE, National Best Practices Manual: high-ceiling destratification](https://www.energy.gov/sites/prod/files/2013/11/f5/nationalbestpracticesmanual31545.pdf)

### 与现有内容是否重叠

**中度重叠。** 当前已考虑 ceiling height、loft 和 multi-zone，但缺少风扇体感、混合与真实容量的边界。

## 15. 粉尘源控制需要再加一条：不要用压缩空气把可燃粉尘重新扬起

**状态：已确认的职业安全原则；家庭车库的法律适用范围不能从 OSHA 工业要求直接推导。**

### 已确认的新痛点

OSHA 木工指南指出，细木尘可形成火灾和爆炸危险，首选在机器产生点进行局部排风和收集，并明确不应使用压缩空气吹散积尘。此处可作为工程原理和风险教育，不能把工业规范原样宣称为每个家庭车库的法定义务。

### 为什么改变决策

- 仅增加 mini-split 过滤频率仍可能让细尘进入盘管、风轮、电气部件和排水盘。
- 用车间压缩机“吹干净”会把沉积粉尘变成悬浮云，既加重 HVAC 污染，也可能增加可燃粉尘风险。
- 用户需要的配件优先级应是兼容工艺的源头集尘、正确清扫和设备隔离，其次才是普通房间空气净化。

### 建议页面模块 / 位置

在 workshop 场景的 “Stop work before recirculation” 安全卡里增加，不必再建新的大章节。

### 可安全直接使用的页面文案

> **Capture dust where it is made.** Comfort AC and its screen filter are not shop-dust controls. Use source collection suited to the process, keep combustible dust from accumulating, and do not use compressed air to create a dust cloud. Protect the indoor coil and leave the blower, drain pan, and filters serviceable.

### 来源

- [OSHA, Woodworking fire and explosion hazards](https://www.osha.gov/etools/woodworking/safety-hazards/fire-explosion)
- [OSHA, Combustible dust publications](https://www.osha.gov/publications/bytopic/combustible-dust)

### 与现有内容是否重叠

**精度升级。** 当前已有“source capture”与深度清洁，应只补充压缩空气和可燃粉尘边界，避免重复长段落。

## 16. 无障碍不只是控件高度，还包括湿滑地面、充电线和维护路线

**状态：设计建议已确认；私人住宅的法定义务因项目而异。**

### 已确认的新痛点

U.S. Access Board 的 EV 充电技术支持资料强调清晰地面空间、可达路线、连接器可操作性、线缆不妨碍通行，以及保护桩不能阻挡控制部件。其部分内容是技术建议，不是对所有私人住宅自动生效的统一强制规定。结合当前页面已有“reachable controls”，还应把冷凝水软管、移动空调、充电线、地面坡度、储物和滤网维护路径放进同一个空间规划。

### 为什么改变决策

- 空调安装可以在温度上改善车库，却因地面设备、软管、积水和梯子维护让空间更难使用。
- 对使用轮椅、助行器或抓握能力受限的用户，壁挂高度、遥控器、插头、排水桶和清洗动作都可能成为真实的长期失败点。

### 建议页面模块 / 位置

扩展当前 accessible maintenance 卡，不新建重复卡。My Garage Plan 输出一张 **Clear route and reach check**：设备、线缆、排水、过滤器、断开装置、EVSE、车辆门开启区。

### 可安全直接使用的页面文案

> **Protect the route, not only the thermostat height.** Keep condensate hoses, portable units, charging cables, storage, and service tasks out of the clear travel path. Confirm that controls, filters, drains, disconnects, and EV connectors can be reached and operated by the actual users without climbing or moving a vehicle.

### 来源

- [U.S. Access Board, Design Recommendations for Accessible EV Charging Stations](https://www.access-board.gov/tad/ev/)
- [U.S. Access Board, ADA Accessibility Standards](https://www.access-board.gov/ada/)

### 与现有内容是否重叠

**深化现有主题。** 不应新增同义卡片，应扩充当前 accessible-maintenance 的输出清单。

## 推荐的页面叙事整合方式

不要把以上内容变成 16 张同等级警告卡。建议沿用户旅程分成四个新的“决策门”：

1. **Can this garage safely become the space I imagine?**  
   用途转换、garage-to-house 分隔、氡条件筛查、气态污染、锂电池和工艺粉尘。
2. **What environmental load is the AC not solving?**  
   液态水、低温除湿、除湿机显热、HPWH 交互、颗粒与气体过滤差异。
3. **Will this exact system be installable and serviceable here?**  
   A2L / 冷媒、Section 608、当地许可、洪水高度、高顶分区、净空、可达性。
4. **What changes during an event?**  
   与现有 Smoke Mode、outage、snow/defrost、door recovery 合并，新增 flood / standing water，而不是重复建立灾害章节。

## 页面可增加的交互字段

这些字段会真正改变结果，适合加入 Advisor 或 My Garage Plan；不要一次性把所有问题都展示给所有人。

- 最低冬季室内温度与除湿目标
- 是否有 heat-pump water heater，以及其进排风、冷凝水和最小空间要求
- 是否在车库给 e-bike、e-scooter、工具电池或 EV 充电
- 是否把车库作为最低的规律占用空间，或打算改变用途 / 增加睡眠空间
- 是否有湿车、融雪、洗车或已知地面积水
- 是否位于已知 flood / storm-surge / repeated-standing-water 区域
- 目标机型的冷媒类型、匹配室内外机、现场充注和 A2L 标签
- 是否需要独立颗粒净化，污染目标是 smoke / dust 还是 gas / VOC
- ceiling height、loft / partition、占用区和送风可达路径
- 维护者能否在不爬梯、不移车、不跨软管的情况下取滤网、查排水和操作断开装置

## 不应直接写入公开页面的说法

- “R-32 / R-454B 比旧冷媒危险”或“所有 A2L 设备都有同一最小房间面积”。正确做法是要求按具体设备标签、认证和说明书核对。
- “DIY mini-split 不需要 EPA 认证”。是否需要取决于工作是否可能打开或破坏冷媒回路；预充不等于全部工作豁免。
- “HEPA / 活性炭能处理车库尾气和 VOC”。颗粒、气体和 CO 是不同控制问题。
- “给车库空调就能保护 EV 电池”。应先按车辆和 EVSE 厂商说明使用车辆自身热管理与预调温。
- “所有车库都必须测氡”。这是功能转换和最低规律占用层的条件性筛查。
- “地漏可以直接排融雪、洗车水或冷凝水”。排水接法和允许排放物由当地管道、环保和场地条件决定。
- “吊扇等于增加空调容量”。吊扇主要改变体感和空气混合。
- “安装空调后车库就成为合法居住空间”。用途、消防、出口、通风、许可和保险是独立问题。
- “GARVEE 当前提供全国安装覆盖、ZIP 即时校验或固定安装价”。现有公开资料不能支持该事实；安装区继续保持 concept demo 和不提交信息的边界。

## 最小发布优先级

如果本轮页面只容纳有限新增内容，优先顺序建议为：

1. 低温除湿 + 除湿机显热
2. 颗粒过滤 vs. 气态污染
3. A2L / Section 608 安装边界
4. 锂电池充电安全区
5. HPWH 与车库 HVAC 交互
6. 用途转换 + 条件性氡筛查
7. 液态水层级 + 洪水设备高度
8. EV 预调温、高顶风扇和扩展无障碍清单

这组内容能补齐当前页面真正缺失的“边界条件”，同时避免把已经覆盖的野火、负压、冷凝水、噪音和售后问题重复拉长。
