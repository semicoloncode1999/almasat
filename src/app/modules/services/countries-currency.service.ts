import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesCurrencyService {

  constructor() { }

  arabicCurrencies = [
    "ريال السعودي",
    "درهم الإماراتي",
    "جنيه المصري",
    "دينار العراقي",
    "دينار الكويتي",
    "دينار البحريني",
    "ريال العماني",
    "ريال القطري",
    "دينار الأردني",
    "ليرة اللبنانية",
    "ليرة السورية",
    "ريال اليمني",
    "شيكل الفلسطيني",
    "دينار الليبي",
    "دينار التونسي",
    "دينار الجزائري",
    "درهم المغربي",
    "جنيه السوداني",
    "أوقية الموريتانية",
    "فرنك الجيبوتي",
    "فرنك القمري",
    "شيلينغ الصومالي"
  ];

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
    "Somali Shilling"
  ];

}
