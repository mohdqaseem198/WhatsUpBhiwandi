// Constants will be here

import { title } from "process";

export const Cities = ["Thane", "Mumbai"];

export const CardItems = [{id : 1, img: "https://www.pexels.com/photo/frontage-of-a-store-14050127/" , title : "Khan Saree Palace", category : "Clothing & Fashion", discount : "20%", location : "Station Road, Bhiwandi", number : "9876238745"},
    {id : 2, img: "https://www.pexels.com/photo/frontage-of-a-store-14050127/" , title : "Tawheed Jwellery", category : "Jwellery", discount : "30%", location : "KGN Chowk, Bhiwandi", number : "9873456745"},
    {id : 3, img: "https://www.pexels.com/photo/frontage-of-a-store-14050127/" , title : "Apna Clothes", category : "Clothing & Fashion", discount : "", location : "Madina Road, Bhiwandi", number : "9879876745"},
];

export const OfferItems = [{id : 1, img: "https://www.pexels.com/photo/frontage-of-a-store-14050127/" , title : "Bazaar Supermarket", category : "Clothing & Fashion", discount : "20%", validity : Date.now()+24*60*60*1000},
    {id : 2, img: "https://www.pexels.com/photo/frontage-of-a-store-14050127/" , title : "Fashion Hub", category : "Jwellery", discount : "30%", validity : (Date.now())+24*60*60*1000},
    {id : 3, img: "https://www.pexels.com/photo/frontage-of-a-store-14050127/" , title : "Spice Market", category : "Clothing & Fashion", discount : "", validity : (Date.now())+24*60*60*1000},
];

export const ReadyToGrowCardItems : {id : number, title : string}[] = [{id : 1, title : "Increase Footfall"},
    {id : 2, title : "Connect with Customers"},
    {id : 3, title : "Promote Offers"},
];

export const GetInTouchCardList : {id : number, title : string, Details : string, img ?: string}[] = [{id : 1, title: "Email Us", Details: "qaseem.ansari198@gmail.com", img:"/email.svg" },
    {id : 2, title: "Call Us", Details: "+91-9172708664", img:"/phone.svg" },
    {id : 3, title: "Visit Us", Details: "Bhiwandi, Dist Thane 421302", img:"/location.svg" },
];

export const footerItems : {id : number, head : string, items : string[]}[] = [{id : 1, head : "For Shopkeepers", items : ["Register Your Shop", "Pricing Plans", "Success Stories", "Help Center"] },
    {id : 2, head : "For Customers", items : ["Browse Shops", "Today's Offers", "Categories", "About Us"] },
    {id : 3, head : "Connect With Us", items : ["Bhiwandi, Thane", "Maharashtra India", "+91-9272708664"] },
];

export const books = [
  {
    "id": 0,
    "name": "Mastering Focus Vol 1",
    "category": "Productivity",
    "price": 300
  },
  {
    "id": 1,
    "name": "Financial Freedom Blueprint Vol 1",
    "category": "Finance",
    "price": 317
  },
  {
    "id": 2,
    "name": "The Habit Formula Vol 1",
    "category": "Self-Help",
    "price": 334
  },
  {
    "id": 3,
    "name": "Power of Discipline Vol 1",
    "category": "Fiction",
    "price": 351
  },
  {
    "id": 4,
    "name": "Startup Mindset Vol 1",
    "category": "Business",
    "price": 368
  },
  {
    "id": 5,
    "name": "Code Smarter Vol 1",
    "category": "Technology",
    "price": 385
  },
  {
    "id": 6,
    "name": "Mindset Shift Vol 1",
    "category": "Psychology",
    "price": 402
  },
  {
    "id": 7,
    "name": "Future of AI Vol 1",
    "category": "Science",
    "price": 419
  },
  {
    "id": 8,
    "name": "Life Lessons Vol 1",
    "category": "Biography",
    "price": 436
  },
  {
    "id": 9,
    "name": "The Strategic Thinker Vol 1",
    "category": "History",
    "price": 453
  },
  {
    "id": 10,
    "name": "Daily Stoic Living Vol 1",
    "category": "Philosophy",
    "price": 470
  },
  {
    "id": 11,
    "name": "The Hidden Leader Vol 1",
    "category": "Fantasy",
    "price": 487
  },
  {
    "id": 12,
    "name": "Productive You Vol 1",
    "category": "Thriller",
    "price": 504
  },
  {
    "id": 13,
    "name": "Winning Edge Vol 1",
    "category": "Spirituality",
    "price": 521
  },
  {
    "id": 14,
    "name": "The Growth Formula Vol 1",
    "category": "Motivation",
    "price": 538
  },
  {
    "id": 15,
    "name": "Mastering Focus Vol 2",
    "category": "Productivity",
    "price": 555
  },
  {
    "id": 16,
    "name": "Financial Freedom Blueprint Vol 2",
    "category": "Finance",
    "price": 572
  },
  {
    "id": 17,
    "name": "The Habit Formula Vol 2",
    "category": "Self-Help",
    "price": 589
  },
  {
    "id": 18,
    "name": "Power of Discipline Vol 2",
    "category": "Fiction",
    "price": 606
  },
  {
    "id": 19,
    "name": "Startup Mindset Vol 2",
    "category": "Business",
    "price": 623
  },
  {
    "id": 20,
    "name": "Code Smarter Vol 2",
    "category": "Technology",
    "price": 640
  },
  {
    "id": 21,
    "name": "Mindset Shift Vol 2",
    "category": "Psychology",
    "price": 657
  },
  {
    "id": 22,
    "name": "Future of AI Vol 2",
    "category": "Science",
    "price": 674
  },
  {
    "id": 23,
    "name": "Life Lessons Vol 2",
    "category": "Biography",
    "price": 691
  },
  {
    "id": 24,
    "name": "The Strategic Thinker Vol 2",
    "category": "History",
    "price": 708
  },
  {
    "id": 25,
    "name": "Daily Stoic Living Vol 2",
    "category": "Philosophy",
    "price": 725
  },
  {
    "id": 26,
    "name": "The Hidden Leader Vol 2",
    "category": "Fantasy",
    "price": 742
  },
  {
    "id": 27,
    "name": "Productive You Vol 2",
    "category": "Thriller",
    "price": 759
  },
  {
    "id": 28,
    "name": "Winning Edge Vol 2",
    "category": "Spirituality",
    "price": 776
  },
  {
    "id": 29,
    "name": "The Growth Formula Vol 2",
    "category": "Motivation",
    "price": 793
  },
  {
    "id": 30,
    "name": "Mastering Focus Vol 3",
    "category": "Productivity",
    "price": 810
  },
  {
    "id": 31,
    "name": "Financial Freedom Blueprint Vol 3",
    "category": "Finance",
    "price": 827
  },
  {
    "id": 32,
    "name": "The Habit Formula Vol 3",
    "category": "Self-Help",
    "price": 844
  },
  {
    "id": 33,
    "name": "Power of Discipline Vol 3",
    "category": "Fiction",
    "price": 861
  },
  {
    "id": 34,
    "name": "Startup Mindset Vol 3",
    "category": "Business",
    "price": 878
  },
  {
    "id": 35,
    "name": "Code Smarter Vol 3",
    "category": "Technology",
    "price": 895
  },
  {
    "id": 36,
    "name": "Mindset Shift Vol 3",
    "category": "Psychology",
    "price": 312
  },
  {
    "id": 37,
    "name": "Future of AI Vol 3",
    "category": "Science",
    "price": 329
  },
  {
    "id": 38,
    "name": "Life Lessons Vol 3",
    "category": "Biography",
    "price": 346
  },
  {
    "id": 39,
    "name": "The Strategic Thinker Vol 3",
    "category": "History",
    "price": 363
  },
  {
    "id": 40,
    "name": "Daily Stoic Living Vol 3",
    "category": "Philosophy",
    "price": 380
  },
  {
    "id": 41,
    "name": "The Hidden Leader Vol 3",
    "category": "Fantasy",
    "price": 397
  },
  {
    "id": 42,
    "name": "Productive You Vol 3",
    "category": "Thriller",
    "price": 414
  },
  {
    "id": 43,
    "name": "Winning Edge Vol 3",
    "category": "Spirituality",
    "price": 431
  },
  {
    "id": 44,
    "name": "The Growth Formula Vol 3",
    "category": "Motivation",
    "price": 448
  },
  {
    "id": 45,
    "name": "Mastering Focus Vol 4",
    "category": "Productivity",
    "price": 465
  },
  {
    "id": 46,
    "name": "Financial Freedom Blueprint Vol 4",
    "category": "Finance",
    "price": 482
  },
  {
    "id": 47,
    "name": "The Habit Formula Vol 4",
    "category": "Self-Help",
    "price": 499
  },
  {
    "id": 48,
    "name": "Power of Discipline Vol 4",
    "category": "Fiction",
    "price": 516
  },
  {
    "id": 49,
    "name": "Startup Mindset Vol 4",
    "category": "Business",
    "price": 533
  },
  {
    "id": 50,
    "name": "Code Smarter Vol 4",
    "category": "Technology",
    "price": 550
  },
  {
    "id": 51,
    "name": "Mindset Shift Vol 4",
    "category": "Psychology",
    "price": 567
  },
  {
    "id": 52,
    "name": "Future of AI Vol 4",
    "category": "Science",
    "price": 584
  },
  {
    "id": 53,
    "name": "Life Lessons Vol 4",
    "category": "Biography",
    "price": 601
  },
  {
    "id": 54,
    "name": "The Strategic Thinker Vol 4",
    "category": "History",
    "price": 618
  },
  {
    "id": 55,
    "name": "Daily Stoic Living Vol 4",
    "category": "Philosophy",
    "price": 635
  },
  {
    "id": 56,
    "name": "The Hidden Leader Vol 4",
    "category": "Fantasy",
    "price": 652
  },
  {
    "id": 57,
    "name": "Productive You Vol 4",
    "category": "Thriller",
    "price": 669
  },
  {
    "id": 58,
    "name": "Winning Edge Vol 4",
    "category": "Spirituality",
    "price": 686
  },
  {
    "id": 59,
    "name": "The Growth Formula Vol 4",
    "category": "Motivation",
    "price": 703
  },
  {
    "id": 60,
    "name": "Mastering Focus Vol 5",
    "category": "Productivity",
    "price": 720
  },
  {
    "id": 61,
    "name": "Financial Freedom Blueprint Vol 5",
    "category": "Finance",
    "price": 737
  },
  {
    "id": 62,
    "name": "The Habit Formula Vol 5",
    "category": "Self-Help",
    "price": 754
  },
  {
    "id": 63,
    "name": "Power of Discipline Vol 5",
    "category": "Fiction",
    "price": 771
  },
  {
    "id": 64,
    "name": "Startup Mindset Vol 5",
    "category": "Business",
    "price": 788
  },
  {
    "id": 65,
    "name": "Code Smarter Vol 5",
    "category": "Technology",
    "price": 805
  },
  {
    "id": 66,
    "name": "Mindset Shift Vol 5",
    "category": "Psychology",
    "price": 822
  },
  {
    "id": 67,
    "name": "Future of AI Vol 5",
    "category": "Science",
    "price": 839
  },
  {
    "id": 68,
    "name": "Life Lessons Vol 5",
    "category": "Biography",
    "price": 856
  },
  {
    "id": 69,
    "name": "The Strategic Thinker Vol 5",
    "category": "History",
    "price": 873
  },
  {
    "id": 70,
    "name": "Daily Stoic Living Vol 5",
    "category": "Philosophy",
    "price": 890
  },
  {
    "id": 71,
    "name": "The Hidden Leader Vol 5",
    "category": "Fantasy",
    "price": 307
  },
  {
    "id": 72,
    "name": "Productive You Vol 5",
    "category": "Thriller",
    "price": 324
  },
  {
    "id": 73,
    "name": "Winning Edge Vol 5",
    "category": "Spirituality",
    "price": 341
  },
  {
    "id": 74,
    "name": "The Growth Formula Vol 5",
    "category": "Motivation",
    "price": 358
  },
  {
    "id": 75,
    "name": "Mastering Focus Vol 6",
    "category": "Productivity",
    "price": 375
  },
  {
    "id": 76,
    "name": "Financial Freedom Blueprint Vol 6",
    "category": "Finance",
    "price": 392
  },
  {
    "id": 77,
    "name": "The Habit Formula Vol 6",
    "category": "Self-Help",
    "price": 409
  },
  {
    "id": 78,
    "name": "Power of Discipline Vol 6",
    "category": "Fiction",
    "price": 426
  },
  {
    "id": 79,
    "name": "Startup Mindset Vol 6",
    "category": "Business",
    "price": 443
  },
  {
    "id": 80,
    "name": "Code Smarter Vol 6",
    "category": "Technology",
    "price": 460
  },
  {
    "id": 81,
    "name": "Mindset Shift Vol 6",
    "category": "Psychology",
    "price": 477
  },
  {
    "id": 82,
    "name": "Future of AI Vol 6",
    "category": "Science",
    "price": 494
  },
  {
    "id": 83,
    "name": "Life Lessons Vol 6",
    "category": "Biography",
    "price": 511
  },
  {
    "id": 84,
    "name": "The Strategic Thinker Vol 6",
    "category": "History",
    "price": 528
  },
  {
    "id": 85,
    "name": "Daily Stoic Living Vol 6",
    "category": "Philosophy",
    "price": 545
  },
  {
    "id": 86,
    "name": "The Hidden Leader Vol 6",
    "category": "Fantasy",
    "price": 562
  },
  {
    "id": 87,
    "name": "Productive You Vol 6",
    "category": "Thriller",
    "price": 579
  },
  {
    "id": 88,
    "name": "Winning Edge Vol 6",
    "category": "Spirituality",
    "price": 596
  },
  {
    "id": 89,
    "name": "The Growth Formula Vol 6",
    "category": "Motivation",
    "price": 613
  },
  {
    "id": 90,
    "name": "Mastering Focus Vol 7",
    "category": "Productivity",
    "price": 630
  },
  {
    "id": 91,
    "name": "Financial Freedom Blueprint Vol 7",
    "category": "Finance",
    "price": 647
  },
  {
    "id": 92,
    "name": "The Habit Formula Vol 7",
    "category": "Self-Help",
    "price": 664
  },
  {
    "id": 93,
    "name": "Power of Discipline Vol 7",
    "category": "Fiction",
    "price": 681
  },
  {
    "id": 94,
    "name": "Startup Mindset Vol 7",
    "category": "Business",
    "price": 698
  },
  {
    "id": 95,
    "name": "Code Smarter Vol 7",
    "category": "Technology",
    "price": 715
  },
  {
    "id": 96,
    "name": "Mindset Shift Vol 7",
    "category": "Psychology",
    "price": 732
  },
  {
    "id": 97,
    "name": "Future of AI Vol 7",
    "category": "Science",
    "price": 749
  },
  {
    "id": 98,
    "name": "Life Lessons Vol 7",
    "category": "Biography",
    "price": 766
  },
  {
    "id": 99,
    "name": "The Strategic Thinker Vol 7",
    "category": "History",
    "price": 783
  },
  {
    "id": 100,
    "name": "Daily Stoic Living Vol 7",
    "category": "Philosophy",
    "price": 800
  },
  {
    "id": 101,
    "name": "The Hidden Leader Vol 7",
    "category": "Fantasy",
    "price": 817
  },
  {
    "id": 102,
    "name": "Productive You Vol 7",
    "category": "Thriller",
    "price": 834
  },
  {
    "id": 103,
    "name": "Winning Edge Vol 7",
    "category": "Spirituality",
    "price": 851
  },
  {
    "id": 104,
    "name": "The Growth Formula Vol 7",
    "category": "Motivation",
    "price": 868
  },
  {
    "id": 105,
    "name": "Mastering Focus Vol 8",
    "category": "Productivity",
    "price": 885
  },
  {
    "id": 106,
    "name": "Financial Freedom Blueprint Vol 8",
    "category": "Finance",
    "price": 302
  },
  {
    "id": 107,
    "name": "The Habit Formula Vol 8",
    "category": "Self-Help",
    "price": 319
  },
  {
    "id": 108,
    "name": "Power of Discipline Vol 8",
    "category": "Fiction",
    "price": 336
  },
  {
    "id": 109,
    "name": "Startup Mindset Vol 8",
    "category": "Business",
    "price": 353
  },
  {
    "id": 110,
    "name": "Code Smarter Vol 8",
    "category": "Technology",
    "price": 370
  },
  {
    "id": 111,
    "name": "Mindset Shift Vol 8",
    "category": "Psychology",
    "price": 387
  },
  {
    "id": 112,
    "name": "Future of AI Vol 8",
    "category": "Science",
    "price": 404
  },
  {
    "id": 113,
    "name": "Life Lessons Vol 8",
    "category": "Biography",
    "price": 421
  },
  {
    "id": 114,
    "name": "The Strategic Thinker Vol 8",
    "category": "History",
    "price": 438
  },
  {
    "id": 115,
    "name": "Daily Stoic Living Vol 8",
    "category": "Philosophy",
    "price": 455
  },
  {
    "id": 116,
    "name": "The Hidden Leader Vol 8",
    "category": "Fantasy",
    "price": 472
  },
  {
    "id": 117,
    "name": "Productive You Vol 8",
    "category": "Thriller",
    "price": 489
  },
  {
    "id": 118,
    "name": "Winning Edge Vol 8",
    "category": "Spirituality",
    "price": 506
  },
  {
    "id": 119,
    "name": "The Growth Formula Vol 8",
    "category": "Motivation",
    "price": 523
  },
  {
    "id": 120,
    "name": "Mastering Focus Vol 9",
    "category": "Productivity",
    "price": 540
  },
  {
    "id": 121,
    "name": "Financial Freedom Blueprint Vol 9",
    "category": "Finance",
    "price": 557
  },
  {
    "id": 122,
    "name": "The Habit Formula Vol 9",
    "category": "Self-Help",
    "price": 574
  },
  {
    "id": 123,
    "name": "Power of Discipline Vol 9",
    "category": "Fiction",
    "price": 591
  },
  {
    "id": 124,
    "name": "Startup Mindset Vol 9",
    "category": "Business",
    "price": 608
  },
  {
    "id": 125,
    "name": "Code Smarter Vol 9",
    "category": "Technology",
    "price": 625
  },
  {
    "id": 126,
    "name": "Mindset Shift Vol 9",
    "category": "Psychology",
    "price": 642
  },
  {
    "id": 127,
    "name": "Future of AI Vol 9",
    "category": "Science",
    "price": 659
  },
  {
    "id": 128,
    "name": "Life Lessons Vol 9",
    "category": "Biography",
    "price": 676
  },
  {
    "id": 129,
    "name": "The Strategic Thinker Vol 9",
    "category": "History",
    "price": 693
  },
  {
    "id": 130,
    "name": "Daily Stoic Living Vol 9",
    "category": "Philosophy",
    "price": 710
  },
  {
    "id": 131,
    "name": "The Hidden Leader Vol 9",
    "category": "Fantasy",
    "price": 727
  },
  {
    "id": 132,
    "name": "Productive You Vol 9",
    "category": "Thriller",
    "price": 744
  },
  {
    "id": 133,
    "name": "Winning Edge Vol 9",
    "category": "Spirituality",
    "price": 761
  },
  {
    "id": 134,
    "name": "The Growth Formula Vol 9",
    "category": "Motivation",
    "price": 778
  },
  {
    "id": 135,
    "name": "Mastering Focus Vol 10",
    "category": "Productivity",
    "price": 795
  },
  {
    "id": 136,
    "name": "Financial Freedom Blueprint Vol 10",
    "category": "Finance",
    "price": 812
  },
  {
    "id": 137,
    "name": "The Habit Formula Vol 10",
    "category": "Self-Help",
    "price": 829
  },
  {
    "id": 138,
    "name": "Power of Discipline Vol 10",
    "category": "Fiction",
    "price": 846
  },
  {
    "id": 139,
    "name": "Startup Mindset Vol 10",
    "category": "Business",
    "price": 863
  },
  {
    "id": 140,
    "name": "Code Smarter Vol 10",
    "category": "Technology",
    "price": 880
  },
  {
    "id": 141,
    "name": "Mindset Shift Vol 10",
    "category": "Psychology",
    "price": 897
  },
  {
    "id": 142,
    "name": "Future of AI Vol 10",
    "category": "Science",
    "price": 314
  },
  {
    "id": 143,
    "name": "Life Lessons Vol 10",
    "category": "Biography",
    "price": 331
  },
  {
    "id": 144,
    "name": "The Strategic Thinker Vol 10",
    "category": "History",
    "price": 348
  },
  {
    "id": 145,
    "name": "Daily Stoic Living Vol 10",
    "category": "Philosophy",
    "price": 365
  },
  {
    "id": 146,
    "name": "The Hidden Leader Vol 10",
    "category": "Fantasy",
    "price": 382
  },
  {
    "id": 147,
    "name": "Productive You Vol 10",
    "category": "Thriller",
    "price": 399
  },
  {
    "id": 148,
    "name": "Winning Edge Vol 10",
    "category": "Spirituality",
    "price": 416
  },
  {
    "id": 149,
    "name": "The Growth Formula Vol 10",
    "category": "Motivation",
    "price": 433
  },
  {
    "id": 150,
    "name": "Mastering Focus Vol 11",
    "category": "Productivity",
    "price": 450
  },
  {
    "id": 151,
    "name": "Financial Freedom Blueprint Vol 11",
    "category": "Finance",
    "price": 467
  },
  {
    "id": 152,
    "name": "The Habit Formula Vol 11",
    "category": "Self-Help",
    "price": 484
  },
  {
    "id": 153,
    "name": "Power of Discipline Vol 11",
    "category": "Fiction",
    "price": 501
  },
  {
    "id": 154,
    "name": "Startup Mindset Vol 11",
    "category": "Business",
    "price": 518
  },
  {
    "id": 155,
    "name": "Code Smarter Vol 11",
    "category": "Technology",
    "price": 535
  },
  {
    "id": 156,
    "name": "Mindset Shift Vol 11",
    "category": "Psychology",
    "price": 552
  },
  {
    "id": 157,
    "name": "Future of AI Vol 11",
    "category": "Science",
    "price": 569
  },
  {
    "id": 158,
    "name": "Life Lessons Vol 11",
    "category": "Biography",
    "price": 586
  },
  {
    "id": 159,
    "name": "The Strategic Thinker Vol 11",
    "category": "History",
    "price": 603
  },
  {
    "id": 160,
    "name": "Daily Stoic Living Vol 11",
    "category": "Philosophy",
    "price": 620
  },
  {
    "id": 161,
    "name": "The Hidden Leader Vol 11",
    "category": "Fantasy",
    "price": 637
  },
  {
    "id": 162,
    "name": "Productive You Vol 11",
    "category": "Thriller",
    "price": 654
  },
  {
    "id": 163,
    "name": "Winning Edge Vol 11",
    "category": "Spirituality",
    "price": 671
  },
  {
    "id": 164,
    "name": "The Growth Formula Vol 11",
    "category": "Motivation",
    "price": 688
  },
  {
    "id": 165,
    "name": "Mastering Focus Vol 12",
    "category": "Productivity",
    "price": 705
  },
  {
    "id": 166,
    "name": "Financial Freedom Blueprint Vol 12",
    "category": "Finance",
    "price": 722
  },
  {
    "id": 167,
    "name": "The Habit Formula Vol 12",
    "category": "Self-Help",
    "price": 739
  },
  {
    "id": 168,
    "name": "Power of Discipline Vol 12",
    "category": "Fiction",
    "price": 756
  },
  {
    "id": 169,
    "name": "Startup Mindset Vol 12",
    "category": "Business",
    "price": 773
  },
  {
    "id": 170,
    "name": "Code Smarter Vol 12",
    "category": "Technology",
    "price": 790
  },
  {
    "id": 171,
    "name": "Mindset Shift Vol 12",
    "category": "Psychology",
    "price": 807
  },
  {
    "id": 172,
    "name": "Future of AI Vol 12",
    "category": "Science",
    "price": 824
  },
  {
    "id": 173,
    "name": "Life Lessons Vol 12",
    "category": "Biography",
    "price": 841
  },
  {
    "id": 174,
    "name": "The Strategic Thinker Vol 12",
    "category": "History",
    "price": 858
  },
  {
    "id": 175,
    "name": "Daily Stoic Living Vol 12",
    "category": "Philosophy",
    "price": 875
  },
  {
    "id": 176,
    "name": "The Hidden Leader Vol 12",
    "category": "Fantasy",
    "price": 892
  },
  {
    "id": 177,
    "name": "Productive You Vol 12",
    "category": "Thriller",
    "price": 309
  },
  {
    "id": 178,
    "name": "Winning Edge Vol 12",
    "category": "Spirituality",
    "price": 326
  },
  {
    "id": 179,
    "name": "The Growth Formula Vol 12",
    "category": "Motivation",
    "price": 343
  },
  {
    "id": 180,
    "name": "Mastering Focus Vol 13",
    "category": "Productivity",
    "price": 360
  },
  {
    "id": 181,
    "name": "Financial Freedom Blueprint Vol 13",
    "category": "Finance",
    "price": 377
  },
  {
    "id": 182,
    "name": "The Habit Formula Vol 13",
    "category": "Self-Help",
    "price": 394
  },
  {
    "id": 183,
    "name": "Power of Discipline Vol 13",
    "category": "Fiction",
    "price": 411
  },
  {
    "id": 184,
    "name": "Startup Mindset Vol 13",
    "category": "Business",
    "price": 428
  },
  {
    "id": 185,
    "name": "Code Smarter Vol 13",
    "category": "Technology",
    "price": 445
  },
  {
    "id": 186,
    "name": "Mindset Shift Vol 13",
    "category": "Psychology",
    "price": 462
  },
  {
    "id": 187,
    "name": "Future of AI Vol 13",
    "category": "Science",
    "price": 479
  },
  {
    "id": 188,
    "name": "Life Lessons Vol 13",
    "category": "Biography",
    "price": 496
  },
  {
    "id": 189,
    "name": "The Strategic Thinker Vol 13",
    "category": "History",
    "price": 513
  },
  {
    "id": 190,
    "name": "Daily Stoic Living Vol 13",
    "category": "Philosophy",
    "price": 530
  },
  {
    "id": 191,
    "name": "The Hidden Leader Vol 13",
    "category": "Fantasy",
    "price": 547
  },
  {
    "id": 192,
    "name": "Productive You Vol 13",
    "category": "Thriller",
    "price": 564
  },
  {
    "id": 193,
    "name": "Winning Edge Vol 13",
    "category": "Spirituality",
    "price": 581
  },
  {
    "id": 194,
    "name": "The Growth Formula Vol 13",
    "category": "Motivation",
    "price": 598
  },
  {
    "id": 195,
    "name": "Mastering Focus Vol 14",
    "category": "Productivity",
    "price": 615
  },
  {
    "id": 196,
    "name": "Financial Freedom Blueprint Vol 14",
    "category": "Finance",
    "price": 632
  },
  {
    "id": 197,
    "name": "The Habit Formula Vol 14",
    "category": "Self-Help",
    "price": 649
  },
  {
    "id": 198,
    "name": "Power of Discipline Vol 14",
    "category": "Fiction",
    "price": 666
  },
  {
    "id": 199,
    "name": "Startup Mindset Vol 14",
    "category": "Business",
    "price": 683
  },
  {
    "id": 200,
    "name": "Code Smarter Vol 14",
    "category": "Technology",
    "price": 700
  },
  {
    "id": 201,
    "name": "Mindset Shift Vol 14",
    "category": "Psychology",
    "price": 717
  },
  {
    "id": 202,
    "name": "Future of AI Vol 14",
    "category": "Science",
    "price": 734
  },
  {
    "id": 203,
    "name": "Life Lessons Vol 14",
    "category": "Biography",
    "price": 751
  },
  {
    "id": 204,
    "name": "The Strategic Thinker Vol 14",
    "category": "History",
    "price": 768
  },
  {
    "id": 205,
    "name": "Daily Stoic Living Vol 14",
    "category": "Philosophy",
    "price": 785
  },
  {
    "id": 206,
    "name": "The Hidden Leader Vol 14",
    "category": "Fantasy",
    "price": 802
  },
  {
    "id": 207,
    "name": "Productive You Vol 14",
    "category": "Thriller",
    "price": 819
  },
  {
    "id": 208,
    "name": "Winning Edge Vol 14",
    "category": "Spirituality",
    "price": 836
  },
  {
    "id": 209,
    "name": "The Growth Formula Vol 14",
    "category": "Motivation",
    "price": 853
  },
  {
    "id": 210,
    "name": "Mastering Focus Vol 15",
    "category": "Productivity",
    "price": 870
  },
  {
    "id": 211,
    "name": "Financial Freedom Blueprint Vol 15",
    "category": "Finance",
    "price": 887
  },
  {
    "id": 212,
    "name": "The Habit Formula Vol 15",
    "category": "Self-Help",
    "price": 304
  },
  {
    "id": 213,
    "name": "Power of Discipline Vol 15",
    "category": "Fiction",
    "price": 321
  },
  {
    "id": 214,
    "name": "Startup Mindset Vol 15",
    "category": "Business",
    "price": 338
  },
  {
    "id": 215,
    "name": "Code Smarter Vol 15",
    "category": "Technology",
    "price": 355
  },
  {
    "id": 216,
    "name": "Mindset Shift Vol 15",
    "category": "Psychology",
    "price": 372
  },
  {
    "id": 217,
    "name": "Future of AI Vol 15",
    "category": "Science",
    "price": 389
  },
  {
    "id": 218,
    "name": "Life Lessons Vol 15",
    "category": "Biography",
    "price": 406
  },
  {
    "id": 219,
    "name": "The Strategic Thinker Vol 15",
    "category": "History",
    "price": 423
  },
  {
    "id": 220,
    "name": "Daily Stoic Living Vol 15",
    "category": "Philosophy",
    "price": 440
  },
  {
    "id": 221,
    "name": "The Hidden Leader Vol 15",
    "category": "Fantasy",
    "price": 457
  },
  {
    "id": 222,
    "name": "Productive You Vol 15",
    "category": "Thriller",
    "price": 474
  },
  {
    "id": 223,
    "name": "Winning Edge Vol 15",
    "category": "Spirituality",
    "price": 491
  },
  {
    "id": 224,
    "name": "The Growth Formula Vol 15",
    "category": "Motivation",
    "price": 508
  },
  {
    "id": 225,
    "name": "Mastering Focus Vol 16",
    "category": "Productivity",
    "price": 525
  },
  {
    "id": 226,
    "name": "Financial Freedom Blueprint Vol 16",
    "category": "Finance",
    "price": 542
  },
  {
    "id": 227,
    "name": "The Habit Formula Vol 16",
    "category": "Self-Help",
    "price": 559
  },
  {
    "id": 228,
    "name": "Power of Discipline Vol 16",
    "category": "Fiction",
    "price": 576
  },
  {
    "id": 229,
    "name": "Startup Mindset Vol 16",
    "category": "Business",
    "price": 593
  },
  {
    "id": 230,
    "name": "Code Smarter Vol 16",
    "category": "Technology",
    "price": 610
  },
  {
    "id": 231,
    "name": "Mindset Shift Vol 16",
    "category": "Psychology",
    "price": 627
  },
  {
    "id": 232,
    "name": "Future of AI Vol 16",
    "category": "Science",
    "price": 644
  },
  {
    "id": 233,
    "name": "Life Lessons Vol 16",
    "category": "Biography",
    "price": 661
  },
  {
    "id": 234,
    "name": "The Strategic Thinker Vol 16",
    "category": "History",
    "price": 678
  },
  {
    "id": 235,
    "name": "Daily Stoic Living Vol 16",
    "category": "Philosophy",
    "price": 695
  },
  {
    "id": 236,
    "name": "The Hidden Leader Vol 16",
    "category": "Fantasy",
    "price": 712
  },
  {
    "id": 237,
    "name": "Productive You Vol 16",
    "category": "Thriller",
    "price": 729
  },
  {
    "id": 238,
    "name": "Winning Edge Vol 16",
    "category": "Spirituality",
    "price": 746
  },
  {
    "id": 239,
    "name": "The Growth Formula Vol 16",
    "category": "Motivation",
    "price": 763
  },
  {
    "id": 240,
    "name": "Mastering Focus Vol 17",
    "category": "Productivity",
    "price": 780
  },
  {
    "id": 241,
    "name": "Financial Freedom Blueprint Vol 17",
    "category": "Finance",
    "price": 797
  },
  {
    "id": 242,
    "name": "The Habit Formula Vol 17",
    "category": "Self-Help",
    "price": 814
  },
  {
    "id": 243,
    "name": "Power of Discipline Vol 17",
    "category": "Fiction",
    "price": 831
  },
  {
    "id": 244,
    "name": "Startup Mindset Vol 17",
    "category": "Business",
    "price": 848
  },
  {
    "id": 245,
    "name": "Code Smarter Vol 17",
    "category": "Technology",
    "price": 865
  },
  {
    "id": 246,
    "name": "Mindset Shift Vol 17",
    "category": "Psychology",
    "price": 882
  },
  {
    "id": 247,
    "name": "Future of AI Vol 17",
    "category": "Science",
    "price": 899
  },
  {
    "id": 248,
    "name": "Life Lessons Vol 17",
    "category": "Biography",
    "price": 316
  },
  {
    "id": 249,
    "name": "The Strategic Thinker Vol 17",
    "category": "History",
    "price": 333
  },
  {
    "id": 250,
    "name": "Daily Stoic Living Vol 17",
    "category": "Philosophy",
    "price": 350
  },
  {
    "id": 251,
    "name": "The Hidden Leader Vol 17",
    "category": "Fantasy",
    "price": 367
  },
  {
    "id": 252,
    "name": "Productive You Vol 17",
    "category": "Thriller",
    "price": 384
  },
  {
    "id": 253,
    "name": "Winning Edge Vol 17",
    "category": "Spirituality",
    "price": 401
  },
  {
    "id": 254,
    "name": "The Growth Formula Vol 17",
    "category": "Motivation",
    "price": 418
  },
  {
    "id": 255,
    "name": "Mastering Focus Vol 18",
    "category": "Productivity",
    "price": 435
  },
  {
    "id": 256,
    "name": "Financial Freedom Blueprint Vol 18",
    "category": "Finance",
    "price": 452
  },
  {
    "id": 257,
    "name": "The Habit Formula Vol 18",
    "category": "Self-Help",
    "price": 469
  },
  {
    "id": 258,
    "name": "Power of Discipline Vol 18",
    "category": "Fiction",
    "price": 486
  },
  {
    "id": 259,
    "name": "Startup Mindset Vol 18",
    "category": "Business",
    "price": 503
  },
  {
    "id": 260,
    "name": "Code Smarter Vol 18",
    "category": "Technology",
    "price": 520
  },
  {
    "id": 261,
    "name": "Mindset Shift Vol 18",
    "category": "Psychology",
    "price": 537
  },
  {
    "id": 262,
    "name": "Future of AI Vol 18",
    "category": "Science",
    "price": 554
  },
  {
    "id": 263,
    "name": "Life Lessons Vol 18",
    "category": "Biography",
    "price": 571
  },
  {
    "id": 264,
    "name": "The Strategic Thinker Vol 18",
    "category": "History",
    "price": 588
  },
  {
    "id": 265,
    "name": "Daily Stoic Living Vol 18",
    "category": "Philosophy",
    "price": 605
  },
  {
    "id": 266,
    "name": "The Hidden Leader Vol 18",
    "category": "Fantasy",
    "price": 622
  },
  {
    "id": 267,
    "name": "Productive You Vol 18",
    "category": "Thriller",
    "price": 639
  },
  {
    "id": 268,
    "name": "Winning Edge Vol 18",
    "category": "Spirituality",
    "price": 656
  },
  {
    "id": 269,
    "name": "The Growth Formula Vol 18",
    "category": "Motivation",
    "price": 673
  },
  {
    "id": 270,
    "name": "Mastering Focus Vol 19",
    "category": "Productivity",
    "price": 690
  },
  {
    "id": 271,
    "name": "Financial Freedom Blueprint Vol 19",
    "category": "Finance",
    "price": 707
  },
  {
    "id": 272,
    "name": "The Habit Formula Vol 19",
    "category": "Self-Help",
    "price": 724
  },
  {
    "id": 273,
    "name": "Power of Discipline Vol 19",
    "category": "Fiction",
    "price": 741
  },
  {
    "id": 274,
    "name": "Startup Mindset Vol 19",
    "category": "Business",
    "price": 758
  },
  {
    "id": 275,
    "name": "Code Smarter Vol 19",
    "category": "Technology",
    "price": 775
  },
  {
    "id": 276,
    "name": "Mindset Shift Vol 19",
    "category": "Psychology",
    "price": 792
  },
  {
    "id": 277,
    "name": "Future of AI Vol 19",
    "category": "Science",
    "price": 809
  },
  {
    "id": 278,
    "name": "Life Lessons Vol 19",
    "category": "Biography",
    "price": 826
  },
  {
    "id": 279,
    "name": "The Strategic Thinker Vol 19",
    "category": "History",
    "price": 843
  },
  {
    "id": 280,
    "name": "Daily Stoic Living Vol 19",
    "category": "Philosophy",
    "price": 860
  },
  {
    "id": 281,
    "name": "The Hidden Leader Vol 19",
    "category": "Fantasy",
    "price": 877
  },
  {
    "id": 282,
    "name": "Productive You Vol 19",
    "category": "Thriller",
    "price": 894
  },
  {
    "id": 283,
    "name": "Winning Edge Vol 19",
    "category": "Spirituality",
    "price": 311
  },
  {
    "id": 284,
    "name": "The Growth Formula Vol 19",
    "category": "Motivation",
    "price": 328
  },
  {
    "id": 285,
    "name": "Mastering Focus Vol 20",
    "category": "Productivity",
    "price": 345
  },
  {
    "id": 286,
    "name": "Financial Freedom Blueprint Vol 20",
    "category": "Finance",
    "price": 362
  },
  {
    "id": 287,
    "name": "The Habit Formula Vol 20",
    "category": "Self-Help",
    "price": 379
  },
  {
    "id": 288,
    "name": "Power of Discipline Vol 20",
    "category": "Fiction",
    "price": 396
  },
  {
    "id": 289,
    "name": "Startup Mindset Vol 20",
    "category": "Business",
    "price": 413
  },
  {
    "id": 290,
    "name": "Code Smarter Vol 20",
    "category": "Technology",
    "price": 430
  },
  {
    "id": 291,
    "name": "Mindset Shift Vol 20",
    "category": "Psychology",
    "price": 447
  },
  {
    "id": 292,
    "name": "Future of AI Vol 20",
    "category": "Science",
    "price": 464
  },
  {
    "id": 293,
    "name": "Life Lessons Vol 20",
    "category": "Biography",
    "price": 481
  },
  {
    "id": 294,
    "name": "The Strategic Thinker Vol 20",
    "category": "History",
    "price": 498
  },
  {
    "id": 295,
    "name": "Daily Stoic Living Vol 20",
    "category": "Philosophy",
    "price": 515
  },
  {
    "id": 296,
    "name": "The Hidden Leader Vol 20",
    "category": "Fantasy",
    "price": 532
  },
  {
    "id": 297,
    "name": "Productive You Vol 20",
    "category": "Thriller",
    "price": 549
  },
  {
    "id": 298,
    "name": "Winning Edge Vol 20",
    "category": "Spirituality",
    "price": 566
  },
  {
    "id": 299,
    "name": "The Growth Formula Vol 20",
    "category": "Motivation",
    "price": 583
  },
  {
    "id": 300,
    "name": "Mastering Focus Vol 21",
    "category": "Productivity",
    "price": 600
  },
  {
    "id": 301,
    "name": "Financial Freedom Blueprint Vol 21",
    "category": "Finance",
    "price": 617
  },
  {
    "id": 302,
    "name": "The Habit Formula Vol 21",
    "category": "Self-Help",
    "price": 634
  },
  {
    "id": 303,
    "name": "Power of Discipline Vol 21",
    "category": "Fiction",
    "price": 651
  },
  {
    "id": 304,
    "name": "Startup Mindset Vol 21",
    "category": "Business",
    "price": 668
  },
  {
    "id": 305,
    "name": "Code Smarter Vol 21",
    "category": "Technology",
    "price": 685
  },
  {
    "id": 306,
    "name": "Mindset Shift Vol 21",
    "category": "Psychology",
    "price": 702
  },
  {
    "id": 307,
    "name": "Future of AI Vol 21",
    "category": "Science",
    "price": 719
  },
  {
    "id": 308,
    "name": "Life Lessons Vol 21",
    "category": "Biography",
    "price": 736
  },
  {
    "id": 309,
    "name": "The Strategic Thinker Vol 21",
    "category": "History",
    "price": 753
  },
  {
    "id": 310,
    "name": "Daily Stoic Living Vol 21",
    "category": "Philosophy",
    "price": 770
  },
  {
    "id": 311,
    "name": "The Hidden Leader Vol 21",
    "category": "Fantasy",
    "price": 787
  },
  {
    "id": 312,
    "name": "Productive You Vol 21",
    "category": "Thriller",
    "price": 804
  },
  {
    "id": 313,
    "name": "Winning Edge Vol 21",
    "category": "Spirituality",
    "price": 821
  },
  {
    "id": 314,
    "name": "The Growth Formula Vol 21",
    "category": "Motivation",
    "price": 838
  },
  {
    "id": 315,
    "name": "Mastering Focus Vol 22",
    "category": "Productivity",
    "price": 855
  },
  {
    "id": 316,
    "name": "Financial Freedom Blueprint Vol 22",
    "category": "Finance",
    "price": 872
  },
  {
    "id": 317,
    "name": "The Habit Formula Vol 22",
    "category": "Self-Help",
    "price": 889
  },
  {
    "id": 318,
    "name": "Power of Discipline Vol 22",
    "category": "Fiction",
    "price": 306
  },
  {
    "id": 319,
    "name": "Startup Mindset Vol 22",
    "category": "Business",
    "price": 323
  },
  {
    "id": 320,
    "name": "Code Smarter Vol 22",
    "category": "Technology",
    "price": 340
  },
  {
    "id": 321,
    "name": "Mindset Shift Vol 22",
    "category": "Psychology",
    "price": 357
  },
  {
    "id": 322,
    "name": "Future of AI Vol 22",
    "category": "Science",
    "price": 374
  },
  {
    "id": 323,
    "name": "Life Lessons Vol 22",
    "category": "Biography",
    "price": 391
  },
  {
    "id": 324,
    "name": "The Strategic Thinker Vol 22",
    "category": "History",
    "price": 408
  },
  {
    "id": 325,
    "name": "Daily Stoic Living Vol 22",
    "category": "Philosophy",
    "price": 425
  },
  {
    "id": 326,
    "name": "The Hidden Leader Vol 22",
    "category": "Fantasy",
    "price": 442
  },
  {
    "id": 327,
    "name": "Productive You Vol 22",
    "category": "Thriller",
    "price": 459
  },
  {
    "id": 328,
    "name": "Winning Edge Vol 22",
    "category": "Spirituality",
    "price": 476
  },
  {
    "id": 329,
    "name": "The Growth Formula Vol 22",
    "category": "Motivation",
    "price": 493
  },
  {
    "id": 330,
    "name": "Mastering Focus Vol 23",
    "category": "Productivity",
    "price": 510
  },
  {
    "id": 331,
    "name": "Financial Freedom Blueprint Vol 23",
    "category": "Finance",
    "price": 527
  },
  {
    "id": 332,
    "name": "The Habit Formula Vol 23",
    "category": "Self-Help",
    "price": 544
  },
  {
    "id": 333,
    "name": "Power of Discipline Vol 23",
    "category": "Fiction",
    "price": 561
  },
  {
    "id": 334,
    "name": "Startup Mindset Vol 23",
    "category": "Business",
    "price": 578
  },
  {
    "id": 335,
    "name": "Code Smarter Vol 23",
    "category": "Technology",
    "price": 595
  },
  {
    "id": 336,
    "name": "Mindset Shift Vol 23",
    "category": "Psychology",
    "price": 612
  },
  {
    "id": 337,
    "name": "Future of AI Vol 23",
    "category": "Science",
    "price": 629
  },
  {
    "id": 338,
    "name": "Life Lessons Vol 23",
    "category": "Biography",
    "price": 646
  },
  {
    "id": 339,
    "name": "The Strategic Thinker Vol 23",
    "category": "History",
    "price": 663
  },
  {
    "id": 340,
    "name": "Daily Stoic Living Vol 23",
    "category": "Philosophy",
    "price": 680
  },
  {
    "id": 341,
    "name": "The Hidden Leader Vol 23",
    "category": "Fantasy",
    "price": 697
  },
  {
    "id": 342,
    "name": "Productive You Vol 23",
    "category": "Thriller",
    "price": 714
  },
  {
    "id": 343,
    "name": "Winning Edge Vol 23",
    "category": "Spirituality",
    "price": 731
  },
  {
    "id": 344,
    "name": "The Growth Formula Vol 23",
    "category": "Motivation",
    "price": 748
  },
  {
    "id": 345,
    "name": "Mastering Focus Vol 24",
    "category": "Productivity",
    "price": 765
  },
  {
    "id": 346,
    "name": "Financial Freedom Blueprint Vol 24",
    "category": "Finance",
    "price": 782
  },
  {
    "id": 347,
    "name": "The Habit Formula Vol 24",
    "category": "Self-Help",
    "price": 799
  },
  {
    "id": 348,
    "name": "Power of Discipline Vol 24",
    "category": "Fiction",
    "price": 816
  },
  {
    "id": 349,
    "name": "Startup Mindset Vol 24",
    "category": "Business",
    "price": 833
  },
  {
    "id": 350,
    "name": "Code Smarter Vol 24",
    "category": "Technology",
    "price": 850
  },
  {
    "id": 351,
    "name": "Mindset Shift Vol 24",
    "category": "Psychology",
    "price": 867
  },
  {
    "id": 352,
    "name": "Future of AI Vol 24",
    "category": "Science",
    "price": 884
  },
  {
    "id": 353,
    "name": "Life Lessons Vol 24",
    "category": "Biography",
    "price": 301
  },
  {
    "id": 354,
    "name": "The Strategic Thinker Vol 24",
    "category": "History",
    "price": 318
  },
  {
    "id": 355,
    "name": "Daily Stoic Living Vol 24",
    "category": "Philosophy",
    "price": 335
  },
  {
    "id": 356,
    "name": "The Hidden Leader Vol 24",
    "category": "Fantasy",
    "price": 352
  },
  {
    "id": 357,
    "name": "Productive You Vol 24",
    "category": "Thriller",
    "price": 369
  },
  {
    "id": 358,
    "name": "Winning Edge Vol 24",
    "category": "Spirituality",
    "price": 386
  },
  {
    "id": 359,
    "name": "The Growth Formula Vol 24",
    "category": "Motivation",
    "price": 403
  },
  {
    "id": 360,
    "name": "Mastering Focus Vol 25",
    "category": "Productivity",
    "price": 420
  },
  {
    "id": 361,
    "name": "Financial Freedom Blueprint Vol 25",
    "category": "Finance",
    "price": 437
  },
  {
    "id": 362,
    "name": "The Habit Formula Vol 25",
    "category": "Self-Help",
    "price": 454
  },
  {
    "id": 363,
    "name": "Power of Discipline Vol 25",
    "category": "Fiction",
    "price": 471
  },
  {
    "id": 364,
    "name": "Startup Mindset Vol 25",
    "category": "Business",
    "price": 488
  },
  {
    "id": 365,
    "name": "Code Smarter Vol 25",
    "category": "Technology",
    "price": 505
  },
  {
    "id": 366,
    "name": "Mindset Shift Vol 25",
    "category": "Psychology",
    "price": 522
  },
  {
    "id": 367,
    "name": "Future of AI Vol 25",
    "category": "Science",
    "price": 539
  },
  {
    "id": 368,
    "name": "Life Lessons Vol 25",
    "category": "Biography",
    "price": 556
  },
  {
    "id": 369,
    "name": "The Strategic Thinker Vol 25",
    "category": "History",
    "price": 573
  },
  {
    "id": 370,
    "name": "Daily Stoic Living Vol 25",
    "category": "Philosophy",
    "price": 590
  },
  {
    "id": 371,
    "name": "The Hidden Leader Vol 25",
    "category": "Fantasy",
    "price": 607
  },
  {
    "id": 372,
    "name": "Productive You Vol 25",
    "category": "Thriller",
    "price": 624
  },
  {
    "id": 373,
    "name": "Winning Edge Vol 25",
    "category": "Spirituality",
    "price": 641
  },
  {
    "id": 374,
    "name": "The Growth Formula Vol 25",
    "category": "Motivation",
    "price": 658
  },
  {
    "id": 375,
    "name": "Mastering Focus Vol 26",
    "category": "Productivity",
    "price": 675
  },
  {
    "id": 376,
    "name": "Financial Freedom Blueprint Vol 26",
    "category": "Finance",
    "price": 692
  },
  {
    "id": 377,
    "name": "The Habit Formula Vol 26",
    "category": "Self-Help",
    "price": 709
  },
  {
    "id": 378,
    "name": "Power of Discipline Vol 26",
    "category": "Fiction",
    "price": 726
  },
  {
    "id": 379,
    "name": "Startup Mindset Vol 26",
    "category": "Business",
    "price": 743
  },
  {
    "id": 380,
    "name": "Code Smarter Vol 26",
    "category": "Technology",
    "price": 760
  },
  {
    "id": 381,
    "name": "Mindset Shift Vol 26",
    "category": "Psychology",
    "price": 777
  },
  {
    "id": 382,
    "name": "Future of AI Vol 26",
    "category": "Science",
    "price": 794
  },
  {
    "id": 383,
    "name": "Life Lessons Vol 26",
    "category": "Biography",
    "price": 811
  },
  {
    "id": 384,
    "name": "The Strategic Thinker Vol 26",
    "category": "History",
    "price": 828
  },
  {
    "id": 385,
    "name": "Daily Stoic Living Vol 26",
    "category": "Philosophy",
    "price": 845
  },
  {
    "id": 386,
    "name": "The Hidden Leader Vol 26",
    "category": "Fantasy",
    "price": 862
  },
  {
    "id": 387,
    "name": "Productive You Vol 26",
    "category": "Thriller",
    "price": 879
  },
  {
    "id": 388,
    "name": "Winning Edge Vol 26",
    "category": "Spirituality",
    "price": 896
  },
  {
    "id": 389,
    "name": "The Growth Formula Vol 26",
    "category": "Motivation",
    "price": 313
  },
  {
    "id": 390,
    "name": "Mastering Focus Vol 27",
    "category": "Productivity",
    "price": 330
  },
  {
    "id": 391,
    "name": "Financial Freedom Blueprint Vol 27",
    "category": "Finance",
    "price": 347
  },
  {
    "id": 392,
    "name": "The Habit Formula Vol 27",
    "category": "Self-Help",
    "price": 364
  },
  {
    "id": 393,
    "name": "Power of Discipline Vol 27",
    "category": "Fiction",
    "price": 381
  },
  {
    "id": 394,
    "name": "Startup Mindset Vol 27",
    "category": "Business",
    "price": 398
  },
  {
    "id": 395,
    "name": "Code Smarter Vol 27",
    "category": "Technology",
    "price": 415
  },
  {
    "id": 396,
    "name": "Mindset Shift Vol 27",
    "category": "Psychology",
    "price": 432
  },
  {
    "id": 397,
    "name": "Future of AI Vol 27",
    "category": "Science",
    "price": 449
  },
  {
    "id": 398,
    "name": "Life Lessons Vol 27",
    "category": "Biography",
    "price": 466
  },
  {
    "id": 399,
    "name": "The Strategic Thinker Vol 27",
    "category": "History",
    "price": 483
  },
  {
    "id": 400,
    "name": "Daily Stoic Living Vol 27",
    "category": "Philosophy",
    "price": 500
  },
  {
    "id": 401,
    "name": "The Hidden Leader Vol 27",
    "category": "Fantasy",
    "price": 517
  },
  {
    "id": 402,
    "name": "Productive You Vol 27",
    "category": "Thriller",
    "price": 534
  },
  {
    "id": 403,
    "name": "Winning Edge Vol 27",
    "category": "Spirituality",
    "price": 551
  },
  {
    "id": 404,
    "name": "The Growth Formula Vol 27",
    "category": "Motivation",
    "price": 568
  },
  {
    "id": 405,
    "name": "Mastering Focus Vol 28",
    "category": "Productivity",
    "price": 585
  },
  {
    "id": 406,
    "name": "Financial Freedom Blueprint Vol 28",
    "category": "Finance",
    "price": 602
  },
  {
    "id": 407,
    "name": "The Habit Formula Vol 28",
    "category": "Self-Help",
    "price": 619
  },
  {
    "id": 408,
    "name": "Power of Discipline Vol 28",
    "category": "Fiction",
    "price": 636
  },
  {
    "id": 409,
    "name": "Startup Mindset Vol 28",
    "category": "Business",
    "price": 653
  },
  {
    "id": 410,
    "name": "Code Smarter Vol 28",
    "category": "Technology",
    "price": 670
  },
  {
    "id": 411,
    "name": "Mindset Shift Vol 28",
    "category": "Psychology",
    "price": 687
  },
  {
    "id": 412,
    "name": "Future of AI Vol 28",
    "category": "Science",
    "price": 704
  },
  {
    "id": 413,
    "name": "Life Lessons Vol 28",
    "category": "Biography",
    "price": 721
  },
  {
    "id": 414,
    "name": "The Strategic Thinker Vol 28",
    "category": "History",
    "price": 738
  },
  {
    "id": 415,
    "name": "Daily Stoic Living Vol 28",
    "category": "Philosophy",
    "price": 755
  },
  {
    "id": 416,
    "name": "The Hidden Leader Vol 28",
    "category": "Fantasy",
    "price": 772
  },
  {
    "id": 417,
    "name": "Productive You Vol 28",
    "category": "Thriller",
    "price": 789
  },
  {
    "id": 418,
    "name": "Winning Edge Vol 28",
    "category": "Spirituality",
    "price": 806
  },
  {
    "id": 419,
    "name": "The Growth Formula Vol 28",
    "category": "Motivation",
    "price": 823
  },
  {
    "id": 420,
    "name": "Mastering Focus Vol 29",
    "category": "Productivity",
    "price": 840
  },
  {
    "id": 421,
    "name": "Financial Freedom Blueprint Vol 29",
    "category": "Finance",
    "price": 857
  },
  {
    "id": 422,
    "name": "The Habit Formula Vol 29",
    "category": "Self-Help",
    "price": 874
  },
  {
    "id": 423,
    "name": "Power of Discipline Vol 29",
    "category": "Fiction",
    "price": 891
  },
  {
    "id": 424,
    "name": "Startup Mindset Vol 29",
    "category": "Business",
    "price": 308
  },
  {
    "id": 425,
    "name": "Code Smarter Vol 29",
    "category": "Technology",
    "price": 325
  },
  {
    "id": 426,
    "name": "Mindset Shift Vol 29",
    "category": "Psychology",
    "price": 342
  },
  {
    "id": 427,
    "name": "Future of AI Vol 29",
    "category": "Science",
    "price": 359
  },
  {
    "id": 428,
    "name": "Life Lessons Vol 29",
    "category": "Biography",
    "price": 376
  },
  {
    "id": 429,
    "name": "The Strategic Thinker Vol 29",
    "category": "History",
    "price": 393
  },
  {
    "id": 430,
    "name": "Daily Stoic Living Vol 29",
    "category": "Philosophy",
    "price": 410
  },
  {
    "id": 431,
    "name": "The Hidden Leader Vol 29",
    "category": "Fantasy",
    "price": 427
  },
  {
    "id": 432,
    "name": "Productive You Vol 29",
    "category": "Thriller",
    "price": 444
  },
  {
    "id": 433,
    "name": "Winning Edge Vol 29",
    "category": "Spirituality",
    "price": 461
  },
  {
    "id": 434,
    "name": "The Growth Formula Vol 29",
    "category": "Motivation",
    "price": 478
  },
  {
    "id": 435,
    "name": "Mastering Focus Vol 30",
    "category": "Productivity",
    "price": 495
  },
  {
    "id": 436,
    "name": "Financial Freedom Blueprint Vol 30",
    "category": "Finance",
    "price": 512
  },
  {
    "id": 437,
    "name": "The Habit Formula Vol 30",
    "category": "Self-Help",
    "price": 529
  },
  {
    "id": 438,
    "name": "Power of Discipline Vol 30",
    "category": "Fiction",
    "price": 546
  },
  {
    "id": 439,
    "name": "Startup Mindset Vol 30",
    "category": "Business",
    "price": 563
  },
  {
    "id": 440,
    "name": "Code Smarter Vol 30",
    "category": "Technology",
    "price": 580
  },
  {
    "id": 441,
    "name": "Mindset Shift Vol 30",
    "category": "Psychology",
    "price": 597
  },
  {
    "id": 442,
    "name": "Future of AI Vol 30",
    "category": "Science",
    "price": 614
  },
  {
    "id": 443,
    "name": "Life Lessons Vol 30",
    "category": "Biography",
    "price": 631
  },
  {
    "id": 444,
    "name": "The Strategic Thinker Vol 30",
    "category": "History",
    "price": 648
  },
  {
    "id": 445,
    "name": "Daily Stoic Living Vol 30",
    "category": "Philosophy",
    "price": 665
  },
  {
    "id": 446,
    "name": "The Hidden Leader Vol 30",
    "category": "Fantasy",
    "price": 682
  },
  {
    "id": 447,
    "name": "Productive You Vol 30",
    "category": "Thriller",
    "price": 699
  },
  {
    "id": 448,
    "name": "Winning Edge Vol 30",
    "category": "Spirituality",
    "price": 716
  },
  {
    "id": 449,
    "name": "The Growth Formula Vol 30",
    "category": "Motivation",
    "price": 733
  },
  {
    "id": 450,
    "name": "Mastering Focus Vol 31",
    "category": "Productivity",
    "price": 750
  },
  {
    "id": 451,
    "name": "Financial Freedom Blueprint Vol 31",
    "category": "Finance",
    "price": 767
  },
  {
    "id": 452,
    "name": "The Habit Formula Vol 31",
    "category": "Self-Help",
    "price": 784
  },
  {
    "id": 453,
    "name": "Power of Discipline Vol 31",
    "category": "Fiction",
    "price": 801
  },
  {
    "id": 454,
    "name": "Startup Mindset Vol 31",
    "category": "Business",
    "price": 818
  },
  {
    "id": 455,
    "name": "Code Smarter Vol 31",
    "category": "Technology",
    "price": 835
  },
  {
    "id": 456,
    "name": "Mindset Shift Vol 31",
    "category": "Psychology",
    "price": 852
  },
  {
    "id": 457,
    "name": "Future of AI Vol 31",
    "category": "Science",
    "price": 869
  },
  {
    "id": 458,
    "name": "Life Lessons Vol 31",
    "category": "Biography",
    "price": 886
  },
  {
    "id": 459,
    "name": "The Strategic Thinker Vol 31",
    "category": "History",
    "price": 303
  },
  {
    "id": 460,
    "name": "Daily Stoic Living Vol 31",
    "category": "Philosophy",
    "price": 320
  },
  {
    "id": 461,
    "name": "The Hidden Leader Vol 31",
    "category": "Fantasy",
    "price": 337
  },
  {
    "id": 462,
    "name": "Productive You Vol 31",
    "category": "Thriller",
    "price": 354
  },
  {
    "id": 463,
    "name": "Winning Edge Vol 31",
    "category": "Spirituality",
    "price": 371
  },
  {
    "id": 464,
    "name": "The Growth Formula Vol 31",
    "category": "Motivation",
    "price": 388
  },
  {
    "id": 465,
    "name": "Mastering Focus Vol 32",
    "category": "Productivity",
    "price": 405
  },
  {
    "id": 466,
    "name": "Financial Freedom Blueprint Vol 32",
    "category": "Finance",
    "price": 422
  },
  {
    "id": 467,
    "name": "The Habit Formula Vol 32",
    "category": "Self-Help",
    "price": 439
  },
  {
    "id": 468,
    "name": "Power of Discipline Vol 32",
    "category": "Fiction",
    "price": 456
  },
  {
    "id": 469,
    "name": "Startup Mindset Vol 32",
    "category": "Business",
    "price": 473
  },
  {
    "id": 470,
    "name": "Code Smarter Vol 32",
    "category": "Technology",
    "price": 490
  },
  {
    "id": 471,
    "name": "Mindset Shift Vol 32",
    "category": "Psychology",
    "price": 507
  },
  {
    "id": 472,
    "name": "Future of AI Vol 32",
    "category": "Science",
    "price": 524
  },
  {
    "id": 473,
    "name": "Life Lessons Vol 32",
    "category": "Biography",
    "price": 541
  },
  {
    "id": 474,
    "name": "The Strategic Thinker Vol 32",
    "category": "History",
    "price": 558
  },
  {
    "id": 475,
    "name": "Daily Stoic Living Vol 32",
    "category": "Philosophy",
    "price": 575
  },
  {
    "id": 476,
    "name": "The Hidden Leader Vol 32",
    "category": "Fantasy",
    "price": 592
  },
  {
    "id": 477,
    "name": "Productive You Vol 32",
    "category": "Thriller",
    "price": 609
  },
  {
    "id": 478,
    "name": "Winning Edge Vol 32",
    "category": "Spirituality",
    "price": 626
  },
  {
    "id": 479,
    "name": "The Growth Formula Vol 32",
    "category": "Motivation",
    "price": 643
  },
  {
    "id": 480,
    "name": "Mastering Focus Vol 33",
    "category": "Productivity",
    "price": 660
  },
  {
    "id": 481,
    "name": "Financial Freedom Blueprint Vol 33",
    "category": "Finance",
    "price": 677
  },
  {
    "id": 482,
    "name": "The Habit Formula Vol 33",
    "category": "Self-Help",
    "price": 694
  },
  {
    "id": 483,
    "name": "Power of Discipline Vol 33",
    "category": "Fiction",
    "price": 711
  },
  {
    "id": 484,
    "name": "Startup Mindset Vol 33",
    "category": "Business",
    "price": 728
  },
  {
    "id": 485,
    "name": "Code Smarter Vol 33",
    "category": "Technology",
    "price": 745
  },
  {
    "id": 486,
    "name": "Mindset Shift Vol 33",
    "category": "Psychology",
    "price": 762
  },
  {
    "id": 487,
    "name": "Future of AI Vol 33",
    "category": "Science",
    "price": 779
  },
  {
    "id": 488,
    "name": "Life Lessons Vol 33",
    "category": "Biography",
    "price": 796
  },
  {
    "id": 489,
    "name": "The Strategic Thinker Vol 33",
    "category": "History",
    "price": 813
  },
  {
    "id": 490,
    "name": "Daily Stoic Living Vol 33",
    "category": "Philosophy",
    "price": 830
  },
  {
    "id": 491,
    "name": "The Hidden Leader Vol 33",
    "category": "Fantasy",
    "price": 847
  },
  {
    "id": 492,
    "name": "Productive You Vol 33",
    "category": "Thriller",
    "price": 864
  },
  {
    "id": 493,
    "name": "Winning Edge Vol 33",
    "category": "Spirituality",
    "price": 881
  },
  {
    "id": 494,
    "name": "The Growth Formula Vol 33",
    "category": "Motivation",
    "price": 898
  },
  {
    "id": 495,
    "name": "Mastering Focus Vol 34",
    "category": "Productivity",
    "price": 315
  },
  {
    "id": 496,
    "name": "Financial Freedom Blueprint Vol 34",
    "category": "Finance",
    "price": 332
  },
  {
    "id": 497,
    "name": "The Habit Formula Vol 34",
    "category": "Self-Help",
    "price": 349
  },
  {
    "id": 498,
    "name": "Power of Discipline Vol 34",
    "category": "Fiction",
    "price": 366
  },
  {
    "id": 499,
    "name": "Startup Mindset Vol 34",
    "category": "Business",
    "price": 383
  },
  {
    "id": 500,
    "name": "Code Smarter Vol 34",
    "category": "Technology",
    "price": 400
  },
  {
    "id": 501,
    "name": "Mindset Shift Vol 34",
    "category": "Psychology",
    "price": 417
  },
  {
    "id": 502,
    "name": "Future of AI Vol 34",
    "category": "Science",
    "price": 434
  },
  {
    "id": 503,
    "name": "Life Lessons Vol 34",
    "category": "Biography",
    "price": 451
  },
  {
    "id": 504,
    "name": "The Strategic Thinker Vol 34",
    "category": "History",
    "price": 468
  },
  {
    "id": 505,
    "name": "Daily Stoic Living Vol 34",
    "category": "Philosophy",
    "price": 485
  },
  {
    "id": 506,
    "name": "The Hidden Leader Vol 34",
    "category": "Fantasy",
    "price": 502
  },
  {
    "id": 507,
    "name": "Productive You Vol 34",
    "category": "Thriller",
    "price": 519
  },
  {
    "id": 508,
    "name": "Winning Edge Vol 34",
    "category": "Spirituality",
    "price": 536
  },
  {
    "id": 509,
    "name": "The Growth Formula Vol 34",
    "category": "Motivation",
    "price": 553
  },
  {
    "id": 510,
    "name": "Mastering Focus Vol 35",
    "category": "Productivity",
    "price": 570
  },
  {
    "id": 511,
    "name": "Financial Freedom Blueprint Vol 35",
    "category": "Finance",
    "price": 587
  },
  {
    "id": 512,
    "name": "The Habit Formula Vol 35",
    "category": "Self-Help",
    "price": 604
  },
  {
    "id": 513,
    "name": "Power of Discipline Vol 35",
    "category": "Fiction",
    "price": 621
  },
  {
    "id": 514,
    "name": "Startup Mindset Vol 35",
    "category": "Business",
    "price": 638
  },
  {
    "id": 515,
    "name": "Code Smarter Vol 35",
    "category": "Technology",
    "price": 655
  },
  {
    "id": 516,
    "name": "Mindset Shift Vol 35",
    "category": "Psychology",
    "price": 672
  },
  {
    "id": 517,
    "name": "Future of AI Vol 35",
    "category": "Science",
    "price": 689
  },
  {
    "id": 518,
    "name": "Life Lessons Vol 35",
    "category": "Biography",
    "price": 706
  },
  {
    "id": 519,
    "name": "The Strategic Thinker Vol 35",
    "category": "History",
    "price": 723
  },
  {
    "id": 520,
    "name": "Daily Stoic Living Vol 35",
    "category": "Philosophy",
    "price": 740
  },
  {
    "id": 521,
    "name": "The Hidden Leader Vol 35",
    "category": "Fantasy",
    "price": 757
  },
  {
    "id": 522,
    "name": "Productive You Vol 35",
    "category": "Thriller",
    "price": 774
  },
  {
    "id": 523,
    "name": "Winning Edge Vol 35",
    "category": "Spirituality",
    "price": 791
  },
  {
    "id": 524,
    "name": "The Growth Formula Vol 35",
    "category": "Motivation",
    "price": 808
  },
  {
    "id": 525,
    "name": "Mastering Focus Vol 36",
    "category": "Productivity",
    "price": 825
  },
  {
    "id": 526,
    "name": "Financial Freedom Blueprint Vol 36",
    "category": "Finance",
    "price": 842
  },
  {
    "id": 527,
    "name": "The Habit Formula Vol 36",
    "category": "Self-Help",
    "price": 859
  },
  {
    "id": 528,
    "name": "Power of Discipline Vol 36",
    "category": "Fiction",
    "price": 876
  },
  {
    "id": 529,
    "name": "Startup Mindset Vol 36",
    "category": "Business",
    "price": 893
  },
  {
    "id": 530,
    "name": "Code Smarter Vol 36",
    "category": "Technology",
    "price": 310
  },
  {
    "id": 531,
    "name": "Mindset Shift Vol 36",
    "category": "Psychology",
    "price": 327
  },
  {
    "id": 532,
    "name": "Future of AI Vol 36",
    "category": "Science",
    "price": 344
  },
  {
    "id": 533,
    "name": "Life Lessons Vol 36",
    "category": "Biography",
    "price": 361
  },
  {
    "id": 534,
    "name": "The Strategic Thinker Vol 36",
    "category": "History",
    "price": 378
  },
  {
    "id": 535,
    "name": "Daily Stoic Living Vol 36",
    "category": "Philosophy",
    "price": 395
  },
  {
    "id": 536,
    "name": "The Hidden Leader Vol 36",
    "category": "Fantasy",
    "price": 412
  },
  {
    "id": 537,
    "name": "Productive You Vol 36",
    "category": "Thriller",
    "price": 429
  },
  {
    "id": 538,
    "name": "Winning Edge Vol 36",
    "category": "Spirituality",
    "price": 446
  },
  {
    "id": 539,
    "name": "The Growth Formula Vol 36",
    "category": "Motivation",
    "price": 463
  },
  {
    "id": 540,
    "name": "Mastering Focus Vol 37",
    "category": "Productivity",
    "price": 480
  },
  {
    "id": 541,
    "name": "Financial Freedom Blueprint Vol 37",
    "category": "Finance",
    "price": 497
  },
  {
    "id": 542,
    "name": "The Habit Formula Vol 37",
    "category": "Self-Help",
    "price": 514
  },
  {
    "id": 543,
    "name": "Power of Discipline Vol 37",
    "category": "Fiction",
    "price": 531
  },
  {
    "id": 544,
    "name": "Startup Mindset Vol 37",
    "category": "Business",
    "price": 548
  },
  {
    "id": 545,
    "name": "Code Smarter Vol 37",
    "category": "Technology",
    "price": 565
  },
  {
    "id": 546,
    "name": "Mindset Shift Vol 37",
    "category": "Psychology",
    "price": 582
  },
  {
    "id": 547,
    "name": "Future of AI Vol 37",
    "category": "Science",
    "price": 599
  },
  {
    "id": 548,
    "name": "Life Lessons Vol 37",
    "category": "Biography",
    "price": 616
  },
  {
    "id": 549,
    "name": "The Strategic Thinker Vol 37",
    "category": "History",
    "price": 633
  },
  {
    "id": 550,
    "name": "Daily Stoic Living Vol 37",
    "category": "Philosophy",
    "price": 650
  },
  {
    "id": 551,
    "name": "The Hidden Leader Vol 37",
    "category": "Fantasy",
    "price": 667
  },
  {
    "id": 552,
    "name": "Productive You Vol 37",
    "category": "Thriller",
    "price": 684
  },
  {
    "id": 553,
    "name": "Winning Edge Vol 37",
    "category": "Spirituality",
    "price": 701
  },
  {
    "id": 554,
    "name": "The Growth Formula Vol 37",
    "category": "Motivation",
    "price": 718
  },
  {
    "id": 555,
    "name": "Mastering Focus Vol 38",
    "category": "Productivity",
    "price": 735
  },
  {
    "id": 556,
    "name": "Financial Freedom Blueprint Vol 38",
    "category": "Finance",
    "price": 752
  },
  {
    "id": 557,
    "name": "The Habit Formula Vol 38",
    "category": "Self-Help",
    "price": 769
  },
  {
    "id": 558,
    "name": "Power of Discipline Vol 38",
    "category": "Fiction",
    "price": 786
  },
  {
    "id": 559,
    "name": "Startup Mindset Vol 38",
    "category": "Business",
    "price": 803
  },
  {
    "id": 560,
    "name": "Code Smarter Vol 38",
    "category": "Technology",
    "price": 820
  },
  {
    "id": 561,
    "name": "Mindset Shift Vol 38",
    "category": "Psychology",
    "price": 837
  },
  {
    "id": 562,
    "name": "Future of AI Vol 38",
    "category": "Science",
    "price": 854
  },
  {
    "id": 563,
    "name": "Life Lessons Vol 38",
    "category": "Biography",
    "price": 871
  },
  {
    "id": 564,
    "name": "The Strategic Thinker Vol 38",
    "category": "History",
    "price": 888
  },
  {
    "id": 565,
    "name": "Daily Stoic Living Vol 38",
    "category": "Philosophy",
    "price": 305
  },
  {
    "id": 566,
    "name": "The Hidden Leader Vol 38",
    "category": "Fantasy",
    "price": 322
  },
  {
    "id": 567,
    "name": "Productive You Vol 38",
    "category": "Thriller",
    "price": 339
  },
  {
    "id": 568,
    "name": "Winning Edge Vol 38",
    "category": "Spirituality",
    "price": 356
  },
  {
    "id": 569,
    "name": "The Growth Formula Vol 38",
    "category": "Motivation",
    "price": 373
  },
  {
    "id": 570,
    "name": "Mastering Focus Vol 39",
    "category": "Productivity",
    "price": 390
  },
  {
    "id": 571,
    "name": "Financial Freedom Blueprint Vol 39",
    "category": "Finance",
    "price": 407
  },
  {
    "id": 572,
    "name": "The Habit Formula Vol 39",
    "category": "Self-Help",
    "price": 424
  },
  {
    "id": 573,
    "name": "Power of Discipline Vol 39",
    "category": "Fiction",
    "price": 441
  },
  {
    "id": 574,
    "name": "Startup Mindset Vol 39",
    "category": "Business",
    "price": 458
  },
  {
    "id": 575,
    "name": "Code Smarter Vol 39",
    "category": "Technology",
    "price": 475
  },
  {
    "id": 576,
    "name": "Mindset Shift Vol 39",
    "category": "Psychology",
    "price": 492
  },
  {
    "id": 577,
    "name": "Future of AI Vol 39",
    "category": "Science",
    "price": 509
  },
  {
    "id": 578,
    "name": "Life Lessons Vol 39",
    "category": "Biography",
    "price": 526
  },
  {
    "id": 579,
    "name": "The Strategic Thinker Vol 39",
    "category": "History",
    "price": 543
  },
  {
    "id": 580,
    "name": "Daily Stoic Living Vol 39",
    "category": "Philosophy",
    "price": 560
  },
  {
    "id": 581,
    "name": "The Hidden Leader Vol 39",
    "category": "Fantasy",
    "price": 577
  },
  {
    "id": 582,
    "name": "Productive You Vol 39",
    "category": "Thriller",
    "price": 594
  },
  {
    "id": 583,
    "name": "Winning Edge Vol 39",
    "category": "Spirituality",
    "price": 611
  },
  {
    "id": 584,
    "name": "The Growth Formula Vol 39",
    "category": "Motivation",
    "price": 628
  },
  {
    "id": 585,
    "name": "Mastering Focus Vol 40",
    "category": "Productivity",
    "price": 645
  },
  {
    "id": 586,
    "name": "Financial Freedom Blueprint Vol 40",
    "category": "Finance",
    "price": 662
  },
  {
    "id": 587,
    "name": "The Habit Formula Vol 40",
    "category": "Self-Help",
    "price": 679
  },
  {
    "id": 588,
    "name": "Power of Discipline Vol 40",
    "category": "Fiction",
    "price": 696
  },
  {
    "id": 589,
    "name": "Startup Mindset Vol 40",
    "category": "Business",
    "price": 713
  },
  {
    "id": 590,
    "name": "Code Smarter Vol 40",
    "category": "Technology",
    "price": 730
  },
  {
    "id": 591,
    "name": "Mindset Shift Vol 40",
    "category": "Psychology",
    "price": 747
  },
  {
    "id": 592,
    "name": "Future of AI Vol 40",
    "category": "Science",
    "price": 764
  },
  {
    "id": 593,
    "name": "Life Lessons Vol 40",
    "category": "Biography",
    "price": 781
  },
  {
    "id": 594,
    "name": "The Strategic Thinker Vol 40",
    "category": "History",
    "price": 798
  },
  {
    "id": 595,
    "name": "Daily Stoic Living Vol 40",
    "category": "Philosophy",
    "price": 815
  },
  {
    "id": 596,
    "name": "The Hidden Leader Vol 40",
    "category": "Fantasy",
    "price": 832
  },
  {
    "id": 597,
    "name": "Productive You Vol 40",
    "category": "Thriller",
    "price": 849
  },
  {
    "id": 598,
    "name": "Winning Edge Vol 40",
    "category": "Spirituality",
    "price": 866
  },
  {
    "id": 599,
    "name": "The Growth Formula Vol 40",
    "category": "Motivation",
    "price": 883
  }
];