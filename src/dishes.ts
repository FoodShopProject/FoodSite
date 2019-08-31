import { Dish } from "./dish";
import { Categories } from "./categories";

export const Dishes: Dish[] =
    [
        {
            id: 1,
            category: Categories.Soup,
            name: "peas",
            ingrideinets: ["peas", "meat", "potato"],
            pict: "http://www.site.com/picts/pict1.png"
        },
        {
            id: 2,
            category: Categories.Main,
            name: "BBQ",
            ingrideinets: ["pork", "sauce"],
            pict: "http://www.site.com/picts/pict2.png"
        },
        {
            id: 3,
            category: Categories.Garnish,
            name: "Mushed potato",
            ingrideinets: ["potato", "butter", "milk"],
            pict: "http://www.site.com/picts/pict3.png"
        }
    ];
