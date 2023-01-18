export interface CovidKoreaApi {
  apiName: string;
  updateTime: string;
  resultCode: string;
  resultMessage: string;
  deathPcnt: number;
  dataSource: string;
}

export interface CovidKoreaTotal {
  countryNm: string;
  totalCnt: number;
  deathCnt: number;
  qurRate: number;
  incDec: number;
  incDecK: number;
  incDecF: number;
}
