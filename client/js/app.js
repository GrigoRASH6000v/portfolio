console.log('i am here')

// (function () {
//   "use strict";
//   var t = {
//       7088: function (t, e, n) {
//         var a = n(9963),
//           o = n(6252);
//         const s = { class: "tag tag--main main" };
//         function l(t, e, n, l, r, i) {
//           const c = (0, o.up)("navigation"),
//             u = (0, o.up)("router-view");
//           return (
//             (0, o.wg)(),
//             (0, o.iD)(
//               o.HY,
//               null,
//               [
//                 (0, o.Wm)(c),
//                 (0, o._)("main", s, [
//                   (0, o.Wm)(a.uT, null, {
//                     default: (0, o.w5)(() => [(0, o.Wm)(u)]),
//                     _: 1,
//                   }),
//                 ]),
//               ],
//               64
//             )
//           );
//         }
//         var r = n(3577);
//         const i = { class: "navigation" },
//           c = (0, o._)(
//             "div",
//             { class: "navigation__logo" },
//             [
//               (0, o._)("span", { class: "navigation__logo-general" }, "G"),
//               (0, o._)("span", { class: "navigation__logo-name" }, "Grigory"),
//               (0, o._)(
//                 "span",
//                 { class: "navigation__logo-post" },
//                 "Frontend Developer"
//               ),
//             ],
//             -1
//           ),
//           u = { class: "navigation__list" },
//           m = { class: "navigation__social-list" },
//           d = {
//             class: "navigation__social-link",
//             href: "https://github.com/GrigoRASH6000v",
//             target: "_blank",
//           },
//           p = {
//             class: "navigation__social-link",
//             href: "https://t.me/GrigoRASH6000",
//             target: "_blank",
//           };
//         function g(t, e, n, a, s, l) {
//           const g = (0, o.up)("router-link"),
//             v = (0, o.up)("icon");
//           return (
//             (0, o.wg)(),
//             (0, o.iD)("nav", i, [
//               c,
//               (0, o._)("ul", u, [
//                 ((0, o.wg)(!0),
//                 (0, o.iD)(
//                   o.HY,
//                   null,
//                   (0, o.Ko)(
//                     l.routes,
//                     (t) => (
//                       (0, o.wg)(),
//                       (0, o.iD)(
//                         "li",
//                         { class: "navigation__item", key: t.name },
//                         [
//                           (0, o.Wm)(
//                             g,
//                             { class: "navigation__link", to: t.path },
//                             {
//                               default: (0, o.w5)(() => [
//                                 (0, o.Uk)((0, r.zw)(t.name), 1),
//                               ]),
//                               _: 2,
//                             },
//                             1032,
//                             ["to"]
//                           ),
//                         ]
//                       )
//                     )
//                   ),
//                   128
//                 )),
//               ]),
//               (0, o._)("div", m, [
//                 (0, o._)("a", d, [(0, o.Wm)(v, { name: "github-icon" })]),
//                 (0, o._)("a", p, [(0, o.Wm)(v, { name: "telegramm-icon" })]),
//               ]),
//             ])
//           );
//         }
//         var v = {
//             computed: {
//               routes() {
//                 return this.$router.getRoutes().filter((t) => "/" !== t.path);
//               },
//             },
//           },
//           f = n(3744);
//         const h = (0, f.Z)(v, [["render", g]]);
//         var _ = h,
//           b = {
//             components: { navigation: _ },
//             methods: {
//               async getData() {
//                 const t = await this.$axios.get(
//                   "http://localhost:8626/api/users"
//                 );
//                 console.log(t);
//               },
//             },
//             mounted() {
//               this.getData();
//             },
//           };
//         const y = (0, f.Z)(b, [["render", l]]);
//         var w = y,
//           k = n(2201);
//         n(7658);
//         const x = { class: "section-about" },
//           E = { class: "section-about__main-block" },
//           C = (0, o._)(
//             "h1",
//             {
//               "aria-label":
//                 "Привет,  меня зовут Григорий,  я Фронтенд разработчик",
//               class: "tag tag--h1 text-animate section-about__greeting",
//             },
//             null,
//             -1
//           );
//         function L(t, e, n, a, s, l) {
//           return (
//             (0, o.wg)(),
//             (0, o.iD)("section", x, [
//               (0, o._)("div", E, [
//                 C,
//                 (0, o._)(
//                   "button",
//                   {
//                     class: "btn",
//                     onClick: e[0] || (e[0] = (e) => t.$router.push("/contact")),
//                   },
//                   " Свяжитесь со мной! "
//                 ),
//               ]),
//             ])
//           );
//         }
//         const D = "text-animate__letter",
//           V = "text-animate__letter--active",
//           O = (t, e, n) => {
//             const a = document.createElement(t);
//             return e && a.classList.add(e), n && (a.textContent = n), a;
//           },
//           Z = (t) =>
//             t.map((e, n) =>
//               " " === e && " " === t[n + 1]
//                 ? O("br")
//                 : " " === e && " " !== t[n + 1] && " " !== t[n - 1]
//                 ? O("pre", D, e)
//                 : O("span", D, e)
//             ),
//           S = (t) => {
//             t.addEventListener("mouseover", function () {
//               this.classList.add(V),
//                 setTimeout(() => {
//                   this.classList.remove(V);
//                 }, 1e3);
//             });
//           };
//         var I = (t) => {
//             const e = [...document.querySelectorAll(t)];
//             e.forEach((t) => {
//               const e = Z(t.ariaLabel.split(""));
//               e.forEach((e) => {
//                 S(e), t.appendChild(e);
//               });
//             });
//           },
//           j = {
//             methods: {
//               initListeners() {
//                 [...document.querySelectorAll("#title span")].forEach((t) => {
//                   t.addEventListener("mouseover", function () {
//                     this.classList.add(
//                       "section-about__greeting-letter--active"
//                     ),
//                       setTimeout(() => {
//                         this.classList.remove(
//                           "section-about__greeting-letter--active"
//                         );
//                       }, 1e3);
//                   });
//                 });
//               },
//             },
//             mounted() {
//               I(".text-animate");
//             },
//           };
//         const W = (0, f.Z)(j, [["render", L]]);
//         var z = W;
//         const A = { class: "section-skills" },
//           $ = (0, o._)(
//             "h2",
//             {
//               class: "tag tag--h2 title-2 text-animate",
//               "aria-label": "Skills",
//             },
//             null,
//             -1
//           ),
//           F = [$];
//         function q(t, e, n, a, s, l) {
//           return (0, o.wg)(), (0, o.iD)("section", A, F);
//         }
//         var H = {
//           mounted() {
//             I(".text-animate");
//           },
//         };
//         const N = (0, f.Z)(H, [["render", q]]);
//         var T = N;
//         const M = { class: "tag tag--section section-contacts" },
//           P = { class: "section-contacts__form" },
//           B = (0, o._)(
//             "h2",
//             {
//               class: "tag tag--h2 text-animate title-2",
//               "aria-label": "Контакты",
//             },
//             null,
//             -1
//           ),
//           G = (0, o._)(
//             "p",
//             { class: "tag tag--p description" },
//             " Люблю разнообразные и интересные задачи, но готов поработать и с легаси. Если заинтересовала мое кандидатура, напишите мне на почту или в соц сети. ",
//             -1
//           ),
//           U = (0, o._)(
//             "button",
//             { type: "submit", class: "btn" },
//             " Отправить ",
//             -1
//           );
//         function R(t, e, n, a, s, l) {
//           const r = (0, o.up)("my-input"),
//             i = (0, o.up)("my-form");
//           return (
//             (0, o.wg)(),
//             (0, o.iD)("section", M, [
//               (0, o._)("div", P, [
//                 B,
//                 G,
//                 (0, o.Wm)(
//                   i,
//                   {
//                     class: "tag tag--form",
//                     model: s.form,
//                     rules: s.rules,
//                     submit: l.sendForm,
//                   },
//                   {
//                     button: (0, o.w5)(() => [U]),
//                     default: (0, o.w5)(() => [
//                       (0, o.Wm)(
//                         r,
//                         {
//                           required: "",
//                           name: "name",
//                           placeholder: "Имя",
//                           type: "text",
//                           modelValue: s.form.name,
//                           "onUpdate:modelValue":
//                             e[0] || (e[0] = (t) => (s.form.name = t)),
//                         },
//                         null,
//                         8,
//                         ["modelValue"]
//                       ),
//                       (0, o.Wm)(
//                         r,
//                         {
//                           required: "",
//                           name: "email",
//                           placeholder: "Email",
//                           type: "email",
//                           modelValue: s.form.email,
//                           "onUpdate:modelValue":
//                             e[1] || (e[1] = (t) => (s.form.email = t)),
//                         },
//                         null,
//                         8,
//                         ["modelValue"]
//                       ),
//                       (0, o.Wm)(
//                         r,
//                         {
//                           name: "message",
//                           placeholder: "Сообщение",
//                           type: "textarea",
//                           modelValue: s.form.message,
//                           "onUpdate:modelValue":
//                             e[2] || (e[2] = (t) => (s.form.message = t)),
//                           rows: 30,
//                         },
//                         null,
//                         8,
//                         ["modelValue"]
//                       ),
//                     ]),
//                     _: 1,
//                   },
//                   8,
//                   ["model", "rules", "submit"]
//                 ),
//               ]),
//             ])
//           );
//         }
//         const Y = { class: "form" };
//         function K(t, e, n, a, s, l) {
//           return (
//             (0, o.wg)(),
//             (0, o.iD)("div", Y, [
//               ((0, o.wg)(!0),
//               (0, o.iD)(
//                 o.HY,
//                 null,
//                 (0, o.Ko)(
//                   this.$slots.default(),
//                   (t, e) => (
//                     (0, o.wg)(),
//                     (0, o.j4)(
//                       (0, o.LL)(t),
//                       {
//                         class: (0, r.C_)({
//                           "input--isInvalid": l.getInvalidStatus(t),
//                         }),
//                         onInput: (e) => l.clearClass(t),
//                         key: e,
//                       },
//                       null,
//                       40,
//                       ["class", "onInput"]
//                     )
//                   )
//                 ),
//                 128
//               )),
//               ((0, o.wg)(),
//               (0, o.j4)(
//                 (0, o.LL)(t.$slots.button()[0]),
//                 { onClick: l.submitHandler },
//                 null,
//                 8,
//                 ["onClick"]
//               )),
//             ])
//           );
//         }
//         var J = {
//           props: {
//             model: { type: Object, default: () => ({}) },
//             rules: { type: Object, default: () => ({}) },
//             submit: {
//               type: Function,
//               default: () =>
//                 console.error("Warning! The handler function is not assigned"),
//             },
//           },
//           data() {
//             return { formElements: this.createFormElements() };
//           },
//           methods: {
//             clearClass(t) {
//               const e = this.getElementName(t);
//               this.formElements[e] &&
//                 this.formElements[e].isInvalid &&
//                 (this.formElements[e].isInvalid = !1);
//             },
//             createFormElements() {
//               return this.$slots.default().reduce((t, e) => {
//                 if (e.props.hasOwnProperty("required")) {
//                   const n = this.getElementName(e);
//                   t[n] = { isInvalid: !1 };
//                 }
//                 return t;
//               }, {});
//             },
//             getInvalidStatus(t) {
//               const e = this.formElements[this.getElementName(t)];
//               return (
//                 void 0 !== e &&
//                 this.formElements[this.getElementName(t)].isInvalid
//               );
//             },
//             getElementName(t) {
//               return t.props.name;
//             },
//             fieldsValidation(t) {
//               t.forEach((t) => {
//                 const { key: e, value: n } = t;
//                 n || (this.formElements[e].isInvalid = !0);
//               });
//             },
//             submitHandler() {
//               const t = this.checkForm();
//               t && this.submit();
//             },
//             checkForm() {
//               const t = Object.entries(this.rules),
//                 e = t.map((t) => {
//                   const e = t[0],
//                     { type: n, regExp: a } = t[1],
//                     o = this.model[e];
//                   return "no-empty" === n
//                     ? { key: e, value: !!o }
//                     : "valid" === n
//                     ? { key: e, value: a.test(o) }
//                     : void 0;
//                 });
//               return this.fieldsValidation(e), e.every((t) => t.value);
//             },
//           },
//         };
//         const Q = (0, f.Z)(J, [["render", K]]);
//         var X = Q;
//         const tt = (t) => (
//             (0, o.dD)("data-v-64abae7a"), (t = t()), (0, o.Cn)(), t
//           ),
//           et = { class: "input" },
//           nt = { key: 0, class: "input__star-wrp" },
//           at = tt(() =>
//             (0, o._)(
//               "svg",
//               { class: "input__star", viewBox: "0 0 576 512" },
//               [
//                 (0, o._)("path", {
//                   d: "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z",
//                 }),
//               ],
//               -1
//             )
//           ),
//           ot = [at],
//           st = ["value", "type", "placeholder"],
//           lt = ["value", "placeholder"],
//           rt = tt(() =>
//             (0, o._)("span", { class: "input__underline" }, null, -1)
//           );
//         function it(t, e, n, a, s, l) {
//           return (
//             (0, o.wg)(),
//             (0, o.iD)("div", et, [
//               n.required
//                 ? ((0, o.wg)(), (0, o.iD)("div", nt, ot))
//                 : (0, o.kq)("", !0),
//               "textarea" !== n.type
//                 ? ((0, o.wg)(),
//                   (0, o.iD)(
//                     "input",
//                     {
//                       key: 1,
//                       value: n.modelValue,
//                       onInput:
//                         e[0] ||
//                         (e[0] = (e) =>
//                           t.$emit("update:modelValue", e.target.value)),
//                       class: "input__inner",
//                       type: n.type,
//                       placeholder: n.placeholder,
//                     },
//                     null,
//                     40,
//                     st
//                   ))
//                 : ((0, o.wg)(),
//                   (0, o.iD)(
//                     "textarea",
//                     {
//                       key: 2,
//                       value: n.modelValue,
//                       onInput:
//                         e[1] ||
//                         (e[1] = (e) =>
//                           t.$emit("update:modelValue", e.target.value)),
//                       class: "input__inner",
//                       placeholder: n.placeholder,
//                       cols: "30",
//                       rows: "10",
//                     },
//                     null,
//                     40,
//                     lt
//                   )),
//               rt,
//             ])
//           );
//         }
//         var ct = {
//           emits: ["update:modelValue"],
//           props: {
//             required: { type: Boolean, default: () => !1 },
//             type: { type: String, default: () => "text" },
//             modelValue: { type: String, default: () => "" },
//             placeholder: { type: String, default: () => "" },
//             cols: { type: [String, Number], default: () => 30 },
//             rows: { type: [String, Number], default: () => 10 },
//           },
//         };
//         const ut = (0, f.Z)(ct, [
//           ["render", it],
//           ["__scopeId", "data-v-64abae7a"],
//         ]);
//         var mt = ut,
//           dt = {
//             components: { "my-form": X, "my-input": mt },
//             data() {
//               return {
//                 form: { name: "", email: "", message: "" },
//                 rules: {
//                   name: { type: "no-empty" },
//                   email: {
//                     type: "valid",
//                     regExp:
//                       /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,6}$/,
//                   },
//                 },
//               };
//             },
//             methods: {
//               sendForm() {
//                 console.log("send");
//               },
//             },
//             mounted() {
//               I(".text-animate");
//             },
//           };
//         const pt = (0, f.Z)(dt, [["render", R]]);
//         var gt = pt;
//         const vt = [
//             { path: "/", redirect: "/about" },
//             { path: "/about", name: "About", component: z },
//             { path: "/skills", name: "Skills", component: T },
//             { path: "/contact", name: "Contact", component: gt },
//           ],
//           ft = (0, k.p7)({ history: (0, k.PO)("/"), routes: vt });
//         var ht = ft,
//           _t = n(3907),
//           bt = (0, _t.MT)({
//             state: {},
//             mutations: {},
//             actions: {},
//             modules: {},
//           }),
//           yt = n(9669),
//           wt = n.n(yt);
//         function kt(t, e, n, a, s, l) {
//           return (
//             (0, o.wg)(),
//             (0, o.j4)(
//               (0, o.LL)(n.name),
//               { class: (0, r.C_)(["icon", "icon--" + n.name]) },
//               null,
//               8,
//               ["class"]
//             )
//           );
//         }
//         const xt = {
//             xmlns: "http://www.w3.org/2000/svg",
//             viewBox: "0 0 30 30",
//           },
//           Et = (0, o._)(
//             "path",
//             {
//               d: "M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z",
//             },
//             null,
//             -1
//           ),
//           Ct = [Et];
//         function Lt(t, e) {
//           return (0, o.wg)(), (0, o.iD)("svg", xt, Ct);
//         }
//         const Dt = {},
//           Vt = (0, f.Z)(Dt, [["render", Lt]]);
//         var Ot = Vt;
//         const Zt = {
//             xmlns: "http://www.w3.org/2000/svg",
//             viewBox: "0 0 50 50",
//           },
//           St = (0, o._)(
//             "path",
//             {
//               d: "M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445\tc-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758\tc0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125\tc0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077\tC47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z",
//             },
//             null,
//             -1
//           ),
//           It = [St];
//         function jt(t, e) {
//           return (0, o.wg)(), (0, o.iD)("svg", Zt, It);
//         }
//         const Wt = {},
//           zt = (0, f.Z)(Wt, [["render", jt]]);
//         var At = zt,
//           $t = {
//             components: { "github-icon": Ot, "telegramm-icon": At },
//             props: { name: { type: String, default: () => "" } },
//           };
//         const Ft = (0, f.Z)($t, [["render", kt]]);
//         var qt = Ft;
//         let Ht = (0, a.ri)(w);
//         (Ht.config.globalProperties.$axios = wt()),
//           Ht.component("icon", qt).use(bt).use(ht).mount("#app");
//       },
//     },
//     e = {};
//   function n(a) {
//     var o = e[a];
//     if (void 0 !== o) return o.exports;
//     var s = (e[a] = { exports: {} });
//     return t[a](s, s.exports, n), s.exports;
//   }
//   (n.m = t),
//     (function () {
//       var t = [];
//       n.O = function (e, a, o, s) {
//         if (!a) {
//           var l = 1 / 0;
//           for (u = 0; u < t.length; u++) {
//             (a = t[u][0]), (o = t[u][1]), (s = t[u][2]);
//             for (var r = !0, i = 0; i < a.length; i++)
//               (!1 & s || l >= s) &&
//               Object.keys(n.O).every(function (t) {
//                 return n.O[t](a[i]);
//               })
//                 ? a.splice(i--, 1)
//                 : ((r = !1), s < l && (l = s));
//             if (r) {
//               t.splice(u--, 1);
//               var c = o();
//               void 0 !== c && (e = c);
//             }
//           }
//           return e;
//         }
//         s = s || 0;
//         for (var u = t.length; u > 0 && t[u - 1][2] > s; u--) t[u] = t[u - 1];
//         t[u] = [a, o, s];
//       };
//     })(),
//     (function () {
//       n.n = function (t) {
//         var e =
//           t && t.__esModule
//             ? function () {
//                 return t["default"];
//               }
//             : function () {
//                 return t;
//               };
//         return n.d(e, { a: e }), e;
//       };
//     })(),
//     (function () {
//       n.d = function (t, e) {
//         for (var a in e)
//           n.o(e, a) &&
//             !n.o(t, a) &&
//             Object.defineProperty(t, a, { enumerable: !0, get: e[a] });
//       };
//     })(),
//     (function () {
//       n.g = (function () {
//         if ("object" === typeof globalThis) return globalThis;
//         try {
//           return this || new Function("return this")();
//         } catch (t) {
//           if ("object" === typeof window) return window;
//         }
//       })();
//     })(),
//     (function () {
//       n.o = function (t, e) {
//         return Object.prototype.hasOwnProperty.call(t, e);
//       };
//     })(),
//     (function () {
//       var t = { 143: 0 };
//       n.O.j = function (e) {
//         return 0 === t[e];
//       };
//       var e = function (e, a) {
//           var o,
//             s,
//             l = a[0],
//             r = a[1],
//             i = a[2],
//             c = 0;
//           if (
//             l.some(function (e) {
//               return 0 !== t[e];
//             })
//           ) {
//             for (o in r) n.o(r, o) && (n.m[o] = r[o]);
//             if (i) var u = i(n);
//           }
//           for (e && e(a); c < l.length; c++)
//             (s = l[c]), n.o(t, s) && t[s] && t[s][0](), (t[s] = 0);
//           return n.O(u);
//         },
//         a = (self["webpackChunkportfolio"] =
//           self["webpackChunkportfolio"] || []);
//       a.forEach(e.bind(null, 0)), (a.push = e.bind(null, a.push.bind(a)));
//     })();
//   var a = n.O(void 0, [998], function () {
//     return n(7088);
//   });
//   a = n.O(a);
// })();