"use strict";
(() => {
var exports = {};
exports.id = 702;
exports.ids = [702];
exports.modules = {

/***/ 83:
/***/ ((module) => {

module.exports = require("@apollo/server");

/***/ }),

/***/ 885:
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ 825:
/***/ ((module) => {

module.exports = require("graphql-tag");

/***/ }),

/***/ 349:
/***/ ((module) => {

module.exports = import("@apollo/server");;

/***/ }),

/***/ 310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 583:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   supabase: () => (/* binding */ supabase)
/* harmony export */ });
/* harmony import */ var _apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(349);
/* harmony import */ var _as_integrations_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(456);
/* harmony import */ var _as_integrations_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_as_integrations_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(825);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(885);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apollo_server__WEBPACK_IMPORTED_MODULE_0__]);
_apollo_server__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__.createClient)("https://kwvpvgbyuoclbeqqcyhk.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3dnB2Z2J5dW9jbGJlcXFjeWhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2MDAwNDAsImV4cCI6MTk5NjE3NjA0MH0.Jq2hFnYszRNkZ1hy5KVcuYplSHBV2jHz-xnhDl8f8i8");
const resolvers = {
    Query: {
        items: async ()=>{
            const { data } = await supabase.from("sample").select();
            return data;
        },
        item: async (_, args)=>{
            const { data } = await supabase.from("sample").select().eq("id", args.id).single();
            return data;
        }
    },
    Mutation: {
        add: async (_, args)=>{
            const payload = {
                name: args.name || "",
                email: args.email || "",
                count: args.count || 0,
                active: args.active || false,
                image: args.image || ""
            };
            const { data } = await supabase.from("sample").insert(payload).select().single();
            return data;
        },
        update: async (_, args)=>{
            const payload = {
                name: args.name,
                email: args.email,
                count: args.count,
                active: args.active
            };
            const { data } = await supabase.from("sample").update(payload).eq("id", args.id).select().single();
            return data;
        }
    }
};
const typeDefs = graphql_tag__WEBPACK_IMPORTED_MODULE_2__.gql`
  type Query {
    items: [Item]
    item(id: Int!): Item
  }
  type Mutation {
    add(
      name: String
      email: String
      active: Boolean
      image: String
      count: Int
    ): Item
    update(
      id: Int!
      name: String
      email: String
      active: Boolean
      image: String
      count: Int
    ): Item
  }
  type Item {
    id: Int!
    name: String
    email: String
    active: Boolean
    image: String
    count: Int
  }
`;
const server = new _apollo_server__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({
    typeDefs,
    resolvers
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_as_integrations_next__WEBPACK_IMPORTED_MODULE_1__.startServerAndCreateNextHandler)(server));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [456], () => (__webpack_exec__(583)));
module.exports = __webpack_exports__;

})();