const images = [
    {
        id: 1,
        name: "Action & Adventure (ACTION)",
        img: "images/Action.jpg",
    },
    {
        id: 2,
        name: "LEGO Style (LEGO)",
        img: "images/Lego.jpg",
    },
    {
        id: 3,
        name: "Minecraft Aesthetic (MINECRAFT)",
        img: "images/MineCraft.jpg",
    },
    {
        id: 4,
        name: "Anime & Manga (ANIME)",
        img: "images/Anime.jpg",
    },
    {
        id: 5,
        name: "Disney & Pixar (DISNEY PIXAR)",
        img: "images/Disney.jpg",
    },
    {
        id: 6,
        name: "Children’s Storybook (CHILDREN BOOK)",
        img: "images/Children StoryBook.jpg",
    },
    {
        id: 7,
        name: "Photorealistic (PHOTO REALISM)",
        img: "images/Photo Realism.jpg",
    },
    {
        id: 8,
        name: "Studio Ghibli-Inspired (STUDIO GHIBLI)",
        img: "images/Studio Ghibli.jpg",
    },
    {
        id: 9,
        name: "Watercolor Painting (WATERCOLOR)",
        img: "images/WaterColor.jpg",
    },
    {
        id: 10,
        name: "Vintage Camera (OLD CAMERA)",
        img: "images/Vintage Camera.jpg",
    },
    {
        id: 11,
        name: "Charcoal Sketch (CHARCOAL)",
        img: "images/Charcoal.jpg",
    },
    {
        id: 12,
        name: "Steampunk Fantasy (STEAMPUNK)",
        img: "images/SteamPunk Fantasy.jpg",
    },
    {
        id: 13,
        name: "Cyberpunk Neon (CYBERPUNK)",
        img: "images/CyberPunk.jpg",
    },
];

const languages = [
    { label: "English", value: "english" },
    { label: "Polish", value: "polish" },
    { label: "German", value: "german" },
    { label: "Spanish", value: "spanish" },
    { label: "French", value: "french" },
    { label: "Italian", value: "italian" },
    { label: "Hindi", value: "hindi" },
    { label: "Portuguese", value: "portuguese" },
    { label: "Chinese", value: "chinese" },
    { label: "Korean", value: "korean" },
    { label: "Russian", value: "russian" },
    { label: "Dutch", value: "dutch" },
    { label: "Turkish", value: "turkish" },
    { label: "Swedish", value: "swedish" },
    { label: "Indonesian", value: "indonesian" },
    { label: "Filipino", value: "filipino" },
    { label: "Japanese", value: "japanese" },
    { label: "Ukrainian", value: "ukrainian" },
    { label: "Greek", value: "greek" },
    { label: "Czech", value: "czech" },
    { label: "Finnish", value: "finnish" },
    { label: "Romanian", value: "romanian" },
    { label: "Danish", value: "danish" },
    { label: "Bulgarian", value: "bulgarian" },
    { label: "Malay", value: "malay" },
    { label: "Slovak", value: "slovak" },
    { label: "Croatian", value: "croatian" },
    { label: "Classic Arabic", value: "classic arabic" },
    { label: "Tamil", value: "tamil" },
    { label: "Vietnamese", value: "vietnamese" },
    { label: "Hungarian", value: "hungarian" },
    { label: "Norwegian", value: "norwegian" },
];

const videoLength = [
    { label: "15 s", value: "15" },
    { label: "30 s", value: "30" },
    { label: "45 s", value: "45" },
    { label: "1 m", value: "60" },
    { label: "2 m", value: "120" },
    { label: "5 m", value: "300" },
];

const aspectRatioData = [
    {
        title: "Square HD",
        ratio: "1:1",
        id: 0,
        width: "30px",
        height: "30px",
    },
    {
        title: "Portrait",
        ratio: "3:4",
        id: 1,
        width: "27px",
        height: "36px",
    },
    {
        title: "Portrait",
        ratio: "2:3",
        id: 2,
        width: "28px",
        height: "41px",
    },
    {
        title: "Portrait",
        ratio: "9:16",
        id: 3,
        width: "22px",
        height: "38px",
    },
    {
        title: "Landscape",
        ratio: "4:3",
        id: 4,
        width: "36px",
        height: "27px",
    },
    {
        title: "Landscape",
        ratio: "3:2",
        id: 5,
        width: "41px",
        height: "28px",
    },
    {
        title: "Landscape",
        ratio: "16:9",
        id: 6,
        width: "38px",
        height: "22px",
    },
];

const colorOptions = [
    { label: "White", value: "white" },
    { label: "Black", value: "black" },
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
    { label: "Yellow", value: "yellow" },
    { label: "Purple", value: "purple" },
    { label: "Cyan", value: "cyan" },
    { label: "Orange", value: "orange" },
];

const captionPosition = [
    {label: "Top", value: "top"},
    {label: "Center", value: "center"},
    {label: "Bottom", value: "Bottom"},
]

export { aspectRatioData, captionPosition, colorOptions, images, languages, videoLength };

