
interface ImageSet {
    img1_: string;
    img2_: string;
    img3_: string;
}

interface Project {
    id: number;
    name: string;
    images: ImageSet[]; // Array of objects containing image variables
    isLiked: boolean;
    likeCount: number
    info: string;       // Information about the project
}

export const projectsData: Project[] = [
    {
        id: 1,
        name: "PROJECT 1",
        images: [
            {
                img1_: '/images/pexels-amine-photographe-291182746-25798834.jpg',
                img2_: '/images/pexels-aksakal-29817952.jpg',
                img3_: '/images/pexels-elevate-1267337.jpg',
            }
        ],
        isLiked: false,
        likeCount: 0,
        info: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.",
    },
    {
        id: 2,
        name: "PROJECT 2",
        images: [
            {
                img1_: '/images/pexels-cmrcn-29224601.jpg',
                img2_: '/images/pexels-elevate-1267324.jpg',
                img3_: '/images/pexels-vladimirsrajber-14004239.jpg',
            }
        ],
        isLiked: false,
        likeCount: 0,
        info: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.",
    },

    {
        id: 3,
        name: "PROJECT 3",
        images: [
            {
                img1_: '/images/pexels-dantemunozphoto-15941892.jpg',
                img2_: '/images/pexels-cmrcn-29224599.jpg',
                img3_: '/images/pexels-elevate-1267325.jpg',
            }
        ],
        isLiked: false,
        likeCount: 0,
        info: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.",

    },

    {
        id: 4,
        name: "PROJECT 4",
        images: [
            {
                img1_: '/images/pexels-ivan-campos-662439-1473843.jpg',
                img2_: '/images/pexels-kristina-gain-1950685-4011956.jpg',
                img3_: '/images/pexels-matreding-4385850.jpg',
            }
        ],
        isLiked: false,
        likeCount: 0,
        info: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.",
    },
];

