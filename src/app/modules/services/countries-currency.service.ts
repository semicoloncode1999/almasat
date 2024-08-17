import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesCurrencyService {

  constructor() { }

  arabicCurrencies = [
            "ريال سعودي",
            "درهم إماراتي",
    // "جنيه مصري",
    // "دينار عراقي",
            "دينار كويتي",
              "دينار بحريني",
            "ريال عماني",
              "ريال قطري",
    // "دينار أردني",
    // "ليرة لبنانية",
    // "ليرة سورية",
    // "ريال يمني",
    // "شيكل فلسطيني",
    // "دينار ليبي",
    // "دينار تونسي",
    // "دينار جزائري",
    // "درهم مغربي",
    // "جنيه سوداني",
    // "أوقية موريتانية",
    // "فرنك جيبوتي",
    // "فرنك قمري",
    // "شيلينغ صومالي",
    "يورو",
    "دولار امريكي"
  ].sort();

  englishCurrencies = [
    "Saudi Riyal",
    "Emirati Dirham",
    "Egyptian Pound",
    "Iraqi Dinar",
    "Kuwaiti Dinar",
    "Bahraini Dinar",
    "Omani Rial",
    "Qatari Riyal",
    "Jordanian Dinar",
    "Lebanese Pound",
    "Syrian Pound",
    "Yemeni Rial",
    "Palestinian Shekel",
    "Libyan Dinar",
    "Tunisian Dinar",
    "Algerian Dinar",
    "Moroccan Dirham",
    "Sudanese Pound",
    "Mauritanian Ouguiya",
    "Djiboutian Franc",
    "Comorian Franc",
    "Somali Shilling",
    "Dollar",
    "euro"
  ].sort();

}
