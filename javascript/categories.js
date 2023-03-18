"use strict";

import { RequestMaker } from "./request_maker.js";

class Categories extends RequestMaker{
    constructor () {
        super();
        this.categories = this.fetchCategories();
    }

    getCategories() {
        return this.categories;
    }
}

export {Categories};
