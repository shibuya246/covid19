(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{450:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ja":{"検査陽性者の状況":"検査陽性者の状況","陽性患者数":"陽性患者数","陽性患者の属性":"陽性患者の属性","検査実施数":"検査実施数"},"en":{"検査陽性者の状況":"Details of confirmed cases","陽性患者数":"Number of confirmed cases","陽性患者の属性":"Confirmed patient attributes","検査実施数":"Number of tests conducted"},"zh-cn":{"検査陽性者の状況":"确诊案例状况","陽性患者数":"确诊人数","陽性患者の属性":"确诊患者的信息","検査実施数":"送检件数"},"zh-tw":{"検査陽性者の状況":"確診案例狀況","陽性患者数":"確診人數","陽性患者の属性":"確診案例概況","検査実施数":"送檢件數"},"ko":{"検査陽性者の状況":"확진자의 현황","陽性患者数":"확진자 수","陽性患者の属性":"확진 사례의 세부 사항","検査実施数":"검사실시수"},"ja-basic":{"検査陽性者の状況":"びょうきの ひとは いま","陽性患者数":"びょうきの ひとの かず","陽性患者の属性":"びょうきの ひとの じょうほう","検査実施数":"けんさした かず"}}'),delete t.options._Ctor}},566:function(t,e,r){"use strict";var o=r(450),n=r.n(o);e.default=n.a},574:function(t,e,r){"use strict";r.r(e);var o=r(372),n=r(453),c=r(455),d=r(454),m=r(456),f={components:{ConfirmedCasesDetailsCard:n.a,ConfirmedCasesNumberCard:c.a,ConfirmedCasesAttributesCard:d.a,TestedNumberCard:m.a},data:function(){var title,t;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況"),t=o.inspections_summary.date;break;case"number-of-confirmed-cases":title=this.$t("陽性患者数"),t=o.patients.date;break;case"attributes-of-confirmed-cases":title=this.$t("陽性患者の属性"),t=o.patients.date;break;case"number-of-tested":title=this.$t("検査実施数"),t=o.inspections_summary.date}var data={title:title,updatedAt:t};return data},head:function(){var t="https://stopcovid19.metro.tokyo.lg.jp",e=(new Date).getTime(),r=t+"/ogp/"+this.$i18n.locale+"/"+this.$route.params.card+".png?t="+e,o=this.updatedAt+" | "+this.$t("当サイトは新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために、有志が開設したものです。");return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:t+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("京都府")+" "+this.$t("新型コロナウイルス感染症")+this.$t("対策サイト（非公式）")},{hid:"description",name:"description",content:o},{hid:"og:description",property:"og:description",content:o},{hid:"og:image",property:"og:image",content:r},{hid:"twitter:image",name:"twitter:image",content:r}]}}},h=r(5),l=r(566),component=Object(h.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",["details-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-details-card"):"number-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-number-card"):"attributes-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-attributes-card"):"number-of-tested"==this.$route.params.card?e("tested-number-card"):this._e()],1)}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);e.default=component.exports}}]);