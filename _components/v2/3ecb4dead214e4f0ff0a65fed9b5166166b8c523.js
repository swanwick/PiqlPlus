const B = () => Promise.resolve().then(() => U), { Fragment: z, jsx: e, jsxs: l } = globalThis.__GLOBALS__.ReactJSXRuntime;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
globalThis.__GLOBALS__.React.Children;
globalThis.__GLOBALS__.React.cloneElement;
({
  ...globalThis.__GLOBALS__.React
});
const { Component: W, createContext: I, createElement: j, createFactory: V, createRef: M, forwardRef: $, Fragment: H, isValidElement: q, lazy: K, memo: Y, Profiler: J, PureComponent: Q, startTransition: X, StrictMode: Z, Suspense: D, use: ee, useCallback: ae, useContext: le, useDebugValue: re, useDeferredValue: te, useEffect: se, useId: ne, useImperativeHandle: ce, useInsertionEffect: oe, useLayoutEffect: ie, useMemo: de, useReducer: he, useRef: pe, useState: m, useSyncExternalStore: me, useTransition: ue, version: ge, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ye } = globalThis.__GLOBALS__.React;
function k({ formData: a, updateFormData: t, showValidationErrors: s }) {
  const c = s && !a.name.trim() ? "#EF4444" : "#9CA3AF", o = s && !a.email.trim() ? "#EF4444" : "#9CA3AF";
  return /* @__PURE__ */ l("div", { className: "space-y-6", children: [
    /* @__PURE__ */ l("div", { children: [
      /* @__PURE__ */ e("label", { htmlFor: "name", className: "block mb-2", style: { color: "#1E3A5F" }, children: "Name" }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          id: "name",
          value: a.name,
          onChange: (d) => t({ name: d.target.value }),
          className: "w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:border-transparent placeholder-shown",
          style: {
            "--tw-ring-color": "#4CAF50",
            "--tw-placeholder-color": c
          },
          placeholder: "Enter your name"
        }
      ),
      /* @__PURE__ */ e("style", { children: `
          #name::placeholder {
            color: ${c};
          }
        ` })
    ] }),
    /* @__PURE__ */ l("div", { children: [
      /* @__PURE__ */ e("label", { htmlFor: "email", className: "block mb-2", style: { color: "#1E3A5F" }, children: "Email" }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "email",
          id: "email",
          value: a.email,
          onChange: (d) => t({ email: d.target.value }),
          className: "w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:border-transparent",
          style: { "--tw-ring-color": "#4CAF50" },
          placeholder: "Enter your email"
        }
      ),
      /* @__PURE__ */ e("style", { children: `
          #email::placeholder {
            color: ${o};
          }
        ` })
    ] })
  ] });
}
function E({
  formData: a,
  updateFormData: t,
  privateSliderTouched: s,
  setPrivateSliderTouched: c,
  organizeSliderTouched: o,
  setOrganizeSliderTouched: d,
  showValidationErrors: h
}) {
  return /* @__PURE__ */ l("div", { className: "space-y-8", children: [
    /* @__PURE__ */ l("div", { children: [
      /* @__PURE__ */ e("label", { htmlFor: "timesPerWeek", className: "block mb-2", style: { color: "#1E3A5F" }, children: "How many times per week do you play?" }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "number",
          id: "timesPerWeek",
          value: a.timesPerWeek,
          onChange: (r) => t({ timesPerWeek: r.target.value }),
          min: "0",
          max: "99",
          className: "px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:border-transparent",
          style: { width: "9ch", "--tw-ring-color": "#4CAF50" },
          placeholder: "0"
        }
      )
    ] }),
    /* @__PURE__ */ l("div", { children: [
      /* @__PURE__ */ e("label", { htmlFor: "privateGames", className: "block mb-2", style: { color: "#1E3A5F" }, children: "What % of your games are private (vs. open play)" }),
      /* @__PURE__ */ l("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "range",
            id: "privateGames",
            min: "0",
            max: "100",
            value: a.privateGamesPercentage,
            onChange: (r) => {
              c(!0), t({ privateGamesPercentage: Number(r.target.value) });
            },
            className: "flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer",
            style: {
              accentColor: s ? "#4CAF50" : "#9CA3AF"
            }
          }
        ),
        /* @__PURE__ */ l("span", { className: "min-w-[4rem] text-right", style: { color: "#1E3A5F" }, children: [
          a.privateGamesPercentage,
          "%"
        ] })
      ] }),
      !s && /* @__PURE__ */ e("p", { className: "text-sm mt-1", style: { color: h ? "#EF4444" : "#6B7280" }, children: "Click and drag to set" })
    ] }),
    /* @__PURE__ */ l("div", { children: [
      /* @__PURE__ */ e("label", { htmlFor: "organizeGames", className: "block mb-2", style: { color: "#1E3A5F" }, children: "Of the private games, how many do you organize?" }),
      /* @__PURE__ */ l("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "range",
            id: "organizeGames",
            min: "0",
            max: "100",
            value: a.organizePercentage,
            onChange: (r) => {
              d(!0), t({ organizePercentage: Number(r.target.value) });
            },
            className: "flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer",
            style: {
              accentColor: o ? "#4CAF50" : "#9CA3AF"
            }
          }
        ),
        /* @__PURE__ */ l("span", { className: "min-w-[4rem] text-right", style: { color: "#1E3A5F" }, children: [
          a.organizePercentage,
          "%"
        ] })
      ] }),
      !o && /* @__PURE__ */ e("p", { className: "text-sm mt-1", style: { color: h ? "#EF4444" : "#6B7280" }, children: "Click and drag to set" })
    ] })
  ] });
}
const w = [
  "Finding the right people",
  "Finding enough people",
  "People cancelling",
  "Finding courts",
  "Time spent on communications",
  "Tracking who is in"
], _ = [
  "TeamReach",
  "Picklehead",
  "Playtime Scheduler",
  "Calendar App",
  "Texts",
  "Whatsapp",
  "None"
];
function O({ formData: a, updateFormData: t, showValidationErrors: s }) {
  const c = (r, i) => {
    const p = i ? [...a.hardestParts, r] : a.hardestParts.filter((n) => n !== r);
    t({ hardestParts: p });
  }, o = (r, i) => {
    const p = i ? [...a.appsUsed, r] : a.appsUsed.filter((n) => n !== r);
    t({ appsUsed: p });
  }, d = s && a.hardestParts.includes("Other") && !a.hardestPartOther.trim() ? "#EF4444" : "#9CA3AF", h = s && a.appsUsed.includes("Other") && !a.appsUsedOther.trim() ? "#EF4444" : "#9CA3AF";
  return /* @__PURE__ */ l("div", { className: "space-y-8", children: [
    /* @__PURE__ */ l("div", { children: [
      /* @__PURE__ */ e("label", { className: "block mb-3", style: { color: "#1E3A5F" }, children: "What are the hardest parts of organizing games? (check all that apply)" }),
      /* @__PURE__ */ l("div", { className: "grid grid-cols-2 gap-x-6 gap-y-2", children: [
        w.map((r) => /* @__PURE__ */ l("label", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "checkbox",
              checked: a.hardestParts.includes(r),
              onChange: (i) => c(r, i.target.checked),
              className: "w-4 h-4 border-gray-300 rounded",
              style: { accentColor: "#4CAF50" }
            }
          ),
          /* @__PURE__ */ e("span", { className: "text-gray-700", children: r })
        ] }, r)),
        /* @__PURE__ */ l("label", { className: "flex items-start space-x-3 col-span-2", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "checkbox",
              checked: a.hardestParts.includes("Other"),
              onChange: (r) => c("Other", r.target.checked),
              className: "w-4 h-4 mt-1 border-gray-300 rounded",
              style: { accentColor: "#4CAF50" }
            }
          ),
          /* @__PURE__ */ l("div", { className: "flex-1", children: [
            /* @__PURE__ */ e("span", { className: "text-gray-700", children: "Other (please explain)" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                id: "hardestPartOther",
                value: a.hardestPartOther,
                onChange: (r) => t({ hardestPartOther: r.target.value }),
                disabled: !a.hardestParts.includes("Other"),
                className: "w-full mt-2 px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed",
                style: { "--tw-ring-color": "#4CAF50" },
                placeholder: "Please explain"
              }
            ),
            /* @__PURE__ */ e("style", { children: `
                #hardestPartOther::placeholder {
                  color: ${d};
                }
              ` })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l("div", { children: [
      /* @__PURE__ */ e("label", { className: "block mb-3", style: { color: "#1E3A5F" }, children: "Which apps have you tried to organize games? (check all that apply)" }),
      /* @__PURE__ */ l("div", { className: "grid grid-cols-2 gap-x-6 gap-y-2", children: [
        _.map((r) => /* @__PURE__ */ l("label", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "checkbox",
              checked: a.appsUsed.includes(r),
              onChange: (i) => o(r, i.target.checked),
              className: "w-4 h-4 border-gray-300 rounded",
              style: { accentColor: "#4CAF50" }
            }
          ),
          /* @__PURE__ */ e("span", { className: "text-gray-700", children: r })
        ] }, r)),
        /* @__PURE__ */ l("label", { className: "flex items-start space-x-3 col-span-2", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "checkbox",
              checked: a.appsUsed.includes("Other"),
              onChange: (r) => o("Other", r.target.checked),
              className: "w-4 h-4 mt-1 border-gray-300 rounded",
              style: { accentColor: "#4CAF50" }
            }
          ),
          /* @__PURE__ */ l("div", { className: "flex-1", children: [
            /* @__PURE__ */ e("span", { className: "text-gray-700", children: "Other" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                id: "appsUsedOther",
                value: a.appsUsedOther,
                onChange: (r) => t({ appsUsedOther: r.target.value }),
                disabled: !a.appsUsed.includes("Other"),
                className: "w-full mt-2 px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed",
                style: { "--tw-ring-color": "#4CAF50" },
                placeholder: "Please specify"
              }
            ),
            /* @__PURE__ */ e("style", { children: `
                #appsUsedOther::placeholder {
                  color: ${h};
                }
              ` })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function S({ formData: a, updateFormData: t, hasTriedSubmit: s }) {
  const c = s ? "Please share anything that comes to mind" : "Share your thoughts...";
  return /* @__PURE__ */ l("div", { children: [
    /* @__PURE__ */ e("label", { htmlFor: "hopesForNewApp", className: "block mb-2", style: { color: "#1E3A5F" }, children: "What are you most hoping will be in a new app that helps you organize games?" }),
    /* @__PURE__ */ e(
      "textarea",
      {
        id: "hopesForNewApp",
        value: a.hopesForNewApp,
        onChange: (o) => t({ hopesForNewApp: o.target.value }),
        rows: 6,
        className: "w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:border-transparent resize-y",
        style: { "--tw-ring-color": "#4CAF50" },
        placeholder: c
      }
    )
  ] });
}
const x = globalThis.__GLOBALS__.getAssetURL("aada27feede8a3a84a3ff0e91e6c6100909e179e.png");
function T() {
  return /* @__PURE__ */ l("div", { className: "min-h-screen", style: { backgroundColor: "#E8EEF3" }, children: [
    /* @__PURE__ */ e("div", { className: "py-6 px-4", style: { backgroundColor: "#E8EEF3" }, children: /* @__PURE__ */ l("div", { className: "max-w-2xl mx-auto flex items-center justify-center", children: [
      /* @__PURE__ */ e("img", { src: x, alt: "Private Pickle Logo", className: "h-16" }),
      /* @__PURE__ */ l("div", { className: "ml-4", children: [
        /* @__PURE__ */ l("div", { className: "flex items-baseline", children: [
          /* @__PURE__ */ e("span", { className: "text-2xl", style: { color: "#1E3A5F" }, children: "PRIVATE" }),
          /* @__PURE__ */ e("span", { className: "text-2xl ml-1", style: { color: "#4CAF50" }, children: "PICKLE" })
        ] }),
        /* @__PURE__ */ e("p", { className: "text-sm", style: { color: "#5A7A9B" }, children: "Organize Private Pickleball Games" })
      ] })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "max-w-2xl mx-auto px-4 py-4", children: /* @__PURE__ */ l("div", { className: "bg-white rounded-2xl shadow-lg p-12 text-center", children: [
      /* @__PURE__ */ e("h1", { className: "text-3xl mb-6", style: { color: "#1E3A5F" }, children: "Thank You!" }),
      /* @__PURE__ */ e("p", { className: "text-lg text-gray-700 mb-4", children: "Have fun with the app. We look forward to learning what you think could be improved." }),
      /* @__PURE__ */ e("p", { className: "text-lg text-gray-700 mb-8", children: "Please keep in mind that this is an Alpha version and so there could be some bugs. We appreciate any that you report." }),
      /* @__PURE__ */ e("p", { className: "text-lg text-gray-700 mb-8", children: "Click the logo below to sign-up for the app and begin using it." }),
      /* @__PURE__ */ l(
        "a",
        {
          href: "https://private.piqlplus.com",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex flex-col items-center transition-transform hover:scale-105",
          children: [
            /* @__PURE__ */ e("img", { src: x, alt: "Private Pickle Logo", className: "w-48 mx-auto mb-4" }),
            /* @__PURE__ */ e(
              "button",
              {
                className: "px-8 py-3 text-white rounded-lg text-lg",
                style: { backgroundColor: "#4CAF50" },
                children: "Get Started"
              }
            )
          ]
        }
      )
    ] }) })
  ] });
}
function L({ currentPage: a, totalPages: t }) {
  return /* @__PURE__ */ l("div", { className: "flex items-center justify-center space-x-2", children: [
    Array.from({ length: t }, (s, c) => c + 1).map((s) => /* @__PURE__ */ e(
      "div",
      {
        className: "h-2 rounded-full transition-all duration-300",
        style: {
          width: s === a ? "32px" : "8px",
          backgroundColor: s === a ? "#4CAF50" : "#D1D5DB"
        }
      },
      s
    )),
    /* @__PURE__ */ l("span", { className: "ml-4 text-sm text-gray-500", children: [
      "Page ",
      a,
      " of ",
      t
    ] })
  ] });
}
function R() {
  const [a, t] = m(1), [s, c] = m(!1), [o, d] = m(!1), [h, r] = m(!1), [i, p] = m(!1), [n, N] = m({
    name: "",
    email: "",
    timesPerWeek: "",
    privateGamesPercentage: 50,
    organizePercentage: 50,
    hardestParts: [],
    hardestPartOther: "",
    appsUsed: [],
    appsUsedOther: "",
    hopesForNewApp: ""
  }), b = 4, u = (g) => {
    N({ ...n, ...g });
  }, v = () => n.name.trim() !== "" && n.email.trim() !== "", C = () => n.timesPerWeek.trim() !== "" && o && h, F = () => n.hardestParts.length > 0 && n.appsUsed.length > 0, y = () => a === 1 ? v() : a === 2 ? C() : a === 3 ? F() : !0, f = () => {
    y() ? (p(!1), t((g) => Math.min(g + 1, b))) : p(!0);
  }, A = () => {
    p(!1), t((g) => Math.max(g - 1, 1));
  }, P = () => {
    s ? (console.log("Survey submitted:", n), t(5)) : (c(!0), u({ hopesForNewApp: "" }));
  };
  return a === 5 ? /* @__PURE__ */ e(T, {}) : /* @__PURE__ */ l("div", { className: "min-h-screen", style: { backgroundColor: "#E8EEF3" }, children: [
    /* @__PURE__ */ e("div", { className: "py-6 px-4", style: { backgroundColor: "#E8EEF3" }, children: /* @__PURE__ */ l("div", { className: "max-w-2xl mx-auto flex items-center justify-center", children: [
      /* @__PURE__ */ e("img", { src: x, alt: "Private Pickle Logo", className: "h-16" }),
      /* @__PURE__ */ l("div", { className: "ml-4", children: [
        /* @__PURE__ */ l("div", { className: "flex items-baseline", children: [
          /* @__PURE__ */ e("span", { className: "text-2xl", style: { color: "#1E3A5F" }, children: "PRIVATE" }),
          /* @__PURE__ */ e("span", { className: "text-2xl ml-1", style: { color: "#4CAF50" }, children: "PICKLE" })
        ] }),
        /* @__PURE__ */ e("p", { className: "text-sm", style: { color: "#5A7A9B" }, children: "Organize Private Pickleball Games" })
      ] })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "max-w-2xl mx-auto px-4 py-4", children: /* @__PURE__ */ l("div", { className: "bg-white rounded-2xl shadow-lg p-8", children: [
      /* @__PURE__ */ l("div", { className: "mb-6", children: [
        /* @__PURE__ */ e("h1", { className: "text-2xl mb-4", style: { color: "#1E3A5F" }, children: "Alpha Tester Survey" }),
        a === 1 && /* @__PURE__ */ e("p", { className: "text-gray-600 mb-6", children: "Thank you for checking out Private Pickle. Collecting a little bit of data will help us baseline your experience. It should take 1-2 minutes." }),
        /* @__PURE__ */ e(L, { currentPage: a, totalPages: b })
      ] }),
      /* @__PURE__ */ l("div", { className: "mb-8", children: [
        a === 1 && /* @__PURE__ */ e(
          k,
          {
            formData: n,
            updateFormData: u,
            showValidationErrors: i
          }
        ),
        a === 2 && /* @__PURE__ */ e(
          E,
          {
            formData: n,
            updateFormData: u,
            privateSliderTouched: o,
            setPrivateSliderTouched: d,
            organizeSliderTouched: h,
            setOrganizeSliderTouched: r,
            showValidationErrors: i
          }
        ),
        a === 3 && /* @__PURE__ */ e(
          O,
          {
            formData: n,
            updateFormData: u,
            showValidationErrors: i
          }
        ),
        a === 4 && /* @__PURE__ */ e(
          S,
          {
            formData: n,
            updateFormData: u,
            hasTriedSubmit: s
          }
        )
      ] }),
      /* @__PURE__ */ l("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ e(
          "button",
          {
            onClick: A,
            disabled: a === 1,
            className: "px-6 py-2.5 border-2 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
            style: { borderColor: "#D1D5DB" },
            children: "Back"
          }
        ),
        a < b ? /* @__PURE__ */ e(
          "button",
          {
            onClick: f,
            className: "px-6 py-2.5 rounded-lg transition-opacity",
            style: {
              backgroundColor: y() ? "#4CAF50" : "#FFFFFF",
              color: y() ? "#FFFFFF" : "#9CA3AF",
              border: y() ? "none" : "2px solid #E5E7EB"
            },
            children: "Next"
          }
        ) : /* @__PURE__ */ e(
          "button",
          {
            onClick: P,
            className: "px-6 py-2.5 text-white rounded-lg hover:opacity-90 transition-opacity",
            style: { backgroundColor: "#4CAF50" },
            children: "Finish"
          }
        )
      ] })
    ] }) })
  ] });
}
function G() {
  return /* @__PURE__ */ e("div", { className: "min-h-screen", style: { backgroundColor: "#E8EEF3" }, children: /* @__PURE__ */ e(R, {}) });
}
const U = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: G
}, Symbol.toStringTag, { value: "Module" }));
export {
  B as Code0_8
};
