import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Types
interface NominalItem {
  name: string;
  price: number;
  originalPrice?: number;
  label?: string;
}

interface GameNominals {
  [category: string]: NominalItem[];
}

// ============================================================
// COMPREHENSIVE NOMINAL DATA FOR ALL 65 GAMES
// Organized by game slug with categories and labels
// Prices are in IDR (Indonesian Rupiah)
// ============================================================

const allGamesNominals: Record<string, GameNominals> = {
  // ================================================================
  // MOBA GAMES
  // ================================================================
  "mobile-legends-bang-bang": {
    Diamond: [
      { name: "11 Diamond", price: 3300 },
      { name: "22 Diamond", price: 6600 },
      { name: "56 Diamond", price: 16500 },
      { name: "222 Diamond", price: 66000, label: "BEST SELLER" },
      { name: "444 Diamond", price: 132000, label: "BEST SELLER" },
      { name: "666 Diamond", price: 198000 },
      { name: "1344 Diamond", price: 396000, label: "HEMAT" },
      { name: "2195 Diamond", price: 649000, label: "HEMAT" },
      { name: "4390 Diamond", price: 1298000, label: "HEMAT" },
    ],
    "Weekly Diamond Pass": [
      { name: "WDP Mingguan", price: 22000, label: "POPULER" },
      { name: "WDP Bulanan", price: 85000, label: "POPULER" },
    ],
    Starlight: [
      { name: "Starlight Member", price: 50000, label: "POPULER" },
      { name: "Starlight Member Plus", price: 150000, label: "POPULER" },
    ],
  },

  "league-of-legends-wild-rift": {
    "Wild Cores": [
      { name: "65 Wild Cores", price: 15000 },
      { name: "260 Wild Cores", price: 59000, label: "BEST SELLER" },
      { name: "525 Wild Cores", price: 119000 },
      { name: "1045 Wild Cores", price: 229000 },
      { name: "1570 Wild Cores", price: 339000 },
      { name: "2625 Wild Cores", price: 539000, label: "HEMAT" },
    ],
    Pass: [
      { name: "Event Pass", price: 55000, label: "POPULER" },
      { name: "Glint Pass", price: 150000, label: "POPULER" },
    ],
  },

  "arena-of-valor": {
    Voucher: [
      { name: "60 Vouchers", price: 15000 },
      { name: "300 Vouchers", price: 75000, label: "BEST SELLER" },
      { name: "630 Vouchers", price: 150000 },
      { name: "1290 Vouchers", price: 300000 },
      { name: "3240 Vouchers", price: 750000, label: "HEMAT" },
      { name: "6480 Vouchers", price: 1500000, label: "HEMAT" },
    ],
    Pass: [
      { name: "Basic Pass", price: 55000, label: "POPULER" },
      { name: "Premium Pass", price: 150000, label: "POPULER" },
    ],
    Membership: [
      { name: "Member Mingguan", price: 28000 },
      { name: "Member Bulanan", price: 92000 },
    ],
  },

  "heroes-of-the-storm": {
    Gems: [
      { name: "100 Gems", price: 15000 },
      { name: "500 Gems", price: 69000, label: "BEST SELLER" },
      { name: "1000 Gems", price: 129000 },
      { name: "2500 Gems", price: 299000 },
      { name: "5000 Gems", price: 579000, label: "HEMAT" },
      { name: "10000 Gems", price: 1099000, label: "HEMAT" },
    ],
    Pass: [
      { name: "Nexus Pass", price: 55000, label: "POPULER" },
      { name: "Nexus Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  "pokemon-unite": {
    Aeos: [
      { name: "60 Aeos Gems", price: 15000 },
      { name: "325 Aeos Gems", price: 75000, label: "BEST SELLER" },
      { name: "650 Aeos Gems", price: 145000 },
      { name: "1400 Aeos Gems", price: 299000 },
      { name: "2750 Aeos Gems", price: 579000, label: "HEMAT" },
      { name: "5700 Aeos Gems", price: 1159000, label: "HEMAT" },
    ],
    Pass: [
      { name: "Battle Pass Basic", price: 55000, label: "POPULER" },
      { name: "Battle Pass Premium", price: 150000, label: "POPULER" },
    ],
    Membership: [
      { name: "Unite Club Mingguan", price: 28000 },
      { name: "Unite Club Bulanan", price: 92000 },
    ],
  },

  // ================================================================
  // BATTLE ROYALE GAMES
  // ================================================================
  "free-fire": {
    Diamond: [
      { name: "100 Diamond", price: 1000 },
      { name: "310 Diamond", price: 5000 },
      { name: "520 Diamond", price: 12000 },
      { name: "1060 Diamond", price: 24000 },
      { name: "2180 Diamond", price: 49000 },
      { name: "5600 Diamond", price: 120000, label: "BEST SELLER" },
      { name: "11200 Diamond", price: 240000, label: "BEST SELLER" },
      { name: "22400 Diamond", price: 480000 },
      { name: "56000 Diamond", price: 1200000, label: "HEMAT" },
      { name: "112000 Diamond", price: 2400000, label: "HEMAT" },
      { name: "224000 Diamond", price: 4800000, label: "HEMAT" },
    ],
    "Booyah Pass": [
      { name: "Booyah Pass Basic", price: 55000, label: "POPULER" },
      { name: "Booyah Pass Premium", price: 135000, label: "POPULER" },
    ],
    Membership: [
      { name: "Membership Mingguan", price: 28000 },
      { name: "Membership Bulanan", price: 92000 },
    ],
  },

  "pubg-mobile": {
    UC: [
      { name: "60 UC", price: 15000 },
      { name: "325 UC", price: 75000, label: "BEST SELLER" },
      { name: "660 UC", price: 150000 },
      { name: "1800 UC", price: 380000 },
      { name: "3850 UC", price: 760000, label: "HEMAT" },
      { name: "8100 UC", price: 1500000, label: "HEMAT" },
    ],
    "Royale Pass": [
      { name: "Royale Pass Basic", price: 55000, label: "POPULER" },
      { name: "Royale Pass Elite", price: 150000, label: "POPULER" },
      { name: "Royale Pass Elite Plus", price: 280000, label: "POPULER" },
    ],
    "Prime Plus": [
      { name: "Prime Plus Mingguan", price: 28000 },
      { name: "Prime Plus Bulanan", price: 92000 },
    ],
  },

  "call-of-duty-mobile": {
    CP: [
      { name: "80 CP", price: 18000 },
      { name: "400 CP", price: 90000, label: "BEST SELLER" },
      { name: "800 CP", price: 180000 },
      { name: "1600 CP", price: 360000 },
      { name: "3200 CP", price: 720000, label: "HEMAT" },
      { name: "6400 CP", price: 1440000, label: "HEMAT" },
      { name: "12800 CP", price: 2880000, label: "HEMAT" },
    ],
    "Battle Pass": [
      { name: "Battle Pass Basic", price: 55000, label: "POPULER" },
      { name: "Battle Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  "apex-legends-mobile": {
    Tokens: [
      { name: "60 Tokens", price: 15000 },
      { name: "325 Tokens", price: 75000, label: "BEST SELLER" },
      { name: "650 Tokens", price: 150000 },
      { name: "1800 Tokens", price: 380000 },
      { name: "3850 Tokens", price: 760000, label: "HEMAT" },
      { name: "8100 Tokens", price: 1500000, label: "HEMAT" },
    ],
    Pass: [
      { name: "Battle Pass Basic", price: 55000, label: "POPULER" },
      { name: "Battle Pass Premium", price: 150000, label: "POPULER" },
    ],
    Membership: [
      { name: "Membership Mingguan", price: 28000 },
      { name: "Membership Bulanan", price: 92000 },
    ],
  },

  "farlight-84": {
    Gold: [
      { name: "60 Gold", price: 15000 },
      { name: "325 Gold", price: 75000, label: "BEST SELLER" },
      { name: "650 Gold", price: 150000 },
      { name: "1800 Gold", price: 380000 },
      { name: "3850 Gold", price: 760000, label: "HEMAT" },
      { name: "8100 Gold", price: 1500000, label: "HEMAT" },
    ],
    Pass: [
      { name: "Battle Pass Basic", price: 55000, label: "POPULER" },
      { name: "Battle Pass Premium", price: 150000, label: "POPULER" },
    ],
    Membership: [
      { name: "Membership Mingguan", price: 28000 },
      { name: "Membership Bulanan", price: 92000 },
    ],
  },

  valorant: {
    VP: [
      { name: "125 VP", price: 15000 },
      { name: "420 VP", price: 49000 },
      { name: "700 VP", price: 79000, label: "BEST SELLER" },
      { name: "1375 VP", price: 149000 },
      { name: "2400 VP", price: 249000 },
      { name: "4000 VP", price: 399000, label: "HEMAT" },
      { name: "8150 VP", price: 799000, label: "HEMAT" },
    ],
    Battlepass: [
      { name: "Battlepass Basic", price: 55000, label: "POPULER" },
      { name: "Battlepass Premium", price: 125000, label: "POPULER" },
    ],
  },

  // ================================================================
  // RPG GAMES
  // ================================================================
  "genshin-impact": {
    "Genesis Crystal": [
      { name: "60 Genesis Crystal", price: 16000 },
      { name: "300 Genesis Crystal", price: 79000 },
      { name: "980 Genesis Crystal", price: 249000 },
      { name: "1980 Genesis Crystal", price: 499000 },
      { name: "3280 Genesis Crystal", price: 799000, label: "BEST SELLER" },
      { name: "6480 Genesis Crystal", price: 1599000, label: "HEMAT" },
    ],
    "Welkin Moon": [
      { name: "Blessing of Welkin Moon", price: 59000, label: "POPULER" },
    ],
    "Battle Pass": [
      { name: "Gnostic Hymn Basic", price: 75000, label: "POPULER" },
      { name: "Gnostic Hymn Premium", price: 150000, label: "POPULER" },
    ],
  },

  "honkai-star-rail": {
    "Oneiric Shard": [
      { name: "60 Oneiric Shard", price: 16000 },
      { name: "300 Oneiric Shard", price: 79000 },
      { name: "980 Oneiric Shard", price: 249000 },
      { name: "1980 Oneiric Shard", price: 499000 },
      { name: "3280 Oneiric Shard", price: 799000, label: "BEST SELLER" },
      { name: "6480 Oneiric Shard", price: 1599000, label: "HEMAT" },
    ],
    "Express Pass": [
      { name: "Monthly Express Pass", price: 59000, label: "POPULER" },
    ],
    "Battle Pass": [
      { name: "Nameless Honor Basic", price: 75000, label: "POPULER" },
      { name: "Nameless Honor Premium", price: 150000, label: "POPULER" },
    ],
  },

  "honkai-impact-3rd": {
    Crystal: [
      { name: "60 Crystal", price: 16000 },
      { name: "300 Crystal", price: 79000 },
      { name: "980 Crystal", price: 249000 },
      { name: "1980 Crystal", price: 499000 },
      { name: "3280 Crystal", price: 799000, label: "BEST SELLER" },
      { name: "6480 Crystal", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Monthly Card", price: 59000, label: "POPULER" },
    ],
    "Battle Pass": [
      { name: "Abyssal Focus Basic", price: 75000, label: "POPULER" },
      { name: "Abyssal Focus Premium", price: 150000, label: "POPULER" },
    ],
  },

  "wuthering-waves": {
    Astrite: [
      { name: "60 Astrite", price: 16000 },
      { name: "300 Astrite", price: 79000 },
      { name: "980 Astrite", price: 249000 },
      { name: "1980 Astrite", price: 499000 },
      { name: "3280 Astrite", price: 799000, label: "BEST SELLER" },
      { name: "6480 Astrite", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Lunite Subscription", price: 59000, label: "POPULER" },
    ],
    "Battle Pass": [
      { name: "Tidal Bounty Basic", price: 75000, label: "POPULER" },
      { name: "Tidal Bounty Premium", price: 150000, label: "POPULER" },
    ],
  },

  "zenless-zone-zero": {
    Monochrome: [
      { name: "60 Monochrome", price: 16000 },
      { name: "300 Monochrome", price: 79000 },
      { name: "980 Monochrome", price: 249000 },
      { name: "1980 Monochrome", price: 499000 },
      { name: "3280 Monochrome", price: 799000, label: "BEST SELLER" },
      { name: "6480 Monochrome", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Signal Search Subscription", price: 59000, label: "POPULER" },
    ],
    "Battle Pass": [
      { name: "Fundamental Bounty Basic", price: 75000, label: "POPULER" },
      { name: "Fundamental Bounty Premium", price: 150000, label: "POPULER" },
    ],
  },

  "tower-of-fantasy": {
    Dark: [
      { name: "60 Dark Crystals", price: 16000 },
      { name: "300 Dark Crystals", price: 79000 },
      { name: "980 Dark Crystals", price: 249000 },
      { name: "1980 Dark Crystals", price: 499000 },
      { name: "3280 Dark Crystals", price: 799000, label: "BEST SELLER" },
      { name: "6480 Dark Crystals", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Monthly Pass", price: 59000, label: "POPULER" },
    ],
    "Battle Pass": [
      { name: "Vitality Basic", price: 75000, label: "POPULER" },
      { name: "Vitality Premium", price: 150000, label: "POPULER" },
    ],
  },

  "punishing-gray-raven": {
    Serenade: [
      { name: "60 Serenade", price: 16000 },
      { name: "300 Serenade", price: 79000 },
      { name: "980 Serenade", price: 249000 },
      { name: "1980 Serenade", price: 499000 },
      { name: "3280 Serenade", price: 799000, label: "BEST SELLER" },
      { name: "6480 Serenade", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Monthly Supply Card", price: 59000, label: "POPULER" },
    ],
    "Battle Pass": [
      { name: "Forthcoming Basic", price: 75000, label: "POPULER" },
      { name: "Forthcoming Premium", price: 150000, label: "POPULER" },
    ],
  },

  arknights: {
    Originium: [
      { name: "6 Originite Prime", price: 16000 },
      { name: "30 Originite Prime", price: 79000 },
      { name: "98 Originite Prime", price: 249000 },
      { name: "198 Originite Prime", price: 499000 },
      { name: "328 Originite Prime", price: 799000, label: "BEST SELLER" },
      { name: "648 Originite Prime", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Monthly Card", price: 59000, label: "POPULER" },
    ],
    "Battle Pass": [
      { name: "Operation Basis Basic", price: 75000, label: "POPULER" },
      { name: "Operation Basis Premium", price: 150000, label: "POPULER" },
    ],
  },

  "fate-grand-order": {
    Saint: [
      { name: "1 Saint Quartz", price: 16000 },
      { name: "5 Saint Quartz", price: 79000 },
      { name: "17 Saint Quartz", price: 249000 },
      { name: "35 Saint Quartz", price: 499000 },
      { name: "59 Saint Quartz", price: 799000, label: "BEST SELLER" },
      { name: "167 Saint Quartz", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Monthly Pass", price: 59000, label: "POPULER" },
    ],
  },

  "epic-seven": {
    Skystone: [
      { name: "60 Skystone", price: 16000 },
      { name: "300 Skystone", price: 79000 },
      { name: "980 Skystone", price: 249000 },
      { name: "1980 Skystone", price: 499000 },
      { name: "3280 Skystone", price: 799000, label: "BEST SELLER" },
      { name: "6480 Skystone", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Monthly Pack", price: 59000, label: "POPULER" },
    ],
    "Battle Pass": [
      { name: "Hero Festival Basic", price: 75000, label: "POPULER" },
      { name: "Hero Festival Premium", price: 150000, label: "POPULER" },
    ],
  },

  "summoners-war": {
    Crystal: [
      { name: "50 Crystal", price: 16000 },
      { name: "250 Crystal", price: 79000 },
      { name: "825 Crystal", price: 249000 },
      { name: "1650 Crystal", price: 499000 },
      { name: "2750 Crystal", price: 799000, label: "BEST SELLER" },
      { name: "5500 Crystal", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Crystal Subscription", price: 59000, label: "POPULER" },
    ],
    "Battle Pass": [
      { name: "Tower of Ascension Basic", price: 75000, label: "POPULER" },
      { name: "Tower of Ascension Premium", price: 150000, label: "POPULER" },
    ],
  },

  "azur-lane": {
    Gems: [
      { name: "60 Gems", price: 16000 },
      { name: "300 Gems", price: 79000 },
      { name: "980 Gems", price: 249000 },
      { name: "1980 Gems", price: 499000 },
      { name: "3280 Gems", price: 799000, label: "BEST SELLER" },
      { name: "6480 Gems", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Monthly Pass", price: 59000, label: "POPULER" },
    ],
  },

  "girls-frontline": {
    Gem: [
      { name: "60 Gem", price: 16000 },
      { name: "300 Gem", price: 79000 },
      { name: "980 Gem", price: 249000 },
      { name: "1980 Gem", price: 499000 },
      { name: "3280 Gem", price: 799000, label: "BEST SELLER" },
      { name: "6480 Gem", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Monthly Pass", price: 59000, label: "POPULER" },
    ],
    "Battle Pass": [
      { name: "Contingency Contract Basic", price: 75000, label: "POPULER" },
      { name: "Contingency Contract Premium", price: 150000, label: "POPULER" },
    ],
  },

  "naruto-mobile": {
    Coins: [
      { name: "60 Coins", price: 16000 },
      { name: "300 Coins", price: 79000 },
      { name: "980 Coins", price: 249000 },
      { name: "1980 Coins", price: 499000 },
      { name: "3280 Coins", price: 799000, label: "BEST SELLER" },
      { name: "6480 Coins", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Monthly Card", price: 59000, label: "POPULER" },
    ],
    "Battle Pass": [
      { name: "Basic Pass", price: 75000, label: "POPULER" },
      { name: "Premium Pass", price: 150000, label: "POPULER" },
    ],
  },

  "dragon-ball-legends": {
    Crystal: [
      { name: "50 Crystal", price: 16000 },
      { name: "250 Crystal", price: 79000 },
      { name: "825 Crystal", price: 249000 },
      { name: "1650 Crystal", price: 499000 },
      { name: "2750 Crystal", price: 799000, label: "BEST SELLER" },
      { name: "5500 Crystal", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Monthly Pass", price: 59000, label: "POPULER" },
    ],
    "Battle Pass": [
      { name: "Rising Power Basic", price: 75000, label: "POPULER" },
      { name: "Rising Power Premium", price: 150000, label: "POPULER" },
    ],
  },

  // ================================================================
  // STRATEGY GAMES
  // ================================================================
  "clash-of-clans": {
    Gems: [
      { name: "80 Gems", price: 19000 },
      { name: "500 Gems", price: 119000 },
      { name: "1200 Gems", price: 285000, label: "BEST SELLER" },
      { name: "2500 Gems", price: 599000 },
      { name: "6500 Gems", price: 1499000, label: "HEMAT" },
      { name: "14000 Gems", price: 3099000, label: "HEMAT" },
    ],
    "Gold Pass": [
      { name: "Gold Pass", price: 55000, label: "POPULER" },
    ],
  },

  "clash-royale": {
    Gems: [
      { name: "80 Gems", price: 19000 },
      { name: "500 Gems", price: 119000 },
      { name: "1200 Gems", price: 285000, label: "BEST SELLER" },
      { name: "2500 Gems", price: 599000 },
      { name: "6500 Gems", price: 1499000, label: "HEMAT" },
      { name: "14000 Gems", price: 3099000, label: "HEMAT" },
    ],
    "Pass Royale": [
      { name: "Pass Royale", price: 55000, label: "POPULER" },
    ],
  },

  "rise-of-kingdoms": {
    Gems: [
      { name: "80 Gems", price: 19000 },
      { name: "400 Gems", price: 95000 },
      { name: "800 Gems", price: 190000 },
      { name: "2000 Gems", price: 475000, label: "BEST SELLER" },
      { name: "5000 Gems", price: 1149000 },
      { name: "10000 Gems", price: 2299000, label: "HEMAT" },
    ],
    Pass: [
      { name: "Pass Basic", price: 55000, label: "POPULER" },
      { name: "Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  "lords-mobile": {
    Gems: [
      { name: "80 Gems", price: 19000 },
      { name: "400 Gems", price: 95000 },
      { name: "800 Gems", price: 190000 },
      { name: "2000 Gems", price: 475000, label: "BEST SELLER" },
      { name: "5000 Gems", price: 1149000 },
      { name: "10000 Gems", price: 2299000, label: "HEMAT" },
    ],
    Pass: [
      { name: "VIP Basic", price: 55000, label: "POPULER" },
      { name: "VIP Premium", price: 150000, label: "POPULER" },
    ],
  },

  "guns-of-glory": {
    Gold: [
      { name: "80 Gold", price: 19000 },
      { name: "400 Gold", price: 95000 },
      { name: "800 Gold", price: 190000 },
      { name: "2000 Gold", price: 475000, label: "BEST SELLER" },
      { name: "5000 Gold", price: 1149000 },
      { name: "10000 Gold", price: 2299000, label: "HEMAT" },
    ],
    Pass: [
      { name: "Alliance Pass Basic", price: 55000, label: "POPULER" },
      { name: "Alliance Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  evony: {
    Gems: [
      { name: "80 Gems", price: 19000 },
      { name: "400 Gems", price: 95000 },
      { name: "800 Gems", price: 190000 },
      { name: "2000 Gems", price: 475000, label: "BEST SELLER" },
      { name: "5000 Gems", price: 1149000 },
      { name: "10000 Gems", price: 2299000, label: "HEMAT" },
    ],
    Pass: [
      { name: "Evony Pass Basic", price: 55000, label: "POPULER" },
      { name: "Evony Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  "king-of-kings": {
    Gold: [
      { name: "80 Gold", price: 19000 },
      { name: "400 Gold", price: 95000 },
      { name: "800 Gold", price: 190000 },
      { name: "2000 Gold", price: 475000, label: "BEST SELLER" },
      { name: "5000 Gold", price: 1149000 },
      { name: "10000 Gold", price: 2299000, label: "HEMAT" },
    ],
    Pass: [
      { name: "King's Pass Basic", price: 55000, label: "POPULER" },
      { name: "King's Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  "rise-of-nowlin": {
    Crystal: [
      { name: "80 Crystal", price: 19000 },
      { name: "400 Crystal", price: 95000 },
      { name: "800 Crystal", price: 190000 },
      { name: "2000 Crystal", price: 475000, label: "BEST SELLER" },
      { name: "5000 Crystal", price: 1149000 },
      { name: "10000 Crystal", price: 2299000, label: "HEMAT" },
    ],
    Pass: [
      { name: "Rise Pass Basic", price: 55000, label: "POPULER" },
      { name: "Rise Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  // ================================================================
  // MMORPG GAMES
  // ================================================================
  "ragnarok-m-eternal-love": {
    Zeny: [
      { name: "50 Zeny", price: 16000 },
      { name: "250 Zeny", price: 79000 },
      { name: "825 Zeny", price: 249000 },
      { name: "1650 Zeny", price: 499000 },
      { name: "2750 Zeny", price: 799000, label: "BEST SELLER" },
      { name: "5500 Zeny", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Premium Monthly", price: 59000, label: "POPULER" },
    ],
    "Battle Pass": [
      { name: "Guild Pass Basic", price: 75000, label: "POPULER" },
      { name: "Guild Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  "tree-of-savior": {
    TP: [
      { name: "50 TP", price: 16000 },
      { name: "250 TP", price: 79000 },
      { name: "825 TP", price: 249000 },
      { name: "1650 TP", price: 499000 },
      { name: "2750 TP", price: 799000, label: "BEST SELLER" },
      { name: "5500 TP", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Token Monthly", price: 59000, label: "POPULER" },
    ],
  },

  "black-desert-mobile": {
    Pearl: [
      { name: "100 Pearl", price: 16000 },
      { name: "500 Pearl", price: 79000 },
      { name: "1650 Pearl", price: 249000 },
      { name: "3300 Pearl", price: 499000 },
      { name: "5500 Pearl", price: 799000, label: "BEST SELLER" },
      { name: "11000 Pearl", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Value Pack Monthly", price: 69000, label: "POPULER" },
    ],
    "Battle Pass": [
      { name: "Abyss Pass Basic", price: 75000, label: "POPULER" },
      { name: "Abyss Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  "dragon-nest-mobile": {
    Diamond: [
      { name: "60 Diamond", price: 16000 },
      { name: "300 Diamond", price: 79000 },
      { name: "980 Diamond", price: 249000 },
      { name: "1980 Diamond", price: 499000 },
      { name: "3280 Diamond", price: 799000, label: "BEST SELLER" },
      { name: "6480 Diamond", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Monthly Pack", price: 59000, label: "POPULER" },
    ],
    "Battle Pass": [
      { name: "Dragon Pass Basic", price: 75000, label: "POPULER" },
      { name: "Dragon Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  "lineage-2m": {
    Adena: [
      { name: "100 Adena", price: 16000 },
      { name: "500 Adena", price: 79000 },
      { name: "1650 Adena", price: 249000 },
      { name: "3300 Adena", price: 499000 },
      { name: "5500 Adena", price: 799000, label: "BEST SELLER" },
      { name: "11000 Adena", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Premium Monthly", price: 99000, label: "POPULER" },
    ],
  },

  "lineage-w": {
    Adena: [
      { name: "100 Adena", price: 16000 },
      { name: "500 Adena", price: 79000 },
      { name: "1650 Adena", price: 249000 },
      { name: "3300 Adena", price: 499000 },
      { name: "5500 Adena", price: 799000, label: "BEST SELLER" },
      { name: "11000 Adena", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Premium Monthly", price: 99000, label: "POPULER" },
    ],
  },

  "perfect-world-mobile": {
    Gold: [
      { name: "60 Gold", price: 16000 },
      { name: "300 Gold", price: 79000 },
      { name: "980 Gold", price: 249000 },
      { name: "1980 Gold", price: 499000 },
      { name: "3280 Gold", price: 799000, label: "BEST SELLER" },
      { name: "6480 Gold", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Monthly Pass", price: 59000, label: "POPULER" },
    ],
    "Battle Pass": [
      { name: "Jade Pass Basic", price: 75000, label: "POPULER" },
      { name: "Jade Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  lifeafter: {
    Gold: [
      { name: "60 Gold", price: 16000 },
      { name: "300 Gold", price: 79000 },
      { name: "980 Gold", price: 249000 },
      { name: "1980 Gold", price: 499000 },
      { name: "3280 Gold", price: 799000, label: "BEST SELLER" },
      { name: "6480 Gold", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Survival Monthly", price: 59000, label: "POPULER" },
    ],
    "Battle Pass": [
      { name: "Season Pass Basic", price: 75000, label: "POPULER" },
      { name: "Season Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  // ================================================================
  // ACTION GAMES
  // ================================================================
  "brawl-stars": {
    Gems: [
      { name: "30 Gems", price: 9000 },
      { name: "80 Gems", price: 22000 },
      { name: "170 Gems", price: 44000 },
      { name: "300 Gems", price: 79000, label: "BEST SELLER" },
      { name: "530 Gems", price: 132000 },
      { name: "1060 Gems", price: 249000 },
      { name: "1830 Gems", price: 419000, label: "HEMAT" },
      { name: "3480 Gems", price: 799000, label: "HEMAT" },
    ],
    "Brawl Pass": [
      { name: "Brawl Pass Basic", price: 55000, label: "POPULER" },
      { name: "Brawl Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  "garena-aov": {
    Tokens: [
      { name: "60 Tokens", price: 15000 },
      { name: "300 Tokens", price: 75000, label: "BEST SELLER" },
      { name: "630 Tokens", price: 150000 },
      { name: "1290 Tokens", price: 300000 },
      { name: "3240 Tokens", price: 750000, label: "HEMAT" },
      { name: "6480 Tokens", price: 1500000, label: "HEMAT" },
    ],
    Pass: [
      { name: "Arcana Pass Basic", price: 55000, label: "POPULER" },
      { name: "Arcana Pass Premium", price: 150000, label: "POPULER" },
    ],
    Membership: [
      { name: "Member Mingguan", price: 28000 },
      { name: "Member Bulanan", price: 92000 },
    ],
  },

  "seven-knights-2": {
    Ruby: [
      { name: "60 Ruby", price: 16000 },
      { name: "300 Ruby", price: 79000 },
      { name: "980 Ruby", price: 249000 },
      { name: "1980 Ruby", price: 499000 },
      { name: "3280 Ruby", price: 799000, label: "BEST SELLER" },
      { name: "6480 Ruby", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Monthly Pass", price: 59000, label: "POPULER" },
    ],
    "Battle Pass": [
      { name: "Seven Knights Pass Basic", price: 75000, label: "POPULER" },
      { name: "Seven Knights Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  "solo-leveling-arise": {
    Stone: [
      { name: "60 Stones", price: 16000 },
      { name: "300 Stones", price: 79000 },
      { name: "980 Stones", price: 249000 },
      { name: "1980 Stones", price: 499000 },
      { name: "3280 Stones", price: 799000, label: "BEST SELLER" },
      { name: "6480 Stones", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Hunter Pass Monthly", price: 59000, label: "POPULER" },
    ],
    "Battle Pass": [
      { name: "Arise Pass Basic", price: 75000, label: "POPULER" },
      { name: "Arise Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  "dead-by-daylight-mobile": {
    Auric: [
      { name: "60 Auric Cells", price: 15000 },
      { name: "300 Auric Cells", price: 75000, label: "BEST SELLER" },
      { name: "600 Auric Cells", price: 145000 },
      { name: "1200 Auric Cells", price: 289000 },
      { name: "2400 Auric Cells", price: 569000, label: "HEMAT" },
      { name: "5000 Auric Cells", price: 1159000, label: "HEMAT" },
    ],
    Pass: [
      { name: "Rift Pass Basic", price: 55000, label: "POPULER" },
      { name: "Rift Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  "identity-v": {
    Fragments: [
      { name: "60 Fragments", price: 15000 },
      { name: "300 Fragments", price: 75000, label: "BEST SELLER" },
      { name: "600 Fragments", price: 145000 },
      { name: "1200 Fragments", price: 289000 },
      { name: "2400 Fragments", price: 569000, label: "HEMAT" },
      { name: "5000 Fragments", price: 1159000, label: "HEMAT" },
    ],
    Pass: [
      { name: "Essence Pass Basic", price: 55000, label: "POPULER" },
      { name: "Essence Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  "sky-children-of-the-light": {
    Candles: [
      { name: "6 Candles", price: 15000 },
      { name: "24 Candles", price: 59000, label: "BEST SELLER" },
      { name: "60 Candles", price: 145000 },
      { name: "120 Candles", price: 289000 },
      { name: "300 Candles", price: 699000, label: "HEMAT" },
      { name: "660 Candles", price: 1399000, label: "HEMAT" },
    ],
    Pass: [
      { name: "Season Pass Basic", price: 55000, label: "POPULER" },
      { name: "Season Pass Premium", price: 150000, label: "POPULER" },
    ],
    Membership: [
      { name: "Adventure Pass Mingguan", price: 28000 },
      { name: "Adventure Pass Bulanan", price: 92000 },
    ],
  },

  "love-nikki": {
    Diamonds: [
      { name: "60 Diamonds", price: 16000 },
      { name: "300 Diamonds", price: 79000 },
      { name: "980 Diamonds", price: 249000 },
      { name: "1980 Diamonds", price: 499000 },
      { name: "3280 Diamonds", price: 799000, label: "BEST SELLER" },
      { name: "6480 Diamonds", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Monthly Pass", price: 59000, label: "POPULER" },
    ],
  },

  "saint-seiya-awakening": {
    Crystal: [
      { name: "60 Crystal", price: 16000 },
      { name: "300 Crystal", price: 79000 },
      { name: "980 Crystal", price: 249000 },
      { name: "1980 Crystal", price: 499000 },
      { name: "3280 Crystal", price: 799000, label: "BEST SELLER" },
      { name: "6480 Crystal", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Cosmo Monthly Pass", price: 59000, label: "POPULER" },
    ],
    "Battle Pass": [
      { name: "Knights Pass Basic", price: 75000, label: "POPULER" },
      { name: "Knights Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  "heaven-burns-red": {
    Crystal: [
      { name: "60 Crystal", price: 16000 },
      { name: "300 Crystal", price: 79000 },
      { name: "980 Crystal", price: 249000 },
      { name: "1980 Crystal", price: 499000 },
      { name: "3280 Crystal", price: 799000, label: "BEST SELLER" },
      { name: "6480 Crystal", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Monthly Pass", price: 59000, label: "POPULER" },
    ],
    "Battle Pass": [
      { name: "Season Pass Basic", price: 75000, label: "POPULER" },
      { name: "Season Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  // ================================================================
  // SPORTS GAMES
  // ================================================================
  "fifa-mobile": {
    Points: [
      { name: "100 Points", price: 15000 },
      { name: "500 Points", price: 69000, label: "BEST SELLER" },
      { name: "1050 Points", price: 139000 },
      { name: "2200 Points", price: 289000 },
      { name: "4600 Points", price: 579000, label: "HEMAT" },
      { name: "12000 Points", price: 1399000, label: "HEMAT" },
    ],
    Pass: [
      { name: "Season Pass Basic", price: 55000, label: "POPULER" },
      { name: "Season Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  efootball: {
    GP: [
      { name: "100 GP", price: 15000 },
      { name: "500 GP", price: 69000, label: "BEST SELLER" },
      { name: "1050 GP", price: 139000 },
      { name: "2200 GP", price: 289000 },
      { name: "4600 GP", price: 579000, label: "HEMAT" },
      { name: "12000 GP", price: 1399000, label: "HEMAT" },
    ],
    Pass: [
      { name: "eFootball Pass Basic", price: 55000, label: "POPULER" },
      { name: "eFootball Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  "nba-2k-mobile": {
    VC: [
      { name: "100 VC", price: 15000 },
      { name: "500 VC", price: 69000, label: "BEST SELLER" },
      { name: "1050 VC", price: 139000 },
      { name: "2200 VC", price: 289000 },
      { name: "4600 VC", price: 579000, label: "HEMAT" },
      { name: "12000 VC", price: 1399000, label: "HEMAT" },
    ],
    Pass: [
      { name: "Season Pass Basic", price: 55000, label: "POPULER" },
      { name: "Season Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  "asphalt-9-legends": {
    Tokens: [
      { name: "80 Tokens", price: 15000 },
      { name: "400 Tokens", price: 69000, label: "BEST SELLER" },
      { name: "800 Tokens", price: 139000 },
      { name: "2000 Tokens", price: 339000 },
      { name: "4000 Tokens", price: 669000, label: "HEMAT" },
      { name: "8000 Tokens", price: 1299000, label: "HEMAT" },
    ],
    Pass: [
      { name: "Season Pass Basic", price: 55000, label: "POPULER" },
      { name: "Season Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  // ================================================================
  // CARD GAMES
  // ================================================================
  "yu-gi-oh-master-duel": {
    Gems: [
      { name: "100 Gems", price: 15000 },
      { name: "600 Gems", price: 79000, label: "BEST SELLER" },
      { name: "1200 Gems", price: 149000 },
      { name: "2500 Gems", price: 289000 },
      { name: "5000 Gems", price: 569000, label: "HEMAT" },
      { name: "9000 Gems", price: 999000, label: "HEMAT" },
    ],
    Pass: [
      { name: "Duel Pass Basic", price: 55000, label: "POPULER" },
      { name: "Duel Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  "marvel-snap": {
    Gold: [
      { name: "100 Gold", price: 15000 },
      { name: "600 Gold", price: 79000, label: "BEST SELLER" },
      { name: "1200 Gold", price: 149000 },
      { name: "2500 Gold", price: 289000 },
      { name: "5000 Gold", price: 569000, label: "HEMAT" },
      { name: "9000 Gold", price: 999000, label: "HEMAT" },
    ],
    Pass: [
      { name: "Season Pass Basic", price: 55000, label: "POPULER" },
      { name: "Season Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  hearthstone: {
    Gold: [
      { name: "2 Packs", price: 15000 },
      { name: "7 Packs", price: 49000 },
      { name: "15 Packs", price: 99000, label: "BEST SELLER" },
      { name: "40 Packs", price: 249000 },
      { name: "60 Packs", price: 369000 },
      { name: "80 Packs", price: 489000, label: "HEMAT" },
    ],
    Pass: [
      { name: "Tavern Pass Basic", price: 55000, label: "POPULER" },
      { name: "Tavern Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  "magic-the-gathering-arena": {
    Gems: [
      { name: "750 Gems", price: 15000 },
      { name: "4500 Gems", price: 79000, label: "BEST SELLER" },
      { name: "9000 Gems", price: 149000 },
      { name: "19000 Gems", price: 289000 },
      { name: "38000 Gems", price: 569000, label: "HEMAT" },
      { name: "68000 Gems", price: 999000, label: "HEMAT" },
    ],
    Pass: [
      { name: "Mastery Pass Basic", price: 55000, label: "POPULER" },
      { name: "Mastery Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  "auto-chess": {
    Candy: [
      { name: "60 Candy", price: 15000 },
      { name: "300 Candy", price: 75000, label: "BEST SELLER" },
      { name: "600 Candy", price: 145000 },
      { name: "1200 Candy", price: 289000 },
      { name: "3000 Candy", price: 699000, label: "HEMAT" },
      { name: "6000 Candy", price: 1399000, label: "HEMAT" },
    ],
    Pass: [
      { name: "Season Pass Basic", price: 55000, label: "POPULER" },
      { name: "Season Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  // ================================================================
  // OTHER GAMES
  // ================================================================
  "toram-online": {
    Orb: [
      { name: "60 Orb", price: 16000 },
      { name: "300 Orb", price: 79000 },
      { name: "980 Orb", price: 249000 },
      { name: "1980 Orb", price: 499000 },
      { name: "3280 Orb", price: 799000, label: "BEST SELLER" },
      { name: "6480 Orb", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Monthly Pass", price: 59000, label: "POPULER" },
    ],
  },

  elsword: {
    "K-Ching": [
      { name: "100 K-Ching", price: 15000 },
      { name: "500 K-Ching", price: 69000, label: "BEST SELLER" },
      { name: "1000 K-Ching", price: 139000 },
      { name: "2500 K-Ching", price: 339000 },
      { name: "5000 K-Ching", price: 669000, label: "HEMAT" },
      { name: "10000 K-Ching", price: 1299000, label: "HEMAT" },
    ],
    Pass: [
      { name: "Avatar Pass Basic", price: 55000, label: "POPULER" },
      { name: "Avatar Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  "grand-chase": {
    "K-Ching": [
      { name: "100 K-Ching", price: 15000 },
      { name: "500 K-Ching", price: 69000, label: "BEST SELLER" },
      { name: "1000 K-Ching", price: 139000 },
      { name: "2500 K-Ching", price: 339000 },
      { name: "5000 K-Ching", price: 669000, label: "HEMAT" },
      { name: "10000 K-Ching", price: 1299000, label: "HEMAT" },
    ],
    Pass: [
      { name: "Season Pass Basic", price: 55000, label: "POPULER" },
      { name: "Season Pass Premium", price: 150000, label: "POPULER" },
    ],
  },

  "ultra-demons": {
    Crystal: [
      { name: "60 Crystal", price: 16000 },
      { name: "300 Crystal", price: 79000 },
      { name: "980 Crystal", price: 249000 },
      { name: "1980 Crystal", price: 499000 },
      { name: "3280 Crystal", price: 799000, label: "BEST SELLER" },
      { name: "6480 Crystal", price: 1599000, label: "HEMAT" },
    ],
    "Monthly Pass": [
      { name: "Monthly Pass", price: 59000, label: "POPULER" },
    ],
    "Battle Pass": [
      { name: "Demon Pass Basic", price: 75000, label: "POPULER" },
      { name: "Demon Pass Premium", price: 150000, label: "POPULER" },
    ],
  },
};

async function main() {
  console.log("=== ZallTopUp Nominal Update Script ===\n");

  // Fetch all games
  const games = await prisma.game.findMany({
    select: { id: true, slug: true, name: true, category: true },
    orderBy: { createdAt: "asc" },
  });

  console.log(`Found ${games.length} games in database.\n`);

  let totalInserted = 0;
  let gamesUpdated = 0;
  let gamesSkipped = 0;

  for (const game of games) {
    const nominals = allGamesNominals[game.slug];

    if (!nominals) {
      console.log(`⚠️  SKIP: ${game.name} (${game.slug}) — no nominal data`);
      gamesSkipped++;
      continue;
    }

    // Prepare all nominal records for this game
    const records: Array<{
      gameId: string;
      name: string;
      price: number;
      originalPrice: number | null;
      category: string;
      label: string;
    }> = [];

    for (const [catName, items] of Object.entries(nominals)) {
      for (const item of items) {
        records.push({
          gameId: game.id,
          name: item.name,
          price: item.price,
          originalPrice: item.originalPrice ?? null,
          category: catName,
          label: item.label ?? "",
        });
      }
    }

    // Insert all nominals for this game
    const result = await prisma.nominal.createMany({
      data: records,

    });

    totalInserted += result.count;
    gamesUpdated++;

    const categories = Object.keys(nominals);
    console.log(
      `✅ ${game.name}: ${result.count} nominals (${categories.join(", ")})`
    );
  }

  console.log(`\n=== SUMMARY ===`);
  console.log(`Games updated: ${gamesUpdated}`);
  console.log(`Games skipped: ${gamesSkipped}`);
  console.log(`Total nominals inserted: ${totalInserted}`);
  console.log(`\nDone!`);
}

main()
  .catch((e) => {
    console.error("Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
