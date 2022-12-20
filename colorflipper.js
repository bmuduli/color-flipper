const colors =["IndianRed","LightCoral","Salmon","Crimson","Red","FireBrick","DarkRed",
"Pink","LightPink","HotPink","DeepPink","Orange","Coral","Tomato","OrangeRed","DarkOrange",
"Orange","Yellow","Gold","LightYellow","LemonChiffon","LightGoldenrodYellow","Gainsboro","LightGray",
"Silver","DarkGray","Gray","DimGray","LightSlateGray","SlateGray","DarkSlateGray","Black"];

const btn= document.querySelector(".btn");
const clr = document.querySelector(".color");

btn.addEventListener("click",function() {
    const random = getrandom();
    // console.log(random);

    document.body.style.backgroundColor=colors[random];
    clr.style.color=colors[random];
    clr.textContent =colors[random];
});

function getrandom(){
    return Math.floor(Math.random()*colors.length);
}








// PapayaWhip	#FFEFD5	rgb(255, 239, 213)
// Moccasin	#FFE4B5	rgb(255, 228, 181)
// PeachPuff	#FFDAB9	rgb(255, 218, 185)
// PaleGoldenrod	#EEE8AA	rgb(238, 232, 170)
// Khaki	#F0E68C	rgb(240, 230, 140)
// DarkKhaki	#BDB76B	rgb(189, 183, 107)
// Purple HTML Color Names
// COLOR	NAME	HEX CODE	RGB CODE
// Lavender	#E6E6FA	rgb(230, 230, 250)
// Thistle	#D8BFD8	rgb(216, 191, 216)
// Plum	#DDA0DD	rgb(221, 160, 221)
// Violet	#EE82EE	rgb(238, 130, 238)
// Orchid	#DA70D6	rgb(218, 112, 214)
// Fuchsia	#FF00FF	rgb(255, 0, 255)
// Magenta	#FF00FF	rgb(255, 0, 255)
// MediumOrchid	#BA55D3	rgb(186, 85, 211)
// MediumPurple	#9370DB	rgb(147, 112, 219)
// RebeccaPurple	#663399	rgb(102, 51, 153)
// BlueViolet	#8A2BE2	rgb(138, 43, 226)
// DarkViolet	#9400D3	rgb(148, 0, 211)
// DarkOrchid	#9932CC	rgb(153, 50, 204)
// DarkMagenta	#8B008B	rgb(139, 0, 139)
// Purple	#800080	rgb(128, 0, 128)
// Indigo	#4B0082	rgb(75, 0, 130)
// SlateBlue	#6A5ACD	rgb(106, 90, 205)
// DarkSlateBlue	#483D8B	rgb(72, 61, 139)
// MediumSlateBlue	#7B68EE	rgb(123, 104, 238)
// Green HTML Color Names
// COLOR	NAME	HEX CODE	RGB CODE
// GreenYellow	#ADFF2F	rgb(173, 255, 47)
// Chartreuse	#7FFF00	rgb(127, 255, 0)
// LawnGreen	#7CFC00	rgb(124, 252, 0)
// Lime	#00FF00	rgb(0, 255, 0)
// LimeGreen	#32CD32	rgb(50, 205, 50)
// PaleGreen	#98FB98	rgb(152, 251, 152)
// LightGreen	#90EE90	rgb(144, 238, 144)
// MediumSpringGreen	#00FA9A	rgb(0, 250, 154)
// SpringGreen	#00FF7F	rgb(0, 255, 127)
// MediumSeaGreen	#3CB371	rgb(60, 179, 113)
// SeaGreen	#2E8B57	rgb(46, 139, 87)
// ForestGreen	#228B22	rgb(34, 139, 34)
// Green	#008000	rgb(0, 128, 0)
// DarkGreen	#006400	rgb(0, 100, 0)
// YellowGreen	#9ACD32	rgb(154, 205, 50)
// OliveDrab	#6B8E23	rgb(107, 142, 35)
// Olive	#808000	rgb(128, 128, 0)
// DarkOliveGreen	#556B2F	rgb(85, 107, 47)
// MediumAquamarine	#66CDAA	rgb(102, 205, 170)
// DarkSeaGreen	#8FBC8B	rgb(143, 188, 139)
// LightSeaGreen	#20B2AA	rgb(32, 178, 170)
// DarkCyan	#008B8B	rgb(0, 139, 139)
// Teal	#008080	rgb(0, 128, 128)
// Blue HTML Color Names
// COLOR	NAME	HEX CODE	RGB CODE
// Aqua	#00FFFF	rgb(0, 255, 255)
// Cyan	#00FFFF	rgb(0, 255, 255)
// LightCyan	#E0FFFF	rgb(224, 255, 255)
// PaleTurquoise	#AFEEEE	rgb(175, 238, 238)
// Aquamarine	#7FFFD4	rgb(127, 255, 212)
// Turquoise	#40E0D0	rgb(64, 224, 208)
// MediumTurquoise	#48D1CC	rgb(72, 209, 204)
// DarkTurquoise	#00CED1	rgb(0, 206, 209)
// CadetBlue	#5F9EA0	rgb(95, 158, 160)
// SteelBlue	#4682B4	rgb(70, 130, 180)
// LightSteelBlue	#B0C4DE	rgb(176, 196, 222)
// PowderBlue	#B0E0E6	rgb(176, 224, 230)
// LightBlue	#ADD8E6	rgb(173, 216, 230)
// SkyBlue	#87CEEB	rgb(135, 206, 235)
// LightSkyBlue	#87CEFA	rgb(135, 206, 250)
// DeepSkyBlue	#00BFFF	rgb(0, 191, 255)
// DodgerBlue	#1E90FF	rgb(30, 144, 255)
// CornflowerBlue	#6495ED	rgb(100, 149, 237)
// MediumSlateBlue	#7B68EE	rgb(123, 104, 238)
// RoyalBlue	#4169E1	rgb(65, 105, 225)
// Blue	#0000FF	rgb(0, 0, 255)
// MediumBlue	#0000CD	rgb(0, 0, 205)
// DarkBlue	#00008B	rgb(0, 0, 139)
// Navy	#000080	rgb(0, 0, 128)
// MidnightBlue	#191970	rgb(25, 25, 112)
// Brown HTML Color Names
// COLOR	NAME	HEX CODE	RGB CODE
// Cornsilk	#FFF8DC	rgb(255, 248, 220)
// BlanchedAlmond	#FFEBCD	rgb(255, 235, 205)
// Bisque	#FFE4C4	rgb(255, 228, 196)
// NavajoWhite	#FFDEAD	rgb(255, 222, 173)
// Wheat	#F5DEB3	rgb(245, 222, 179)
// BurlyWood	#DEB887	rgb(222, 184, 135)
// Tan	#D2B48C	rgb(210, 180, 140)
// RosyBrown	#BC8F8F	rgb(188, 143, 143)
// SandyBrown	#F4A460	rgb(244, 164, 96)
// Goldenrod	#DAA520	rgb(218, 165, 32)
// DarkGoldenrod	#B8860B	rgb(184, 134, 11)
// Peru	#CD853F	rgb(205, 133, 63)
// Chocolate	#D2691E	rgb(210, 105, 30)
// SaddleBrown	#8B4513	rgb(139, 69, 19)
// Sienna	#A0522D	rgb(160, 82, 45)
// Brown	#A52A2A	rgb(165, 42, 42)
// Maroon	#800000	rgb(128, 0, 0)
// White HTML Color Names
// COLOR	NAME	HEX CODE	RGB CODE
// White	#FFFFFF	rgb(255, 255, 255)
// Snow	#FFFAFA	rgb(255, 250, 250)
// HoneyDew	#F0FFF0	rgb(240, 255, 240)
// MintCream	#F5FFFA	rgb(245, 255, 250)
// Azure	#F0FFFF	rgb(240, 255, 255)
// AliceBlue	#F0F8FF	rgb(240, 248, 255)
// GhostWhite	#F8F8FF	rgb(248, 248, 255)
// WhiteSmoke	#F5F5F5	rgb(245, 245, 245)
// SeaShell	#FFF5EE	rgb(255, 245, 238)
// Beige	#F5F5DC	rgb(245, 245, 220)
// OldLace	#FDF5E6	rgb(253, 245, 230)
// FloralWhite	#FFFAF0	rgb(255, 250, 240)
// Ivory	#FFFFF0	rgb(255, 255, 240)
// AntiqueWhite	#FAEBD7	rgb(250, 235, 215)
// Linen	#FAF0E6	rgb(250, 240, 230)
// LavenderBlush	#FFF0F5	rgb(255, 240, 245)
// MistyRose	#FFE4E1	rgb(255, 228, 225)