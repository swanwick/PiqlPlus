const M = () => Promise.resolve().then(() => L), { Fragment: j, jsx: e, jsxs: t } = globalThis.__GLOBALS__.ReactJSXRuntime;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
globalThis.__GLOBALS__.React.Children;
globalThis.__GLOBALS__.React.cloneElement;
({
  ...globalThis.__GLOBALS__.React
});
const { Component: O, createContext: V, createElement: b, createFactory: W, createRef: U, forwardRef: g, Fragment: H, isValidElement: z, lazy: G, memo: q, Profiler: $, PureComponent: D, startTransition: Y, StrictMode: X, Suspense: Z, use: K, useCallback: J, useContext: Q, useDebugValue: ee, useDeferredValue: te, useEffect: N, useId: ae, useImperativeHandle: le, useInsertionEffect: se, useLayoutEffect: re, useMemo: oe, useReducer: ie, useRef: ne, useState: x, useSyncExternalStore: de, useTransition: ce, version: me, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: he } = globalThis.__GLOBALS__.React, u = "/_components/v2/56ba01bfcdb1ae66396509fffc460c41b301ded1/PiqlPlus_Logo_150px_height.e5db322b.png", v = "/_components/v2/56ba01bfcdb1ae66396509fffc460c41b301ded1/Private_Pickle_Cleaned_Up.aada27fe.png", k = "/_components/v2/56ba01bfcdb1ae66396509fffc460c41b301ded1/image-2.1a115305.png";
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), A = (a) => a.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (l, s, o) => o ? o.toUpperCase() : s.toLowerCase()
), p = (a) => {
  const l = A(a);
  return l.charAt(0).toUpperCase() + l.slice(1);
}, y = (...a) => a.filter((l, s, o) => !!l && l.trim() !== "" && o.indexOf(l) === s).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var F = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B = g(
  ({
    color: a = "currentColor",
    size: l = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: o,
    className: r = "",
    children: i,
    iconNode: n,
    ...c
  }, d) => b(
    "svg",
    {
      ref: d,
      ...F,
      width: l,
      height: l,
      stroke: a,
      strokeWidth: o ? Number(s) * 24 / Number(l) : s,
      className: y("lucide", r),
      ...c
    },
    [
      ...n.map(([m, h]) => b(m, h)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f = (a, l) => {
  const s = g(
    ({ className: o, ...r }, i) => b(B, {
      ref: i,
      iconNode: l,
      className: y(
        `lucide-${C(p(a))}`,
        `lucide-${a}`,
        o
      ),
      ...r
    })
  );
  return s.displayName = p(a), s;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], _ = f("chevron-down", P);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T = [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
], R = f("menu", T);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], E = f("x", S);
function I() {
  const [a, l] = x(""), [s, o] = x(!1);
  N(() => {
    const i = () => {
      const n = document.querySelectorAll("section[id]"), c = window.scrollY;
      n.forEach((d) => {
        const m = d.offsetTop - 100, h = d.offsetHeight, w = d.getAttribute("id") || "";
        c >= m && c < m + h && l(w);
      });
    };
    return window.addEventListener("scroll", i), () => window.removeEventListener("scroll", i);
  }, []);
  const r = (i) => {
    const n = document.getElementById(i);
    n && (n.scrollIntoView({ behavior: "smooth" }), o(!1));
  };
  return /* @__PURE__ */ t("div", { className: "min-h-screen bg-[#fafafa]", style: { fontFamily: "Archivo, sans-serif" }, children: [
    /* @__PURE__ */ t("nav", { className: "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm", children: [
      /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ t("div", { className: "flex items-center justify-between h-20", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-12", children: [
          /* @__PURE__ */ e("img", { src: u, alt: "PiqlPlus", className: "h-16" }),
          /* @__PURE__ */ t("div", { className: "hidden lg:flex items-center gap-8", children: [
            /* @__PURE__ */ t(
              "button",
              {
                onClick: () => r("private-pickle"),
                className: `text-sm font-semibold tracking-wide transition-colors pb-1 border-b-2 ${a === "private-pickle" ? "border-[#001f3f]" : "border-transparent"}`,
                children: [
                  /* @__PURE__ */ e("span", { className: "text-[#001f3f]", children: "PRIVATE" }),
                  /* @__PURE__ */ e("span", { className: "text-[#8BC34A]", children: "PICKLE" })
                ]
              }
            ),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => r("pickle-vacations"),
                className: `text-sm font-semibold tracking-wide transition-colors pb-1 border-b-2 ${a === "pickle-vacations" ? "text-[#ff6b6b] border-[#ff6b6b]" : "text-[#001f3f] hover:text-[#ff6b6b] border-transparent"}`,
                children: "PICKLE VACATIONS"
              }
            ),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => r("swupr-leagues"),
                className: `text-sm font-semibold tracking-wide transition-colors pb-1 border-b-2 ${a === "swupr-leagues" ? "text-[#FFC107] border-[#FFC107]" : "text-[#001f3f] hover:text-[#FFC107] border-transparent"}`,
                children: "SWUPR LEAGUES"
              }
            ),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => r("about-swan"),
                className: `text-sm font-semibold tracking-wide transition-colors pb-1 border-b-2 ${a === "about-swan" ? "text-[#001f3f] border-[#001f3f]" : "text-[#001f3f] hover:text-[#001f3f] border-transparent"}`,
                children: "ABOUT SWAN"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            onClick: () => o(!s),
            className: "lg:hidden text-[#001f3f] p-2",
            children: s ? /* @__PURE__ */ e(E, { size: 24 }) : /* @__PURE__ */ e(R, { size: 24 })
          }
        )
      ] }) }),
      s && /* @__PURE__ */ e("div", { className: "lg:hidden bg-white border-t border-gray-200", children: /* @__PURE__ */ t("div", { className: "px-4 py-4 space-y-3", children: [
        /* @__PURE__ */ t(
          "button",
          {
            onClick: () => r("private-pickle"),
            className: `block w-full text-left px-4 py-3 text-sm font-semibold rounded transition-colors border-l-4 ${a === "private-pickle" ? "border-[#001f3f] bg-[#001f3f]/5" : "border-transparent hover:bg-gray-50"}`,
            children: [
              /* @__PURE__ */ e("span", { className: "text-[#001f3f]", children: "PRIVATE" }),
              " ",
              /* @__PURE__ */ e("span", { className: "text-[#8BC34A]", children: "PICKLE" })
            ]
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            onClick: () => r("pickle-vacations"),
            className: `block w-full text-left px-4 py-3 text-sm font-semibold rounded transition-colors border-l-4 ${a === "pickle-vacations" ? "text-[#ff6b6b] border-[#ff6b6b] bg-[#ff6b6b]/5" : "text-[#001f3f] hover:text-[#ff6b6b] border-transparent hover:bg-gray-50"}`,
            children: "PICKLE VACATIONS"
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            onClick: () => r("swupr-leagues"),
            className: `block w-full text-left px-4 py-3 text-sm font-semibold rounded transition-colors border-l-4 ${a === "swupr-leagues" ? "text-[#FFC107] border-[#FFC107] bg-[#FFC107]/5" : "text-[#001f3f] hover:text-[#FFC107] border-transparent hover:bg-gray-50"}`,
            children: "SWUPR LEAGUES"
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            onClick: () => r("about-swan"),
            className: `block w-full text-left px-4 py-3 text-sm font-semibold rounded transition-colors border-l-4 ${a === "about-swan" ? "text-[#001f3f] border-[#001f3f] bg-[#001f3f]/5" : "text-[#001f3f] hover:text-[#001f3f] border-transparent hover:bg-gray-50"}`,
            children: "ABOUT SWAN"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ t("section", { className: "relative pt-32 pb-24 px-4 overflow-hidden bg-gradient-to-b from-white to-gray-50", children: [
      /* @__PURE__ */ t("div", { className: "absolute inset-0 opacity-5", children: [
        /* @__PURE__ */ e("div", { className: "absolute top-20 left-10 w-96 h-96 bg-[#8BC34A] rounded-full blur-[120px]" }),
        /* @__PURE__ */ e("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-[#001f3f] rounded-full blur-[120px]" })
      ] }),
      /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto relative z-10", children: /* @__PURE__ */ t("div", { className: "text-center", children: [
        /* @__PURE__ */ t(
          "h1",
          {
            className: "text-7xl sm:text-8xl lg:text-9xl mb-6 text-[#001f3f] tracking-tight",
            style: { fontFamily: "Bebas Neue, sans-serif" },
            children: [
              "TOOLS THAT MAKE",
              /* @__PURE__ */ e("br", {}),
              /* @__PURE__ */ e("span", { className: "text-[#8BC34A]", children: "PICKLEBALL BETTER" })
            ]
          }
        ),
        /* @__PURE__ */ e("p", { className: "text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed", children: "Supporting player improvement and maximizing fun along the way" }),
        /* @__PURE__ */ t(
          "button",
          {
            onClick: () => r("private-pickle"),
            className: "inline-flex items-center gap-2 px-8 py-4 bg-[#8BC34A] text-white font-bold text-lg rounded-full hover:bg-[#7CB342] transition-all hover:scale-105 shadow-lg",
            children: [
              "EXPLORE NOW",
              /* @__PURE__ */ e(_, { size: 20 })
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ e("section", { id: "private-pickle", className: "py-24 px-4 bg-white", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-4 mb-12", children: [
        /* @__PURE__ */ e("img", { src: v, alt: "Private Pickle", className: "h-20" }),
        /* @__PURE__ */ t("h2", { className: "text-6xl sm:text-7xl lg:text-8xl", style: { fontFamily: "Bebas Neue, sans-serif" }, children: [
          /* @__PURE__ */ e("span", { className: "text-[#001f3f]", children: "PRIVATE" }),
          /* @__PURE__ */ e("span", { className: "text-[#8BC34A]", children: "PICKLE" })
        ] })
      ] }),
      /* @__PURE__ */ e("div", { id: "who-its-for", className: "mb-20 scroll-mt-24", children: /* @__PURE__ */ t("div", { className: "bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm", children: [
        /* @__PURE__ */ e("h3", { className: "text-3xl sm:text-4xl font-bold text-[#001f3f] mb-6", style: { fontFamily: "Bebas Neue, sans-serif" }, children: "Who It's For" }),
        /* @__PURE__ */ e("p", { className: "text-lg text-gray-700 leading-relaxed mb-6", children: "Anyone who has struggled with putting together their own private pickleball games.  The app helps you collect all your pickleball contacts and find more players through your friends. It does all the text sending and RSVP management for you." }),
        /* @__PURE__ */ e("p", { className: "text-lg text-gray-700 leading-relaxed mb-6", children: "Automatically sends the first invites to the players you most want in your game." }),
        /* @__PURE__ */ t("p", { className: "text-lg text-gray-700 leading-relaxed", children: [
          "If you would like to try it, taking a 2 minute ",
          /* @__PURE__ */ e("span", { className: "text-[#8BC34A] font-semibold", children: "Pre sign-up survey" }),
          " will get you a free account."
        ] })
      ] }) }),
      /* @__PURE__ */ e("div", { id: "alpha-test", className: "mb-20 scroll-mt-24", children: /* @__PURE__ */ t("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ t("div", { className: "bg-gradient-to-br from-[#8BC34A]/10 to-white rounded-3xl p-8 sm:p-12 border border-[#8BC34A]/30 shadow-sm", children: [
          /* @__PURE__ */ e("h3", { className: "text-3xl sm:text-4xl font-bold text-[#8BC34A] mb-6", style: { fontFamily: "Bebas Neue, sans-serif" }, children: "Alpha Test Status" }),
          /* @__PURE__ */ e("p", { className: "text-lg text-gray-700 leading-relaxed mb-6", children: "We are currently in Alpha Testing. This means that there are likely to be bugs and there are likely to be changes to the code during the Alpha phase. Alpha testers are encouraged to point out bugs and to make feature requests." }),
          /* @__PURE__ */ e("p", { className: "text-lg text-gray-700 leading-relaxed", children: "Alpha Registration is currently open to anyone willing to take a 2 minute Pre sign-up survey. The registrations may be capped at any time." })
        ] }),
        /* @__PURE__ */ t("div", { className: "space-y-8", children: [
          /* @__PURE__ */ t("div", { className: "bg-white rounded-3xl p-8 border border-gray-200 hover:border-[#ff6b6b]/50 transition-all shadow-sm hover:shadow-md", children: [
            /* @__PURE__ */ e("h4", { className: "text-2xl font-bold text-[#001f3f] mb-4", style: { fontFamily: "Bebas Neue, sans-serif" }, children: "Bug Report" }),
            /* @__PURE__ */ e("p", { className: "text-gray-700 leading-relaxed mb-4", children: "This is an Alpha test so we expect to find plenty of bugs or even things that are confusing. It would be super-helpful if you would report issues that you find so we can quickly correct them and make the app stable enough for a much broader beta." }),
            /* @__PURE__ */ e("button", { className: "px-6 py-3 bg-[#ff6b6b] text-white font-semibold rounded-full hover:bg-[#ff5252] transition-all shadow-sm hover:shadow", children: "Report a Bug" })
          ] }),
          /* @__PURE__ */ t("div", { className: "bg-white rounded-3xl p-8 border border-gray-200 hover:border-[#FFC107]/50 transition-all shadow-sm hover:shadow-md", children: [
            /* @__PURE__ */ e("h4", { className: "text-2xl font-bold text-[#001f3f] mb-4", style: { fontFamily: "Bebas Neue, sans-serif" }, children: "Feature Request" }),
            /* @__PURE__ */ e("p", { className: "text-gray-700 leading-relaxed mb-4", children: "The Private Pickle team is small and nimble. We have ideas about the direction that we are going to take the app, but we don't know everything about what you need. If you tell us, we will factor it into the Product Roadmap." }),
            /* @__PURE__ */ e("button", { className: "px-6 py-3 bg-[#FFC107] text-[#001f3f] font-semibold rounded-full hover:bg-[#FFB300] transition-all shadow-sm hover:shadow", children: "Make a Request" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ e("div", { id: "pricing", className: "scroll-mt-24", children: /* @__PURE__ */ t("div", { className: "bg-gradient-to-br from-[#8BC34A]/20 to-white rounded-3xl p-8 sm:p-12 border border-[#8BC34A]/30 shadow-sm", children: [
        /* @__PURE__ */ e("h3", { className: "text-3xl sm:text-4xl font-bold text-[#8BC34A] mb-6", style: { fontFamily: "Bebas Neue, sans-serif" }, children: "Pricing" }),
        /* @__PURE__ */ e("p", { className: "text-2xl text-[#001f3f] font-semibold mb-4", children: "During Alpha Test, Private Pickle is free for all." }),
        /* @__PURE__ */ e("p", { className: "text-lg text-gray-700 leading-relaxed", children: "In future phases, it will likely remain free for the event owners who do all the work. The plan is to have a small subscription fee for RSVPers who are receiving the benefit more than a few times a month." })
      ] }) })
    ] }) }),
    /* @__PURE__ */ e("section", { id: "pickle-vacations", className: "py-24 px-4 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ e(
        "h2",
        {
          className: "text-6xl sm:text-7xl lg:text-8xl mb-12 text-[#ff6b6b]",
          style: { fontFamily: "Bebas Neue, sans-serif" },
          children: "PICKLE VACATIONS"
        }
      ),
      /* @__PURE__ */ e("div", { id: "concept", className: "mb-20 scroll-mt-24", children: /* @__PURE__ */ t("div", { className: "bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm", children: [
        /* @__PURE__ */ e("h3", { className: "text-3xl sm:text-4xl font-bold text-[#001f3f] mb-6", style: { fontFamily: "Bebas Neue, sans-serif" }, children: "The Concept" }),
        /* @__PURE__ */ e("p", { className: "text-lg text-gray-700 leading-relaxed", children: "Pickle Vacations are a natural extension of the pickleball lifestyle. They are designed for a group of people to see another part of the world while remaining active and social. There is a great mix of pickleball, sightseeing, relaxing. There are alternate activity options so that non-pickleball spouses can come and also enjoy themselves. You can also always opt-out of any of the activities if you prefer some time on your own." })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "mb-20", children: /* @__PURE__ */ t("div", { className: "grid md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ e("div", { className: "overflow-hidden rounded-2xl shadow-lg", children: /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1564523744666-40782c402131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxIb2klMjBBbiUyMFZpZXRuYW0lMjBiZWFjaHxlbnwxfHx8fDE3NzYyNzEyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Beautiful beach in Vietnam",
            className: "w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
          }
        ) }),
        /* @__PURE__ */ e("div", { className: "overflow-hidden rounded-2xl shadow-lg", children: /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1761644695629-7227bba59fc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwaWNrbGViYWxsJTIwcGxheWVyc3xlbnwxfHx8fDE3NzYyNzEyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Pickleball players competing",
            className: "w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
          }
        ) }),
        /* @__PURE__ */ e("div", { className: "overflow-hidden rounded-2xl shadow-lg", children: /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1755568599643-a91d9490b059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwZW9wbGUlMjBlYXRpbmclMjB0b2dldGhlciUyMFZpZXRuYW0lMjByZXN0YXVyYW50fGVufDF8fHx8MTc3NjI3MTIyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "People enjoying meals together in Vietnam",
            className: "w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
          }
        ) })
      ] }) }),
      /* @__PURE__ */ e("div", { id: "next-trip", className: "mb-20 scroll-mt-24", children: /* @__PURE__ */ t("div", { className: "bg-gradient-to-br from-[#ff6b6b]/10 to-white rounded-3xl p-8 sm:p-12 border border-[#ff6b6b]/30 shadow-sm", children: [
        /* @__PURE__ */ e("h3", { className: "text-3xl sm:text-4xl font-bold text-[#ff6b6b] mb-6", style: { fontFamily: "Bebas Neue, sans-serif" }, children: "Next Trip: Hoi An, Vietnam" }),
        /* @__PURE__ */ e("p", { className: "text-xl text-[#001f3f] font-semibold mb-6", children: "Late Fall 2026" }),
        /* @__PURE__ */ e("p", { className: "text-lg text-gray-700 leading-relaxed mb-6", children: "Our next trip is in late Fall 2026 to Hoi An, Vietnam. This is a very safe tourist friendly town in Central Vietnam. There is beach, culture, shopping, spas, food, and of course pickleball. Vietnam is growing pickleball faster than the US. At the Asia PPA tournament in April two Vietnamese men beat all the US pros to play in the Men's singles finals. There is plenty of great pickleball talent." }),
        /* @__PURE__ */ t("div", { className: "grid sm:grid-cols-2 gap-6 mb-8", children: [
          /* @__PURE__ */ t("div", { className: "bg-white rounded-2xl p-6 border border-gray-200 shadow-sm", children: [
            /* @__PURE__ */ e("h4", { className: "text-xl font-bold text-[#ff6b6b] mb-3", style: { fontFamily: "Bebas Neue, sans-serif" }, children: "Pickleball Program" }),
            /* @__PURE__ */ e("p", { className: "text-gray-700", children: "Five 3-hour sessions including lessons and free play. Week concludes with a tournament mixing in local talent at your level." })
          ] }),
          /* @__PURE__ */ t("div", { className: "bg-white rounded-2xl p-6 border border-gray-200 shadow-sm", children: [
            /* @__PURE__ */ e("h4", { className: "text-xl font-bold text-[#ff6b6b] mb-3", style: { fontFamily: "Bebas Neue, sans-serif" }, children: "Cultural Experience" }),
            /* @__PURE__ */ e("p", { className: "text-gray-700", children: "Planned tourist excursions, cultural shows, meals, shopping, and exploring local culture. Restaurants $10-15, Pho just $2!" })
          ] })
        ] }),
        /* @__PURE__ */ e("p", { className: "text-gray-700 leading-relaxed", children: "There will be options for 3 or 4 star accommodations and we will aim to pair singles into double occupancy rooms if they want to save money." })
      ] }) }),
      /* @__PURE__ */ e("div", { id: "request-info", className: "scroll-mt-24", children: /* @__PURE__ */ t("div", { className: "bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 text-center shadow-sm", children: [
        /* @__PURE__ */ e("h3", { className: "text-3xl sm:text-4xl font-bold text-[#001f3f] mb-6", style: { fontFamily: "Bebas Neue, sans-serif" }, children: "Request Information" }),
        /* @__PURE__ */ e("p", { className: "text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto", children: "While we do have an itinerary and pricing in mind, we are not publishing it yet because we are hoping to hear feedback from those who are interested. If you are interested, we will send you what we are currently thinking and you can tell us what you like about it and what you would change." }),
        /* @__PURE__ */ e("button", { className: "px-8 py-4 bg-[#ff6b6b] text-white font-bold text-lg rounded-full hover:bg-[#ff5252] transition-all hover:scale-105 shadow-lg hover:shadow-xl", children: "I'M INTERESTED" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ e("section", { id: "swupr-leagues", className: "py-24 px-4 bg-white", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ e(
        "h2",
        {
          className: "text-6xl sm:text-7xl lg:text-8xl mb-12 text-[#FFC107]",
          style: { fontFamily: "Bebas Neue, sans-serif" },
          children: "SWUPR LEAGUES"
        }
      ),
      /* @__PURE__ */ e("div", { id: "how-it-works", className: "mb-20 scroll-mt-24", children: /* @__PURE__ */ t("div", { className: "bg-gradient-to-br from-[#FFC107]/10 to-white rounded-3xl p-8 sm:p-12 border border-[#FFC107]/30 shadow-sm", children: [
        /* @__PURE__ */ e("h3", { className: "text-3xl sm:text-4xl font-bold text-[#FFC107] mb-6", style: { fontFamily: "Bebas Neue, sans-serif" }, children: "How It Works" }),
        /* @__PURE__ */ e("p", { className: "text-lg text-gray-700 leading-relaxed mb-6", children: "Many people dislike DUPR. It can do some unexpected things with your rating. The main reason for this is that it does not get enough data. A very small number of each player's matches end up in the DUPR system so it is not a great reflection on the actual play." }),
        /* @__PURE__ */ e("p", { className: "text-lg text-gray-700 leading-relaxed mb-6", children: "SWUPR (short for Swan DUPR) is designed to take all your regular play and give you DUPR-like results. It shows you not only who was king of the court that day, but maybe the person who didn't win the most games, actually did much better than their rating and they can feel great about that. If you have a bunch of regular players, it will sort them into a ladder and show you who is moving up and down each week. It can handle multiple different groups and even different formats of playing." }),
        /* @__PURE__ */ e("p", { className: "text-lg text-gray-700 leading-relaxed", children: "The underlying tech is just Google Docs with some Javascript on top that lets it work sort of like a database with an entry layer and a reporting layer. For anyone who wants to use it, I will just make a copy that you can own. Please note: this is not a product priority for me so unless it takes off like wildfire, I am not likely to provide much ongoing upgrades or support." })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ e("div", { id: "admin-guide", className: "scroll-mt-24", children: /* @__PURE__ */ t("div", { className: "bg-white rounded-3xl p-8 border border-gray-200 h-full shadow-sm", children: [
          /* @__PURE__ */ e("h3", { className: "text-2xl sm:text-3xl font-bold text-[#001f3f] mb-6", style: { fontFamily: "Bebas Neue, sans-serif" }, children: "Admin Guide" }),
          /* @__PURE__ */ e("p", { className: "text-gray-700 leading-relaxed mb-6", children: "The guide to how to use the product is here." }),
          /* @__PURE__ */ e("button", { className: "px-6 py-3 bg-[#FFC107] text-[#001f3f] font-semibold rounded-full hover:bg-[#FFB300] transition-all shadow-sm hover:shadow", children: "View Guide" })
        ] }) }),
        /* @__PURE__ */ e("div", { id: "become-admin", className: "scroll-mt-24", children: /* @__PURE__ */ t("div", { className: "bg-white rounded-3xl p-8 border border-gray-200 h-full shadow-sm", children: [
          /* @__PURE__ */ e("h3", { className: "text-2xl sm:text-3xl font-bold text-[#001f3f] mb-6", style: { fontFamily: "Bebas Neue, sans-serif" }, children: "Become an Admin" }),
          /* @__PURE__ */ e("p", { className: "text-gray-700 leading-relaxed mb-6", children: "If you are interested in learning more and/or getting a copy, please fill in this info request." }),
          /* @__PURE__ */ e("button", { className: "px-6 py-3 bg-[#FFC107] text-[#001f3f] font-semibold rounded-full hover:bg-[#FFB300] transition-all shadow-sm hover:shadow", children: "Request Info" })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ e("section", { id: "about-swan", className: "py-24 px-4 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ t(
        "h2",
        {
          className: "text-6xl sm:text-7xl lg:text-8xl mb-12 text-[#001f3f]",
          style: { fontFamily: "Bebas Neue, sans-serif" },
          children: [
            "ABOUT ",
            /* @__PURE__ */ e("span", { className: "text-[#8BC34A]", children: "SWAN" })
          ]
        }
      ),
      /* @__PURE__ */ t("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ t("div", { className: "bg-gradient-to-br from-[#8BC34A]/10 to-white rounded-3xl p-8 sm:p-12 border border-[#8BC34A]/30 shadow-sm", children: [
          /* @__PURE__ */ e("h3", { className: "text-3xl font-bold text-[#001f3f] mb-6", style: { fontFamily: "Bebas Neue, sans-serif" }, children: "Pickleball Coaching" }),
          /* @__PURE__ */ t("div", { className: "bg-white rounded-2xl shadow-xl max-w-[320px] mx-auto overflow-hidden", children: [
            /* @__PURE__ */ e("div", { className: "relative h-20 overflow-hidden bg-white rounded-t-2xl", children: /* @__PURE__ */ t("svg", { viewBox: "0 0 400 120", className: "w-full h-full rounded-t-2xl", preserveAspectRatio: "none", children: [
              /* @__PURE__ */ e("path", { d: "M 0 0 L 0 120 Q 200 60 400 120 L 400 0 Z", fill: "#1e3a5f" }),
              /* @__PURE__ */ e("path", { d: "M 0 120 Q 200 65 400 120", stroke: "#d4145a", strokeWidth: "5", fill: "none" })
            ] }) }),
            /* @__PURE__ */ e("div", { className: "flex items-center justify-center pt-4 pb-6 px-6", children: /* @__PURE__ */ e("img", { src: k, alt: "Professional Pickleball Registry", className: "w-full max-w-[260px]" }) }),
            /* @__PURE__ */ t("div", { className: "px-6 pb-6 text-center", children: [
              /* @__PURE__ */ e("h4", { className: "text-xl font-bold text-[#001f3f] mb-1", children: "Robert Swanwick" }),
              /* @__PURE__ */ e("p", { className: "text-sm text-[#001f3f] mb-3", children: "Certified Pro Level Coach" }),
              /* @__PURE__ */ e("div", { className: "mb-4", children: /* @__PURE__ */ e("p", { className: "text-xs text-gray-700", children: "Serving Maryland and Naples, Florida" }) }),
              /* @__PURE__ */ e("button", { className: "w-full px-4 py-2 bg-[#d4145a] text-white font-semibold text-sm rounded hover:bg-[#b8124d] transition-all shadow-sm hover:shadow mb-4", children: "Click to Contact" }),
              /* @__PURE__ */ t("div", { className: "text-center space-y-0.5 text-[#001f3f] text-xs", children: [
                /* @__PURE__ */ e("p", { children: "Video Coaching" }),
                /* @__PURE__ */ e("p", { children: "Group & Private Lessons" }),
                /* @__PURE__ */ e("p", { children: "Drilling Sessions" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "bg-gradient-to-br from-[#ff6b6b]/10 to-white rounded-3xl p-8 sm:p-12 border border-[#ff6b6b]/30 shadow-sm", children: [
          /* @__PURE__ */ e("h3", { className: "text-3xl font-bold text-[#001f3f] mb-6", style: { fontFamily: "Bebas Neue, sans-serif" }, children: "Travels" }),
          /* @__PURE__ */ e("p", { className: "text-lg text-gray-700 leading-relaxed", children: "Combining a passion for pickleball with exploration, bringing unique vacation experiences to players worldwide." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ e("footer", { className: "py-12 px-4 bg-white border-t border-gray-200", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto text-center", children: [
      /* @__PURE__ */ e("img", { src: u, alt: "PiqlPlus", className: "h-16 mx-auto mb-6" }),
      /* @__PURE__ */ e("p", { className: "text-gray-600", children: "© 2026 PiqlPlus. All rights reserved." })
    ] }) })
  ] });
}
const L = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: I
}, Symbol.toStringTag, { value: "Module" }));
export {
  M as Code0_8
};
