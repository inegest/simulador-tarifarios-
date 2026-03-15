export interface Tarifa {
  potencia: number;
  energia: number | { [key: string]: number };
  comissao?: number;
}

export interface TarifarioData {
  [key: string]: {
    [key: string]: Tarifa;
  };
}

export const POTENCIAS = [1.15, 2.30, 3.45, 4.60, 5.75, 6.90, 10.35, 13.80, 17.25, 20.70, 27.60, 34.50, 41.40];

// Comissões por faixa de consumo (kWh)
export const COMISSOES_CONSUMO = {
  btn_fix_n1: [
    { min: 0, max: 2.5, comissao: 54 },
    { min: 2.5, max: 5, comissao: 76 },
    { min: 5, max: 10, comissao: 150 },
    { min: 10, max: 20, comissao: 263 },
    { min: 20, max: 30, comissao: 421 },
    { min: 30, max: 40, comissao: 558 },
    { min: 40, max: 50, comissao: 740 },
    { min: 50, max: 75, comissao: 1083 },
    { min: 75, max: 100, comissao: 1339 },
    { min: 100, max: 150, comissao: 1870 },
    { min: 150, max: Infinity, comissao: 2648 },
  ],
  btn_fix_n2: [
    { min: 0, max: 2.5, comissao: 41 },
    { min: 2.5, max: 5, comissao: 59 },
    { min: 5, max: 10, comissao: 118 },
    { min: 10, max: 20, comissao: 211 },
    { min: 20, max: 30, comissao: 338 },
    { min: 30, max: 40, comissao: 448 },
    { min: 40, max: 50, comissao: 595 },
    { min: 50, max: 75, comissao: 872 },
    { min: 75, max: 100, comissao: 1080 },
    { min: 100, max: 150, comissao: 1510 },
    { min: 150, max: Infinity, comissao: 2137 },
  ],
  btn_fix_n3: [
    { min: 0, max: 2.5, comissao: 24 },
    { min: 2.5, max: 5, comissao: 36 },
    { min: 5, max: 10, comissao: 79 },
    { min: 10, max: 20, comissao: 144 },
    { min: 20, max: 30, comissao: 235 },
    { min: 30, max: 40, comissao: 313 },
    { min: 40, max: 50, comissao: 418 },
    { min: 50, max: 75, comissao: 615 },
    { min: 75, max: 100, comissao: 763 },
    { min: 100, max: 150, comissao: 1068 },
    { min: 150, max: Infinity, comissao: 1515 },
  ],
  btn_fix_n4: [
    { min: 0, max: 2.5, comissao: 8 },
    { min: 2.5, max: 5, comissao: 17 },
    { min: 5, max: 10, comissao: 47 },
    { min: 10, max: 20, comissao: 93 },
    { min: 20, max: 30, comissao: 157 },
    { min: 30, max: 40, comissao: 214 },
    { min: 40, max: 50, comissao: 288 },
    { min: 50, max: 75, comissao: 428 },
    { min: 75, max: 100, comissao: 533 },
    { min: 100, max: 150, comissao: 750 },
    { min: 150, max: Infinity, comissao: 1067 },
  ],
  bte_n1: [
    { min: 0, max: 5, comissao: 39 },
    { min: 5, max: 10, comissao: 107 },
    { min: 10, max: 20, comissao: 213 },
    { min: 20, max: 30, comissao: 360 },
    { min: 30, max: 40, comissao: 488 },
    { min: 40, max: 50, comissao: 657 },
    { min: 50, max: 70, comissao: 978 },
    { min: 70, max: 100, comissao: 1217 },
    { min: 100, max: 150, comissao: 1713 },
    { min: 150, max: 200, comissao: 2439 },
    { min: 200, max: 300, comissao: 3424 },
    { min: 300, max: 400, comissao: 5027 },
    { min: 400, max: 500, comissao: 6460 },
    { min: 500, max: 700, comissao: 8815 },
    { min: 700, max: 1200, comissao: 13151 },
    { min: 1200, max: Infinity, comissao: 18126 },
  ],
  bte_n2: [
    { min: 0, max: 5, comissao: 25 },
    { min: 5, max: 10, comissao: 70 },
    { min: 10, max: 20, comissao: 140 },
    { min: 20, max: 30, comissao: 239 },
    { min: 30, max: 40, comissao: 323 },
    { min: 40, max: 50, comissao: 434 },
    { min: 50, max: 70, comissao: 646 },
    { min: 70, max: 100, comissao: 804 },
    { min: 100, max: 150, comissao: 1132 },
    { min: 150, max: 200, comissao: 1612 },
    { min: 200, max: 300, comissao: 2263 },
    { min: 300, max: 400, comissao: 3321 },
    { min: 400, max: 500, comissao: 4268 },
    { min: 500, max: 700, comissao: 5823 },
    { min: 700, max: 1200, comissao: 8689 },
    { min: 1200, max: Infinity, comissao: 11976 },
  ],
  bte_n3: [
    { min: 0, max: 5, comissao: 19 },
    { min: 5, max: 10, comissao: 50 },
    { min: 10, max: 20, comissao: 100 },
    { min: 20, max: 30, comissao: 170 },
    { min: 30, max: 40, comissao: 229 },
    { min: 40, max: 50, comissao: 309 },
    { min: 50, max: 70, comissao: 459 },
    { min: 70, max: 100, comissao: 571 },
    { min: 100, max: 150, comissao: 805 },
    { min: 150, max: 200, comissao: 1146 },
    { min: 200, max: 300, comissao: 1609 },
    { min: 300, max: 400, comissao: 2361 },
    { min: 400, max: 500, comissao: 3033 },
    { min: 500, max: 700, comissao: 4139 },
    { min: 700, max: 1200, comissao: 6176 },
    { min: 1200, max: Infinity, comissao: 8513 },
  ],
  bte_n4: [
    { min: 0, max: 5, comissao: 10 },
    { min: 5, max: 10, comissao: 28 },
    { min: 10, max: 20, comissao: 56 },
    { min: 20, max: 30, comissao: 93 },
    { min: 30, max: 40, comissao: 127 },
    { min: 40, max: 50, comissao: 170 },
    { min: 50, max: 70, comissao: 253 },
    { min: 70, max: 100, comissao: 316 },
    { min: 100, max: 150, comissao: 443 },
    { min: 150, max: 200, comissao: 631 },
    { min: 200, max: 300, comissao: 887 },
    { min: 300, max: 400, comissao: 1301 },
    { min: 400, max: 500, comissao: 1673 },
    { min: 500, max: 700, comissao: 2282 },
    { min: 700, max: 1200, comissao: 3405 },
    { min: 1200, max: Infinity, comissao: 4693 },
  ],
  mt_n1: [
    { min: 0, max: 5, comissao: 36 },
    { min: 5, max: 10, comissao: 100 },
    { min: 10, max: 20, comissao: 200 },
    { min: 20, max: 30, comissao: 338 },
    { min: 30, max: 40, comissao: 458 },
    { min: 40, max: 50, comissao: 616 },
    { min: 50, max: 70, comissao: 917 },
    { min: 70, max: 100, comissao: 1141 },
    { min: 100, max: 150, comissao: 1606 },
    { min: 150, max: 200, comissao: 2286 },
    { min: 200, max: 300, comissao: 3210 },
    { min: 300, max: 400, comissao: 4712 },
    { min: 400, max: 500, comissao: 6055 },
    { min: 500, max: 700, comissao: 8263 },
    { min: 700, max: 1200, comissao: 12327 },
    { min: 1200, max: Infinity, comissao: 16991 },
  ],
  mt_n2: [
    { min: 0, max: 5, comissao: 25 },
    { min: 5, max: 10, comissao: 68 },
    { min: 10, max: 20, comissao: 136 },
    { min: 20, max: 30, comissao: 230 },
    { min: 30, max: 40, comissao: 311 },
    { min: 40, max: 50, comissao: 418 },
    { min: 50, max: 70, comissao: 623 },
    { min: 70, max: 100, comissao: 775 },
    { min: 100, max: 150, comissao: 1092 },
    { min: 150, max: 200, comissao: 1554 },
    { min: 200, max: 300, comissao: 2181 },
    { min: 300, max: 400, comissao: 3201 },
    { min: 400, max: 500, comissao: 4114 },
    { min: 500, max: 700, comissao: 5613 },
    { min: 700, max: 1200, comissao: 8374 },
    { min: 1200, max: Infinity, comissao: 11543 },
  ],
  mt_n3: [
    { min: 0, max: 5, comissao: 18 },
    { min: 5, max: 10, comissao: 48 },
    { min: 10, max: 20, comissao: 96 },
    { min: 20, max: 30, comissao: 163 },
    { min: 30, max: 40, comissao: 221 },
    { min: 40, max: 50, comissao: 297 },
    { min: 50, max: 70, comissao: 443 },
    { min: 70, max: 100, comissao: 550 },
    { min: 100, max: 150, comissao: 775 },
    { min: 150, max: 200, comissao: 1103 },
    { min: 200, max: 300, comissao: 1548 },
    { min: 300, max: 400, comissao: 2274 },
    { min: 400, max: 500, comissao: 2922 },
    { min: 500, max: 700, comissao: 3987 },
    { min: 700, max: 1200, comissao: 5948 },
    { min: 1200, max: Infinity, comissao: 8199 },
  ],
  mt_n4: [
    { min: 0, max: 5, comissao: 10 },
    { min: 5, max: 10, comissao: 28 },
    { min: 10, max: 20, comissao: 56 },
    { min: 20, max: 30, comissao: 93 },
    { min: 30, max: 40, comissao: 127 },
    { min: 40, max: 50, comissao: 170 },
    { min: 50, max: 70, comissao: 253 },
    { min: 70, max: 100, comissao: 316 },
    { min: 100, max: 150, comissao: 443 },
    { min: 150, max: 200, comissao: 631 },
    { min: 200, max: 300, comissao: 887 },
    { min: 300, max: 400, comissao: 1301 },
    { min: 400, max: 500, comissao: 1673 },
    { min: 500, max: 700, comissao: 2282 },
    { min: 700, max: 1200, comissao: 3405 },
    { min: 1200, max: Infinity, comissao: 4693 },
  ],
};

export const TARIFARIOS = {
  // ===== TARIFÁRIO BASE (Jan/26) =====
  base_simples: {
    nome: "Base - Simples",
    tipo: "simples",
    potencias: {
      "1.15": { potencia: 0.1500, energia: 0.1699 },
      "2.30": { potencia: 0.2100, energia: 0.1699 },
      "3.45": { potencia: 0.2700, energia: 0.1699 },
      "4.60": { potencia: 0.3800, energia: 0.1699 },
      "5.75": { potencia: 0.4700, energia: 0.1699 },
      "6.90": { potencia: 0.5500, energia: 0.1699 },
      "10.35": { potencia: 0.6500, energia: 0.1699 },
      "13.80": { potencia: 0.8000, energia: 0.1699 },
      "17.25": { potencia: 0.9900, energia: 0.1699 },
      "20.70": { potencia: 1.1500, energia: 0.1699 },
      "27.60": { potencia: 1.5000, energia: 0.1699 },
      "34.50": { potencia: 2.0000, energia: 0.1699 },
      "41.40": { potencia: 2.5000, energia: 0.1699 },
    }
  },
  base_bi_horario: {
    nome: "Base - Bi-Horário",
    tipo: "bi_horario",
    potencias: {
      "3.45": { potencia: 0.2700, energia: { fora_vazio: 0.1999, vazio: 0.1199 } },
      "4.60": { potencia: 0.3800, energia: { fora_vazio: 0.1999, vazio: 0.1199 } },
      "5.75": { potencia: 0.4700, energia: { fora_vazio: 0.1999, vazio: 0.1199 } },
      "6.90": { potencia: 0.5500, energia: { fora_vazio: 0.1999, vazio: 0.1199 } },
      "10.35": { potencia: 0.6500, energia: { fora_vazio: 0.1999, vazio: 0.1199 } },
      "13.80": { potencia: 0.8000, energia: { fora_vazio: 0.1999, vazio: 0.1199 } },
      "17.25": { potencia: 0.9900, energia: { fora_vazio: 0.1999, vazio: 0.1199 } },
      "20.70": { potencia: 1.1500, energia: { fora_vazio: 0.1999, vazio: 0.1199 } },
    }
  },
  base_tri_horario: {
    nome: "Base - Tri-Horário",
    tipo: "tri_horario",
    potencias: {
      "27.60": { potencia: 1.5000, energia: { ponta: 0.3499, cheias: 0.1699, vazio: 0.1199 } },
      "34.50": { potencia: 2.0000, energia: { ponta: 0.3499, cheias: 0.1699, vazio: 0.1199 } },
      "41.40": { potencia: 2.5000, energia: { ponta: 0.3499, cheias: 0.1699, vazio: 0.1199 } },
    }
  },

  // ===== PRODUTO X =====
  produto_x: {
    nome: "Produto X",
    tipo: "simples",
    potencias: {
      "1.15": { potencia: 0.1444, energia: 0.1597, comissao: 30 },
      "2.30": { potencia: 0.2287, energia: 0.1597, comissao: 30 },
      "3.45": { potencia: 0.3231, energia: 0.1597, comissao: 30 },
      "4.60": { potencia: 0.4175, energia: 0.1597, comissao: 30 },
      "5.75": { potencia: 0.4919, energia: 0.1597, comissao: 30 },
      "6.90": { potencia: 0.6062, energia: 0.1597, comissao: 30 },
      "10.35": { potencia: 0.8193, energia: 0.1597, comissao: 30 },
      "13.80": { potencia: 1.0424, energia: 0.1597, comissao: 30 },
      "17.25": { potencia: 1.2656, energia: 0.1597, comissao: 30 },
      "20.70": { potencia: 1.5187, energia: 0.1597, comissao: 30 },
      "27.60": { potencia: 1.8649, energia: 0.1597, comissao: 30 },
      "34.50": { potencia: 2.2411, energia: 0.1597, comissao: 30 },
      "41.40": { potencia: 2.6073, energia: 0.1597, comissao: 30 },
    }
  },

  // ===== PRODUTO Z =====
  produto_z: {
    nome: "Produto Z",
    tipo: "simples",
    potencias: {
      "1.15": { potencia: 0.3012, energia: 0.1597, comissao: 45 },
      "2.30": { potencia: 0.3630, energia: 0.1597, comissao: 45 },
      "3.45": { potencia: 0.4304, energia: 0.1597, comissao: 45 },
      "4.60": { potencia: 0.5200, energia: 0.1597, comissao: 45 },
      "5.75": { potencia: 0.6066, energia: 0.1597, comissao: 45 },
      "6.90": { potencia: 0.7376, energia: 0.1597, comissao: 45 },
      "10.35": { potencia: 0.9299, energia: 0.1597, comissao: 45 },
      "13.80": { potencia: 1.2110, energia: 0.1597, comissao: 45 },
      "17.25": { potencia: 1.5409, energia: 0.1597, comissao: 45 },
      "20.70": { potencia: 1.8148, energia: 0.1597, comissao: 45 },
      "27.60": { potencia: 1.8682, energia: 0.1597, comissao: 45 },
      "34.50": { potencia: 2.2390, energia: 0.1597, comissao: 45 },
      "41.40": { potencia: 2.6099, energia: 0.1597, comissao: 45 },
    }
  },

  // ===== PRODUTO ZC =====
  produto_zc: {
    nome: "Produto ZC",
    tipo: "simples",
    potencias: {
      "1.15": { potencia: 0.5520, energia: 0.1597, comissao: 100 },
      "2.30": { potencia: 0.6098, energia: 0.1597, comissao: 100 },
      "3.45": { potencia: 0.6676, energia: 0.1597, comissao: 100 },
      "4.60": { potencia: 0.7253, energia: 0.1597, comissao: 100 },
      "5.75": { potencia: 0.8381, energia: 0.1597, comissao: 100 },
      "6.90": { potencia: 0.8957, energia: 0.1597, comissao: 100 },
      "10.35": { potencia: 1.3437, energia: 0.1597, comissao: 100 },
      "13.80": { potencia: 1.5170, energia: 0.1597, comissao: 100 },
      "17.25": { potencia: 1.6904, energia: 0.1597, comissao: 100 },
      "20.70": { potencia: 1.8636, energia: 0.1597, comissao: 100 },
      "27.60": { potencia: 2.5610, energia: 0.1597, comissao: 100 },
      "34.50": { potencia: 2.8827, energia: 0.1597, comissao: 100 },
      "41.40": { potencia: 3.4499, energia: 0.1597, comissao: 100 },
    }
  },

  // ===== BTN HABALIA (04/03/2026) =====
  btn_egreen_a: {
    nome: "BTN EGREEN A",
    tipo: "simples",
    potencias: {
      "1.15": { potencia: 0.2230, energia: 0.16234, comissao: 21 },
      "2.30": { potencia: 0.2758, energia: 0.16234, comissao: 24.50 },
      "3.45": { potencia: 0.3707, energia: 0.16234, comissao: 28 },
      "4.60": { potencia: 0.4356, energia: 0.16234, comissao: 38.50 },
      "5.75": { potencia: 0.4809, energia: 0.16234, comissao: 45.50 },
      "6.90": { potencia: 0.5335, energia: 0.16234, comissao: 49 },
      "10.35": { potencia: 0.7052, energia: 0.16234, comissao: 66.50 },
      "13.80": { potencia: 0.8743, energia: 0.16234, comissao: 140 },
      "17.25": { potencia: 1.0597, energia: 0.16234, comissao: 175 },
      "20.70": { potencia: 1.2305, energia: 0.16234, comissao: 210 },
      "27.60": { potencia: 1.7043, energia: 0.16234, comissao: 245 },
      "34.50": { potencia: 2.0582, energia: 0.16234, comissao: 297.50 },
      "41.40": { potencia: 2.5424, energia: 0.16234, comissao: 350 },
    }
  },
  btn_egreen_b: {
    nome: "BTN EGREEN B",
    tipo: "simples",
    potencias: {
      "1.15": { potencia: 0.1700, energia: 0.15874, comissao: 21 },
      "2.30": { potencia: 0.2268, energia: 0.15874, comissao: 24.50 },
      "3.45": { potencia: 0.2887, energia: 0.15874, comissao: 28 },
      "4.60": { potencia: 0.3473, energia: 0.15874, comissao: 38.50 },
      "5.75": { potencia: 0.3879, energia: 0.15874, comissao: 45.50 },
      "6.90": { potencia: 0.4395, energia: 0.15874, comissao: 49 },
      "10.35": { potencia: 0.6212, energia: 0.15874, comissao: 66.50 },
      "13.80": { potencia: 0.7949, energia: 0.15874, comissao: 140 },
      "17.25": { potencia: 0.9847, energia: 0.15874, comissao: 175 },
      "20.70": { potencia: 1.1605, energia: 0.15874, comissao: 210 },
      "27.60": { potencia: 1.5843, energia: 0.15874, comissao: 245 },
      "34.50": { potencia: 1.9482, energia: 0.15874, comissao: 297.50 },
      "41.40": { potencia: 2.4124, energia: 0.15874, comissao: 350 },
    }
  },
  btn_egreen_c: {
    nome: "BTN EGREEN C",
    tipo: "simples",
    potencias: {
      "1.15": { potencia: 0.0573, energia: 0.15462, comissao: 21 },
      "2.30": { potencia: 0.1145, energia: 0.15462, comissao: 24.50 },
      "3.45": { potencia: 0.1718, energia: 0.15462, comissao: 28 },
      "4.60": { potencia: 0.2291, energia: 0.15462, comissao: 38.50 },
      "5.75": { potencia: 0.2884, energia: 0.15462, comissao: 45.50 },
      "6.90": { potencia: 0.3436, energia: 0.15462, comissao: 49 },
      "10.35": { potencia: 0.5154, energia: 0.15462, comissao: 66.50 },
      "13.80": { potencia: 0.6872, energia: 0.15462, comissao: 140 },
      "17.25": { potencia: 0.8591, energia: 0.15462, comissao: 175 },
      "20.70": { potencia: 1.0309, energia: 0.15462, comissao: 210 },
      "27.60": { potencia: 1.3248, energia: 0.15462, comissao: 245 },
      "34.50": { potencia: 1.6560, energia: 0.15462, comissao: 297.50 },
      "41.40": { potencia: 1.9872, energia: 0.15462, comissao: 350 },
    }
  },
  btn_egreen_d: {
    nome: "BTN EGREEN D",
    tipo: "simples",
    potencias: {
      "1.15": { potencia: 0.0573, energia: 0.12337, comissao: 21 },
      "2.30": { potencia: 0.1145, energia: 0.12337, comissao: 24.50 },
      "3.45": { potencia: 0.1718, energia: 0.12337, comissao: 28 },
      "4.60": { potencia: 0.2291, energia: 0.12337, comissao: 38.50 },
      "5.75": { potencia: 0.2884, energia: 0.12337, comissao: 45.50 },
      "6.90": { potencia: 0.3436, energia: 0.12337, comissao: 49 },
      "10.35": { potencia: 0.5154, energia: 0.12337, comissao: 66.50 },
      "13.80": { potencia: 0.6872, energia: 0.12337, comissao: 140 },
      "17.25": { potencia: 0.8591, energia: 0.12337, comissao: 175 },
      "20.70": { potencia: 1.0309, energia: 0.12337, comissao: 210 },
      "27.60": { potencia: 1.3248, energia: 0.12337, comissao: 245 },
      "34.50": { potencia: 1.6560, energia: 0.12337, comissao: 297.50 },
      "41.40": { potencia: 1.9872, energia: 0.12337, comissao: 350 },
    }
  },
  btn_fix_n1: {
    nome: "BTN FIX N1",
    tipo: "simples",
    potencias: {
      "1.15": { potencia: 0.2230, energia: 0.20000 },
      "2.30": { potencia: 0.2758, energia: 0.20000 },
      "3.45": { potencia: 0.3707, energia: 0.20000 },
      "4.60": { potencia: 0.4356, energia: 0.20000 },
      "5.75": { potencia: 0.4809, energia: 0.20000 },
      "6.90": { potencia: 0.5335, energia: 0.20000 },
      "10.35": { potencia: 0.7052, energia: 0.20000 },
      "13.80": { potencia: 0.8743, energia: 0.20000 },
      "17.25": { potencia: 1.0597, energia: 0.20000 },
      "20.70": { potencia: 1.2305, energia: 0.20000 },
      "27.60": { potencia: 1.7043, energia: 0.20000 },
      "34.50": { potencia: 2.0582, energia: 0.20000 },
      "41.40": { potencia: 2.5424, energia: 0.20000 },
    },
    comissaoConsumoBased: true
  },
  btn_fix_n2: {
    nome: "BTN FIX N2",
    tipo: "simples",
    potencias: {
      "1.15": { potencia: 0.1700, energia: 0.19428 },
      "2.30": { potencia: 0.2268, energia: 0.19428 },
      "3.45": { potencia: 0.3087, energia: 0.19428 },
      "4.60": { potencia: 0.3756, energia: 0.19428 },
      "5.75": { potencia: 0.4289, energia: 0.19428 },
      "6.90": { potencia: 0.4895, energia: 0.19428 },
      "10.35": { potencia: 0.6812, energia: 0.19428 },
      "13.80": { potencia: 0.8249, energia: 0.19428 },
      "17.25": { potencia: 1.0047, energia: 0.19428 },
      "20.70": { potencia: 1.1905, energia: 0.19428 },
      "27.60": { potencia: 1.6143, energia: 0.19428 },
      "34.50": { potencia: 1.9882, energia: 0.19428 },
      "41.40": { potencia: 2.4424, energia: 0.19428 },
    },
    comissaoConsumoBased: true
  },
  btn_fix_n3: {
    nome: "BTN FIX N3",
    tipo: "simples",
    potencias: {
      "1.15": { potencia: 0.1250, energia: 0.18725 },
      "2.30": { potencia: 0.1818, energia: 0.18725 },
      "3.45": { potencia: 0.2387, energia: 0.18725 },
      "4.60": { potencia: 0.2956, energia: 0.18725 },
      "5.75": { potencia: 0.3529, energia: 0.18725 },
      "6.90": { potencia: 0.4095, energia: 0.18725 },
      "10.35": { potencia: 0.5802, energia: 0.18725 },
      "13.80": { potencia: 0.7509, energia: 0.18725 },
      "17.25": { potencia: 0.9357, energia: 0.18725 },
      "20.70": { potencia: 1.1205, energia: 0.18725 },
      "27.60": { potencia: 1.4803, energia: 0.18725 },
      "34.50": { potencia: 1.8503, energia: 0.18725 },
      "41.40": { potencia: 2.2894, energia: 0.18725 },
    },
    comissaoConsumoBased: true
  },
  btn_fix_n4: {
    nome: "BTN FIX N4",
    tipo: "simples",
    potencias: {
      "1.15": { potencia: 0.0573, energia: 0.18225 },
      "2.30": { potencia: 0.1145, energia: 0.18225 },
      "3.45": { potencia: 0.1718, energia: 0.18225 },
      "4.60": { potencia: 0.2291, energia: 0.18225 },
      "5.75": { potencia: 0.2884, energia: 0.18225 },
      "6.90": { potencia: 0.3436, energia: 0.18225 },
      "10.35": { potencia: 0.5154, energia: 0.18225 },
      "13.80": { potencia: 0.6872, energia: 0.18225 },
      "17.25": { potencia: 0.8591, energia: 0.18225 },
      "20.70": { potencia: 1.0309, energia: 0.18225 },
      "27.60": { potencia: 1.3248, energia: 0.18225 },
      "34.50": { potencia: 1.6560, energia: 0.18225 },
      "41.40": { potencia: 1.9872, energia: 0.18225 },
    },
    comissaoConsumoBased: true
  },

  // ===== EASY (04/03/2026) =====
  easy_1: {
    nome: "EASY 1",
    tipo: "simples",
    potencias: {
      "1.15": { potencia: 0.5444, energia: 0.10164 },
      "2.30": { potencia: 0.6316, energia: 0.10164 },
      "3.45": { potencia: 0.7188, energia: 0.10164 },
      "4.60": { potencia: 0.8061, energia: 0.10164 },
      "5.75": { potencia: 0.8933, energia: 0.10164 },
      "6.90": { potencia: 0.9805, energia: 0.10164 },
      "10.35": { potencia: 1.5421, energia: 0.10164 },
      "13.80": { potencia: 1.8037, energia: 0.10164 },
      "17.25": { potencia: 2.0655, energia: 0.10164 },
      "20.70": { potencia: 2.3271, energia: 0.10164 },
      "27.60": { potencia: 3.2371, energia: 0.10164 },
      "34.50": { potencia: 3.7115, energia: 0.10164 },
      "41.40": { potencia: 4.2224, energia: 0.10164 },
    }
  },
  easy_2: {
    nome: "EASY 2",
    tipo: "simples",
    potencias: {
      "1.15": { potencia: 0.3944, energia: 0.10164 },
      "2.30": { potencia: 0.4816, energia: 0.10164 },
      "3.45": { potencia: 0.5688, energia: 0.10164 },
      "4.60": { potencia: 0.6561, energia: 0.10164 },
      "5.75": { potencia: 0.7433, energia: 0.10164 },
      "6.90": { potencia: 0.8305, energia: 0.10164 },
      "10.35": { potencia: 1.3921, energia: 0.10164 },
      "13.80": { potencia: 1.6537, energia: 0.10164 },
      "17.25": { potencia: 1.9155, energia: 0.10164 },
      "20.70": { potencia: 2.1771, energia: 0.10164 },
      "27.60": { potencia: 3.0871, energia: 0.10164 },
      "34.50": { potencia: 3.9224, energia: 0.10164 },
      "41.40": { potencia: 3.9224, energia: 0.10164 },
    }
  },
  easy_3: {
    nome: "EASY 3",
    tipo: "simples",
    potencias: {
      "1.15": { potencia: 0.2444, energia: 0.10164 },
      "2.30": { potencia: 0.3316, energia: 0.10164 },
      "3.45": { potencia: 0.4188, energia: 0.10164 },
      "4.60": { potencia: 0.5061, energia: 0.10164 },
      "5.75": { potencia: 0.5933, energia: 0.10164 },
      "6.90": { potencia: 0.6805, energia: 0.10164 },
      "10.35": { potencia: 1.1421, energia: 0.10164 },
      "13.80": { potencia: 1.4037, energia: 0.10164 },
      "17.25": { potencia: 1.6655, energia: 0.10164 },
      "20.70": { potencia: 2.0007, energia: 0.10164 },
      "27.60": { potencia: 3.1115, energia: 0.10164 },
      "34.50": { potencia: 3.6224, energia: 0.10164 },
      "41.40": { potencia: 3.6224, energia: 0.10164 },
    }
  },

  // ===== BTN PRIME =====
  btn_prime_simples: {
    nome: "BTN PRIME - Simples",
    tipo: "simples",
    potencias: {
      "1.15": { potencia: 0.249, energia: 0.176, comissao: 20 },
      "2.30": { potencia: 0.306, energia: 0.176, comissao: 22.50 },
      "3.45": { potencia: 0.364, energia: 0.176, comissao: 25 },
      "4.60": { potencia: 0.421, energia: 0.176, comissao: 25 },
      "5.75": { potencia: 0.560, energia: 0.176, comissao: 30 },
      "6.90": { potencia: 0.618, energia: 0.176, comissao: 30 },
      "10.35": { potencia: 0.915, energia: 0.176, comissao: 50 },
      "13.80": { potencia: 1.087, energia: 0.176, comissao: 50 },
      "17.25": { potencia: 1.259, energia: 0.176, comissao: 75 },
      "20.70": { potencia: 1.431, energia: 0.176, comissao: 75 },
      "27.60": { potencia: 1.925, energia: 0.176, comissao: 100 },
      "34.50": { potencia: 2.256, energia: 0.176, comissao: 125 },
      "41.40": { potencia: 2.587, energia: 0.176, comissao: 160 },
    }
  },

  // ===== PORTUGALOS =====
  portugalos_simples: {
    nome: "Portugalos - Plano Simples",
    tipo: "simples",
    potencias: {
      "1.15": { potencia: 0.1121, energia: 0.185 },
      "2.30": { potencia: 0.1693, energia: 0.185 },
      "3.45": { potencia: 0.2266, energia: 0.185 },
      "4.60": { potencia: 0.2839, energia: 0.185 },
      "5.75": { potencia: 0.3412, energia: 0.185 },
      "6.90": { potencia: 0.3984, energia: 0.185 },
      "10.35": { potencia: 0.5702, energia: 0.185 },
      "13.80": { potencia: 0.7420, energia: 0.185 },
      "17.25": { potencia: 0.9139, energia: 0.185 },
      "20.70": { potencia: 1.0857, energia: 0.185 },
      "27.60": { potencia: 1.3796, energia: 0.185 },
      "34.50": { potencia: 1.7108, energia: 0.185 },
      "41.40": { potencia: 2.0420, energia: 0.185 },
    },
  },
  portugalos_condominio_simples: {
    nome: "Portugalos - Condomínio Simples",
    tipo: "simples",
    potencias: {
      "1.15": { potencia: 0.5505, energia: 0.1699 },
      "2.30": { potencia: 0.6077, energia: 0.1699 },
      "3.45": { potencia: 0.6650, energia: 0.1699 },
      "4.60": { potencia: 0.7223, energia: 0.1699 },
      "5.75": { potencia: 0.8343, energia: 0.1699 },
      "6.90": { potencia: 0.8915, energia: 0.1699 },
      "10.35": { potencia: 1.3373, energia: 0.1699 },
      "13.80": { potencia: 1.5091, energia: 0.1699 },
      "17.25": { potencia: 1.6810, energia: 0.1699 },
      "20.70": { potencia: 1.8528, energia: 0.1699 },
      "27.60": { potencia: 2.5303, energia: 0.1699 },
      "34.50": { potencia: 2.8615, energia: 0.1699 },
      "41.40": { potencia: 3.1927, energia: 0.1699 },
    },
  },
  portugalos_condominio_bi_horario: {
    nome: "Portugalos - Condomínio Bi-Horário",
    tipo: "bi_horario",
    potencias: {
      "1.15": { potencia: 0.1121, energia: { fora_vazio: 0.216, vazio: 0.1328 } },
      "2.30": { potencia: 0.1693, energia: { fora_vazio: 0.216, vazio: 0.1328 } },
      "3.45": { potencia: 0.2266, energia: { fora_vazio: 0.216, vazio: 0.1328 } },
      "4.60": { potencia: 0.2839, energia: { fora_vazio: 0.216, vazio: 0.1328 } },
      "5.75": { potencia: 0.3412, energia: { fora_vazio: 0.216, vazio: 0.1328 } },
      "6.90": { potencia: 0.3984, energia: { fora_vazio: 0.216, vazio: 0.1328 } },
      "10.35": { potencia: 0.5702, energia: { fora_vazio: 0.216, vazio: 0.1328 } },
      "13.80": { potencia: 0.7420, energia: { fora_vazio: 0.216, vazio: 0.1328 } },
      "17.25": { potencia: 0.9139, energia: { fora_vazio: 0.216, vazio: 0.1328 } },
      "20.70": { potencia: 1.0857, energia: { fora_vazio: 0.216, vazio: 0.1328 } },
      "27.60": { potencia: 1.3796, energia: { fora_vazio: 0.216, vazio: 0.1328 } },
      "34.50": { potencia: 1.7108, energia: { fora_vazio: 0.216, vazio: 0.1328 } },
      "41.40": { potencia: 2.0420, energia: { fora_vazio: 0.216, vazio: 0.1328 } },
    },
  },
  portugalos_condominio_tri_horario: {
    nome: "Portugalos - Condomínio Tri-Horário",
    tipo: "tri_horario",
    potencias: {
      "1.15": { potencia: 0.1121, energia: { ponta: 0.382, cheia: 0.1672, vazio: 0.14155 } },
      "2.30": { potencia: 0.1693, energia: { ponta: 0.382, cheia: 0.1672, vazio: 0.14155 } },
      "3.45": { potencia: 0.2266, energia: { ponta: 0.382, cheia: 0.1672, vazio: 0.14155 } },
      "4.60": { potencia: 0.2839, energia: { ponta: 0.382, cheia: 0.1672, vazio: 0.14155 } },
      "5.75": { potencia: 0.3412, energia: { ponta: 0.382, cheia: 0.1672, vazio: 0.14155 } },
      "6.90": { potencia: 0.3984, energia: { ponta: 0.382, cheia: 0.1672, vazio: 0.14155 } },
      "10.35": { potencia: 0.5702, energia: { ponta: 0.382, cheia: 0.1672, vazio: 0.14155 } },
      "13.80": { potencia: 0.7420, energia: { ponta: 0.382, cheia: 0.1672, vazio: 0.14155 } },
      "17.25": { potencia: 0.9139, energia: { ponta: 0.382, cheia: 0.1672, vazio: 0.14155 } },
      "20.70": { potencia: 1.0857, energia: { ponta: 0.382, cheia: 0.1672, vazio: 0.14155 } },
      "27.60": { potencia: 1.3796, energia: { ponta: 0.382, cheia: 0.1672, vazio: 0.14155 } },
      "34.50": { potencia: 1.7108, energia: { ponta: 0.382, cheia: 0.1672, vazio: 0.14155 } },
      "41.40": { potencia: 2.0420, energia: { ponta: 0.382, cheia: 0.1672, vazio: 0.14155 } },
    },
  },

  portugalos_btn_prime_tri_horario_corrected: {
    nome: "Portugalos - BTN Prime Tri-Horário",
    tipo: "tri_horario",
    potencias: {
      "1.15": { potencia: 0.176241, energia: { ponta: 0.176241, cheia: 0, vazio: 0 } },
      "2.30": { potencia: 0.205804, energia: { ponta: 0.205804, cheia: 0, vazio: 0.121828 } },
      "3.45": { potencia: 0.371098, energia: { ponta: 0.371098, cheia: 0.156231, vazio: 0.133173 } },
      "4.60": { potencia: 0.371598, energia: { ponta: 0.371598, cheia: 0.163361, vazio: 0.130552 } },
    },
  },
  portugalos_btn_prime_bi_horario: {
    nome: "Portugalos - BTN Prime Bi-Horário",
    tipo: "bi_horario",
    potencias: {
      "1.15": { potencia: 0.176241, energia: { fora_vazio: 0.205804, vazio: 0.121828 } },
      "2.30": { potencia: 0.205804, energia: { fora_vazio: 0.371098, vazio: 0.156231 } },
      "3.45": { potencia: 0.371098, energia: { fora_vazio: 0.371098, vazio: 0.133173 } },
      "4.60": { potencia: 0.371598, energia: { fora_vazio: 0.371598, vazio: 0.130552 } },
      "5.75": { potencia: 0.371598, energia: { fora_vazio: 0.371598, vazio: 0.130552 } },
      "6.90": { potencia: 0.371598, energia: { fora_vazio: 0.371598, vazio: 0.130552 } },
      "10.35": { potencia: 0.371598, energia: { fora_vazio: 0.371598, vazio: 0.130552 } },
      "13.80": { potencia: 0.371598, energia: { fora_vazio: 0.371598, vazio: 0.130552 } },
      "17.25": { potencia: 0.371598, energia: { fora_vazio: 0.371598, vazio: 0.130552 } },
      "20.70": { potencia: 0.371598, energia: { fora_vazio: 0.371598, vazio: 0.130552 } },
    },
  },
  portugalos_btn_prime_tri_horario: {
    nome: "Portugalos - BTN Prime Tri-Horário",
    tipo: "tri_horario",
    potencias: {
      "1.15": { potencia: 0.176241, energia: { ponta: 0.205804, cheia: 0.121828, vazio: 0.121828 } },
      "2.30": { potencia: 0.205804, energia: { ponta: 0.371098, cheia: 0.156231, vazio: 0.133173 } },
      "3.45": { potencia: 0.371098, energia: { ponta: 0.371098, cheia: 0.156231, vazio: 0.133173 } },
      "4.60": { potencia: 0.371598, energia: { ponta: 0.371598, cheia: 0.163361, vazio: 0.130552 } },
      "5.75": { potencia: 0.371598, energia: { ponta: 0.371598, cheia: 0.163361, vazio: 0.130552 } },
      "6.90": { potencia: 0.371598, energia: { ponta: 0.371598, cheia: 0.163361, vazio: 0.130552 } },
      "10.35": { potencia: 0.371598, energia: { ponta: 0.371598, cheia: 0.163361, vazio: 0.130552 } },
      "13.80": { potencia: 0.371598, energia: { ponta: 0.371598, cheia: 0.163361, vazio: 0.130552 } },
      "17.25": { potencia: 0.371598, energia: { ponta: 0.371598, cheia: 0.163361, vazio: 0.130552 } },
      "20.70": { potencia: 0.371598, energia: { ponta: 0.371598, cheia: 0.163361, vazio: 0.130552 } },
    },
  },
  meo_simples: {
    nome: "MEO - Simples",
    tipo: "simples",
    potencias: {
      "1.15": { potencia: 0.1500, energia: 0.1699 },
      "2.30": { potencia: 0.2000, energia: 0.1699 },
      "3.45": { potencia: 0.2700, energia: 0.1699 },
      "4.60": { potencia: 0.3800, energia: 0.1699 },
      "5.75": { potencia: 0.4700, energia: 0.1699 },
      "6.90": { potencia: 0.5500, energia: 0.1699 },
      "10.35": { potencia: 0.6500, energia: 0.1699 },
      "13.80": { potencia: 0.8000, energia: 0.1699 },
      "17.25": { potencia: 0.9900, energia: 0.1699 },
      "20.70": { potencia: 1.1500, energia: 0.1699 },
    },
  },
  meo_bi_horario: {
    nome: "MEO - Bi-Horário",
    tipo: "bi_horario",
    potencias: {
      "3.45": { potencia: 0.2700, energia: { fora_vazio: 0.1999, vazio: 0.1199 } },
      "4.60": { potencia: 0.3800, energia: { fora_vazio: 0.1999, vazio: 0.1199 } },
      "5.75": { potencia: 0.4700, energia: { fora_vazio: 0.1999, vazio: 0.1199 } },
      "6.90": { potencia: 0.5500, energia: { fora_vazio: 0.1999, vazio: 0.1199 } },
      "10.35": { potencia: 0.6500, energia: { fora_vazio: 0.1999, vazio: 0.1199 } },
      "13.80": { potencia: 0.8000, energia: { fora_vazio: 0.1999, vazio: 0.1199 } },
      "17.25": { potencia: 0.9900, energia: { fora_vazio: 0.1999, vazio: 0.1199 } },
      "20.70": { potencia: 1.1500, energia: { fora_vazio: 0.1999, vazio: 0.1199 } },
    },
  },
  meo_tri_horario: {
    nome: "MEO - Tri-Horário",
    tipo: "tri_horario",
    potencias: {
      "27.60": { potencia: 1.5000, energia: { ponta: 0.3499, cheia: 0.1699, vazio: 0.1199 } },
      "34.50": { potencia: 2.0000, energia: { ponta: 0.3499, cheia: 0.1699, vazio: 0.1199 } },
      "41.40": { potencia: 2.5000, energia: { ponta: 0.3499, cheia: 0.1699, vazio: 0.1199 } },
    },
  },
};

export const TARIFARIO_GRUPOS = {
  "Tarifário Base": ["base_simples", "base_bi_horario", "base_tri_horario"],
  "Produtos Comerciais": ["produto_x", "produto_z", "produto_zc"],
  "BTN Habalia": ["btn_fix_n1", "btn_fix_n2", "btn_fix_n3", "btn_fix_n4"],
  "EASY": ["easy_1", "easy_2", "easy_3"],
  "BTN Prime": ["btn_prime_simples"],
  "Portugalos": ["portugalos_simples", "portugalos_condominio_simples", "portugalos_condominio_bi_horario", "portugalos_condominio_tri_horario", "portugalos_btn_prime_bi_horario", "portugalos_btn_prime_tri_horario"],
  "MEO Energia": ["meo_simples", "meo_bi_horario", "meo_tri_horario"],
};

// Função para obter comissão baseada em consumo
export function getComissaoByConsumo(tarifarioKey: string, consumoMensal: number): number {
  const consumoDiario = consumoMensal / 30;
  
  let comissaoKey: keyof typeof COMISSOES_CONSUMO | null = null;
  
  if (tarifarioKey.includes("btn_fix_n1")) comissaoKey = "btn_fix_n1";
  else if (tarifarioKey.includes("btn_fix_n2")) comissaoKey = "btn_fix_n2";
  else if (tarifarioKey.includes("btn_fix_n3")) comissaoKey = "btn_fix_n3";
  else if (tarifarioKey.includes("btn_fix_n4")) comissaoKey = "btn_fix_n4";
  else if (tarifarioKey.includes("bte_diario")) comissaoKey = "bte_n1"; // Default to N1
  else if (tarifarioKey.includes("bte_semanal")) comissaoKey = "bte_n1";
  else if (tarifarioKey.includes("mt_semanal")) comissaoKey = "mt_n1";
  else if (tarifarioKey.includes("mt_semanal_opcional")) comissaoKey = "mt_n1";
  
  if (!comissaoKey) return 0;
  
  const faixas = COMISSOES_CONSUMO[comissaoKey];
  for (const faixa of faixas) {
    if (consumoDiario >= faixa.min && consumoDiario < faixa.max) {
      return faixa.comissao;
    }
  }
  
  return 0;
}
