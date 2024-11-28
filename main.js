/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/bg.webp */ "./src/assets/bg.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Geologica:wght@100;200;300;400;500;600;700;800;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --todo-card-width: 640px;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body {
    background: linear-gradient(var(--project-color, rgba(0, 0, 0, 0)) 2%, rgba(0, 0, 0, 0.4)) 150%,
        linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-blend-mode: hard-light, multiply;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: grid;
    grid-template-rows: 75px 1fr;
    width: 100%;
    height: 100vh;
    font-family: "Geologica", sans-serif;
}

button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
}
img {
    width: 100%;
    height: auto;
}

/* Header Styling */

#header {
    position: sticky;
    top: 0;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 75px;
    padding: 30px 40px;
    background-color: rgba(0, 0, 0, 0.4);
    border-bottom: 1px solid rgb(132, 0, 255);
    backdrop-filter: blur(10px);
}

.logo-cont {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    user-select: none;
    margin: 0 auto;
}

.sidebar-btn {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 4px;
    height: 35px;
    position: relative;
    background: none;
}

.sidebar-btn > div {
    width: 30px;
    height: 1px;
    background-color: white;
}

.logo-text {
    color: rgb(254, 253, 255);
    font-size: 1.5rem;
    font-weight: 100;
    font-family: "Open Sans", sans-serif;
}

#logo {
    width: 25px;
    height: 25px;
}

/* Sidebar Styling */

.sidebar {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 40px 40px 0 40px;
    padding-bottom: 0;
    gap: 30px;
    width: 380px;
    background: none;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    height: calc(100vh - 75px);
    transition: 0.5s ease-in-out;
    color: white;
}
.sidebar.closed {
    margin-left: -380px;
}

.sidebar-r1,
.sidebar-r2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 15px;
}

.sidebar-r2 {
    overflow-y: auto;
    height: 100%;
}

.projects-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    width: 100%;
    overflow-y: auto;
    padding-bottom: 40px;
}

.title {
    font-size: 1.5rem;
    padding: 10px 20px;
    font-weight: 900;
}

#add-project-btn {
    padding: 10px 20px;
    border-radius: 25px;
    color: black;
    font-size: 1.2rem;
    background-color: white;
    transition: 0.4s ease;
}

#add-project-btn:hover {
    box-shadow: 0 0 20px -5px rgba(255, 255, 255, 0.5);
}

.sidebar-link {
    cursor: pointer;
    user-select: none;
    font-size: 1.2rem;
    border-radius: 25px;
    font-weight: 200;
    padding: 10px 20px;
}

.sidebar-link:not(.project-link).active {
    background-color: rgba(199, 233, 255, 0.3);
}

.sidebar-link:not(.active):not(.project-link):hover {
    background-color: rgba(199, 233, 255, 0.15);
}

.project-link {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    transition: 0.4s ease;
}

.project-link .icon {
    opacity: 0;
}
.project-link:hover .icon {
    opacity: 1;
}

.project-link .icon {
    margin: 0 5px;
}

.project-color {
    margin-right: 20px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: var(--color);
    order: -1;
}

.project-link:hover {
    background-color: var(--hover-color);
}

.project-link.active {
    background-color: var(--hover-color);
}

/* Styling the form for adding new Project */

.add-project-form {
    padding: 5px 10px;
    margin: 12px 0;
    border-radius: 30px;
    background-color: white;
}
.add-project-r1,
.add-project-r2 {
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.project-name-inp {
    outline: none;
    border: none;
    border-radius: 20px;
    padding: 5px 10px;
    width: 140px;
    border: 1px solid rgb(0, 0, 0);
}

.project-color-inp {
    cursor: pointer;
    padding: 0;
    height: 30px;
    width: 30px;
    outline: none;
    border: none;
    background: none;
    clip-path: circle(35%);
}

.add-project-submit-btn,
.add-project-cancel-btn {
    padding: 8px 20px;
    border-radius: 20px;
    color: white;
    font-weight: 700;
}
.add-project-submit-btn {
    background-color: rgb(49, 163, 97);
}
.add-project-cancel-btn {
    background-color: rgb(190, 48, 48);
}

/* Styling the Home cards */

.home-card {
    user-select: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    border-radius: 35px;
    border: 1px solid;
    color: white;
    font-size: 1.5rem;
    text-align: center;
    backdrop-filter: blur(5px) brightness(0.5);
    transition: 0.3s ease;
    width: 250px;
    height: 250px;
    padding: 50px;
    animation: fade-in 0.5s ease backwards;
}

.home-card-title {
    font-family: "Open Sans";
    font-weight: 600;
    margin-bottom: 10px;
}
.home-card-value {
    font-weight: 900;
    font-size: 2rem;
}
.home-card:hover {
    background-color: var(--color);
}

/* Todo Card Styling */

.todo-card {
    display: grid;
    grid-template-columns: 1fr 5fr 1fr 1fr;
    align-items: center;
    align-content: center;
    padding: 15px 40px;
    border-radius: 45px;
    width: 80%;
    color: white;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6), rgba(60, 255, 0, 0.5), rgba(0, 0, 0, 0.5));
    background-size: 100% 300%;
    background-position: top;
    transition: 0.5s ease;
    backdrop-filter: blur(5px);
    animation-name: slide-in;
    animation-duration: 0.4s;
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    animation-fill-mode: backwards;
    max-height: 100px;
    overflow: hidden;
    transition: max-height 0.5s ease-in, overflow 0.5s ease-in, background-position 0.5s ease;
    transform-origin: center;
}

@keyframes slide-in {
    from {
        opacity: 0;
        transform: scaleX(0);
    }
    to {
        opacity: 1;
        transform: none;
    }
}

@keyframes slide-out {
    to {
        opacity: 0;
        transform: scaleX(0);
    }
    from {
        opacity: 1;
        transform: none;
    }
}

.todo-card.slide-out,
.edit-todo-form.slide-out,
.add-todo-form.slide-out {
    animation-name: slide-out;
    animation-duration: 0.4s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: 0 !important;
}

.todo-title {
    font-size: 1.1rem;
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.todo-card.expanded .todo-title {
    white-space: normal;
}

.todo-desc,
.todo-date {
    font-size: 0.8rem;
    font-weight: 200;
}

.todo-desc {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease, opacity 0.5s ease;
}

.todo-card.expanded .todo-desc {
    opacity: 1;
    max-height: 100%; /* Set an appropriate value for the maximum height */
    transition: max-height 0.4s ease, opacity 0.4s ease;
}

.todo-check-btn {
    position: relative;
    cursor: pointer;
    padding: 10px;
    width: 28px;
    height: 28px;
    background: none;
    border: 2px solid white;
    border-radius: 50%;
    transition: 0.5s ease;
}

.todo-check-btn::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    border-radius: 2px;
    height: 5px;
    border-left: 3px solid rgb(0, 255, 0);
    border-bottom: 3px solid rgb(0, 255, 0);
    transform: translate(-50%, -50%) rotate(-90deg) scale(0);
    transition: 0.5s ease;
}

.todo-card.done {
    text-decoration: line-through;
    text-decoration-color: rgb(0, 255, 0);
    background-position: 100% bottom;
}

.todo-card.done .todo-check-btn {
    border-color: rgb(0, 255, 0);
}

.todo-card.done .todo-check-btn::before {
    transform: translate(-50%, -50%) rotate(-45deg);
}

.todo-card.expanded {
    max-height: 100%;
}
.todo-card.expanded .todo-expand-btn {
    transform: rotate(-90deg);
}

.todo-expand-btn {
    width: 14px;
    height: 14px;
    background: none;
    border-left: 2.5px solid white;
    border-bottom: 2.5px solid white;
    border-radius: 3px;
    rotate: 45deg;
    transition: 0.4s ease;
    padding: 5px;
}

.todo-col-4 {
    display: flex;
    align-items: center;
    gap: 14px;
    transition: 0.4s ease;
}

/* Page Template Styling */
.main {
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
}

.content {
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
    overflow-y: auto;
    overflow-x: hidden;
}

.content::-webkit-scrollbar,
.projects-list::-webkit-scrollbar {
    /* background-color: red; */
    width: 3px;
    border-radius: 100px;
}

.content::-webkit-scrollbar-track,
.projects-list::-webkit-scrollbar-track {
    border-radius: 100px;
}

/* Handle */
.content::-webkit-scrollbar-thumb,
.projects-list::-webkit-scrollbar-thumb {
    background: rgb(238, 238, 238);
    border-radius: 100px;
}

/* Handle on hover */
.content::-webkit-scrollbar-thumb:hover,
.projects-list::-webkit-scrollbar-thumb:hover {
    background: rgb(123, 7, 255);
}

.page-title {
    font-size: 48px;
    font-weight: 900;
    margin-bottom: 20px;
    color: white;
    animation: fade-in 0.8s ease;
}

@keyframes fade-in {
    from {
        transform: scaleX(0);
        opacity: 0;
    }
    to {
        opacity: 1;
        transform: none;
    }
}

.page-sub-title {
    font-size: 20px;
    color: rgb(233, 233, 233);
    margin-bottom: 30px;
    font-weight: 400;
    animation: fade-in 0.8s ease;
}

#dashboard {
    display: flex;
    flex-direction: column;
    padding: 40px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: fit-content;
    margin: 60px 0;
}

.page {
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.dashboard-cards-container,
.todo-cards-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
}

.todo-cards-container {
    padding: 40px;
    gap: 40px;
    flex-direction: column;
}

.icon {
    width: 15px;
    height: auto;
}

.add-todo-btn {
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 600;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    padding: 10px;
    background-color: #fff;
    transition: 0.4s ease;
    box-shadow: 0 0 25px 0 black;
}

.add-todo-btn:hover {
    box-shadow: 0 0 50px 0 rgba(255, 255, 255, 0.8);
}
.add-todo-btn:hover::before {
    opacity: 1;
}
.add-todo-btn::before {
    opacity: 0;
    position: absolute;
    content: "add Todo";
    width: max-content;
    padding: 4px 10px;
    font-size: 0.85rem;
    border-radius: 30px;
    color: white;
    left: 45px;
    transition: 0.35s ease;
}

.floating {
    z-index: 2;
    position: fixed;
    bottom: 70px;
}

.edit-todo-form,
.add-todo-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    border-radius: 30px;
    background-color: white;
    width: 80%;
    padding: 20px 80px;
    margin-bottom: 50px;
    animation: slide-in 0.4s ease forwards;
}

.edit-todo-form {
    color: white;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4));
    backdrop-filter: blur(5px);
}

.edit-todo-form {
    margin: 0;
}

.edit-todo-form-title,
.add-todo-form-title {
    place-self: center;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 20px;
}

.edit-todo-form .inp,
.add-todo-form .inp {
    width: 65%;
    padding: 10px 20px;
    border-radius: 30px;
    outline: none;
    border: none;
    background-color: rgb(238, 237, 237);
}

.inp-cont {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.edit-todo-form-submit-btn,
.add-todo-form-submit-btn {
    padding: 10px 30px;
    color: white;
    font-weight: 600;
    border-radius: 30px;
    width: max-content;
    place-self: center;
    background-color: black;
    transition: 0.4s ease;
}

.edit-todo-form-submit-btn {
    background-color: rgb(109, 0, 252);
}
.edit-todo-form-submit-btn:hover {
    box-shadow: 0 0 45px 0 rgba(128, 93, 255, 0.808);
}
.edit-todo-form-close-btn,
.add-todo-form-close-btn {
    position: absolute;
    z-index: 90;
    top: 0;
    right: 0;
    margin: 10px 20px;
    width: 20px;
    height: 20px;
    font-size: 1rem;
    font-weight: 800;
    color: white;
    border: 1px solid red;
    background: red;
    border-radius: 50%;
}
.edit-todo-desc,
.add-todo-desc {
    resize: vertical;
}

/* Responsiveness */
@media screen and (max-width: 850px) {
    body {
        background-size: cover;
    }

    .main {
        overflow: hidden;
    }

    .sidebar {
        overflow: hidden;
        position: fixed;
        z-index: 3;
        width: 100vw;
        height: 100vh;
        margin-left: -100%;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(15px);
    }

    .sidebar.closed {
        margin-left: 0;
    }

    .sidebar-r1,
    .sidebar-r2 {
        z-index: 5;
        align-items: center;
    }
    .projects-list {
        align-items: center;
    }

    .project-link {
        width: 250px;
    }

    .page {
        width: 100%;
        padding: 40px 5px;
    }

    .todo-cards-container {
        padding: 0;
        margin: 0;
        width: 100%;
        margin-bottom: 80px;
    }
    .todo-card {
        grid-template-columns: 1fr 4fr 1fr;
        grid-template-rows: 2fr 1fr;
        margin: 0;
        padding: 1rem 1.5rem;
        width: 90%;
        border-radius: 50px;
        height: 100%;
        max-height: 500px;
        overflow: auto;
    }
    .todo-col-2 {
        max-width: 100%;
    }
    .todo-col-3 {
        grid-row: 2 / 2;
        grid-column-start: 2;
    }
    .todo-col-1 {
        grid-row: span 2;
    }
    .todo-col-4 {
        gap: 10px;
        grid-row: span 2;
    }
    .todo-title {
        font-size: 0.95rem;
        margin-bottom: 10px;
        font-weight: 600;
        white-space: normal;
        text-overflow: initial;
    }
    .todo-desc {
        opacity: 1;
        max-height: 100%;
        overflow: auto;
    }

    .todo-expand-btn {
        display: none;
    }

    .edit-todo-form,
    .add-todo-form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-radius: 30px;
        width: 90%;
        padding: 20px 40px;
    }

    .edit-todo-form-title,
    .add-todo-form-title {
        place-self: center;
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 15px;
    }

    .edit-todo-form .inp,
    .add-todo-form .inp {
        width: 65%;
        padding: 10px 20px;
        border-radius: 30px;
        outline: none;
        border: none;
        background-color: rgb(238, 237, 237);
    }

    .inp-cont {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    .edit-todo-form-submit-btn,
    .add-todo-form-submit-btn {
        padding: 10px 30px;
        color: white;
        font-weight: 600;
        border-radius: 30px;
        width: max-content;
        place-self: center;
        background-color: black;
        transition: 0.4s ease;
    }

    .edit-todo-form-submit-btn {
        background-color: rgb(109, 0, 252);
    }
    .edit-todo-form-submit-btn:hover {
        box-shadow: 0 0 45px 0 rgba(128, 93, 255, 0.808);
    }
    .edit-todo-form-close-btn,
    .add-todo-form-close-btn {
        position: absolute;
        z-index: 90;
        top: 0;
        right: 0;
        margin: 10px 20px;
        width: 20px;
        height: 20px;
        font-size: 1rem;
        font-weight: 800;
        color: white;
        border: 1px solid red;
        background: red;
        border-radius: 50%;
    }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Geologica:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n:root {\n    --todo-card-width: 640px;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody {\n    background: linear-gradient(var(--project-color, rgba(0, 0, 0, 0)) 2%, rgba(0, 0, 0, 0.4)) 150%,\n        linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url(\"./assets/bg.webp\");\n    background-blend-mode: hard-light, multiply;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    display: grid;\n    grid-template-rows: 75px 1fr;\n    width: 100%;\n    height: 100vh;\n    font-family: \"Geologica\", sans-serif;\n}\n\nbutton {\n    cursor: pointer;\n    border: none;\n    outline: none;\n    background: none;\n}\nimg {\n    width: 100%;\n    height: auto;\n}\n\n/* Header Styling */\n\n#header {\n    position: sticky;\n    top: 0;\n    z-index: 5;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 75px;\n    padding: 30px 40px;\n    background-color: rgba(0, 0, 0, 0.4);\n    border-bottom: 1px solid rgb(132, 0, 255);\n    backdrop-filter: blur(10px);\n}\n\n.logo-cont {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 14px;\n    user-select: none;\n    margin: 0 auto;\n}\n\n.sidebar-btn {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    padding: 4px;\n    height: 35px;\n    position: relative;\n    background: none;\n}\n\n.sidebar-btn > div {\n    width: 30px;\n    height: 1px;\n    background-color: white;\n}\n\n.logo-text {\n    color: rgb(254, 253, 255);\n    font-size: 1.5rem;\n    font-weight: 100;\n    font-family: \"Open Sans\", sans-serif;\n}\n\n#logo {\n    width: 25px;\n    height: 25px;\n}\n\n/* Sidebar Styling */\n\n.sidebar {\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 40px 40px 0 40px;\n    padding-bottom: 0;\n    gap: 30px;\n    width: 380px;\n    background: none;\n    background-color: rgba(0, 0, 0, 0.3);\n    backdrop-filter: blur(10px);\n    height: calc(100vh - 75px);\n    transition: 0.5s ease-in-out;\n    color: white;\n}\n.sidebar.closed {\n    margin-left: -380px;\n}\n\n.sidebar-r1,\n.sidebar-r2 {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    width: 100%;\n    gap: 15px;\n}\n\n.sidebar-r2 {\n    overflow-y: auto;\n    height: 100%;\n}\n\n.projects-list {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 15px;\n    width: 100%;\n    overflow-y: auto;\n    padding-bottom: 40px;\n}\n\n.title {\n    font-size: 1.5rem;\n    padding: 10px 20px;\n    font-weight: 900;\n}\n\n#add-project-btn {\n    padding: 10px 20px;\n    border-radius: 25px;\n    color: black;\n    font-size: 1.2rem;\n    background-color: white;\n    transition: 0.4s ease;\n}\n\n#add-project-btn:hover {\n    box-shadow: 0 0 20px -5px rgba(255, 255, 255, 0.5);\n}\n\n.sidebar-link {\n    cursor: pointer;\n    user-select: none;\n    font-size: 1.2rem;\n    border-radius: 25px;\n    font-weight: 200;\n    padding: 10px 20px;\n}\n\n.sidebar-link:not(.project-link).active {\n    background-color: rgba(199, 233, 255, 0.3);\n}\n\n.sidebar-link:not(.active):not(.project-link):hover {\n    background-color: rgba(199, 233, 255, 0.15);\n}\n\n.project-link {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: 10px;\n    transition: 0.4s ease;\n}\n\n.project-link .icon {\n    opacity: 0;\n}\n.project-link:hover .icon {\n    opacity: 1;\n}\n\n.project-link .icon {\n    margin: 0 5px;\n}\n\n.project-color {\n    margin-right: 20px;\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    background-color: var(--color);\n    order: -1;\n}\n\n.project-link:hover {\n    background-color: var(--hover-color);\n}\n\n.project-link.active {\n    background-color: var(--hover-color);\n}\n\n/* Styling the form for adding new Project */\n\n.add-project-form {\n    padding: 5px 10px;\n    margin: 12px 0;\n    border-radius: 30px;\n    background-color: white;\n}\n.add-project-r1,\n.add-project-r2 {\n    padding: 5px 10px;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.project-name-inp {\n    outline: none;\n    border: none;\n    border-radius: 20px;\n    padding: 5px 10px;\n    width: 140px;\n    border: 1px solid rgb(0, 0, 0);\n}\n\n.project-color-inp {\n    cursor: pointer;\n    padding: 0;\n    height: 30px;\n    width: 30px;\n    outline: none;\n    border: none;\n    background: none;\n    clip-path: circle(35%);\n}\n\n.add-project-submit-btn,\n.add-project-cancel-btn {\n    padding: 8px 20px;\n    border-radius: 20px;\n    color: white;\n    font-weight: 700;\n}\n.add-project-submit-btn {\n    background-color: rgb(49, 163, 97);\n}\n.add-project-cancel-btn {\n    background-color: rgb(190, 48, 48);\n}\n\n/* Styling the Home cards */\n\n.home-card {\n    user-select: none;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 20px;\n    border-radius: 35px;\n    border: 1px solid;\n    color: white;\n    font-size: 1.5rem;\n    text-align: center;\n    backdrop-filter: blur(5px) brightness(0.5);\n    transition: 0.3s ease;\n    width: 250px;\n    height: 250px;\n    padding: 50px;\n    animation: fade-in 0.5s ease backwards;\n}\n\n.home-card-title {\n    font-family: \"Open Sans\";\n    font-weight: 600;\n    margin-bottom: 10px;\n}\n.home-card-value {\n    font-weight: 900;\n    font-size: 2rem;\n}\n.home-card:hover {\n    background-color: var(--color);\n}\n\n/* Todo Card Styling */\n\n.todo-card {\n    display: grid;\n    grid-template-columns: 1fr 5fr 1fr 1fr;\n    align-items: center;\n    align-content: center;\n    padding: 15px 40px;\n    border-radius: 45px;\n    width: 80%;\n    color: white;\n    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6), rgba(60, 255, 0, 0.5), rgba(0, 0, 0, 0.5));\n    background-size: 100% 300%;\n    background-position: top;\n    transition: 0.5s ease;\n    backdrop-filter: blur(5px);\n    animation-name: slide-in;\n    animation-duration: 0.4s;\n    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);\n    animation-fill-mode: backwards;\n    max-height: 100px;\n    overflow: hidden;\n    transition: max-height 0.5s ease-in, overflow 0.5s ease-in, background-position 0.5s ease;\n    transform-origin: center;\n}\n\n@keyframes slide-in {\n    from {\n        opacity: 0;\n        transform: scaleX(0);\n    }\n    to {\n        opacity: 1;\n        transform: none;\n    }\n}\n\n@keyframes slide-out {\n    to {\n        opacity: 0;\n        transform: scaleX(0);\n    }\n    from {\n        opacity: 1;\n        transform: none;\n    }\n}\n\n.todo-card.slide-out,\n.edit-todo-form.slide-out,\n.add-todo-form.slide-out {\n    animation-name: slide-out;\n    animation-duration: 0.4s;\n    animation-timing-function: ease;\n    animation-fill-mode: forwards;\n    animation-delay: 0 !important;\n}\n\n.todo-title {\n    font-size: 1.1rem;\n    font-weight: 500;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n}\n\n.todo-card.expanded .todo-title {\n    white-space: normal;\n}\n\n.todo-desc,\n.todo-date {\n    font-size: 0.8rem;\n    font-weight: 200;\n}\n\n.todo-desc {\n    opacity: 0;\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 0.5s ease, opacity 0.5s ease;\n}\n\n.todo-card.expanded .todo-desc {\n    opacity: 1;\n    max-height: 100%; /* Set an appropriate value for the maximum height */\n    transition: max-height 0.4s ease, opacity 0.4s ease;\n}\n\n.todo-check-btn {\n    position: relative;\n    cursor: pointer;\n    padding: 10px;\n    width: 28px;\n    height: 28px;\n    background: none;\n    border: 2px solid white;\n    border-radius: 50%;\n    transition: 0.5s ease;\n}\n\n.todo-check-btn::before {\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 8px;\n    border-radius: 2px;\n    height: 5px;\n    border-left: 3px solid rgb(0, 255, 0);\n    border-bottom: 3px solid rgb(0, 255, 0);\n    transform: translate(-50%, -50%) rotate(-90deg) scale(0);\n    transition: 0.5s ease;\n}\n\n.todo-card.done {\n    text-decoration: line-through;\n    text-decoration-color: rgb(0, 255, 0);\n    background-position: 100% bottom;\n}\n\n.todo-card.done .todo-check-btn {\n    border-color: rgb(0, 255, 0);\n}\n\n.todo-card.done .todo-check-btn::before {\n    transform: translate(-50%, -50%) rotate(-45deg);\n}\n\n.todo-card.expanded {\n    max-height: 100%;\n}\n.todo-card.expanded .todo-expand-btn {\n    transform: rotate(-90deg);\n}\n\n.todo-expand-btn {\n    width: 14px;\n    height: 14px;\n    background: none;\n    border-left: 2.5px solid white;\n    border-bottom: 2.5px solid white;\n    border-radius: 3px;\n    rotate: 45deg;\n    transition: 0.4s ease;\n    padding: 5px;\n}\n\n.todo-col-4 {\n    display: flex;\n    align-items: center;\n    gap: 14px;\n    transition: 0.4s ease;\n}\n\n/* Page Template Styling */\n.main {\n    display: flex;\n    flex-wrap: nowrap;\n    overflow: hidden;\n}\n\n.content {\n    width: 100%;\n    height: 100%;\n    padding-bottom: 50px;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.content::-webkit-scrollbar,\n.projects-list::-webkit-scrollbar {\n    /* background-color: red; */\n    width: 3px;\n    border-radius: 100px;\n}\n\n.content::-webkit-scrollbar-track,\n.projects-list::-webkit-scrollbar-track {\n    border-radius: 100px;\n}\n\n/* Handle */\n.content::-webkit-scrollbar-thumb,\n.projects-list::-webkit-scrollbar-thumb {\n    background: rgb(238, 238, 238);\n    border-radius: 100px;\n}\n\n/* Handle on hover */\n.content::-webkit-scrollbar-thumb:hover,\n.projects-list::-webkit-scrollbar-thumb:hover {\n    background: rgb(123, 7, 255);\n}\n\n.page-title {\n    font-size: 48px;\n    font-weight: 900;\n    margin-bottom: 20px;\n    color: white;\n    animation: fade-in 0.8s ease;\n}\n\n@keyframes fade-in {\n    from {\n        transform: scaleX(0);\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n        transform: none;\n    }\n}\n\n.page-sub-title {\n    font-size: 20px;\n    color: rgb(233, 233, 233);\n    margin-bottom: 30px;\n    font-weight: 400;\n    animation: fade-in 0.8s ease;\n}\n\n#dashboard {\n    display: flex;\n    flex-direction: column;\n    padding: 40px 30px;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    height: fit-content;\n    margin: 60px 0;\n}\n\n.page {\n    padding: 40px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.dashboard-cards-container,\n.todo-cards-container {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    width: 100%;\n}\n\n.todo-cards-container {\n    padding: 40px;\n    gap: 40px;\n    flex-direction: column;\n}\n\n.icon {\n    width: 15px;\n    height: auto;\n}\n\n.add-todo-btn {\n    position: relative;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    font-size: 1.8rem;\n    font-weight: 600;\n    border-radius: 50%;\n    width: 45px;\n    height: 45px;\n    padding: 10px;\n    background-color: #fff;\n    transition: 0.4s ease;\n    box-shadow: 0 0 25px 0 black;\n}\n\n.add-todo-btn:hover {\n    box-shadow: 0 0 50px 0 rgba(255, 255, 255, 0.8);\n}\n.add-todo-btn:hover::before {\n    opacity: 1;\n}\n.add-todo-btn::before {\n    opacity: 0;\n    position: absolute;\n    content: \"add Todo\";\n    width: max-content;\n    padding: 4px 10px;\n    font-size: 0.85rem;\n    border-radius: 30px;\n    color: white;\n    left: 45px;\n    transition: 0.35s ease;\n}\n\n.floating {\n    z-index: 2;\n    position: fixed;\n    bottom: 70px;\n}\n\n.edit-todo-form,\n.add-todo-form {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    position: relative;\n    border-radius: 30px;\n    background-color: white;\n    width: 80%;\n    padding: 20px 80px;\n    margin-bottom: 50px;\n    animation: slide-in 0.4s ease forwards;\n}\n\n.edit-todo-form {\n    color: white;\n    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4));\n    backdrop-filter: blur(5px);\n}\n\n.edit-todo-form {\n    margin: 0;\n}\n\n.edit-todo-form-title,\n.add-todo-form-title {\n    place-self: center;\n    font-size: 1.2rem;\n    font-weight: 600;\n    margin-bottom: 20px;\n}\n\n.edit-todo-form .inp,\n.add-todo-form .inp {\n    width: 65%;\n    padding: 10px 20px;\n    border-radius: 30px;\n    outline: none;\n    border: none;\n    background-color: rgb(238, 237, 237);\n}\n\n.inp-cont {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    align-items: center;\n    gap: 20px;\n}\n\n.edit-todo-form-submit-btn,\n.add-todo-form-submit-btn {\n    padding: 10px 30px;\n    color: white;\n    font-weight: 600;\n    border-radius: 30px;\n    width: max-content;\n    place-self: center;\n    background-color: black;\n    transition: 0.4s ease;\n}\n\n.edit-todo-form-submit-btn {\n    background-color: rgb(109, 0, 252);\n}\n.edit-todo-form-submit-btn:hover {\n    box-shadow: 0 0 45px 0 rgba(128, 93, 255, 0.808);\n}\n.edit-todo-form-close-btn,\n.add-todo-form-close-btn {\n    position: absolute;\n    z-index: 90;\n    top: 0;\n    right: 0;\n    margin: 10px 20px;\n    width: 20px;\n    height: 20px;\n    font-size: 1rem;\n    font-weight: 800;\n    color: white;\n    border: 1px solid red;\n    background: red;\n    border-radius: 50%;\n}\n.edit-todo-desc,\n.add-todo-desc {\n    resize: vertical;\n}\n\n/* Responsiveness */\n@media screen and (max-width: 850px) {\n    body {\n        background-size: cover;\n    }\n\n    .main {\n        overflow: hidden;\n    }\n\n    .sidebar {\n        overflow: hidden;\n        position: fixed;\n        z-index: 3;\n        width: 100vw;\n        height: 100vh;\n        margin-left: -100%;\n        background-color: rgba(0, 0, 0, 0.5);\n        backdrop-filter: blur(15px);\n    }\n\n    .sidebar.closed {\n        margin-left: 0;\n    }\n\n    .sidebar-r1,\n    .sidebar-r2 {\n        z-index: 5;\n        align-items: center;\n    }\n    .projects-list {\n        align-items: center;\n    }\n\n    .project-link {\n        width: 250px;\n    }\n\n    .page {\n        width: 100%;\n        padding: 40px 5px;\n    }\n\n    .todo-cards-container {\n        padding: 0;\n        margin: 0;\n        width: 100%;\n        margin-bottom: 80px;\n    }\n    .todo-card {\n        grid-template-columns: 1fr 4fr 1fr;\n        grid-template-rows: 2fr 1fr;\n        margin: 0;\n        padding: 1rem 1.5rem;\n        width: 90%;\n        border-radius: 50px;\n        height: 100%;\n        max-height: 500px;\n        overflow: auto;\n    }\n    .todo-col-2 {\n        max-width: 100%;\n    }\n    .todo-col-3 {\n        grid-row: 2 / 2;\n        grid-column-start: 2;\n    }\n    .todo-col-1 {\n        grid-row: span 2;\n    }\n    .todo-col-4 {\n        gap: 10px;\n        grid-row: span 2;\n    }\n    .todo-title {\n        font-size: 0.95rem;\n        margin-bottom: 10px;\n        font-weight: 600;\n        white-space: normal;\n        text-overflow: initial;\n    }\n    .todo-desc {\n        opacity: 1;\n        max-height: 100%;\n        overflow: auto;\n    }\n\n    .todo-expand-btn {\n        display: none;\n    }\n\n    .edit-todo-form,\n    .add-todo-form {\n        display: flex;\n        flex-direction: column;\n        gap: 20px;\n        border-radius: 30px;\n        width: 90%;\n        padding: 20px 40px;\n    }\n\n    .edit-todo-form-title,\n    .add-todo-form-title {\n        place-self: center;\n        font-size: 1.2rem;\n        font-weight: 600;\n        margin-bottom: 15px;\n    }\n\n    .edit-todo-form .inp,\n    .add-todo-form .inp {\n        width: 65%;\n        padding: 10px 20px;\n        border-radius: 30px;\n        outline: none;\n        border: none;\n        background-color: rgb(238, 237, 237);\n    }\n\n    .inp-cont {\n        display: flex;\n        flex-flow: row nowrap;\n        justify-content: space-between;\n        align-items: center;\n        gap: 20px;\n    }\n\n    .edit-todo-form-submit-btn,\n    .add-todo-form-submit-btn {\n        padding: 10px 30px;\n        color: white;\n        font-weight: 600;\n        border-radius: 30px;\n        width: max-content;\n        place-self: center;\n        background-color: black;\n        transition: 0.4s ease;\n    }\n\n    .edit-todo-form-submit-btn {\n        background-color: rgb(109, 0, 252);\n    }\n    .edit-todo-form-submit-btn:hover {\n        box-shadow: 0 0 45px 0 rgba(128, 93, 255, 0.808);\n    }\n    .edit-todo-form-close-btn,\n    .add-todo-form-close-btn {\n        position: absolute;\n        z-index: 90;\n        top: 0;\n        right: 0;\n        margin: 10px 20px;\n        width: 20px;\n        height: 20px;\n        font-size: 1rem;\n        font-weight: 800;\n        color: white;\n        border: 1px solid red;\n        background: red;\n        border-radius: 50%;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/classes/LocalStorage.js":
/*!*************************************!*\
  !*** ./src/classes/LocalStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocalStorage)
/* harmony export */ });
/* harmony import */ var _controllers_todoController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/todoController */ "./src/controllers/todoController.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/classes/Project.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todo */ "./src/classes/Todo.js");



class LocalStorage {
  static save() {
    localStorage.setItem("projects", JSON.stringify(_controllers_todoController__WEBPACK_IMPORTED_MODULE_0__.projects));
    console.log(JSON.parse(localStorage.getItem("projects")));
  }

  static load() {
    const projectsFromLocalStorage = JSON.parse(
      localStorage.getItem("projects")
    );
    try {
      for (const prj of projectsFromLocalStorage) {
        const newProject = new _Project__WEBPACK_IMPORTED_MODULE_1__["default"](prj.title, prj.color);
        for (const todo of prj.todos) {
          newProject.addTodo(
            new _Todo__WEBPACK_IMPORTED_MODULE_2__["default"](
              todo.title,
              todo.description,
              new Date(todo.date),
              todo.isDone
            )
          );
        }
        _controllers_todoController__WEBPACK_IMPORTED_MODULE_0__.projects.push(newProject);
      }
    } catch (err) {}
  }
}


/***/ }),

/***/ "./src/classes/Project.js":
/*!********************************!*\
  !*** ./src/classes/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(title, color) {
        this.title = title;
        this.color = color;
        this.todos = [];
    }

    setTitle(title) {
        this.title = title;
    }

    setColor(color) {
        this.color = color;
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }

    getTodosCount() {
        return this.todos.length;
    }

    deleteTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }
}


/***/ }),

/***/ "./src/classes/Todo.js":
/*!*****************************!*\
  !*** ./src/classes/Todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
  static id = 0;

  constructor(title, description, date, isDone = false) {
    this.id = ++Todo.id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.isDone = isDone;
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  setDescription(desc) {
    this.description = desc;
  }

  setDate(date) {
    this.date = date;
  }

  markDone() {
    this.isDone = true;
  }

  markNotDone() {
    this.isDone = false;
  }
}


/***/ }),

/***/ "./src/components/addTodoButton.js":
/*!*****************************************!*\
  !*** ./src/components/addTodoButton.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTodoButton)
/* harmony export */ });
/* harmony import */ var _addTodoForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTodoForm */ "./src/components/addTodoForm.js");


function addTodoButton() {
    const btn = document.createElement("btn");

    btn.classList.add("add-todo-btn", "floating");
    btn.innerText = "+";

    btn.onclick = () => {
        const addTodo = (0,_addTodoForm__WEBPACK_IMPORTED_MODULE_0__["default"])();
        document.querySelector(".todo-cards-container").insertAdjacentElement("afterend", addTodo);
        addTodo.scrollIntoView();
    };

    return btn;
}


/***/ }),

/***/ "./src/components/addTodoForm.js":
/*!***************************************!*\
  !*** ./src/components/addTodoForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTodoForm)
/* harmony export */ });
/* harmony import */ var _classes_Todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Todo.js */ "./src/classes/Todo.js");
/* harmony import */ var _controllers_todoController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/todoController.js */ "./src/controllers/todoController.js");
/* harmony import */ var _todoCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoCard.js */ "./src/components/todoCard.js");




function closeForm(form) {
    form.classList.add("slide-out");
    setTimeout(() => {
        form.remove();
    }, 450);
}
function addTodoForm(todo = null) {
    const form = document.createElement("form");
    const formTitle = document.createElement("p");
    const r1 = document.createElement("div");
    const todoTitleLabel = document.createElement("label");
    const todoTitleInput = document.createElement("input");
    const r2 = document.createElement("div");
    const todoDescriptionLabel = document.createElement("label");
    const todoDescriptionInput = document.createElement("textarea");
    const r3 = document.createElement("div");
    const projectSelectLabel = document.createElement("label");
    const projectSelect = document.createElement("select");
    const currentProjectOption = document.createElement("option");
    const r4 = document.createElement("div");
    const todoDateLabel = document.createElement("label");
    const todoDateInput = document.createElement("input");
    const r5 = document.createElement("div");
    const submitBtn = document.createElement("button");
    const closeBtn = document.createElement("button");
    var mode = "add";

    if (todo) {
        mode = "edit";
        todoTitleInput.value = todo.title;
        todoDescriptionInput.value = todo.description;
    } else {
        todoTitleInput.placeholder = "enter task title";
        todoDescriptionInput.placeholder = "add a description for you task here!";
    }
    form.classList.add(mode + "-todo-form");
    formTitle.classList.add(mode + "-todo-form-title");
    todoTitleInput.classList.add("inp");
    todoDescriptionInput.classList.add("inp", mode + "-todo-desc");
    todoDateInput.classList.add("inp");
    submitBtn.classList.add(mode + "-todo-form-submit-btn");
    closeBtn.classList.add(mode + "-todo-form-close-btn");
    r1.classList.add("inp-cont");
    r2.classList.add("inp-cont");
    r3.classList.add("inp-cont");
    r4.classList.add("inp-cont");
    r5.classList.add("inp-cont");

    todoTitleInput.type = "text";
    todoDateInput.type = "date";
    submitBtn.type = "button";
    closeBtn.type = "button";

    formTitle.innerText = todo ? "Edit Task" : "Add new Task";
    todoTitleLabel.innerText = "Title";
    todoDescriptionLabel.innerText = "Details";
    projectSelectLabel.innerText = "Project";
    todoDateLabel.innerText = "Date";
    closeBtn.innerText = "x";
    submitBtn.innerText = todo ? "Save" : "Add";

    if (!todo) {
        const today = new Date();
        let month = today.getMonth() + 1;
        let day = today.getDate();
        if (month < 10) month = "0" + "" + month;
        if (day < 10) day = "0" + day;
        todoDateInput.value = `${today.getFullYear()}-${month}-${day}`;
    } else {
        todoDateInput.value = todo.date.toISOString().split("T")[0];
    }

    closeBtn.onclick = () => {
        if (todo) form.previousElementSibling.style.display = "grid";
        closeForm(form);
    };
    submitBtn.onclick = () => {
        const title = todoTitleInput.value.trim();
        const desc = todoDescriptionInput.value;
        const date = new Date(todoDateInput.value);

        if (todo) {
            console.log("logic for editing task");
            if (title && date) {
                const id = todo.id;
                const projectName = todo.project || document.querySelector(".page").getAttribute("id");
                const editedTodo = (0,_controllers_todoController_js__WEBPACK_IMPORTED_MODULE_1__.editTodo)(title, desc, date, id, projectName);
                form.previousElementSibling.remove();
                form.insertAdjacentElement("beforebegin", (0,_todoCard_js__WEBPACK_IMPORTED_MODULE_2__["default"])(editedTodo, projectName));
                closeForm(form);
            }
        } else {
            if (title && date) {
                const todo = new _classes_Todo_js__WEBPACK_IMPORTED_MODULE_0__["default"](title, desc, date);
                const projectName = document.querySelector(".page").getAttribute("id");
                (0,_controllers_todoController_js__WEBPACK_IMPORTED_MODULE_1__.addTodo)(todo, document.querySelector(".page").getAttribute("id"));
                document.querySelector(".todo-cards-container").appendChild((0,_todoCard_js__WEBPACK_IMPORTED_MODULE_2__["default"])(todo, projectName));
                closeForm(form);
            }
        }
    };

    r1.appendChild(todoTitleLabel);
    r1.appendChild(todoTitleInput);

    r2.appendChild(todoDescriptionLabel);
    r2.appendChild(todoDescriptionInput);

    r3.appendChild(projectSelectLabel);
    r3.appendChild(projectSelect);

    r4.appendChild(todoDateLabel);
    r4.appendChild(todoDateInput);

    r5.appendChild(submitBtn);

    form.appendChild(formTitle);
    form.appendChild(r1);
    form.appendChild(r2);
    // form.appendChild(r3);
    form.appendChild(r4);
    form.appendChild(r5);
    form.appendChild(submitBtn);
    form.appendChild(closeBtn);

    return form;
}


/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header),
/* harmony export */   toggleSidebar: () => (/* binding */ toggleSidebar)
/* harmony export */ });
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png");


function toggleSidebar() {
    document.querySelector(".sidebar")?.classList.toggle("closed");
}

function sidebarButton() {
    const sidebarBtn = document.createElement("button");
    sidebarBtn.classList.add("sidebar-btn");

    sidebarBtn.appendChild(document.createElement("div"));
    sidebarBtn.appendChild(document.createElement("div"));
    sidebarBtn.appendChild(document.createElement("div"));

    sidebarBtn.type = "button";

    sidebarBtn.onclick = () => toggleSidebar();
    return sidebarBtn;
}

function header() {
    const header = document.createElement("div");
    const logoContainer = document.createElement("div");
    const logoImg = new Image();
    const logoText = document.createElement("p");
    const sidebarBtn = sidebarButton();

    header.setAttribute("id", "header");
    logoContainer.classList.add("logo-cont");
    logoImg.setAttribute("id", "logo");
    logoText.classList.add("logo-text");

    logoImg.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__;
    logoText.textContent = "Galactic Todos";

    logoContainer.appendChild(logoImg);
    logoContainer.appendChild(logoText);

    header.appendChild(sidebarBtn);
    header.appendChild(logoContainer);

    return header;
}




/***/ }),

/***/ "./src/components/homeCard.js":
/*!************************************!*\
  !*** ./src/components/homeCard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeCard)
/* harmony export */ });
function homeCard(title, value, color) {
    const card = document.createElement("div");
    const cardTitle = document.createElement("p");
    const cardValue = document.createElement("p");

    card.classList.add("home-card");
    cardTitle.classList.add("home-card-title");
    cardValue.classList.add("home-card-value");

    cardTitle.innerText = title;
    cardValue.innerText = 0;

    card.style.setProperty("--color", color + "2A");
    card.style.borderColor = color;
    cardValue.style.color = color;

    const incrementValue = () => {
        if (value > 0) cardValue.textContent = +cardValue.textContent + 1;
        if (parseInt(cardValue.textContent) >= value) clearInterval(valueInterval);
    };
    let valueInterval = setInterval(incrementValue, 30);

    card.appendChild(cardTitle);
    card.appendChild(cardValue);

    return card;
}


/***/ }),

/***/ "./src/components/sidebar.js":
/*!***********************************!*\
  !*** ./src/components/sidebar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectForm: () => (/* binding */ addProjectForm),
/* harmony export */   "default": () => (/* binding */ sidebar)
/* harmony export */ });
/* harmony import */ var _controllers_todoController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/todoController.js */ "./src/controllers/todoController.js");
/* harmony import */ var _classes_Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/Project.js */ "./src/classes/Project.js");
/* harmony import */ var _controllers_Ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/Ui.js */ "./src/controllers/Ui.js");
/* harmony import */ var _assets_delete_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/delete-icon.png */ "./src/assets/delete-icon.png");
/* harmony import */ var _assets_edit_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/edit-icon.png */ "./src/assets/edit-icon.png");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.js */ "./src/components/header.js");







function isMobile() {
    return (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
    );
}

function addProjectForm(project = null) {
    const cont = document.createElement("form");
    const rowOne = document.createElement("div");
    const projectNameInput = document.createElement("input");
    const projectColorInput = document.createElement("input");
    const rowTwo = document.createElement("div");
    const submitBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");
    const oldName = project ? project.title : null;
    const removeForm = () => document.querySelector(".add-project-form")?.remove();

    submitBtn.type = "button";
    cancelBtn.type = "button";

    projectNameInput.type = "text";
    projectColorInput.type = "color";

    if (project) {
        projectNameInput.value = project.title;
        projectColorInput.value = project.color;
        submitBtn.innerText = "Save";
    } else {
        projectNameInput.placeholder = "project name";
        submitBtn.innerText = "Add";
    }

    cancelBtn.innerText = "Cancel";

    cont.classList.add("add-project-form");
    rowOne.classList.add("add-project-r1");
    projectNameInput.classList.add("inp", "project-name-inp");
    projectColorInput.classList.add("inp", "project-color-inp");
    rowTwo.classList.add("add-project-r2");
    submitBtn.classList.add("add-project-submit-btn");
    cancelBtn.classList.add("add-project-cancel-btn");

    submitBtn.onclick = () => {
        const newProjectName = projectNameInput.value.trim();
        const newProjectColor = projectColorInput.value;
        if (project) {
            if (!(0,_controllers_todoController_js__WEBPACK_IMPORTED_MODULE_0__.getProjects)().includes(newProjectName)) {
                (0,_controllers_todoController_js__WEBPACK_IMPORTED_MODULE_0__.editProject)(oldName, newProjectName, newProjectColor);
                cont.previousElementSibling.remove();
                cont.insertAdjacentElement("afterend", projectLink(new _classes_Project_js__WEBPACK_IMPORTED_MODULE_1__["default"](newProjectName, newProjectColor)));
                removeForm();
                (0,_controllers_Ui_js__WEBPACK_IMPORTED_MODULE_2__.renderPage)((0,_controllers_todoController_js__WEBPACK_IMPORTED_MODULE_0__.getProjectByName)(newProjectName));
            }
        } else {
            const projects = (0,_controllers_todoController_js__WEBPACK_IMPORTED_MODULE_0__.getProjects)().filter((project) => project.title);
            if (newProjectName !== "" && !projects.includes(newProjectName)) {
                (0,_controllers_todoController_js__WEBPACK_IMPORTED_MODULE_0__.addProject)(new _classes_Project_js__WEBPACK_IMPORTED_MODULE_1__["default"](newProjectName, newProjectColor));
                removeForm();
                updateProjectsList();
            }
        }
    };

    cancelBtn.onclick = () => {
        cont.previousElementSibling.style.display = "flex";
        removeForm();
    };

    rowOne.appendChild(projectColorInput);
    rowOne.appendChild(projectNameInput);
    rowTwo.appendChild(submitBtn);
    rowTwo.appendChild(cancelBtn);

    cont.appendChild(rowOne);
    cont.appendChild(rowTwo);

    return cont;
}

function addProjectButton() {
    const btn = document.createElement("button");
    btn.textContent = "+ Add Project";

    btn.setAttribute("id", "add-project-btn");
    btn.classList.add("sidebar-link");

    btn.type = "button";

    btn.onclick = (e) => {
        if (!document.querySelector(".add-project-form")) e.currentTarget.insertAdjacentElement("beforebegin", addProjectForm());
    };

    return btn;
}

function sidebarLink(txt) {
    const cont = document.createElement("div");
    const linkTxt = document.createElement("p");

    cont.classList.add("sidebar-link");
    linkTxt.innerText = txt;

    cont.onclick = (e) => {
        document.querySelector(".sidebar-link.active")?.classList.remove("active");
        document.querySelector(".project-link.active")?.classList.remove("active");
        e.currentTarget.classList.add("active");
        if (txt !== "Dashboard") (0,_controllers_Ui_js__WEBPACK_IMPORTED_MODULE_2__.renderPage)(txt);
        else {
            const content = document.querySelector(".content");
            if (content) Array.from(content.children).forEach((child) => child.remove());
            content.appendChild((0,_controllers_Ui_js__WEBPACK_IMPORTED_MODULE_2__.dashboard)());
        }
        if (isMobile()) (0,_header_js__WEBPACK_IMPORTED_MODULE_5__.toggleSidebar)();
    };

    cont.appendChild(linkTxt);
    return cont;
}

function projectLink(project) {
    const cont = sidebarLink(project.title);
    const projectColorCircle = document.createElement("div");
    const editBtn = document.createElement("button");
    const editBtnIcon = new Image();
    const deleteBtn = document.createElement("button");
    const deleteBtnIcon = new Image();

    cont.classList.add("project-link");
    projectColorCircle.classList.add("project-color");

    cont.setAttribute("id", project.title);

    cont.style.setProperty("--color", project.color);
    cont.style.setProperty("--hover-color", project.color + "5A");

    editBtnIcon.classList.add("icon");
    deleteBtnIcon.classList.add("icon");

    editBtnIcon.src = _assets_edit_icon_png__WEBPACK_IMPORTED_MODULE_4__;
    deleteBtnIcon.src = _assets_delete_icon_png__WEBPACK_IMPORTED_MODULE_3__;

    cont.onclick = (e) => {
        document.querySelector(".active")?.classList.remove("active");
        e.currentTarget.classList.add("active");
        document.body.style.setProperty("--project-color", project.color + "50");
        if (isMobile()) (0,_header_js__WEBPACK_IMPORTED_MODULE_5__.toggleSidebar)();
        (0,_controllers_Ui_js__WEBPACK_IMPORTED_MODULE_2__.renderPage)(project);
        document.querySelector(".content").scrollTop = 0;
    };

    editBtn.appendChild(editBtnIcon);
    deleteBtn.appendChild(deleteBtnIcon);

    editBtn.onclick = () => {
        cont.insertAdjacentElement("afterend", addProjectForm(project));
        cont.style.display = "none";
    };

    deleteBtn.onclick = () => {
        (0,_controllers_todoController_js__WEBPACK_IMPORTED_MODULE_0__.removeProject)(project.title);
        updateProjectsList();
    };

    const d = document.createElement("div");
    d.appendChild(editBtn);
    d.appendChild(deleteBtn);

    cont.appendChild(projectColorCircle);
    cont.appendChild(d);

    return cont;
}

function updateProjectsList() {
    const projectsList = document.querySelector(".projects-list");
    Array.from(projectsList.children).forEach((child) => child.remove());
    const projects = (0,_controllers_todoController_js__WEBPACK_IMPORTED_MODULE_0__.getProjects)();
    projects.forEach((project) => projectsList.appendChild(projectLink(project)));
    projectsList.appendChild(addProjectButton());
}

function sidebar() {
    const sidebar = document.createElement("div");
    const row1 = document.createElement("div");
    const row1Txt = document.createElement("p");
    const dashboardLink = sidebarLink("Dashboard");
    const todayLink = sidebarLink("Today");
    const weekLink = sidebarLink("Week");
    const row2 = document.createElement("div");
    const row2Txt = document.createElement("p");
    const projectsList = document.createElement("div");
    const addProjectBtn = addProjectButton();

    sidebar.classList.add("sidebar");
    row1.classList.add("sidebar-r1");
    row1Txt.classList.add("sidebar-r1-title", "title");
    row2.classList.add("sidebar-r2");
    row2Txt.classList.add("sidebar-r2-title", "title");
    projectsList.classList.add("projects-list");

    row1Txt.innerText = "Home";
    row2Txt.innerText = "Projects";

    dashboardLink.classList.add("active");

    row1.appendChild(row1Txt);
    row1.appendChild(dashboardLink);
    row1.appendChild(todayLink);
    row1.appendChild(weekLink);
    row2.appendChild(row2Txt);
    const projects = (0,_controllers_todoController_js__WEBPACK_IMPORTED_MODULE_0__.getProjects)();
    projects.forEach((project) => projectsList.appendChild(projectLink(project)));
    projectsList.appendChild(addProjectBtn);
    row2.appendChild(projectsList);

    sidebar.appendChild(row1);
    sidebar.appendChild(row2);

    return sidebar;
}




/***/ }),

/***/ "./src/components/todoCard.js":
/*!************************************!*\
  !*** ./src/components/todoCard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoCard),
/* harmony export */   updateTodos: () => (/* binding */ updateTodos)
/* harmony export */ });
/* harmony import */ var _assets_edit_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/edit-icon.png */ "./src/assets/edit-icon.png");
/* harmony import */ var _assets_remove_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/remove-icon.png */ "./src/assets/remove-icon.png");
/* harmony import */ var _controllers_todoController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/todoController */ "./src/controllers/todoController.js");
/* harmony import */ var _addTodoForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTodoForm */ "./src/components/addTodoForm.js");





function updateTodos() {
    const todosContainer = document.querySelector(".todo-cards-container");
    const projectName = document.querySelector(".page").getAttribute("id");

    [...todosContainer.children].forEach((c) => c.remove());

    const todos = (0,_controllers_todoController__WEBPACK_IMPORTED_MODULE_2__.getTodosByProjectName)(projectName);
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        const newTodoCard = todoCard(todo, projectName);
        newTodoCard.style.animationDelay = `0.${i + 3}s`;
        todosContainer.appendChild(newTodoCard);
    }
}

function todoCard(todo, projectTitle) {
    const { title, description, date, isDone } = todo;

    const card = document.createElement("div");
    const checkboxBtn = document.createElement("button");
    const todoTitle = document.createElement("p");
    const todoDesc = document.createElement("p");
    const todoDate = document.createElement("p");
    const todoProject = document.createElement("p");
    const expandBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const editBtnImg = new Image();
    const deleteBtn = document.createElement("button");
    const deleteBtnImg = new Image();

    const Col1 = document.createElement("div");
    const Col2 = document.createElement("div");
    const Col3 = document.createElement("div");
    const Col4 = document.createElement("div");

    checkboxBtn.type = "button";
    expandBtn.type = "button";
    editBtn.type = "button";
    deleteBtn.type = "button";

    editBtnImg.src = _assets_edit_icon_png__WEBPACK_IMPORTED_MODULE_0__;
    deleteBtnImg.src = _assets_remove_icon_png__WEBPACK_IMPORTED_MODULE_1__;

    editBtnImg.classList.add("icon");
    deleteBtnImg.classList.add("icon");

    editBtn.appendChild(editBtnImg);
    deleteBtn.appendChild(deleteBtnImg);

    card.setAttribute("data-id", todo.id);
    card.classList.add("todo-card");
    Col1.classList.add("todo-col-1");
    Col2.classList.add("todo-col-2");
    Col3.classList.add("todo-col-3");
    Col4.classList.add("todo-col-4");
    todoTitle.classList.add("todo-title");
    todoDesc.classList.add("todo-desc");
    todoDate.classList.add("todo-date");
    checkboxBtn.classList.add("todo-check-btn");
    expandBtn.classList.add("todo-expand-btn");
    editBtn.classList.add("todo-edit-btn");
    deleteBtn.classList.add("todo-delete-btn");

    todoTitle.innerText = title;
    todoDesc.innerText = description;
    todoDate.innerText = date.toLocaleDateString("en-US");
    todoProject.innerText = projectTitle;

    if (isDone) card.classList.add("done");

    checkboxBtn.onclick = () => {
        card.classList.toggle("done");
        if (card.classList.contains("done")) {
            (0,_controllers_todoController__WEBPACK_IMPORTED_MODULE_2__.markDone)(projectTitle, todo.id);
            (0,_controllers_todoController__WEBPACK_IMPORTED_MODULE_2__.IncCompletedTodos)();
        } else {
            (0,_controllers_todoController__WEBPACK_IMPORTED_MODULE_2__.unMarkDone)(projectTitle, todo.id);
            (0,_controllers_todoController__WEBPACK_IMPORTED_MODULE_2__.DecCompletedTodos)();
        }
    };
    expandBtn.onclick = (e) => {
        card.classList.toggle("expanded");
        if (card.classList.contains("expanded")) {
            todoDesc.style.maxHeight = todoDesc.scrollHeight + "px";
            todoDesc.style.opacity = 1;
        } else {
            todoDesc.style.maxHeight = "0";
            todoDesc.style.opacity = 0;
        }
    };

    editBtn.onclick = (e) => {
        const todoCard = e.currentTarget.parentElement.parentElement;
        todoCard.insertAdjacentElement("afterend", (0,_addTodoForm__WEBPACK_IMPORTED_MODULE_3__["default"])(todo));
        todoCard.style.display = "none";
        // todoCard.remove();
    };

    deleteBtn.onclick = (e) => {
        (0,_controllers_todoController__WEBPACK_IMPORTED_MODULE_2__.deleteTodo)(projectTitle, todo.id);
        const card = e.currentTarget.parentElement.parentElement;
        card.style.animationDelay = "0s";
        card.classList.add("slide-out");
        setTimeout(() => {
            card.remove();
        }, 500);
    };

    Col1.appendChild(checkboxBtn);
    Col2.appendChild(todoTitle);
    Col2.appendChild(todoDate);
    Col2.appendChild(todoDesc);
    Col3.appendChild(todoProject);
    Col4.appendChild(expandBtn);
    Col4.appendChild(editBtn);
    Col4.appendChild(deleteBtn);

    card.appendChild(Col1);
    card.appendChild(Col2);
    card.appendChild(Col3);
    card.appendChild(Col4);

    return card;
}




/***/ }),

/***/ "./src/controllers/Ui.js":
/*!*******************************!*\
  !*** ./src/controllers/Ui.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dashboard: () => (/* binding */ dashboard),
/* harmony export */   "default": () => (/* binding */ init),
/* harmony export */   renderPage: () => (/* binding */ renderPage)
/* harmony export */ });
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header.js */ "./src/components/header.js");
/* harmony import */ var _components_sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sidebar.js */ "./src/components/sidebar.js");
/* harmony import */ var _components_homeCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/homeCard.js */ "./src/components/homeCard.js");
/* harmony import */ var _todoController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoController.js */ "./src/controllers/todoController.js");
/* harmony import */ var _components_todoCard_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/todoCard.js */ "./src/components/todoCard.js");
/* harmony import */ var _classes_Project_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../classes/Project.js */ "./src/classes/Project.js");
/* harmony import */ var _components_addTodoButton_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/addTodoButton.js */ "./src/components/addTodoButton.js");
/* harmony import */ var _classes_LocalStorage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../classes/LocalStorage.js */ "./src/classes/LocalStorage.js");









function dashboard() {
  const cont = document.createElement("div");
  const pageTitle = document.createElement("h1");
  const pageSubTitle = document.createElement("h2");
  const cardsContainer = document.createElement("div");
  const todosCreatedCard = (0,_components_homeCard_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
    "Todos Created",
    (0,_todoController_js__WEBPACK_IMPORTED_MODULE_3__.getTodosCount)(),
    "#1020FF"
  );
  const todosCompletedCard = (0,_components_homeCard_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
    "Todos Completed",
    (0,_todoController_js__WEBPACK_IMPORTED_MODULE_3__.getCompletedTodosCount)(),
    "#10FF10"
  );
  const projectsCreatedCard = (0,_components_homeCard_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
    "Projects Created",
    (0,_todoController_js__WEBPACK_IMPORTED_MODULE_3__.getProjectsCount)(),
    "#FFFFAA"
  );
  const todosDeletedCard = (0,_components_homeCard_js__WEBPACK_IMPORTED_MODULE_2__["default"])("Todos Deleted", _todoController_js__WEBPACK_IMPORTED_MODULE_3__.deletedTodos, "#EE0542");

  pageTitle.classList.add("page-title");
  pageSubTitle.classList.add("page-sub-title");
  cardsContainer.classList.add("dashboard-cards-container");

  pageTitle.textContent = "Dashboard";
  pageSubTitle.textContent = "Welcome Productive Human !";

  todosCreatedCard.style.animationDelay = "0.1s";
  todosCompletedCard.style.animationDelay = "0.2s";
  projectsCreatedCard.style.animationDelay = "0.3s";
  todosDeletedCard.style.animationDelay = "0.4s";

  cardsContainer.appendChild(todosCreatedCard);
  cardsContainer.appendChild(todosCompletedCard);
  cardsContainer.appendChild(projectsCreatedCard);
  cardsContainer.appendChild(todosDeletedCard);

  cont.setAttribute("id", "dashboard");

  cont.appendChild(pageTitle);
  cont.appendChild(pageSubTitle);
  cont.appendChild(cardsContainer);

  return cont;
}

function renderPage(project) {
  const content = document.querySelector(".content");
  if (content) Array.from(content.children).forEach((child) => child.remove());

  var { title, color, todos } = project;

  const cont = document.createElement("div");
  const pageTitle = document.createElement("h1");
  const pageSubTitle = document.createElement("h2");
  const cardsContainer = document.createElement("div");

  cont.classList.add("page");
  pageTitle.classList.add("page-title");
  pageSubTitle.classList.add("page-sub-title");
  cardsContainer.classList.add("todo-cards-container");

  if (project instanceof _classes_Project_js__WEBPACK_IMPORTED_MODULE_5__["default"]) {
    title = project.title;
    color = project.color;
    todos = project.todos;
    cont.appendChild((0,_components_addTodoButton_js__WEBPACK_IMPORTED_MODULE_6__["default"])());
  } else if (project === "Today") {
    title = "Today";
    color = "rgba(0,0,0,.7)";
    todos = (0,_todoController_js__WEBPACK_IMPORTED_MODULE_3__.getTodaysTodos)();
  } else if (project === "Week") {
    title = "Week";
    color = "rgba(0,0,0,.7)";
    todos = (0,_todoController_js__WEBPACK_IMPORTED_MODULE_3__.getWeekTodos)();
  }

  if (todos) {
    for (let i = 0; i < todos.length; i++) {
      const todo = todos[i];
      const newTodoCard = (0,_components_todoCard_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
        todo,
        project === "Today" || project === "Week" ? todo.project : project.title
      );
      newTodoCard.style.animationDelay = `0.${i + 3}s`;
      cardsContainer.appendChild(newTodoCard);
    }
  }

  pageTitle.textContent = title;
  pageSubTitle.textContent = "No Todos Found in this project";

  cont.setAttribute("id", title);

  cont.appendChild(pageTitle);
  if (!todos || !todos.length) cont.appendChild(pageSubTitle);
  cont.appendChild(cardsContainer);

  content.appendChild(cont);
}

function init() {
  _classes_LocalStorage_js__WEBPACK_IMPORTED_MODULE_7__["default"].load();
  const BODY = document.body;
  const Header = (0,_components_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const Sidebar = (0,_components_sidebar_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const main = document.createElement("main");
  const content = document.createElement("div");

  main.classList.add("main");

  content.classList.add("content");
  content.appendChild(dashboard());

  main.appendChild(Sidebar);
  main.appendChild(content);

  BODY.append(Header);
  BODY.appendChild(main);
}




/***/ }),

/***/ "./src/controllers/todoController.js":
/*!*******************************************!*\
  !*** ./src/controllers/todoController.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DecCompletedTodos: () => (/* binding */ DecCompletedTodos),
/* harmony export */   IncCompletedTodos: () => (/* binding */ IncCompletedTodos),
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   addTodo: () => (/* binding */ addTodo),
/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),
/* harmony export */   deletedTodos: () => (/* binding */ deletedTodos),
/* harmony export */   editProject: () => (/* binding */ editProject),
/* harmony export */   editTodo: () => (/* binding */ editTodo),
/* harmony export */   getCompletedTodosCount: () => (/* binding */ getCompletedTodosCount),
/* harmony export */   getProjectByName: () => (/* binding */ getProjectByName),
/* harmony export */   getProjects: () => (/* binding */ getProjects),
/* harmony export */   getProjectsCount: () => (/* binding */ getProjectsCount),
/* harmony export */   getTodaysTodos: () => (/* binding */ getTodaysTodos),
/* harmony export */   getTodosByProjectName: () => (/* binding */ getTodosByProjectName),
/* harmony export */   getTodosCount: () => (/* binding */ getTodosCount),
/* harmony export */   getWeekTodos: () => (/* binding */ getWeekTodos),
/* harmony export */   markDone: () => (/* binding */ markDone),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   removeProject: () => (/* binding */ removeProject),
/* harmony export */   unMarkDone: () => (/* binding */ unMarkDone)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _classes_LocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/LocalStorage */ "./src/classes/LocalStorage.js");



let projects = [];
let completedTodos = 0;
let deletedTodos = 0;

const addProject = (project) => {
  projects.push(project);
  _classes_LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"].save();
};

const getProjects = () => projects;

const getProjectByName = (title) => projects.find((v) => v.title == title);

const removeProject = (projectName) => {
  projects = projects.filter((prj) => prj.title !== projectName);
  _classes_LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"].save();
};

const getTodosByProjectName = (projectName) =>
  getProjectByName(projectName).todos;

const getTodaysTodos = () => {
  const todaysTodos = [];
  projects.forEach((project) => {
    project.todos.forEach((todo) => {
      if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(), todo.date)) {
        todo.project = project.title;
        todaysTodos.push(todo);
      }
    });
  });
  return todaysTodos;
};
const getWeekTodos = () => {
  const weekTodos = [];
  projects.forEach((project) => {
    project.todos.forEach((todo) => {
      if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(), todo.date)) {
        todo.project = project.title;
        weekTodos.push(todo);
      }
    });
  });
  return weekTodos;
};

const getProjectsCount = () => projects.length;

const getTodosCount = () =>
  projects.reduce((sum, project) => sum + project.getTodosCount(), 0);

const getCompletedTodosCount = () => completedTodos;

const addTodo = (todo, projectName) => {
  const p = getProjectByName(projectName);
  p.todos.push(todo);
  _classes_LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"].save(projects);
};

const IncCompletedTodos = () => ++completedTodos;
const DecCompletedTodos = () => --completedTodos;

const deleteTodo = (projectName, todoId) => {
  const p = getProjectByName(projectName);
  p.todos = p.todos.filter((todo) => todo.id !== todoId);
  _classes_LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"].save();
  deletedTodos++;
};

const markDone = (projectName, todoId) => {
  const toMarkDone = getProjectByName(projectName).todos.find(
    (t) => t.id === todoId
  );
  toMarkDone.markDone();
  _classes_LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"].save();
};

const unMarkDone = (projectName, todoId) => {
  const toMarkDone = getProjectByName(projectName).todos.find(
    (t) => t.id === todoId
  );
  toMarkDone.markNotDone();
  _classes_LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"].save();
};

const getTodo = (id, projectName) => {
  const p = getProjectByName(projectName);
  const toFind = p.todos.find((t) => t.id === id);
  return toFind;
};
const editTodo = (title, desc, date, id, projectTitle) => {
  const toEdit = getTodo(id, projectTitle);
  toEdit.setTitle(title);
  toEdit.setDescription(desc);
  toEdit.setDate(date);
  _classes_LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"].save();
  return toEdit;
};

const editProject = (oldProjectName, newProjectName, newProjectColor) => {
  const projectToEdit = getProjectByName(oldProjectName);
  projectToEdit.setTitle(newProjectName);
  projectToEdit.setColor(newProjectColor);
  _classes_LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"].save();
};




/***/ }),

/***/ "./src/assets/bg.webp":
/*!****************************!*\
  !*** ./src/assets/bg.webp ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c2a7856a7feca272c2c.webp";

/***/ }),

/***/ "./src/assets/delete-icon.png":
/*!************************************!*\
  !*** ./src/assets/delete-icon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "629ad56d4d678955ff67.png";

/***/ }),

/***/ "./src/assets/edit-icon.png":
/*!**********************************!*\
  !*** ./src/assets/edit-icon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6560a08747659e1cd3e4.png";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe5f01e43238dccf6a0e.png";

/***/ }),

/***/ "./src/assets/remove-icon.png":
/*!************************************!*\
  !*** ./src/assets/remove-icon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "840a060a3025ca94c9a0.png";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _controllers_Ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/Ui */ "./src/controllers/Ui.js");


(0,_controllers_Ui__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZHQUFtQztBQUMvRSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGtIQUFrSCxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLGtCQUFrQjtBQUNoSyx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLG1DQUFtQztBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsd0JBQXdCLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLFVBQVUsTUFBTSxZQUFZLGFBQWEsT0FBTyxZQUFZLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxN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QSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNlO0FBQ3BDLDJEQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FsYWN0aWMtdG9kb3MvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2dhbGFjdGljLXRvZG9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9nYWxhY3RpYy10b2Rvcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZ2FsYWN0aWMtdG9kb3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9nYWxhY3RpYy10b2Rvcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9nYWxhY3RpYy10b2Rvcy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2FsYWN0aWMtdG9kb3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL2dhbGFjdGljLXRvZG9zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2FsYWN0aWMtdG9kb3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZVdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2FsYWN0aWMtdG9kb3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2FsYWN0aWMtdG9kb3MvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL2dhbGFjdGljLXRvZG9zLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2FsYWN0aWMtdG9kb3MvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZ2FsYWN0aWMtdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZ2FsYWN0aWMtdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2dhbGFjdGljLXRvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dhbGFjdGljLXRvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2dhbGFjdGljLXRvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZ2FsYWN0aWMtdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9nYWxhY3RpYy10b2Rvcy8uL3NyYy9jbGFzc2VzL0xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9nYWxhY3RpYy10b2Rvcy8uL3NyYy9jbGFzc2VzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vZ2FsYWN0aWMtdG9kb3MvLi9zcmMvY2xhc3Nlcy9Ub2RvLmpzIiwid2VicGFjazovL2dhbGFjdGljLXRvZG9zLy4vc3JjL2NvbXBvbmVudHMvYWRkVG9kb0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9nYWxhY3RpYy10b2Rvcy8uL3NyYy9jb21wb25lbnRzL2FkZFRvZG9Gb3JtLmpzIiwid2VicGFjazovL2dhbGFjdGljLXRvZG9zLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL2dhbGFjdGljLXRvZG9zLy4vc3JjL2NvbXBvbmVudHMvaG9tZUNhcmQuanMiLCJ3ZWJwYWNrOi8vZ2FsYWN0aWMtdG9kb3MvLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyLmpzIiwid2VicGFjazovL2dhbGFjdGljLXRvZG9zLy4vc3JjL2NvbXBvbmVudHMvdG9kb0NhcmQuanMiLCJ3ZWJwYWNrOi8vZ2FsYWN0aWMtdG9kb3MvLi9zcmMvY29udHJvbGxlcnMvVWkuanMiLCJ3ZWJwYWNrOi8vZ2FsYWN0aWMtdG9kb3MvLi9zcmMvY29udHJvbGxlcnMvdG9kb0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vZ2FsYWN0aWMtdG9kb3MvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL2dhbGFjdGljLXRvZG9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbGFjdGljLXRvZG9zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dhbGFjdGljLXRvZG9zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nYWxhY3RpYy10b2Rvcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2dhbGFjdGljLXRvZG9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2FsYWN0aWMtdG9kb3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nYWxhY3RpYy10b2Rvcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9nYWxhY3RpYy10b2Rvcy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9nYWxhY3RpYy10b2Rvcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZ2FsYWN0aWMtdG9kb3MvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2JnLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdlb2xvZ2ljYTp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXRvZG8tY2FyZC13aWR0aDogNjQwcHg7XG59XG5cbioge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tcHJvamVjdC1jb2xvciwgcmdiYSgwLCAwLCAwLCAwKSkgMiUsIHJnYmEoMCwgMCwgMCwgMC40KSkgMTUwJSxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4xKSwgcmdiYSgwLCAwLCAwLCAwLjgpKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogaGFyZC1saWdodCwgbXVsdGlwbHk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzVweCAxZnI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBmb250LWZhbWlseTogXCJHZW9sb2dpY2FcIiwgc2Fucy1zZXJpZjtcbn1cblxuYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cbmltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiBIZWFkZXIgU3R5bGluZyAqL1xuXG4jaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiA1O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDEzMiwgMCwgMjU1KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG59XG5cbi5sb2dvLWNvbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDE0cHg7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zaWRlYmFyLWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5zaWRlYmFyLWJ0biA+IGRpdiB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5sb2dvLXRleHQge1xuICAgIGNvbG9yOiByZ2IoMjU0LCAyNTMsIDI1NSk7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuI2xvZ28ge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbn1cblxuLyogU2lkZWJhciBTdHlsaW5nICovXG5cbi5zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogNDBweCA0MHB4IDAgNDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBnYXA6IDMwcHg7XG4gICAgd2lkdGg6IDM4MHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NXB4KTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5zaWRlYmFyLmNsb3NlZCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0zODBweDtcbn1cblxuLnNpZGViYXItcjEsXG4uc2lkZWJhci1yMiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdhcDogMTVweDtcbn1cblxuLnNpZGViYXItcjIge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucHJvamVjdHMtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xufVxuXG4jYWRkLXByb2plY3QtYnRuIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xufVxuXG4jYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAtNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLnNpZGViYXItbGluayB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi5zaWRlYmFyLWxpbms6bm90KC5wcm9qZWN0LWxpbmspLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTksIDIzMywgMjU1LCAwLjMpO1xufVxuXG4uc2lkZWJhci1saW5rOm5vdCguYWN0aXZlKTpub3QoLnByb2plY3QtbGluayk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk5LCAyMzMsIDI1NSwgMC4xNSk7XG59XG5cbi5wcm9qZWN0LWxpbmsge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xufVxuXG4ucHJvamVjdC1saW5rIC5pY29uIHtcbiAgICBvcGFjaXR5OiAwO1xufVxuLnByb2plY3QtbGluazpob3ZlciAuaWNvbiB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnByb2plY3QtbGluayAuaWNvbiB7XG4gICAgbWFyZ2luOiAwIDVweDtcbn1cblxuLnByb2plY3QtY29sb3Ige1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgICBvcmRlcjogLTE7XG59XG5cbi5wcm9qZWN0LWxpbms6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcbn1cblxuLnByb2plY3QtbGluay5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcbn1cblxuLyogU3R5bGluZyB0aGUgZm9ybSBmb3IgYWRkaW5nIG5ldyBQcm9qZWN0ICovXG5cbi5hZGQtcHJvamVjdC1mb3JtIHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBtYXJnaW46IDEycHggMDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmFkZC1wcm9qZWN0LXIxLFxuLmFkZC1wcm9qZWN0LXIyIHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5wcm9qZWN0LW5hbWUtaW5wIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XG59XG5cbi5wcm9qZWN0LWNvbG9yLWlucCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoMzUlKTtcbn1cblxuLmFkZC1wcm9qZWN0LXN1Ym1pdC1idG4sXG4uYWRkLXByb2plY3QtY2FuY2VsLWJ0biB7XG4gICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5hZGQtcHJvamVjdC1zdWJtaXQtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDksIDE2MywgOTcpO1xufVxuLmFkZC1wcm9qZWN0LWNhbmNlbC1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDQ4LCA0OCk7XG59XG5cbi8qIFN0eWxpbmcgdGhlIEhvbWUgY2FyZHMgKi9cblxuLmhvbWUtY2FyZCB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KSBicmlnaHRuZXNzKDAuNSk7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgYW5pbWF0aW9uOiBmYWRlLWluIDAuNXMgZWFzZSBiYWNrd2FyZHM7XG59XG5cbi5ob21lLWNhcmQtdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5ob21lLWNhcmQtdmFsdWUge1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuLmhvbWUtY2FyZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IpO1xufVxuXG4vKiBUb2RvIENhcmQgU3R5bGluZyAqL1xuXG4udG9kby1jYXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnIgMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE1cHggNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSg2MCwgMjU1LCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAzMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWluO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYmFja3dhcmRzO1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzIGVhc2UtaW4sIG92ZXJmbG93IDAuNXMgZWFzZS1pbiwgYmFja2dyb3VuZC1wb3NpdGlvbiAwLjVzIGVhc2U7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZS1vdXQge1xuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgfVxuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxufVxuXG4udG9kby1jYXJkLnNsaWRlLW91dCxcbi5lZGl0LXRvZG8tZm9ybS5zbGlkZS1vdXQsXG4uYWRkLXRvZG8tZm9ybS5zbGlkZS1vdXQge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1vdXQ7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwICFpbXBvcnRhbnQ7XG59XG5cbi50b2RvLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRvZG8tY2FyZC5leHBhbmRlZCAudG9kby10aXRsZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLnRvZG8tZGVzYyxcbi50b2RvLWRhdGUge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi50b2RvLWRlc2Mge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgbWF4LWhlaWdodDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cyBlYXNlLCBvcGFjaXR5IDAuNXMgZWFzZTtcbn1cblxuLnRvZG8tY2FyZC5leHBhbmRlZCAudG9kby1kZXNjIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7IC8qIFNldCBhbiBhcHByb3ByaWF0ZSB2YWx1ZSBmb3IgdGhlIG1heGltdW0gaGVpZ2h0ICovXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjRzIGVhc2UsIG9wYWNpdHkgMC40cyBlYXNlO1xufVxuXG4udG9kby1jaGVjay1idG4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xufVxuXG4udG9kby1jaGVjay1idG46OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmdiKDAsIDI1NSwgMCk7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYigwLCAyNTUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDApO1xuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbn1cblxuLnRvZG8tY2FyZC5kb25lIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHJnYigwLCAyNTUsIDApO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgYm90dG9tO1xufVxuXG4udG9kby1jYXJkLmRvbmUgLnRvZG8tY2hlY2stYnRuIHtcbiAgICBib3JkZXItY29sb3I6IHJnYigwLCAyNTUsIDApO1xufVxuXG4udG9kby1jYXJkLmRvbmUgLnRvZG8tY2hlY2stYnRuOjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4udG9kby1jYXJkLmV4cGFuZGVkIHtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuLnRvZG8tY2FyZC5leHBhbmRlZCAudG9kby1leHBhbmQtYnRuIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xufVxuXG4udG9kby1leHBhbmQtYnRuIHtcbiAgICB3aWR0aDogMTRweDtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogMi41cHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLWJvdHRvbTogMi41cHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHJvdGF0ZTogNDVkZWc7XG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnRvZG8tY29sLTQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE0cHg7XG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xufVxuXG4vKiBQYWdlIFRlbXBsYXRlIFN0eWxpbmcgKi9cbi5tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhcixcbi5wcm9qZWN0cy1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xuICAgIHdpZHRoOiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG5cbi5jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayxcbi5wcm9qZWN0cy1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG5cbi8qIEhhbmRsZSAqL1xuLmNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLFxuLnByb2plY3RzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjM4LCAyMzgsIDIzOCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuLmNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyLFxuLnByb2plY3RzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTIzLCA3LCAyNTUpO1xufVxuXG4ucGFnZS10aXRsZSB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYW5pbWF0aW9uOiBmYWRlLWluIDAuOHMgZWFzZTtcbn1cblxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbn1cblxuLnBhZ2Utc3ViLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgYW5pbWF0aW9uOiBmYWRlLWluIDAuOHMgZWFzZTtcbn1cblxuI2Rhc2hib2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDQwcHggMzBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbjogNjBweCAwO1xufVxuXG4ucGFnZSB7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRhc2hib2FyZC1jYXJkcy1jb250YWluZXIsXG4udG9kby1jYXJkcy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnRvZG8tY2FyZHMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGdhcDogNDBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaWNvbiB7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uYWRkLXRvZG8tYnRuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gICAgYm94LXNoYWRvdzogMCAwIDI1cHggMCBibGFjaztcbn1cblxuLmFkZC10b2RvLWJ0bjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDUwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59XG4uYWRkLXRvZG8tYnRuOmhvdmVyOjpiZWZvcmUge1xuICAgIG9wYWNpdHk6IDE7XG59XG4uYWRkLXRvZG8tYnRuOjpiZWZvcmUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiYWRkIFRvZG9cIjtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGxlZnQ6IDQ1cHg7XG4gICAgdHJhbnNpdGlvbjogMC4zNXMgZWFzZTtcbn1cblxuLmZsb2F0aW5nIHtcbiAgICB6LWluZGV4OiAyO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDcwcHg7XG59XG5cbi5lZGl0LXRvZG8tZm9ybSxcbi5hZGQtdG9kby1mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgcGFkZGluZzogMjBweCA4MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbiAwLjRzIGVhc2UgZm9yd2FyZHM7XG59XG5cbi5lZGl0LXRvZG8tZm9ybSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuOCksIHJnYmEoMCwgMCwgMCwgMC40KSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG59XG5cbi5lZGl0LXRvZG8tZm9ybSB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uZWRpdC10b2RvLWZvcm0tdGl0bGUsXG4uYWRkLXRvZG8tZm9ybS10aXRsZSB7XG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmVkaXQtdG9kby1mb3JtIC5pbnAsXG4uYWRkLXRvZG8tZm9ybSAuaW5wIHtcbiAgICB3aWR0aDogNjUlO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzNywgMjM3KTtcbn1cblxuLmlucC1jb250IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5lZGl0LXRvZG8tZm9ybS1zdWJtaXQtYnRuLFxuLmFkZC10b2RvLWZvcm0tc3VibWl0LWJ0biB7XG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG59XG5cbi5lZGl0LXRvZG8tZm9ybS1zdWJtaXQtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5LCAwLCAyNTIpO1xufVxuLmVkaXQtdG9kby1mb3JtLXN1Ym1pdC1idG46aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCA0NXB4IDAgcmdiYSgxMjgsIDkzLCAyNTUsIDAuODA4KTtcbn1cbi5lZGl0LXRvZG8tZm9ybS1jbG9zZS1idG4sXG4uYWRkLXRvZG8tZm9ybS1jbG9zZS1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5MDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5lZGl0LXRvZG8tZGVzYyxcbi5hZGQtdG9kby1kZXNjIHtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4vKiBSZXNwb25zaXZlbmVzcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG5cbiAgICAubWFpbiB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgLnNpZGViYXIge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcbiAgICB9XG5cbiAgICAuc2lkZWJhci5jbG9zZWQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAuc2lkZWJhci1yMSxcbiAgICAuc2lkZWJhci1yMiB7XG4gICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5wcm9qZWN0cy1saXN0IHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAucHJvamVjdC1saW5rIHtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgIH1cblxuICAgIC5wYWdlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDQwcHggNXB4O1xuICAgIH1cblxuICAgIC50b2RvLWNhcmRzLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgfVxuICAgIC50b2RvLWNhcmQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnIgMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cbiAgICAudG9kby1jb2wtMiB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnRvZG8tY29sLTMge1xuICAgICAgICBncmlkLXJvdzogMiAvIDI7XG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgIH1cbiAgICAudG9kby1jb2wtMSB7XG4gICAgICAgIGdyaWQtcm93OiBzcGFuIDI7XG4gICAgfVxuICAgIC50b2RvLWNvbC00IHtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICBncmlkLXJvdzogc3BhbiAyO1xuICAgIH1cbiAgICAudG9kby10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogaW5pdGlhbDtcbiAgICB9XG4gICAgLnRvZG8tZGVzYyB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cblxuICAgIC50b2RvLWV4cGFuZC1idG4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5lZGl0LXRvZG8tZm9ybSxcbiAgICAuYWRkLXRvZG8tZm9ybSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xuICAgIH1cblxuICAgIC5lZGl0LXRvZG8tZm9ybS10aXRsZSxcbiAgICAuYWRkLXRvZG8tZm9ybS10aXRsZSB7XG4gICAgICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuXG4gICAgLmVkaXQtdG9kby1mb3JtIC5pbnAsXG4gICAgLmFkZC10b2RvLWZvcm0gLmlucCB7XG4gICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzcsIDIzNyk7XG4gICAgfVxuXG4gICAgLmlucC1jb250IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMjBweDtcbiAgICB9XG5cbiAgICAuZWRpdC10b2RvLWZvcm0tc3VibWl0LWJ0bixcbiAgICAuYWRkLXRvZG8tZm9ybS1zdWJtaXQtYnRuIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICAgICAgcGxhY2Utc2VsZjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuICAgIH1cblxuICAgIC5lZGl0LXRvZG8tZm9ybS1zdWJtaXQtYnRuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSwgMCwgMjUyKTtcbiAgICB9XG4gICAgLmVkaXQtdG9kby1mb3JtLXN1Ym1pdC1idG46aG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgNDVweCAwIHJnYmEoMTI4LCA5MywgMjU1LCAwLjgwOCk7XG4gICAgfVxuICAgIC5lZGl0LXRvZG8tZm9ybS1jbG9zZS1idG4sXG4gICAgLmFkZC10b2RvLWZvcm0tY2xvc2UtYnRuIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiA5MDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSTt3R0FDb0Y7SUFDcEYsMkNBQTJDO0lBQzNDLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGFBQWE7SUFDYixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBLG1CQUFtQjs7QUFFbkI7SUFDSSxnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMseUNBQXlDO0lBQ3pD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UUFDbEIsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixZQUFZO1FBQ1osb0NBQW9DO0lBQ3hDOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHFCQUFxQjtRQUNyQiw4QkFBOEI7UUFDOUIsbUJBQW1CO1FBQ25CLFNBQVM7SUFDYjs7SUFFQTs7UUFFSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksa0NBQWtDO0lBQ3RDO0lBQ0E7UUFDSSxnREFBZ0Q7SUFDcEQ7SUFDQTs7UUFFSSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLE1BQU07UUFDTixRQUFRO1FBQ1IsaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxZQUFZO1FBQ1osZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HZW9sb2dpY2E6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG46cm9vdCB7XFxuICAgIC0tdG9kby1jYXJkLXdpZHRoOiA2NDBweDtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1wcm9qZWN0LWNvbG9yLCByZ2JhKDAsIDAsIDAsIDApKSAyJSwgcmdiYSgwLCAwLCAwLCAwLjQpKSAxNTAlLFxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4xKSwgcmdiYSgwLCAwLCAwLCAwLjgpKSwgdXJsKFxcXCIuL2Fzc2V0cy9iZy53ZWJwXFxcIik7XFxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogaGFyZC1saWdodCwgbXVsdGlwbHk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3NXB4IDFmcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiR2VvbG9naWNhXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcbmltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qIEhlYWRlciBTdHlsaW5nICovXFxuXFxuI2hlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICAgIHBhZGRpbmc6IDMwcHggNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDEzMiwgMCwgMjU1KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbn1cXG5cXG4ubG9nby1jb250IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTRweDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uc2lkZWJhci1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLnNpZGViYXItYnRuID4gZGl2IHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxvZ28tdGV4dCB7XFxuICAgIGNvbG9yOiByZ2IoMjU0LCAyNTMsIDI1NSk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNsb2dvIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuLyogU2lkZWJhciBTdHlsaW5nICovXFxuXFxuLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogNDBweCA0MHB4IDAgNDBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICAgIGdhcDogMzBweDtcXG4gICAgd2lkdGg6IDM4MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCk7XFxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnNpZGViYXIuY2xvc2VkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0zODBweDtcXG59XFxuXFxuLnNpZGViYXItcjEsXFxuLnNpZGViYXItcjIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnNpZGViYXItcjIge1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0cy1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuIHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggLTVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5zaWRlYmFyLWxpbmsge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4uc2lkZWJhci1saW5rOm5vdCgucHJvamVjdC1saW5rKS5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5OSwgMjMzLCAyNTUsIDAuMyk7XFxufVxcblxcbi5zaWRlYmFyLWxpbms6bm90KC5hY3RpdmUpOm5vdCgucHJvamVjdC1saW5rKTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk5LCAyMzMsIDI1NSwgMC4xNSk7XFxufVxcblxcbi5wcm9qZWN0LWxpbmsge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbn1cXG5cXG4ucHJvamVjdC1saW5rIC5pY29uIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuLnByb2plY3QtbGluazpob3ZlciAuaWNvbiB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5wcm9qZWN0LWxpbmsgLmljb24ge1xcbiAgICBtYXJnaW46IDAgNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb2xvciB7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcik7XFxuICAgIG9yZGVyOiAtMTtcXG59XFxuXFxuLnByb2plY3QtbGluazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3QtbGluay5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxufVxcblxcbi8qIFN0eWxpbmcgdGhlIGZvcm0gZm9yIGFkZGluZyBuZXcgUHJvamVjdCAqL1xcblxcbi5hZGQtcHJvamVjdC1mb3JtIHtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIG1hcmdpbjogMTJweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmFkZC1wcm9qZWN0LXIxLFxcbi5hZGQtcHJvamVjdC1yMiB7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1pbnAge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICB3aWR0aDogMTQwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG59XFxuXFxuLnByb2plY3QtY29sb3ItaW5wIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNsaXAtcGF0aDogY2lyY2xlKDM1JSk7XFxufVxcblxcbi5hZGQtcHJvamVjdC1zdWJtaXQtYnRuLFxcbi5hZGQtcHJvamVjdC1jYW5jZWwtYnRuIHtcXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmFkZC1wcm9qZWN0LXN1Ym1pdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDksIDE2MywgOTcpO1xcbn1cXG4uYWRkLXByb2plY3QtY2FuY2VsLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDQ4LCA0OCk7XFxufVxcblxcbi8qIFN0eWxpbmcgdGhlIEhvbWUgY2FyZHMgKi9cXG5cXG4uaG9tZS1jYXJkIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpIGJyaWdodG5lc3MoMC41KTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgIGFuaW1hdGlvbjogZmFkZS1pbiAwLjVzIGVhc2UgYmFja3dhcmRzO1xcbn1cXG5cXG4uaG9tZS1jYXJkLXRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uaG9tZS1jYXJkLXZhbHVlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4uaG9tZS1jYXJkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IpO1xcbn1cXG5cXG4vKiBUb2RvIENhcmQgU3R5bGluZyAqL1xcblxcbi50b2RvLWNhcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxNXB4IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDYwLCAyNTUsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAzMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XFxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1pbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJhY2t3YXJkcztcXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cyBlYXNlLWluLCBvdmVyZmxvdyAwLjVzIGVhc2UtaW4sIGJhY2tncm91bmQtcG9zaXRpb24gMC41cyBlYXNlO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtb3V0IHtcXG4gICAgdG8ge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICB9XFxuICAgIGZyb20ge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG4udG9kby1jYXJkLnNsaWRlLW91dCxcXG4uZWRpdC10b2RvLWZvcm0uc2xpZGUtb3V0LFxcbi5hZGQtdG9kby1mb3JtLnNsaWRlLW91dCB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1vdXQ7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRvZG8tY2FyZC5leHBhbmRlZCAudG9kby10aXRsZSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxufVxcblxcbi50b2RvLWRlc2MsXFxuLnRvZG8tZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG4udG9kby1kZXNjIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgbWF4LWhlaWdodDogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzIGVhc2UsIG9wYWNpdHkgMC41cyBlYXNlO1xcbn1cXG5cXG4udG9kby1jYXJkLmV4cGFuZGVkIC50b2RvLWRlc2Mge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlOyAvKiBTZXQgYW4gYXBwcm9wcmlhdGUgdmFsdWUgZm9yIHRoZSBtYXhpbXVtIGhlaWdodCAqL1xcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNHMgZWFzZSwgb3BhY2l0eSAwLjRzIGVhc2U7XFxufVxcblxcbi50b2RvLWNoZWNrLWJ0biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XFxufVxcblxcbi50b2RvLWNoZWNrLWJ0bjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgd2lkdGg6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZ2IoMCwgMjU1LCAwKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYigwLCAyNTUsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xcbn1cXG5cXG4udG9kby1jYXJkLmRvbmUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiByZ2IoMCwgMjU1LCAwKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSBib3R0b207XFxufVxcblxcbi50b2RvLWNhcmQuZG9uZSAudG9kby1jaGVjay1idG4ge1xcbiAgICBib3JkZXItY29sb3I6IHJnYigwLCAyNTUsIDApO1xcbn1cXG5cXG4udG9kby1jYXJkLmRvbmUgLnRvZG8tY2hlY2stYnRuOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLnRvZG8tY2FyZC5leHBhbmRlZCB7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcbi50b2RvLWNhcmQuZXhwYW5kZWQgLnRvZG8tZXhwYW5kLWJ0biB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxufVxcblxcbi50b2RvLWV4cGFuZC1idG4ge1xcbiAgICB3aWR0aDogMTRweDtcXG4gICAgaGVpZ2h0OiAxNHB4O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogMi41cHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1ib3R0b206IDIuNXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHJvdGF0ZTogNDVkZWc7XFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udG9kby1jb2wtNCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTRweDtcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbn1cXG5cXG4vKiBQYWdlIFRlbXBsYXRlIFN0eWxpbmcgKi9cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhcixcXG4ucHJvamVjdHMtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXFxuICAgIHdpZHRoOiAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbn1cXG5cXG4uY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2ssXFxuLnByb2plY3RzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxufVxcblxcbi8qIEhhbmRsZSAqL1xcbi5jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYixcXG4ucHJvamVjdHMtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjM4LCAyMzgsIDIzOCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbn1cXG5cXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cXG4uY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIsXFxuLnByb2plY3RzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDEyMywgNywgMjU1KTtcXG59XFxuXFxuLnBhZ2UtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYW5pbWF0aW9uOiBmYWRlLWluIDAuOHMgZWFzZTtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG4ucGFnZS1zdWItdGl0bGUge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMyk7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGFuaW1hdGlvbjogZmFkZS1pbiAwLjhzIGVhc2U7XFxufVxcblxcbiNkYXNoYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiA0MHB4IDMwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogNjBweCAwO1xcbn1cXG5cXG4ucGFnZSB7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGFzaGJvYXJkLWNhcmRzLWNvbnRhaW5lcixcXG4udG9kby1jYXJkcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvZG8tY2FyZHMtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaWNvbiB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5hZGQtdG9kby1idG4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDQ1cHg7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMjVweCAwIGJsYWNrO1xcbn1cXG5cXG4uYWRkLXRvZG8tYnRuOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDUwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxufVxcbi5hZGQtdG9kby1idG46aG92ZXI6OmJlZm9yZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbi5hZGQtdG9kby1idG46OmJlZm9yZSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcImFkZCBUb2RvXFxcIjtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGxlZnQ6IDQ1cHg7XFxuICAgIHRyYW5zaXRpb246IDAuMzVzIGVhc2U7XFxufVxcblxcbi5mbG9hdGluZyB7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiA3MHB4O1xcbn1cXG5cXG4uZWRpdC10b2RvLWZvcm0sXFxuLmFkZC10b2RvLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDIwcHggODBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbiAwLjRzIGVhc2UgZm9yd2FyZHM7XFxufVxcblxcbi5lZGl0LXRvZG8tZm9ybSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC44KSwgcmdiYSgwLCAwLCAwLCAwLjQpKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblxcbi5lZGl0LXRvZG8tZm9ybSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmVkaXQtdG9kby1mb3JtLXRpdGxlLFxcbi5hZGQtdG9kby1mb3JtLXRpdGxlIHtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmVkaXQtdG9kby1mb3JtIC5pbnAsXFxuLmFkZC10b2RvLWZvcm0gLmlucCB7XFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzcsIDIzNyk7XFxufVxcblxcbi5pbnAtY29udCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5lZGl0LXRvZG8tZm9ybS1zdWJtaXQtYnRuLFxcbi5hZGQtdG9kby1mb3JtLXN1Ym1pdC1idG4ge1xcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XFxufVxcblxcbi5lZGl0LXRvZG8tZm9ybS1zdWJtaXQtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSwgMCwgMjUyKTtcXG59XFxuLmVkaXQtdG9kby1mb3JtLXN1Ym1pdC1idG46aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgNDVweCAwIHJnYmEoMTI4LCA5MywgMjU1LCAwLjgwOCk7XFxufVxcbi5lZGl0LXRvZG8tZm9ybS1jbG9zZS1idG4sXFxuLmFkZC10b2RvLWZvcm0tY2xvc2UtYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiA5MDtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4uZWRpdC10b2RvLWRlc2MsXFxuLmFkZC10b2RvLWRlc2Mge1xcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKiBSZXNwb25zaXZlbmVzcyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgfVxcblxcbiAgICAubWFpbiB7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB9XFxuXFxuICAgIC5zaWRlYmFyIHtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB6LWluZGV4OiAzO1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcXG4gICAgfVxcblxcbiAgICAuc2lkZWJhci5jbG9zZWQge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIH1cXG5cXG4gICAgLnNpZGViYXItcjEsXFxuICAgIC5zaWRlYmFyLXIyIHtcXG4gICAgICAgIHotaW5kZXg6IDU7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuICAgIC5wcm9qZWN0cy1saXN0IHtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtbGluayB7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgIH1cXG5cXG4gICAgLnBhZ2Uge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiA0MHB4IDVweDtcXG4gICAgfVxcblxcbiAgICAudG9kby1jYXJkcy1jb250YWluZXIge1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcXG4gICAgfVxcbiAgICAudG9kby1jYXJkIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgfVxcbiAgICAudG9kby1jb2wtMiB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgLnRvZG8tY29sLTMge1xcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAyO1xcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIH1cXG4gICAgLnRvZG8tY29sLTEge1xcbiAgICAgICAgZ3JpZC1yb3c6IHNwYW4gMjtcXG4gICAgfVxcbiAgICAudG9kby1jb2wtNCB7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICBncmlkLXJvdzogc3BhbiAyO1xcbiAgICB9XFxuICAgIC50b2RvLXRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGluaXRpYWw7XFxuICAgIH1cXG4gICAgLnRvZG8tZGVzYyB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWV4cGFuZC1idG4ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuZWRpdC10b2RvLWZvcm0sXFxuICAgIC5hZGQtdG9kby1mb3JtIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICAgIH1cXG5cXG4gICAgLmVkaXQtdG9kby1mb3JtLXRpdGxlLFxcbiAgICAuYWRkLXRvZG8tZm9ybS10aXRsZSB7XFxuICAgICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5lZGl0LXRvZG8tZm9ybSAuaW5wLFxcbiAgICAuYWRkLXRvZG8tZm9ybSAuaW5wIHtcXG4gICAgICAgIHdpZHRoOiA2NSU7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzNywgMjM3KTtcXG4gICAgfVxcblxcbiAgICAuaW5wLWNvbnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLmVkaXQtdG9kby1mb3JtLXN1Ym1pdC1idG4sXFxuICAgIC5hZGQtdG9kby1mb3JtLXN1Ym1pdC1idG4ge1xcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG4gICAgfVxcblxcbiAgICAuZWRpdC10b2RvLWZvcm0tc3VibWl0LWJ0biB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5LCAwLCAyNTIpO1xcbiAgICB9XFxuICAgIC5lZGl0LXRvZG8tZm9ybS1zdWJtaXQtYnRuOmhvdmVyIHtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA0NXB4IDAgcmdiYSgxMjgsIDkzLCAyNTUsIDAuODA4KTtcXG4gICAgfVxcbiAgICAuZWRpdC10b2RvLWZvcm0tY2xvc2UtYnRuLFxcbiAgICAuYWRkLXRvZG8tZm9ybS1jbG9zZS1idG4ge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogOTA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIG1hcmdpbjogMTBweCAyMHB4O1xcbiAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBmb250LXdlaWdodDogODAwO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICAgICAgYmFja2dyb3VuZDogcmVkO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL3RvZG9Db250cm9sbGVyXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9Ub2RvXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhbFN0b3JhZ2Uge1xuICBzdGF0aWMgc2F2ZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSk7XG4gIH1cblxuICBzdGF0aWMgbG9hZCgpIHtcbiAgICBjb25zdCBwcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UgPSBKU09OLnBhcnNlKFxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKVxuICAgICk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAoY29uc3QgcHJqIG9mIHByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSkge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJqLnRpdGxlLCBwcmouY29sb3IpO1xuICAgICAgICBmb3IgKGNvbnN0IHRvZG8gb2YgcHJqLnRvZG9zKSB7XG4gICAgICAgICAgbmV3UHJvamVjdC5hZGRUb2RvKFxuICAgICAgICAgICAgbmV3IFRvZG8oXG4gICAgICAgICAgICAgIHRvZG8udGl0bGUsXG4gICAgICAgICAgICAgIHRvZG8uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgIG5ldyBEYXRlKHRvZG8uZGF0ZSksXG4gICAgICAgICAgICAgIHRvZG8uaXNEb25lXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge31cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGNvbG9yKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnRvZG9zID0gW107XG4gICAgfVxuXG4gICAgc2V0VGl0bGUodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIHNldENvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG5cbiAgICBhZGRUb2RvKHRvZG8pIHtcbiAgICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuICAgIH1cblxuICAgIHJlbW92ZVRvZG8oaWQpIHtcbiAgICAgICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSBpZCk7XG4gICAgfVxuXG4gICAgZ2V0VG9kb3NDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb3MubGVuZ3RoO1xuICAgIH1cblxuICAgIGRlbGV0ZVRvZG8oaWQpIHtcbiAgICAgICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSBpZCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIHN0YXRpYyBpZCA9IDA7XG5cbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBpc0RvbmUgPSBmYWxzZSkge1xuICAgIHRoaXMuaWQgPSArK1RvZG8uaWQ7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMuaXNEb25lID0gaXNEb25lO1xuICB9XG5cbiAgc2V0VGl0bGUobmV3VGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG4gIH1cblxuICBzZXREZXNjcmlwdGlvbihkZXNjKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2M7XG4gIH1cblxuICBzZXREYXRlKGRhdGUpIHtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICB9XG5cbiAgbWFya0RvbmUoKSB7XG4gICAgdGhpcy5pc0RvbmUgPSB0cnVlO1xuICB9XG5cbiAgbWFya05vdERvbmUoKSB7XG4gICAgdGhpcy5pc0RvbmUgPSBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IGFkZFRvZG9Gb3JtIGZyb20gXCIuL2FkZFRvZG9Gb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRvZG9CdXR0b24oKSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ0blwiKTtcblxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRvZG8tYnRuXCIsIFwiZmxvYXRpbmdcIik7XG4gICAgYnRuLmlubmVyVGV4dCA9IFwiK1wiO1xuXG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZFRvZG8gPSBhZGRUb2RvRm9ybSgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tY2FyZHMtY29udGFpbmVyXCIpLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIGFkZFRvZG8pO1xuICAgICAgICBhZGRUb2RvLnNjcm9sbEludG9WaWV3KCk7XG4gICAgfTtcblxuICAgIHJldHVybiBidG47XG59XG4iLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi4vY2xhc3Nlcy9Ub2RvLmpzXCI7XG5pbXBvcnQgeyBhZGRUb2RvLCBlZGl0VG9kbyB9IGZyb20gXCIuLi9jb250cm9sbGVycy90b2RvQ29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHRvZG9DYXJkLCB7IHVwZGF0ZVRvZG9zIH0gZnJvbSBcIi4vdG9kb0NhcmQuanNcIjtcblxuZnVuY3Rpb24gY2xvc2VGb3JtKGZvcm0pIHtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJzbGlkZS1vdXRcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZvcm0ucmVtb3ZlKCk7XG4gICAgfSwgNDUwKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRvZG9Gb3JtKHRvZG8gPSBudWxsKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0b2RvVGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCB0b2RvVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCByMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgY29uc3QgcjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHByb2plY3RTZWxlY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgY29uc3QgcjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRvZG9EYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgdG9kb0RhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCByNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdmFyIG1vZGUgPSBcImFkZFwiO1xuXG4gICAgaWYgKHRvZG8pIHtcbiAgICAgICAgbW9kZSA9IFwiZWRpdFwiO1xuICAgICAgICB0b2RvVGl0bGVJbnB1dC52YWx1ZSA9IHRvZG8udGl0bGU7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbklucHV0LnZhbHVlID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvVGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiZW50ZXIgdGFzayB0aXRsZVwiO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9IFwiYWRkIGEgZGVzY3JpcHRpb24gZm9yIHlvdSB0YXNrIGhlcmUhXCI7XG4gICAgfVxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChtb2RlICsgXCItdG9kby1mb3JtXCIpO1xuICAgIGZvcm1UaXRsZS5jbGFzc0xpc3QuYWRkKG1vZGUgKyBcIi10b2RvLWZvcm0tdGl0bGVcIik7XG4gICAgdG9kb1RpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucFwiKTtcbiAgICB0b2RvRGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wXCIsIG1vZGUgKyBcIi10b2RvLWRlc2NcIik7XG4gICAgdG9kb0RhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wXCIpO1xuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKG1vZGUgKyBcIi10b2RvLWZvcm0tc3VibWl0LWJ0blwiKTtcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKG1vZGUgKyBcIi10b2RvLWZvcm0tY2xvc2UtYnRuXCIpO1xuICAgIHIxLmNsYXNzTGlzdC5hZGQoXCJpbnAtY29udFwiKTtcbiAgICByMi5jbGFzc0xpc3QuYWRkKFwiaW5wLWNvbnRcIik7XG4gICAgcjMuY2xhc3NMaXN0LmFkZChcImlucC1jb250XCIpO1xuICAgIHI0LmNsYXNzTGlzdC5hZGQoXCJpbnAtY29udFwiKTtcbiAgICByNS5jbGFzc0xpc3QuYWRkKFwiaW5wLWNvbnRcIik7XG5cbiAgICB0b2RvVGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgdG9kb0RhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgc3VibWl0QnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGNsb3NlQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuXG4gICAgZm9ybVRpdGxlLmlubmVyVGV4dCA9IHRvZG8gPyBcIkVkaXQgVGFza1wiIDogXCJBZGQgbmV3IFRhc2tcIjtcbiAgICB0b2RvVGl0bGVMYWJlbC5pbm5lclRleHQgPSBcIlRpdGxlXCI7XG4gICAgdG9kb0Rlc2NyaXB0aW9uTGFiZWwuaW5uZXJUZXh0ID0gXCJEZXRhaWxzXCI7XG4gICAgcHJvamVjdFNlbGVjdExhYmVsLmlubmVyVGV4dCA9IFwiUHJvamVjdFwiO1xuICAgIHRvZG9EYXRlTGFiZWwuaW5uZXJUZXh0ID0gXCJEYXRlXCI7XG4gICAgY2xvc2VCdG4uaW5uZXJUZXh0ID0gXCJ4XCI7XG4gICAgc3VibWl0QnRuLmlubmVyVGV4dCA9IHRvZG8gPyBcIlNhdmVcIiA6IFwiQWRkXCI7XG5cbiAgICBpZiAoIXRvZG8pIHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgbW9udGggPSB0b2RheS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgbGV0IGRheSA9IHRvZGF5LmdldERhdGUoKTtcbiAgICAgICAgaWYgKG1vbnRoIDwgMTApIG1vbnRoID0gXCIwXCIgKyBcIlwiICsgbW9udGg7XG4gICAgICAgIGlmIChkYXkgPCAxMCkgZGF5ID0gXCIwXCIgKyBkYXk7XG4gICAgICAgIHRvZG9EYXRlSW5wdXQudmFsdWUgPSBgJHt0b2RheS5nZXRGdWxsWWVhcigpfS0ke21vbnRofS0ke2RheX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG9EYXRlSW5wdXQudmFsdWUgPSB0b2RvLmRhdGUudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG4gICAgfVxuXG4gICAgY2xvc2VCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRvZG8pIGZvcm0ucHJldmlvdXNFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgICAgIGNsb3NlRm9ybShmb3JtKTtcbiAgICB9O1xuICAgIHN1Ym1pdEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRvZG9UaXRsZUlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgY29uc3QgZGVzYyA9IHRvZG9EZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodG9kb0RhdGVJbnB1dC52YWx1ZSk7XG5cbiAgICAgICAgaWYgKHRvZG8pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naWMgZm9yIGVkaXRpbmcgdGFza1wiKTtcbiAgICAgICAgICAgIGlmICh0aXRsZSAmJiBkYXRlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSB0b2RvLmlkO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gdG9kby5wcm9qZWN0IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZVwiKS5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlZGl0ZWRUb2RvID0gZWRpdFRvZG8odGl0bGUsIGRlc2MsIGRhdGUsIGlkLCBwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICAgICAgZm9ybS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGZvcm0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlYmVnaW5cIiwgdG9kb0NhcmQoZWRpdGVkVG9kbywgcHJvamVjdE5hbWUpKTtcbiAgICAgICAgICAgICAgICBjbG9zZUZvcm0oZm9ybSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGl0bGUgJiYgZGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzYywgZGF0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VcIikuZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgICAgICAgICAgYWRkVG9kbyh0b2RvLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VcIikuZ2V0QXR0cmlidXRlKFwiaWRcIikpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jYXJkcy1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQodG9kb0NhcmQodG9kbywgcHJvamVjdE5hbWUpKTtcbiAgICAgICAgICAgICAgICBjbG9zZUZvcm0oZm9ybSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcjEuYXBwZW5kQ2hpbGQodG9kb1RpdGxlTGFiZWwpO1xuICAgIHIxLmFwcGVuZENoaWxkKHRvZG9UaXRsZUlucHV0KTtcblxuICAgIHIyLmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbkxhYmVsKTtcbiAgICByMi5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICByMy5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0TGFiZWwpO1xuICAgIHIzLmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3QpO1xuXG4gICAgcjQuYXBwZW5kQ2hpbGQodG9kb0RhdGVMYWJlbCk7XG4gICAgcjQuYXBwZW5kQ2hpbGQodG9kb0RhdGVJbnB1dCk7XG5cbiAgICByNS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocjEpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocjIpO1xuICAgIC8vIGZvcm0uYXBwZW5kQ2hpbGQocjMpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocjQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocjUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcblxuICAgIHJldHVybiBmb3JtO1xufVxuIiwiaW1wb3J0IExvZ28gZnJvbSBcIi4uL2Fzc2V0cy9sb2dvLnBuZ1wiO1xuXG5mdW5jdGlvbiB0b2dnbGVTaWRlYmFyKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImNsb3NlZFwiKTtcbn1cblxuZnVuY3Rpb24gc2lkZWJhckJ1dHRvbigpIHtcbiAgICBjb25zdCBzaWRlYmFyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzaWRlYmFyQnRuLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWJ0blwiKTtcblxuICAgIHNpZGViYXJCdG4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG4gICAgc2lkZWJhckJ0bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgICBzaWRlYmFyQnRuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuXG4gICAgc2lkZWJhckJ0bi50eXBlID0gXCJidXR0b25cIjtcblxuICAgIHNpZGViYXJCdG4ub25jbGljayA9ICgpID0+IHRvZ2dsZVNpZGViYXIoKTtcbiAgICByZXR1cm4gc2lkZWJhckJ0bjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbG9nb0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGxvZ29UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3Qgc2lkZWJhckJ0biA9IHNpZGViYXJCdXR0b24oKTtcblxuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlclwiKTtcbiAgICBsb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2dvLWNvbnRcIik7XG4gICAgbG9nb0ltZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ29cIik7XG4gICAgbG9nb1RleHQuY2xhc3NMaXN0LmFkZChcImxvZ28tdGV4dFwiKTtcblxuICAgIGxvZ29JbWcuc3JjID0gTG9nbztcbiAgICBsb2dvVGV4dC50ZXh0Q29udGVudCA9IFwiR2FsYWN0aWMgVG9kb3NcIjtcblxuICAgIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XG4gICAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvVGV4dCk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2lkZWJhckJ0bik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZXhwb3J0IHsgdG9nZ2xlU2lkZWJhciB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZUNhcmQodGl0bGUsIHZhbHVlLCBjb2xvcikge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGNhcmRWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiaG9tZS1jYXJkXCIpO1xuICAgIGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1jYXJkLXRpdGxlXCIpO1xuICAgIGNhcmRWYWx1ZS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1jYXJkLXZhbHVlXCIpO1xuXG4gICAgY2FyZFRpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xuICAgIGNhcmRWYWx1ZS5pbm5lclRleHQgPSAwO1xuXG4gICAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY29sb3JcIiwgY29sb3IgKyBcIjJBXCIpO1xuICAgIGNhcmQuc3R5bGUuYm9yZGVyQ29sb3IgPSBjb2xvcjtcbiAgICBjYXJkVmFsdWUuc3R5bGUuY29sb3IgPSBjb2xvcjtcblxuICAgIGNvbnN0IGluY3JlbWVudFZhbHVlID0gKCkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPiAwKSBjYXJkVmFsdWUudGV4dENvbnRlbnQgPSArY2FyZFZhbHVlLnRleHRDb250ZW50ICsgMTtcbiAgICAgICAgaWYgKHBhcnNlSW50KGNhcmRWYWx1ZS50ZXh0Q29udGVudCkgPj0gdmFsdWUpIGNsZWFySW50ZXJ2YWwodmFsdWVJbnRlcnZhbCk7XG4gICAgfTtcbiAgICBsZXQgdmFsdWVJbnRlcnZhbCA9IHNldEludGVydmFsKGluY3JlbWVudFZhbHVlLCAzMCk7XG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVmFsdWUpO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG59XG4iLCJpbXBvcnQgeyBhZGRQcm9qZWN0LCBlZGl0UHJvamVjdCwgZ2V0UHJvamVjdEJ5TmFtZSwgZ2V0UHJvamVjdHMsIHJlbW92ZVByb2plY3QgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvdG9kb0NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuLi9jbGFzc2VzL1Byb2plY3QuanNcIjtcbmltcG9ydCB7IGRhc2hib2FyZCwgcmVuZGVyUGFnZSB9IGZyb20gXCIuLi9jb250cm9sbGVycy9VaS5qc1wiO1xuaW1wb3J0IGRlbGV0ZUJ0bkltZyBmcm9tIFwiLi4vYXNzZXRzL2RlbGV0ZS1pY29uLnBuZ1wiO1xuaW1wb3J0IGVkaXRCdG5JbWcgZnJvbSBcIi4uL2Fzc2V0cy9lZGl0LWljb24ucG5nXCI7XG5pbXBvcnQgeyB0b2dnbGVTaWRlYmFyIH0gZnJvbSBcIi4vaGVhZGVyLmpzXCI7XG5cbmZ1bmN0aW9uIGlzTW9iaWxlKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSkgfHxcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvd2ViT1MvaSkgfHxcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lL2kpIHx8XG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQYWQvaSkgfHxcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBvZC9pKSB8fFxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9CbGFja0JlcnJ5L2kpIHx8XG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1dpbmRvd3MgUGhvbmUvaSlcbiAgICApO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0Rm9ybShwcm9qZWN0ID0gbnVsbCkge1xuICAgIGNvbnN0IGNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBjb25zdCByb3dPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgcHJvamVjdENvbG9ySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3Qgcm93VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3Qgb2xkTmFtZSA9IHByb2plY3QgPyBwcm9qZWN0LnRpdGxlIDogbnVsbDtcbiAgICBjb25zdCByZW1vdmVGb3JtID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1mb3JtXCIpPy5yZW1vdmUoKTtcblxuICAgIHN1Ym1pdEJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICBjYW5jZWxCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG5cbiAgICBwcm9qZWN0TmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBwcm9qZWN0Q29sb3JJbnB1dC50eXBlID0gXCJjb2xvclwiO1xuXG4gICAgaWYgKHByb2plY3QpIHtcbiAgICAgICAgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9IHByb2plY3QudGl0bGU7XG4gICAgICAgIHByb2plY3RDb2xvcklucHV0LnZhbHVlID0gcHJvamVjdC5jb2xvcjtcbiAgICAgICAgc3VibWl0QnRuLmlubmVyVGV4dCA9IFwiU2F2ZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3ROYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcInByb2plY3QgbmFtZVwiO1xuICAgICAgICBzdWJtaXRCdG4uaW5uZXJUZXh0ID0gXCJBZGRcIjtcbiAgICB9XG5cbiAgICBjYW5jZWxCdG4uaW5uZXJUZXh0ID0gXCJDYW5jZWxcIjtcblxuICAgIGNvbnQuY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWZvcm1cIik7XG4gICAgcm93T25lLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1yMVwiKTtcbiAgICBwcm9qZWN0TmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnBcIiwgXCJwcm9qZWN0LW5hbWUtaW5wXCIpO1xuICAgIHByb2plY3RDb2xvcklucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnBcIiwgXCJwcm9qZWN0LWNvbG9yLWlucFwiKTtcbiAgICByb3dUd28uY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LXIyXCIpO1xuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3Qtc3VibWl0LWJ0blwiKTtcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWNhbmNlbC1idG5cIik7XG5cbiAgICBzdWJtaXRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZUlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdENvbG9yID0gcHJvamVjdENvbG9ySW5wdXQudmFsdWU7XG4gICAgICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICAgICAgICBpZiAoIWdldFByb2plY3RzKCkuaW5jbHVkZXMobmV3UHJvamVjdE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgZWRpdFByb2plY3Qob2xkTmFtZSwgbmV3UHJvamVjdE5hbWUsIG5ld1Byb2plY3RDb2xvcik7XG4gICAgICAgICAgICAgICAgY29udC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgcHJvamVjdExpbmsobmV3IFByb2plY3QobmV3UHJvamVjdE5hbWUsIG5ld1Byb2plY3RDb2xvcikpKTtcbiAgICAgICAgICAgICAgICByZW1vdmVGb3JtKCk7XG4gICAgICAgICAgICAgICAgcmVuZGVyUGFnZShnZXRQcm9qZWN0QnlOYW1lKG5ld1Byb2plY3ROYW1lKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3RzKCkuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlKTtcbiAgICAgICAgICAgIGlmIChuZXdQcm9qZWN0TmFtZSAhPT0gXCJcIiAmJiAhcHJvamVjdHMuaW5jbHVkZXMobmV3UHJvamVjdE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdChuZXcgUHJvamVjdChuZXdQcm9qZWN0TmFtZSwgbmV3UHJvamVjdENvbG9yKSk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRm9ybSgpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVByb2plY3RzTGlzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNhbmNlbEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBjb250LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICByZW1vdmVGb3JtKCk7XG4gICAgfTtcblxuICAgIHJvd09uZS5hcHBlbmRDaGlsZChwcm9qZWN0Q29sb3JJbnB1dCk7XG4gICAgcm93T25lLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xuICAgIHJvd1R3by5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICAgIHJvd1R3by5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gICAgY29udC5hcHBlbmRDaGlsZChyb3dPbmUpO1xuICAgIGNvbnQuYXBwZW5kQ2hpbGQocm93VHdvKTtcblxuICAgIHJldHVybiBjb250O1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0QnV0dG9uKCkge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnRuLnRleHRDb250ZW50ID0gXCIrIEFkZCBQcm9qZWN0XCI7XG5cbiAgICBidG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtcHJvamVjdC1idG5cIik7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWxpbmtcIik7XG5cbiAgICBidG4udHlwZSA9IFwiYnV0dG9uXCI7XG5cbiAgICBidG4ub25jbGljayA9IChlKSA9PiB7XG4gICAgICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1mb3JtXCIpKSBlLmN1cnJlbnRUYXJnZXQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlYmVnaW5cIiwgYWRkUHJvamVjdEZvcm0oKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBidG47XG59XG5cbmZ1bmN0aW9uIHNpZGViYXJMaW5rKHR4dCkge1xuICAgIGNvbnN0IGNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGxpbmtUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGNvbnQuY2xhc3NMaXN0LmFkZChcInNpZGViYXItbGlua1wiKTtcbiAgICBsaW5rVHh0LmlubmVyVGV4dCA9IHR4dDtcblxuICAgIGNvbnQub25jbGljayA9IChlKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1saW5rLmFjdGl2ZVwiKT8uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpbmsuYWN0aXZlXCIpPy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgaWYgKHR4dCAhPT0gXCJEYXNoYm9hcmRcIikgcmVuZGVyUGFnZSh0eHQpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgICAgICAgICBpZiAoY29udGVudCkgQXJyYXkuZnJvbShjb250ZW50LmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQucmVtb3ZlKCkpO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkYXNoYm9hcmQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTW9iaWxlKCkpIHRvZ2dsZVNpZGViYXIoKTtcbiAgICB9O1xuXG4gICAgY29udC5hcHBlbmRDaGlsZChsaW5rVHh0KTtcbiAgICByZXR1cm4gY29udDtcbn1cblxuZnVuY3Rpb24gcHJvamVjdExpbmsocHJvamVjdCkge1xuICAgIGNvbnN0IGNvbnQgPSBzaWRlYmFyTGluayhwcm9qZWN0LnRpdGxlKTtcbiAgICBjb25zdCBwcm9qZWN0Q29sb3JDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGVkaXRCdG5JY29uID0gbmV3IEltYWdlKCk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBkZWxldGVCdG5JY29uID0gbmV3IEltYWdlKCk7XG5cbiAgICBjb250LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpbmtcIik7XG4gICAgcHJvamVjdENvbG9yQ2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbG9yXCIpO1xuXG4gICAgY29udC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0LnRpdGxlKTtcblxuICAgIGNvbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWNvbG9yXCIsIHByb2plY3QuY29sb3IpO1xuICAgIGNvbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWhvdmVyLWNvbG9yXCIsIHByb2plY3QuY29sb3IgKyBcIjVBXCIpO1xuXG4gICAgZWRpdEJ0bkljb24uY2xhc3NMaXN0LmFkZChcImljb25cIik7XG4gICAgZGVsZXRlQnRuSWNvbi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcblxuICAgIGVkaXRCdG5JY29uLnNyYyA9IGVkaXRCdG5JbWc7XG4gICAgZGVsZXRlQnRuSWNvbi5zcmMgPSBkZWxldGVCdG5JbWc7XG5cbiAgICBjb250Lm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKT8uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoXCItLXByb2plY3QtY29sb3JcIiwgcHJvamVjdC5jb2xvciArIFwiNTBcIik7XG4gICAgICAgIGlmIChpc01vYmlsZSgpKSB0b2dnbGVTaWRlYmFyKCk7XG4gICAgICAgIHJlbmRlclBhZ2UocHJvamVjdCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKS5zY3JvbGxUb3AgPSAwO1xuICAgIH07XG5cbiAgICBlZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRCdG5JY29uKTtcbiAgICBkZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuSWNvbik7XG5cbiAgICBlZGl0QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgYWRkUHJvamVjdEZvcm0ocHJvamVjdCkpO1xuICAgICAgICBjb250LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9O1xuXG4gICAgZGVsZXRlQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHJlbW92ZVByb2plY3QocHJvamVjdC50aXRsZSk7XG4gICAgICAgIHVwZGF0ZVByb2plY3RzTGlzdCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIGQuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgIGNvbnQuYXBwZW5kQ2hpbGQocHJvamVjdENvbG9yQ2lyY2xlKTtcbiAgICBjb250LmFwcGVuZENoaWxkKGQpO1xuXG4gICAgcmV0dXJuIGNvbnQ7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzTGlzdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWxpc3RcIik7XG4gICAgQXJyYXkuZnJvbShwcm9qZWN0c0xpc3QuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5yZW1vdmUoKSk7XG4gICAgY29uc3QgcHJvamVjdHMgPSBnZXRQcm9qZWN0cygpO1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0TGluayhwcm9qZWN0KSkpO1xuICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaWRlYmFyKCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHJvdzFUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBkYXNoYm9hcmRMaW5rID0gc2lkZWJhckxpbmsoXCJEYXNoYm9hcmRcIik7XG4gICAgY29uc3QgdG9kYXlMaW5rID0gc2lkZWJhckxpbmsoXCJUb2RheVwiKTtcbiAgICBjb25zdCB3ZWVrTGluayA9IHNpZGViYXJMaW5rKFwiV2Vla1wiKTtcbiAgICBjb25zdCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCByb3cyVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gYWRkUHJvamVjdEJ1dHRvbigpO1xuXG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcbiAgICByb3cxLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLXIxXCIpO1xuICAgIHJvdzFUeHQuY2xhc3NMaXN0LmFkZChcInNpZGViYXItcjEtdGl0bGVcIiwgXCJ0aXRsZVwiKTtcbiAgICByb3cyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLXIyXCIpO1xuICAgIHJvdzJUeHQuY2xhc3NMaXN0LmFkZChcInNpZGViYXItcjItdGl0bGVcIiwgXCJ0aXRsZVwiKTtcbiAgICBwcm9qZWN0c0xpc3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLWxpc3RcIik7XG5cbiAgICByb3cxVHh0LmlubmVyVGV4dCA9IFwiSG9tZVwiO1xuICAgIHJvdzJUeHQuaW5uZXJUZXh0ID0gXCJQcm9qZWN0c1wiO1xuXG4gICAgZGFzaGJvYXJkTGluay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXG4gICAgcm93MS5hcHBlbmRDaGlsZChyb3cxVHh0KTtcbiAgICByb3cxLmFwcGVuZENoaWxkKGRhc2hib2FyZExpbmspO1xuICAgIHJvdzEuYXBwZW5kQ2hpbGQodG9kYXlMaW5rKTtcbiAgICByb3cxLmFwcGVuZENoaWxkKHdlZWtMaW5rKTtcbiAgICByb3cyLmFwcGVuZENoaWxkKHJvdzJUeHQpO1xuICAgIGNvbnN0IHByb2plY3RzID0gZ2V0UHJvamVjdHMoKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdExpbmsocHJvamVjdCkpKTtcbiAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XG4gICAgcm93Mi5hcHBlbmRDaGlsZChwcm9qZWN0c0xpc3QpO1xuXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChyb3cxKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHJvdzIpO1xuXG4gICAgcmV0dXJuIHNpZGViYXI7XG59XG5cbmV4cG9ydCB7IGFkZFByb2plY3RGb3JtIH07XG4iLCJpbXBvcnQgZWRpdEljb24gZnJvbSBcIi4uL2Fzc2V0cy9lZGl0LWljb24ucG5nXCI7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi4vYXNzZXRzL3JlbW92ZS1pY29uLnBuZ1wiO1xuaW1wb3J0IHtcbiAgICBEZWNDb21wbGV0ZWRUb2RvcyxcbiAgICBJbmNDb21wbGV0ZWRUb2RvcyxcbiAgICBhZGRUb2RvLFxuICAgIGRlbGV0ZVRvZG8sXG4gICAgZ2V0VG9kb3NCeVByb2plY3ROYW1lLFxuICAgIG1hcmtEb25lLFxuICAgIHVuTWFya0RvbmUsXG59IGZyb20gXCIuLi9jb250cm9sbGVycy90b2RvQ29udHJvbGxlclwiO1xuaW1wb3J0IGFkZFRvZG9Gb3JtIGZyb20gXCIuL2FkZFRvZG9Gb3JtXCI7XG5cbmZ1bmN0aW9uIHVwZGF0ZVRvZG9zKCkge1xuICAgIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWNhcmRzLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZVwiKS5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcblxuICAgIFsuLi50b2Rvc0NvbnRhaW5lci5jaGlsZHJlbl0uZm9yRWFjaCgoYykgPT4gYy5yZW1vdmUoKSk7XG5cbiAgICBjb25zdCB0b2RvcyA9IGdldFRvZG9zQnlQcm9qZWN0TmFtZShwcm9qZWN0TmFtZSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0b2RvID0gdG9kb3NbaV07XG4gICAgICAgIGNvbnN0IG5ld1RvZG9DYXJkID0gdG9kb0NhcmQodG9kbywgcHJvamVjdE5hbWUpO1xuICAgICAgICBuZXdUb2RvQ2FyZC5zdHlsZS5hbmltYXRpb25EZWxheSA9IGAwLiR7aSArIDN9c2A7XG4gICAgICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvZG9DYXJkKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9DYXJkKHRvZG8sIHByb2plY3RUaXRsZSkge1xuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBpc0RvbmUgfSA9IHRvZG87XG5cbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjaGVja2JveEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHRvZG9Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgZXhwYW5kQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBlZGl0QnRuSW1nID0gbmV3IEltYWdlKCk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBkZWxldGVCdG5JbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGNvbnN0IENvbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IENvbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IENvbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IENvbDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY2hlY2tib3hCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgZXhwYW5kQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGVkaXRCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgZGVsZXRlQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuXG4gICAgZWRpdEJ0bkltZy5zcmMgPSBlZGl0SWNvbjtcbiAgICBkZWxldGVCdG5JbWcuc3JjID0gZGVsZXRlSWNvbjtcblxuICAgIGVkaXRCdG5JbWcuY2xhc3NMaXN0LmFkZChcImljb25cIik7XG4gICAgZGVsZXRlQnRuSW1nLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuXG4gICAgZWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0QnRuSW1nKTtcbiAgICBkZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuSW1nKTtcblxuICAgIGNhcmQuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCB0b2RvLmlkKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNhcmRcIik7XG4gICAgQ29sMS5jbGFzc0xpc3QuYWRkKFwidG9kby1jb2wtMVwiKTtcbiAgICBDb2wyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNvbC0yXCIpO1xuICAgIENvbDMuY2xhc3NMaXN0LmFkZChcInRvZG8tY29sLTNcIik7XG4gICAgQ29sNC5jbGFzc0xpc3QuYWRkKFwidG9kby1jb2wtNFwiKTtcbiAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIik7XG4gICAgdG9kb0Rlc2MuY2xhc3NMaXN0LmFkZChcInRvZG8tZGVzY1wiKTtcbiAgICB0b2RvRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kYXRlXCIpO1xuICAgIGNoZWNrYm94QnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNoZWNrLWJ0blwiKTtcbiAgICBleHBhbmRCdG4uY2xhc3NMaXN0LmFkZChcInRvZG8tZXhwYW5kLWJ0blwiKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWVkaXQtYnRuXCIpO1xuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwidG9kby1kZWxldGUtYnRuXCIpO1xuXG4gICAgdG9kb1RpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xuICAgIHRvZG9EZXNjLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uO1xuICAgIHRvZG9EYXRlLmlubmVyVGV4dCA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIik7XG4gICAgdG9kb1Byb2plY3QuaW5uZXJUZXh0ID0gcHJvamVjdFRpdGxlO1xuXG4gICAgaWYgKGlzRG9uZSkgY2FyZC5jbGFzc0xpc3QuYWRkKFwiZG9uZVwiKTtcblxuICAgIGNoZWNrYm94QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LnRvZ2dsZShcImRvbmVcIik7XG4gICAgICAgIGlmIChjYXJkLmNsYXNzTGlzdC5jb250YWlucyhcImRvbmVcIikpIHtcbiAgICAgICAgICAgIG1hcmtEb25lKHByb2plY3RUaXRsZSwgdG9kby5pZCk7XG4gICAgICAgICAgICBJbmNDb21wbGV0ZWRUb2RvcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdW5NYXJrRG9uZShwcm9qZWN0VGl0bGUsIHRvZG8uaWQpO1xuICAgICAgICAgICAgRGVjQ29tcGxldGVkVG9kb3MoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZXhwYW5kQnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbiAgICAgICAgaWYgKGNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXhwYW5kZWRcIikpIHtcbiAgICAgICAgICAgIHRvZG9EZXNjLnN0eWxlLm1heEhlaWdodCA9IHRvZG9EZXNjLnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICAgICAgICAgIHRvZG9EZXNjLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9kb0Rlc2Muc3R5bGUubWF4SGVpZ2h0ID0gXCIwXCI7XG4gICAgICAgICAgICB0b2RvRGVzYy5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBlZGl0QnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvQ2FyZCA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHRvZG9DYXJkLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIGFkZFRvZG9Gb3JtKHRvZG8pKTtcbiAgICAgICAgdG9kb0NhcmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAvLyB0b2RvQ2FyZC5yZW1vdmUoKTtcbiAgICB9O1xuXG4gICAgZGVsZXRlQnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBkZWxldGVUb2RvKHByb2plY3RUaXRsZSwgdG9kby5pZCk7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjYXJkLnN0eWxlLmFuaW1hdGlvbkRlbGF5ID0gXCIwc1wiO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJzbGlkZS1vdXRcIik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY2FyZC5yZW1vdmUoKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9O1xuXG4gICAgQ29sMS5hcHBlbmRDaGlsZChjaGVja2JveEJ0bik7XG4gICAgQ29sMi5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgIENvbDIuYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xuICAgIENvbDIuYXBwZW5kQ2hpbGQodG9kb0Rlc2MpO1xuICAgIENvbDMuYXBwZW5kQ2hpbGQodG9kb1Byb2plY3QpO1xuICAgIENvbDQuYXBwZW5kQ2hpbGQoZXhwYW5kQnRuKTtcbiAgICBDb2w0LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIENvbDQuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoQ29sMSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChDb2wyKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKENvbDMpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoQ29sNCk7XG5cbiAgICByZXR1cm4gY2FyZDtcbn1cblxuZXhwb3J0IHsgdXBkYXRlVG9kb3MgfTtcbiIsImltcG9ydCBoZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyLmpzXCI7XG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaWRlYmFyLmpzXCI7XG5pbXBvcnQgaG9tZUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZUNhcmQuanNcIjtcbmltcG9ydCB7XG4gIGdldFRvZG9zQ291bnQsXG4gIGdldENvbXBsZXRlZFRvZG9zQ291bnQsXG4gIGdldFByb2plY3RzQ291bnQsXG4gIGdldFRvZGF5c1RvZG9zLFxuICBnZXRXZWVrVG9kb3MsXG4gIGRlbGV0ZWRUb2Rvcyxcbn0gZnJvbSBcIi4vdG9kb0NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCB0b2RvQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy90b2RvQ2FyZC5qc1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uL2NsYXNzZXMvUHJvamVjdC5qc1wiO1xuaW1wb3J0IGFkZFRvZG9CdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYWRkVG9kb0J1dHRvbi5qc1wiO1xuaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tIFwiLi4vY2xhc3Nlcy9Mb2NhbFN0b3JhZ2UuanNcIjtcblxuZnVuY3Rpb24gZGFzaGJvYXJkKCkge1xuICBjb25zdCBjb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBwYWdlU3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdG9kb3NDcmVhdGVkQ2FyZCA9IGhvbWVDYXJkKFxuICAgIFwiVG9kb3MgQ3JlYXRlZFwiLFxuICAgIGdldFRvZG9zQ291bnQoKSxcbiAgICBcIiMxMDIwRkZcIlxuICApO1xuICBjb25zdCB0b2Rvc0NvbXBsZXRlZENhcmQgPSBob21lQ2FyZChcbiAgICBcIlRvZG9zIENvbXBsZXRlZFwiLFxuICAgIGdldENvbXBsZXRlZFRvZG9zQ291bnQoKSxcbiAgICBcIiMxMEZGMTBcIlxuICApO1xuICBjb25zdCBwcm9qZWN0c0NyZWF0ZWRDYXJkID0gaG9tZUNhcmQoXG4gICAgXCJQcm9qZWN0cyBDcmVhdGVkXCIsXG4gICAgZ2V0UHJvamVjdHNDb3VudCgpLFxuICAgIFwiI0ZGRkZBQVwiXG4gICk7XG4gIGNvbnN0IHRvZG9zRGVsZXRlZENhcmQgPSBob21lQ2FyZChcIlRvZG9zIERlbGV0ZWRcIiwgZGVsZXRlZFRvZG9zLCBcIiNFRTA1NDJcIik7XG5cbiAgcGFnZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwYWdlLXRpdGxlXCIpO1xuICBwYWdlU3ViVGl0bGUuY2xhc3NMaXN0LmFkZChcInBhZ2Utc3ViLXRpdGxlXCIpO1xuICBjYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGFzaGJvYXJkLWNhcmRzLWNvbnRhaW5lclwiKTtcblxuICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSBcIkRhc2hib2FyZFwiO1xuICBwYWdlU3ViVGl0bGUudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgUHJvZHVjdGl2ZSBIdW1hbiAhXCI7XG5cbiAgdG9kb3NDcmVhdGVkQ2FyZC5zdHlsZS5hbmltYXRpb25EZWxheSA9IFwiMC4xc1wiO1xuICB0b2Rvc0NvbXBsZXRlZENhcmQuc3R5bGUuYW5pbWF0aW9uRGVsYXkgPSBcIjAuMnNcIjtcbiAgcHJvamVjdHNDcmVhdGVkQ2FyZC5zdHlsZS5hbmltYXRpb25EZWxheSA9IFwiMC4zc1wiO1xuICB0b2Rvc0RlbGV0ZWRDYXJkLnN0eWxlLmFuaW1hdGlvbkRlbGF5ID0gXCIwLjRzXCI7XG5cbiAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb3NDcmVhdGVkQ2FyZCk7XG4gIGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9zQ29tcGxldGVkQ2FyZCk7XG4gIGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzQ3JlYXRlZENhcmQpO1xuICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2Rvc0RlbGV0ZWRDYXJkKTtcblxuICBjb250LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGFzaGJvYXJkXCIpO1xuXG4gIGNvbnQuYXBwZW5kQ2hpbGQocGFnZVRpdGxlKTtcbiAgY29udC5hcHBlbmRDaGlsZChwYWdlU3ViVGl0bGUpO1xuICBjb250LmFwcGVuZENoaWxkKGNhcmRzQ29udGFpbmVyKTtcblxuICByZXR1cm4gY29udDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUGFnZShwcm9qZWN0KSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gIGlmIChjb250ZW50KSBBcnJheS5mcm9tKGNvbnRlbnQuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5yZW1vdmUoKSk7XG5cbiAgdmFyIHsgdGl0bGUsIGNvbG9yLCB0b2RvcyB9ID0gcHJvamVjdDtcblxuICBjb25zdCBjb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBwYWdlU3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb250LmNsYXNzTGlzdC5hZGQoXCJwYWdlXCIpO1xuICBwYWdlVGl0bGUuY2xhc3NMaXN0LmFkZChcInBhZ2UtdGl0bGVcIik7XG4gIHBhZ2VTdWJUaXRsZS5jbGFzc0xpc3QuYWRkKFwicGFnZS1zdWItdGl0bGVcIik7XG4gIGNhcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNhcmRzLWNvbnRhaW5lclwiKTtcblxuICBpZiAocHJvamVjdCBpbnN0YW5jZW9mIFByb2plY3QpIHtcbiAgICB0aXRsZSA9IHByb2plY3QudGl0bGU7XG4gICAgY29sb3IgPSBwcm9qZWN0LmNvbG9yO1xuICAgIHRvZG9zID0gcHJvamVjdC50b2RvcztcbiAgICBjb250LmFwcGVuZENoaWxkKGFkZFRvZG9CdXR0b24oKSk7XG4gIH0gZWxzZSBpZiAocHJvamVjdCA9PT0gXCJUb2RheVwiKSB7XG4gICAgdGl0bGUgPSBcIlRvZGF5XCI7XG4gICAgY29sb3IgPSBcInJnYmEoMCwwLDAsLjcpXCI7XG4gICAgdG9kb3MgPSBnZXRUb2RheXNUb2RvcygpO1xuICB9IGVsc2UgaWYgKHByb2plY3QgPT09IFwiV2Vla1wiKSB7XG4gICAgdGl0bGUgPSBcIldlZWtcIjtcbiAgICBjb2xvciA9IFwicmdiYSgwLDAsMCwuNylcIjtcbiAgICB0b2RvcyA9IGdldFdlZWtUb2RvcygpO1xuICB9XG5cbiAgaWYgKHRvZG9zKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdG9kbyA9IHRvZG9zW2ldO1xuICAgICAgY29uc3QgbmV3VG9kb0NhcmQgPSB0b2RvQ2FyZChcbiAgICAgICAgdG9kbyxcbiAgICAgICAgcHJvamVjdCA9PT0gXCJUb2RheVwiIHx8IHByb2plY3QgPT09IFwiV2Vla1wiID8gdG9kby5wcm9qZWN0IDogcHJvamVjdC50aXRsZVxuICAgICAgKTtcbiAgICAgIG5ld1RvZG9DYXJkLnN0eWxlLmFuaW1hdGlvbkRlbGF5ID0gYDAuJHtpICsgM31zYDtcbiAgICAgIGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvZG9DYXJkKTtcbiAgICB9XG4gIH1cblxuICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgcGFnZVN1YlRpdGxlLnRleHRDb250ZW50ID0gXCJObyBUb2RvcyBGb3VuZCBpbiB0aGlzIHByb2plY3RcIjtcblxuICBjb250LnNldEF0dHJpYnV0ZShcImlkXCIsIHRpdGxlKTtcblxuICBjb250LmFwcGVuZENoaWxkKHBhZ2VUaXRsZSk7XG4gIGlmICghdG9kb3MgfHwgIXRvZG9zLmxlbmd0aCkgY29udC5hcHBlbmRDaGlsZChwYWdlU3ViVGl0bGUpO1xuICBjb250LmFwcGVuZENoaWxkKGNhcmRzQ29udGFpbmVyKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xuICBMb2NhbFN0b3JhZ2UubG9hZCgpO1xuICBjb25zdCBCT0RZID0gZG9jdW1lbnQuYm9keTtcbiAgY29uc3QgSGVhZGVyID0gaGVhZGVyKCk7XG4gIGNvbnN0IFNpZGViYXIgPSBzaWRlYmFyKCk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcblxuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGRhc2hib2FyZCgpKTtcblxuICBtYWluLmFwcGVuZENoaWxkKFNpZGViYXIpO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gIEJPRFkuYXBwZW5kKEhlYWRlcik7XG4gIEJPRFkuYXBwZW5kQ2hpbGQobWFpbik7XG59XG5cbmV4cG9ydCB7IHJlbmRlclBhZ2UsIGRhc2hib2FyZCB9O1xuIiwiaW1wb3J0IHsgaXNTYW1lV2VlaywgaXNTYW1lRGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgTG9jYWxTdG9yYWdlIGZyb20gXCIuLi9jbGFzc2VzL0xvY2FsU3RvcmFnZVwiO1xuXG5sZXQgcHJvamVjdHMgPSBbXTtcbmxldCBjb21wbGV0ZWRUb2RvcyA9IDA7XG5sZXQgZGVsZXRlZFRvZG9zID0gMDtcblxuY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIExvY2FsU3RvcmFnZS5zYXZlKCk7XG59O1xuXG5jb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG5jb25zdCBnZXRQcm9qZWN0QnlOYW1lID0gKHRpdGxlKSA9PiBwcm9qZWN0cy5maW5kKCh2KSA9PiB2LnRpdGxlID09IHRpdGxlKTtcblxuY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigocHJqKSA9PiBwcmoudGl0bGUgIT09IHByb2plY3ROYW1lKTtcbiAgTG9jYWxTdG9yYWdlLnNhdmUoKTtcbn07XG5cbmNvbnN0IGdldFRvZG9zQnlQcm9qZWN0TmFtZSA9IChwcm9qZWN0TmFtZSkgPT5cbiAgZ2V0UHJvamVjdEJ5TmFtZShwcm9qZWN0TmFtZSkudG9kb3M7XG5cbmNvbnN0IGdldFRvZGF5c1RvZG9zID0gKCkgPT4ge1xuICBjb25zdCB0b2RheXNUb2RvcyA9IFtdO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBpZiAoaXNTYW1lRGF5KG5ldyBEYXRlKCksIHRvZG8uZGF0ZSkpIHtcbiAgICAgICAgdG9kby5wcm9qZWN0ID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgdG9kYXlzVG9kb3MucHVzaCh0b2RvKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiB0b2RheXNUb2Rvcztcbn07XG5jb25zdCBnZXRXZWVrVG9kb3MgPSAoKSA9PiB7XG4gIGNvbnN0IHdlZWtUb2RvcyA9IFtdO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBpZiAoaXNTYW1lV2VlayhuZXcgRGF0ZSgpLCB0b2RvLmRhdGUpKSB7XG4gICAgICAgIHRvZG8ucHJvamVjdCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgIHdlZWtUb2Rvcy5wdXNoKHRvZG8pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHdlZWtUb2Rvcztcbn07XG5cbmNvbnN0IGdldFByb2plY3RzQ291bnQgPSAoKSA9PiBwcm9qZWN0cy5sZW5ndGg7XG5cbmNvbnN0IGdldFRvZG9zQ291bnQgPSAoKSA9PlxuICBwcm9qZWN0cy5yZWR1Y2UoKHN1bSwgcHJvamVjdCkgPT4gc3VtICsgcHJvamVjdC5nZXRUb2Rvc0NvdW50KCksIDApO1xuXG5jb25zdCBnZXRDb21wbGV0ZWRUb2Rvc0NvdW50ID0gKCkgPT4gY29tcGxldGVkVG9kb3M7XG5cbmNvbnN0IGFkZFRvZG8gPSAodG9kbywgcHJvamVjdE5hbWUpID0+IHtcbiAgY29uc3QgcCA9IGdldFByb2plY3RCeU5hbWUocHJvamVjdE5hbWUpO1xuICBwLnRvZG9zLnB1c2godG9kbyk7XG4gIExvY2FsU3RvcmFnZS5zYXZlKHByb2plY3RzKTtcbn07XG5cbmNvbnN0IEluY0NvbXBsZXRlZFRvZG9zID0gKCkgPT4gKytjb21wbGV0ZWRUb2RvcztcbmNvbnN0IERlY0NvbXBsZXRlZFRvZG9zID0gKCkgPT4gLS1jb21wbGV0ZWRUb2RvcztcblxuY29uc3QgZGVsZXRlVG9kbyA9IChwcm9qZWN0TmFtZSwgdG9kb0lkKSA9PiB7XG4gIGNvbnN0IHAgPSBnZXRQcm9qZWN0QnlOYW1lKHByb2plY3ROYW1lKTtcbiAgcC50b2RvcyA9IHAudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSB0b2RvSWQpO1xuICBMb2NhbFN0b3JhZ2Uuc2F2ZSgpO1xuICBkZWxldGVkVG9kb3MrKztcbn07XG5cbmNvbnN0IG1hcmtEb25lID0gKHByb2plY3ROYW1lLCB0b2RvSWQpID0+IHtcbiAgY29uc3QgdG9NYXJrRG9uZSA9IGdldFByb2plY3RCeU5hbWUocHJvamVjdE5hbWUpLnRvZG9zLmZpbmQoXG4gICAgKHQpID0+IHQuaWQgPT09IHRvZG9JZFxuICApO1xuICB0b01hcmtEb25lLm1hcmtEb25lKCk7XG4gIExvY2FsU3RvcmFnZS5zYXZlKCk7XG59O1xuXG5jb25zdCB1bk1hcmtEb25lID0gKHByb2plY3ROYW1lLCB0b2RvSWQpID0+IHtcbiAgY29uc3QgdG9NYXJrRG9uZSA9IGdldFByb2plY3RCeU5hbWUocHJvamVjdE5hbWUpLnRvZG9zLmZpbmQoXG4gICAgKHQpID0+IHQuaWQgPT09IHRvZG9JZFxuICApO1xuICB0b01hcmtEb25lLm1hcmtOb3REb25lKCk7XG4gIExvY2FsU3RvcmFnZS5zYXZlKCk7XG59O1xuXG5jb25zdCBnZXRUb2RvID0gKGlkLCBwcm9qZWN0TmFtZSkgPT4ge1xuICBjb25zdCBwID0gZ2V0UHJvamVjdEJ5TmFtZShwcm9qZWN0TmFtZSk7XG4gIGNvbnN0IHRvRmluZCA9IHAudG9kb3MuZmluZCgodCkgPT4gdC5pZCA9PT0gaWQpO1xuICByZXR1cm4gdG9GaW5kO1xufTtcbmNvbnN0IGVkaXRUb2RvID0gKHRpdGxlLCBkZXNjLCBkYXRlLCBpZCwgcHJvamVjdFRpdGxlKSA9PiB7XG4gIGNvbnN0IHRvRWRpdCA9IGdldFRvZG8oaWQsIHByb2plY3RUaXRsZSk7XG4gIHRvRWRpdC5zZXRUaXRsZSh0aXRsZSk7XG4gIHRvRWRpdC5zZXREZXNjcmlwdGlvbihkZXNjKTtcbiAgdG9FZGl0LnNldERhdGUoZGF0ZSk7XG4gIExvY2FsU3RvcmFnZS5zYXZlKCk7XG4gIHJldHVybiB0b0VkaXQ7XG59O1xuXG5jb25zdCBlZGl0UHJvamVjdCA9IChvbGRQcm9qZWN0TmFtZSwgbmV3UHJvamVjdE5hbWUsIG5ld1Byb2plY3RDb2xvcikgPT4ge1xuICBjb25zdCBwcm9qZWN0VG9FZGl0ID0gZ2V0UHJvamVjdEJ5TmFtZShvbGRQcm9qZWN0TmFtZSk7XG4gIHByb2plY3RUb0VkaXQuc2V0VGl0bGUobmV3UHJvamVjdE5hbWUpO1xuICBwcm9qZWN0VG9FZGl0LnNldENvbG9yKG5ld1Byb2plY3RDb2xvcik7XG4gIExvY2FsU3RvcmFnZS5zYXZlKCk7XG59O1xuXG5leHBvcnQge1xuICBhZGRQcm9qZWN0LFxuICBnZXRQcm9qZWN0cyxcbiAgZ2V0UHJvamVjdEJ5TmFtZSxcbiAgcmVtb3ZlUHJvamVjdCxcbiAgZ2V0VG9kYXlzVG9kb3MsXG4gIGdldFdlZWtUb2RvcyxcbiAgZ2V0UHJvamVjdHNDb3VudCxcbiAgZ2V0VG9kb3NDb3VudCxcbiAgZ2V0Q29tcGxldGVkVG9kb3NDb3VudCxcbiAgSW5jQ29tcGxldGVkVG9kb3MsXG4gIERlY0NvbXBsZXRlZFRvZG9zLFxuICBkZWxldGVUb2RvLFxuICBtYXJrRG9uZSxcbiAgdW5NYXJrRG9uZSxcbiAgZ2V0VG9kb3NCeVByb2plY3ROYW1lLFxuICBhZGRUb2RvLFxuICBlZGl0VG9kbyxcbiAgZWRpdFByb2plY3QsXG4gIGRlbGV0ZWRUb2RvcyxcbiAgcHJvamVjdHMsXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgaW5pdCBmcm9tIFwiLi9jb250cm9sbGVycy9VaVwiO1xuaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9