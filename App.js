import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn.coderharsh.in/media/swiggy-clone/logo.webp" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const styleCard = { //we can also put this inside {} directly: 4:0:43:32
    // backgroundColor: "#f0f0f0",
    borderRadius: "16px",
}
const resList = [
    {
        "info": {
            "id": "23787",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
            "locality": "6th Block",
            "areaName": "Koramangla",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "2456",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 0.7,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "0.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-31 02:55:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-6th-block-koramangla-bangalore-23787",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "272031",
            "name": "Baskin Robbins",
            "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
            "locality": "5th Block",
            "areaName": "Koramangala",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Desserts"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "5588",
            "avgRatingString": "4.4",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-06 00:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/baskin-robbins-5th-block-koramangala-bangalore-272031",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "506324",
            "name": "Louis Burger",
            "cloudinaryImageId": "19d3d352cc815b9d88b22617b41fa97b",
            "locality": "6Th Block, Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "Burgers",
                "American",
                "Fast Food"
            ],
            "avgRating": 4.3,
            "parentId": "22485",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-31 04:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/louis-burger-6th-block-koramangala-bangalore-506324",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "5934",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.3,
            "parentId": "166",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-31 05:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "341895",
            "name": "Burger Seigneur",
            "cloudinaryImageId": "k4z46joj5ozirqpyww1z",
            "locality": "Indiranagar",
            "areaName": "Indiranagar",
            "costForTwo": "₹1300 for two",
            "cuisines": [
                "American",
                "Continental",
                "Burgers",
                "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "12095",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 4.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-31 02:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹549",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-seigneur-indiranagar-bangalore-341895",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "65797",
            "name": "Leon's - Burgers & Wings (Leon Grill)",
            "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "American",
                "Snacks",
                "Turkish",
                "Portuguese",
                "Continental"
            ],
            "avgRating": 4.4,
            "parentId": "371281",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-31 04:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-koramangala-bangalore-65797",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "10576",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.1,
            "parentId": "721",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 0.6,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "0.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-31 04:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹179"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-koramangala-bangalore-10576",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "23678",
            "name": "McDonald's",
            "cloudinaryImageId": "f62564e14944753903849c4ef673af4d",
            "locality": "5th Block",
            "areaName": "Koramangala",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "avgRating": 4.5,
            "parentId": "630",
            "avgRatingString": "4.5",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 1.2,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-31 03:15:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "FREE ITEM"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-5th-block-koramangala-bangalore-23678",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "718072",
            "name": "ENSO - Sourdough Pizza by Nomad",
            "cloudinaryImageId": "9e12e438906200daa8f401195ee43115",
            "locality": "BTM Layout",
            "areaName": "HSR",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Pizzas",
                "Fast Food",
                "Desserts",
                "Salads",
                "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "77344",
            "avgRatingString": "4.2",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 3.8,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-31 04:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/enso-sourdough-pizza-by-nomad-btm-layout-hsr-bangalore-718072",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "93741",
            "name": "Subway",
            "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
            "locality": "The Nexus Mall",
            "areaName": "Koramangala",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Salads",
                "Snacks",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 3.9,
            "parentId": "2",
            "avgRatingString": "3.9",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-31 05:45:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/subway-the-nexus-mall-koramangala-bangalore-93741",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "75966",
            "name": "Kaati Zone Rolls & Wraps",
            "cloudinaryImageId": "ibmfw10arqzrdibq03mt",
            "locality": "KHB Colony",
            "areaName": "Koramangala",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Fast Food",
                "Bengali",
                "Beverages",
                "Desserts"
            ],
            "avgRating": 4,
            "parentId": "248306",
            "avgRatingString": "4.0",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 0.1,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "0.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-31 07:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹115",
                "discountTag": "POCKET HERO",
                "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kaati-zone-rolls-and-wraps-khb-colony-koramangala-bangalore-75966",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "68144",
            "name": "WarmOven Cake & Desserts",
            "cloudinaryImageId": "e938fb5f416cc2c28b4b519cf27b04cc",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Ice Cream",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "9696",
            "avgRatingString": "4.3",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 0.1,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "0.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-31 07:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/warmoven-cake-and-desserts-koramangala-bangalore-68144",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "408386",
            "name": "NOTO - Ice Creams & Desserts",
            "cloudinaryImageId": "81ac87e5c89c16adc867be38ce5a1ba3",
            "locality": "Ejipura",
            "areaName": "Koramangla",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Ice Cream"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "468478",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 14,
                "lastMileTravel": 1.1,
                "serviceability": "SERVICEABLE",
                "slaString": "10-15 mins",
                "lastMileTravelString": "1.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-31 05:55:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "brand"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/noto-ice-creams-and-desserts-ejipura-koramangla-bangalore-408386",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "74444",
            "name": "Samosa Party",
            "cloudinaryImageId": "d8d4e708a41f011361c949d44990d5e0",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹100 for two",
            "cuisines": [
                "Fast Food",
                "Snacks",
                "Beverages",
                "Chaat",
                "North Indian",
                "Street Food",
                "Sweets",
                "Desserts",
                "Punjabi",
                "Bakery"
            ],
            "avgRating": 4.3,
            "parentId": "6364",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-06 00:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/samosa-party-koramangala-bangalore-74444",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "66107",
            "name": "Art Of Delight - Ice Creams, Sundaes And Desserts",
            "cloudinaryImageId": "crxxcmnaxftmxu9xht0a",
            "locality": "Bellandur Gate Road",
            "areaName": "Bellandur",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream",
                "Beverages"
            ],
            "avgRating": 4.5,
            "parentId": "474822",
            "avgRatingString": "4.5",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 8.3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "8.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-31 02:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/art-of-delight-ice-creams-sundaes-and-desserts-gate-road-bellandur-bangalore-66107",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "56786",
            "name": "Samosa Singh",
            "cloudinaryImageId": "77baefd8a5e319c828b4d7dff7260644",
            "locality": "New Thipasandra",
            "areaName": "Indiranagar",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "North Indian",
                "Snacks"
            ],
            "avgRating": 4.1,
            "parentId": "5639",
            "avgRatingString": "4.1",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 38,
                "lastMileTravel": 6.6,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "6.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-04-06 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/samosa-singh-new-thipasandra-indiranagar-bangalore-56786",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "376319",
            "name": "The Brooklyn Creamery - Healthy Ice Cream",
            "cloudinaryImageId": "b1b35780a9b1dfeb26d680506d494eaa",
            "locality": "4TH SECTOR",
            "areaName": "HSR LAYOUT",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream",
                "Healthy Food"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "236673",
            "avgRatingString": "4.2",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 4.4,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "4.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-31 06:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "brand"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-4th-sector-hsr-layout-bangalore-376319",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "295133",
            "name": "McDonald's Gourmet Burger Collection",
            "cloudinaryImageId": "q0astez5jmmfo5icayde",
            "locality": "5th Block",
            "areaName": "Koramangala",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "10761",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-31 03:15:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-5th-block-koramangala-bangalore-295133",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "561987",
            "name": "Nirula's",
            "cloudinaryImageId": "f3cced21e2be658118713e4008f3b7f3",
            "locality": "Sarvagna Nagar",
            "areaName": "Indiranagar",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Ice Cream",
                "Pizzas",
                "Fast Food"
            ],
            "avgRating": 4.3,
            "parentId": "1738",
            "avgRatingString": "4.3",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-31 02:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/nirulas-sarvagna-nagar-indiranagar-bangalore-561987",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "38634",
            "name": "Third Wave Coffee",
            "cloudinaryImageId": "d96267738c19ec62acb5390e52faba41",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Beverages",
                "Bakery",
                "Continental"
            ],
            "avgRating": 4.5,
            "parentId": "274773",
            "avgRatingString": "4.5",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 0.7,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "0.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-03-31 03:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/third-wave-coffee-koramangala-bangalore-38634",
            "type": "WEBLINK"
        }
    }
];
const ResturantCard = (props) => {//this propos will be an object now. It is argument. But paramter is local to function. Paramter is defined in fun definition only. Is props ka name kuchh v ho sakta hain. Yahan fn call and recieve v ho raha hain so ye argument hain
    // some cool developers
    // const ResturantCard = ({ resName, cuisine }) => { //destructuring on the fly
    // console.log(props); //{resName: 'Meghna Fooots', cuisine: 'Biryani, Fast Foods'} //{resName: 'KFC', cuisine: 'Burger, Fast Foods'} //props is an object here
    // console.log(resName); //Megna Foods KFC //when destructuring funtion
    //const {resName, cuisine} = props; //destructuring
    const { resData } = props; //ye resData se receive hoga jis name se data send kiya gaya tha. hum ye line likhe bina resObj.info.Name se v data acess kar sakte hain but tab props ka use nhi hoga.component m data pahle hum ye line likhe bina direct props.resName se acess kar lete the vale.Bcs componenet me direct har coded vale send kar the. But ab hum component me ek obj send kar rahe.
    //now destructure this object
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } = resData?.info; //no need of sl wise. resData?.info: it is optional chaining 
    const { deliveryTime } = resData?.info.sla;
    return (
        <a href={resData.cta.link} target="_blank">
            <div className="res-card" style={styleCard}>  {/*{ } aceepts jsx object. It is inline style in jsx*/}
                <img alt="res-logo" className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
                {/* <h3>{resName}</h3> when destructuring
            <h4>{cuisine}</h4> */}
                {/* <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4> */}
                {/* <h3>{resData.info.name}</h3>
                <h4>{resData.info.cuisines.join(", ")}</h4>
                <h4>{resData.info.avgRating}</h4>
                <h5>{resData.info.sla.deliveryTime} Mins</h5>
                <h6>{resData.info.costForTwo} items</h6> */}
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating}</h4>
                <h5>{deliveryTime} Mins</h5>
                <h6>{costForTwo} items</h6>
            </div>
        </a>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* <ResturantCard resName="Meghna Fooots" cuisine="Biryani, Fast Foods" />
                <ResturantCard resName="KFC" cuisine="Burger, Fast Foods" /> */}
                {/* <ResturantCard resData={resList[0]} /> 
            //    props me hum resData key se hi resObj ke vale ko acess karenge. i.e jis name se hum data send kar rahe hain. resData is the props. resObj is the argument/real data we are passings
                <ResturantCard resData={resList[2]} />
                <ResturantCard resData={resList[3]} />
                <ResturantCard resData={resList[4]} />
                <ResturantCard resData={resList[5]} />
                <ResturantCard resData={resList[6]} />
                <ResturantCard resData={resList[7]} />
                <ResturantCard resData={resList[18]} />
                <ResturantCard resData={resList[19]} /> */}
                {
                    resList.map((resturant, index) => {
                        // return <ResturantCard key={resturant.info.id} resData={resturant} />  //here cosole has warning for unique key prop. whilw looping/mapping we need to give unique key to each list/mapping for optimised re rendering.
                        // key has benefit in 100 card re rendering or infinite scroll
                        // we can also use index as key but it is bad practice. Nhi dne se achha index se hi de dete unique key. But isse v achha send key from data by backend.
                        return (<ResturantCard key={index} resData={resturant} />
                        );
                    })
                }
            </div>
        </div>
    );
};
const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body />
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);