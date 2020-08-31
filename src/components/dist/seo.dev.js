"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = require("react-helmet");

var _gatsby = require("gatsby");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      query {\n        site {\n          siteMetadata {\n            title\n            description\n            author\n            keywords\n            siteUrl\n          }\n        }\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function SEO(_ref) {
  var description = _ref.description,
      lang = _ref.lang,
      meta = _ref.meta;

  var _useStaticQuery = (0, _gatsby.useStaticQuery)((0, _gatsby.graphql)(_templateObject())),
      site = _useStaticQuery.site;

  var seo = (0, _gatsby.useStaticQuery)("graphql \n  query {\n    allContentfulSeo {\n      edges {\n        node {\n          description\n          title\n          keywords\n        }\n      }\n    }\n  }\n  ");
  var metaDescription = seo.allContentfulSeo.edges[0].node.description || site.siteMetadata.description;
  var keywords = seo.allContentfulSeo.edges[0].node.description;
  /*  return (
     <Helmet
       htmlAttributes={{
         lang,
       }}
       meta={[
         {
           name: `description`,
           content: metaDescription,
         },
         {
           name: "keywords",
           content: keywords,
         },
       ]}
     />
   ) */

  return H;
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  description: ""
};
var _default = SEO;
exports["default"] = _default;