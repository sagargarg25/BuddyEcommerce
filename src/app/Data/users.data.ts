import { InMemoryDbService } from 'angular-in-memory-web-api';
// in memory web api for handling all database operation it contain User, Product,Category , cartproducts and Order Detail
export class UserData implements InMemoryDbService {
  createDb() {
       let Users= [
             {     id: 1,
          UserName: "sagar garg",
          UserEmail: "sagar@gmail.com",
          UserPassword: "sagar@123",
                 },
        {
          id: 2,
          UserName: "shubham garg",
          UserEmail: "shubham@gmail.com",
          UserPassword: "shubham@123",
         
        },
        {
          id: 3,
          UserName: "saif ejaz",
          UserEmail: "saif@gmail.com",
          UserPassword: "saif@123",
         
        },
        {
          id: 4,
          UserName: "paritosh",
          UserEmail: "paritosh@gmail.com",
          UserPassword: "paritosh@123",
         
        },
        {
          id: 5,
          UserName: "shubham garg",
          UserEmail: "shubham@gmail.com",
          UserPassword: "shubham@123",
                 },
        {
          id: 6,  UserName: "Manan Sahni", UserEmail: "manan@gmail.com",  UserPassword: "manan@123"  }
      
    ]  ;  
    let Products=  [
      {
        ProductCategoryid: 1,
        id: 1,
        productName: "Chaz Kangeroo Hoodie",
        productquantity: 11,
        productCode: "GDN-0001",
        description: "Ideal for cold-weather training or work outdoors, the Chaz Hoodie promises superior warmth with every wear. Thick material blocks out the wind as ribbed cuffs and bottom band seal in body heat.",
        price: 502.12,
        imageUrl: "assets/images/hoodie.png"
      },
      {
        ProductCategoryid: 1,
        id: 2,
        productName: "Hyperion Elements Jacket",
        productquantity: 4,
        productCode: "GME-0024",
        description: "Boldly face high winds, frigid temps and stormy weather the whole winter through in the Hyperion Elements Jacket. LumaTech™ insulating technology helps maintain your core temperature and wick sweat. The smooth shell is water repellent and quilted to retain body heat.",
        price: 1015.11,
        imageUrl: "assets/images/jacket.png"
      },
      {
        ProductCategoryid: 1,
        id: 3,
        productName: "Zoltan Gym Tee",
        productCode: "GME-2312",
        productquantity: 6,
        description: "This short-sleeve wonder works twice as hard to give you good gym days and good looks. The Zoltan Gym Tee helps you stay comfortable, while the looser sleeves and flatlock seams keep you moving in chafe-free comfort.",
        price: 736,
        imageUrl: "assets/images/tee.png"
      },
      {
        ProductCategoryid: 1,
        id: 4,
        productName: "Geo Insulated Jogging Pant",
        productCode: "EME-3451",
        productquantity: 8,
        description: "In the cold, even the toughest guys shiver, unless they're in the Geo Insulated Jogging Pant. Lightweight and wind resistant, they block brutal wind gusts and warm you to the bone. Breathable mesh keeps them dry on the inside.",
        price: 680,
        imageUrl: "assets/images/pant.png"
      },
      {
        ProductCategoryid: 1,
        id: 5,
        productName: "Tristan Endurance Tank",
        productCode: "EME-0926",
        productquantity: 11,
        description: "Push yourself through punishing runs, plyometric workouts, intense competition and more in our athletic Tristan Endurance Tank. Constructed with built-in moisture-wicking technology, it's designed to keep you completely cool and dry on the long haul.",
        price: 250,
        imageUrl: "assets/images/tank.png"
      },
      {
        ProductCategoryid: 2,
        id: 6,
        productName: "Josie Yoga Jacket",
        productCode: "EWE-1202",
        productquantity: 0,
        description: "When your near future includes yoga, the cozy comfort of the Josie Yoga Jacket gets your mind and body ready. Stretchy CoolTech™ fabric with zipper pockets makes this jacket the right gear for studio time or teatime after",
        price: 281.89,
        imageUrl: "assets/images/womenjacket.png"
      },
      {
        ProductCategoryid: 2,
        id: 7,
        productName: "Mona Pullover Hoodlie",
        productCode: "SWE-1201",
        productquantity: 19,
        description: "Whether you're after energizing activity or eye-catching apparel, the Mona Pullover is what you want. You'll stay warm and look fashionable, wherever you are.",
        price: 350,
        imageUrl: "assets/images/womanjacket.png"
      },
      {
        ProductCategoryid: 2,
        id: 8,
        productName: "Women Shoes",
        productCode: "TBX-1203",
        productquantity: 11,
        description: "The right pair of sandals will make your feet ‘oh so comfortable’ as soon as you put them on. These black closed-toe sandals will make you look exotic and will bring a great feeling of true confidence",
        price: 1000.12,
        imageUrl: "assets/images/womenshoes.png"
      },
      {
        ProductCategoryid: 2,
        id: 9,
        productName: "Gabrielle Micro Sleeve Top",
        productCode: "EWE-4502",
        productquantity: 14,
        description: "Luma's most popular top, the Gabrielle Micro Sleeve is back with even more comfort and style.",
        price: 2500.45,
        imageUrl: "assets/images/womantop.png"
      },
      {
        ProductCategoryid: 2,
        id: 10,
        productName: "Red Bag",
        productCode: "GMG-8723",
        productquantity: 10,
        description: "Lifestyle bag you does not to buy the bag again ",
        price: 2000,
        imageUrl: "assets/images/womanbag.png"
      },
      {
        ProductCategoryid: 3,
        id: 11,
        productName: "Yellow Duck",
        productCode: "EKI-0011",
        description: "High-quality soft fabrics and Micro Fiber made. Non-toxic and odorless.Playful Colors: These animals are Made of Beautiful Colored Fabric For Hours Of Play For Your Little One",
        price: 100.34,
        productquantity: 10,
        imageUrl: "assets/images/toy.png"
      },
      {
        ProductCategoryid: 3,
        id: 12,
        productName: " Cotton Pyjama ",
        productCode: "GKI-9823",
        description: "Fit Type: Regula Material: Cotton Color: Multi-Colored Leg Style: Relaxed; Waist Style: Regular Fit Type: Regular Fit Length of Bottom: 12 inches",
        price: 2000,
        productquantity: 3,
        imageUrl: "assets/images/kids.png"
      },
      {
        ProductCategoryid: 3,
        id: 13,
        productName: " Kids Bath Tub",
        productCode: "EKI-1234",
        description: "Sunset glow baby pool, Foldable 20mm rings with 18mm floor It has 3 rings ,Total Size : 86cm * 25cm Soft inflatable floor Capacity 17cm of wall height is 68 litre With repair patch Age upto 2 years",
        price: 200,
        productquantity: 10,
        imageUrl: "assets/images/kidstube.png"
      },
      {
        ProductCategoryid: 3,
        id: 14,
        productName: " Abacus Tool",
        productCode: "TBX-7865",
        description: "Set of 3 professional abacus tools of 17 rod each. SOLID PLASTIC FRAME : Quality design has been taken to the next level with this digit standard abacus with a plastic frame, making it a decorative piece that's home friendly. PROFESSIONAL RELIABILITY GOES BACK CENTURIES : This digit standard abacus is the abacus in classical form, featuring the system used before modern numerals that are still used in parts of the world by merchants, traders, and clerks.",
        price: 100.45,
        productquantity: 5,
        imageUrl: "assets/images/abacus.png"
      },
      {
        ProductCategoryid: 3,
        id: 15,
        productName: "Swing Chair ",
        productCode: "GMG-5637",
        description: "【SAFE & COMFY FOR KIDS】 Premium Quality Cotton filling on the seat & backrest which adds extra comfort support to your baby and protect baby from the skin rashas. Meticulously engineered with heavy duty rope and wood featuring safety lock belt for your child which adds extra safety.",
        price: 200,
        productquantity: 4,
        imageUrl: "assets/images/jhula.png"
      },
      {
        ProductCategoryid: 4,
        id: 16,
        productName: " Laptop Backpack",
        productCode: "EGE-2211",
        description: "Outer material: synthetic, color: navy. USB and headphone cable slot Waterproof. Size:18 inch Capacity: 20 liters; Weight: 560 grams; Dimensions: 48 cms x 32 cms x 14 cms (LxWxH) Number of compartments: 2. External bottle pocket Laptop compatibility: yes, laptop size: 16strap type: adjustable. Anti theft waterproof bag with anti sweat fabric on back and shoulder straps",
        price: 300.45,
        productquantity: 7,
        imageUrl: "assets/images/gearbag.png"
      },
      {
        ProductCategoryid: 4,
        id: 17,
        productName: "Noise Colorfit watch",
        productCode: "GGE-8723",
        description: "Get a 1-year assured warranty from NOISE. Manage your warranty claims 24x7 by typing SUPPORT.GONOISE.COM in your browser's address bar. For product related queries please reach out to us at 8882132132 or drop an email at PRODUCTFEEDBACK@NEXXBASE.COM",
        price: 7000,
        productquantity: 10,
        imageUrl: "assets/images/watches.png"
      },
      {
        ProductCategoryid: 4,
        id: 18,
        productName: "Digital Men's Watch",
        productCode: "EGE-3948",
        description: "Sold by Luxurit™ and Fulfilled by Amazon.Dial Color: Black Dial Shape: Round Strap Color: Black Watch Movement Type: Japanese Quartz Model number: 1251",
        price: 3000.67,
        productquantity: 3,
        imageUrl: "assets/images/smartwatces.png"
      },
      {
        ProductCategoryid: 4,
        id: 19,
        productName: "Waist Trimmer",
        productCode: "TBX-4445",
        description: " The ab exerciser targets specific muscles of your body to build your fitness Rowing movements of this exerciser trims and tones your abdominal muscles and strengthens your arms,legs hips and thighs. Heavy Duty Steel Springs: Heavy duty carbon steel springs create resistance and builds your muscles. The long springs build resistance to build your upper and lower body muscles",
        price: 49999.9,
        productquantity: 3,
        imageUrl: "assets/images/bodybuilder.png"
      },
      {
        ProductCategoryid: 4,
        id: 20,
        productName: "Forearm Exerciser",
        productCode: "GMG-4618",
        description: "【GOOD FOR BEGINNERS AND PHYSICAL THERAPY】 This wrist exerciser is designed to improve strength, power and speed in the wrists, hands and forearms. The MINIMUM TENSION is about 2kg, which is ideal for physical therapy, sports beginners,tennis players, women, kids and other people who need to increase muscle strength",
        price: 680,
        productquantity: 12,
        imageUrl: "assets/images/bodybuilder.png"
      },
      {
        ProductCategoryid: 5,
        id: 21,
        productName: " Electronic Safe",
        productCode: "GEE-9011",
        description: "Compact, strong 8 Litre, 6.5 kg, mild steel safe locker. Dimensions- HxWxD: 200x300x200 mm Locking Mechanism: Opens with 3-6 digit password, enabled with a master password for better control, mechanical override in case password is forgotten, Automatically freezes if wrong password is entered four times, consecutively",
        price: 6500,
        productquantity: 11,
        imageUrl: "assets/images/locker.png"
      },
      {
        ProductCategoryid: 5,
        id: 22,
        productName: " Aldo Electronic Digital ",
        productCode: "GEW-0223",
        description: "Wide LCD screen display, easy to read, Automatically locks the reading when data is stable Low power consumption, Low battery indicator,Tare function, Maximum Capacity 10kg The scale will automatically switched off when it is in non-use condition in order to save power",
        price: 1999.9,
        productquantity: 12,
        imageUrl: "assets/images/weight.png"
      },
      {
        ProductCategoryid: 5,
        id: 23,
        productName: "Fishing Hook",
        productCode: "TBX-9808",
        description: "Portable LCD Electronic Balance digital scale .Small and Light, Making it Convenient to Carry and Use. stores easily in your pocket or tackle box .110lb/50kg capacity with 5g or 10g accuracy; LCD screen displays weight in g/kg/lb/oz ",
        price: 300.34,
        productquantity: 2,
        imageUrl: "assets/images/fishinghook.png"
      },
      {
        ProductCategoryid: 5,
        id: 24,
        productName: "ElectroBot 6 in 1 ",
        productCode: "GEE-9922",
        description: "Includes 25w soldering iron + solder stand + 3 meter soldering wire + desolder wick + flux + wire cutter & stripper Slide on replaceable tips, low current leakage",
        price: 700.36,
        productquantity: 8,
        imageUrl: "assets/images/bolt.png"
      },
      {
        ProductCategoryid: 5,
        id: 25,
        productName: "Washing Machine",
        productCode: "GMG-9642",
        description: "Fully-automatic top load washing machine: Affordable with great wash quality, Easy to use Capacity 6.5 Kg: Suitable for families with 3 to 4 members Product Warranty: 2 years ",
        price: 24999.23,
        productquantity: 30,
        imageUrl: "assets/images/washingmachine.png"
      }
    ];
   let ProductCategory =[
      {
        id: 1,
        Category: "Men"
      },
      {
        id: 2,
        Category: "Women"
      },
      {
        id: 3,
        Category: "Kids"
      },
      {
        id: 4,
        Category: "Gear"
      },
      {
        id: 5,
        Category: "Electronic"
      }
    ];
   let CartProduct= [
      {
        UserEmail: "sagar@gmail.com",
        Products: [
          {
            ProductCategoryid: 1,
            id: 1,
            productName: "Chaz Kangeroo Hoodie",
            productquantity: 1,
            productCode: "GDN-0001",
            description: "Ideal for cold-weather training or work outdoors, the Chaz Hoodie promises superior warmth with every wear. Thick material blocks out the wind as ribbed cuffs and bottom band seal in body heat.",
            price: 502.12,
            imageUrl: "assets/images/hoodie.png"
          }
        ],
        id: 5
      }
    ];
    let Orders= [
    
      {
        CustomerName: "saif",
        CustomerUserEmail: "saif@gmail.com",
        State: "Bihar",
        city: "dasorah",
        ShippingAddress: "Bihar distict123",
        Pincode: "238462",
        PhoneNumber: "9816384928",
        Products: [
          {
            ProductCategoryid: 5,
            id: 21,
            productName: " Electronic Safe",
            productCode: "GEE-9011",
            description: "Compact, strong 8 Litre, 6.5 kg, mild steel safe locker. Dimensions- HxWxD: 200x300x200 mm Locking Mechanism: Opens with 3-6 digit password, enabled with a master password for better control, mechanical override in case password is forgotten, Automatically freezes if wrong password is entered four times, consecutively",
            price: 6500,
            productquantity: 1,
            imageUrl: "assets/images/locker.png"
          }
        ],
        UserEmail: "saif@gmail.com",
        OrderDate: "2021-05-01T05:39:33.017Z",
        id: 5
      },
      {
        CustomerName: "Sagar Garg",
        CustomerUserEmail: "test@test.com",
        State: "Delhi",
        city: "delhi",
        ShippingAddress: "a",
        Pincode: "110026",
        PhoneNumber: "07011087190",
        Products: [
          {
            ProductCategoryid: 2,
            id: 7,
            productName: "Mona Pullover Hoodlie",
            productCode: "SWE-1201",
            productquantity: 1,
            description: "Whether you're after energizing activity or eye-catching apparel, the Mona Pullover is what you want. You'll stay warm and look fashionable, wherever you are.",
            price: 350,
            imageUrl: "assets/images/womanjacket.png"
          },
          {
            ProductCategoryid: 2,
            id: 10,
            productName: "Red Bag",
            productCode: "GMG-8723",
            productquantity: 1,
            description: "Lifestyle bag you does not to buy the bag again ",
            price: 2000,
            imageUrl: "assets/images/womanbag.png"
          }
        ],
        UserEmail: "saif@gmail.com",
        OrderDate: "2021-05-01T07:16:49.618Z",
        id: 6
      },
      {
        CustomerName: "paritosh",
        CustomerUserEmail: "paritosh@gmail.com",
        State: "Delhi",
        city: "Delhi",
        ShippingAddress: "bhajan pura",
        Pincode: "110024",
        PhoneNumber: "8728391729",
        Products: [
          {
            ProductCategoryid: 2,
            id: 6,
            productName: "Josie Yoga Jacket",
            productCode: "EWE-1202",
            productquantity: 3,
            description: "When your near future includes yoga, the cozy comfort of the Josie Yoga Jacket gets your mind and body ready. Stretchy CoolTech™ fabric with zipper pockets makes this jacket the right gear for studio time or teatime after",
            price: 845.67,
            imageUrl: "assets/images/womenjacket.png"
          }
        ],
        UserEmail: "paritosh@gmail.com",
        OrderDate: "2021-05-03T04:32:43.324Z",
        id: 10
      }
    ]

    return {Users,Products,ProductCategory,CartProduct,Orders};
  }
}