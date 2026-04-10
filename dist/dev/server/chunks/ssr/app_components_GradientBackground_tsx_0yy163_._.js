module.exports = [
"[project]/app/components/GradientBackground.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GradientBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function GradientBackground() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [prefersReducedMotion, setPrefersReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check for reduced motion preference
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);
        const handleChange = (e)=>{
            setPrefersReducedMotion(e.matches);
        };
        mediaQuery.addEventListener("change", handleChange);
        return ()=>mediaQuery.removeEventListener("change", handleChange);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const container = containerRef.current;
        if (!container || prefersReducedMotion) return;
        // Create animated gradient effect
        let animationFrameId;
        let time = 0;
        const animate = ()=>{
            time += 0.003;
            // Create multiple gradient layers with visible purple-based colors
            const gradients = [
                {
                    x: 50 + Math.sin(time) * 15,
                    y: 30 + Math.cos(time * 0.8) * 15,
                    size: 100 + Math.sin(time * 0.5) * 30
                },
                {
                    x: 20 + Math.cos(time * 0.7) * 20,
                    y: 70 + Math.sin(time * 0.6) * 20,
                    size: 90 + Math.cos(time * 0.4) * 25
                },
                {
                    x: 80 + Math.sin(time * 0.9) * 18,
                    y: 50 + Math.cos(time * 0.5) * 18,
                    size: 85 + Math.sin(time * 0.6) * 28
                }
            ];
            const gradientString = gradients.map((grad, index)=>`radial-gradient(circle ${grad.size}% at ${grad.x}% ${grad.y}%, ${index === 0 ? "rgba(139, 92, 246, 0.6)" : index === 1 ? "rgba(168, 85, 247, 0.55)" : "rgba(124, 58, 237, 0.5)"}, rgba(139, 92, 246, 0.1) 40%, transparent 70%)`).join(", ");
            container.style.background = `
        ${gradientString},
        radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.3), rgba(124, 58, 237, 0.15) 50%, transparent 70%),
        radial-gradient(circle at 100% 100%, rgba(168, 85, 247, 0.25), rgba(139, 92, 246, 0.1) 50%, transparent 70%),
        linear-gradient(135deg, #1a0d2e 0%, #2d1b4e 25%, #3d2a5e 50%, #2d1b4e 75%, #1a0d2e 100%)
      `;
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();
        return ()=>{
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [
        prefersReducedMotion
    ]);
    // Static fallback gradient that's always visible - vibrant purple-based gradient
    const staticGradient = `
    radial-gradient(circle 120% at 50% 20%, rgba(139, 92, 246, 0.6), rgba(124, 58, 237, 0.35) 35%, rgba(139, 92, 246, 0.15) 55%, transparent 75%),
    radial-gradient(circle 110% at 20% 80%, rgba(168, 85, 247, 0.55), rgba(139, 92, 246, 0.3) 35%, rgba(168, 85, 247, 0.15) 55%, transparent 75%),
    radial-gradient(circle 100% at 80% 50%, rgba(124, 58, 237, 0.5), rgba(168, 85, 247, 0.3) 35%, rgba(124, 58, 237, 0.15) 55%, transparent 75%),
    radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.35), rgba(124, 58, 237, 0.2) 45%, transparent 65%),
    radial-gradient(circle at 100% 100%, rgba(168, 85, 247, 0.3), rgba(139, 92, 246, 0.15) 45%, transparent 65%),
    linear-gradient(135deg, #1a0d2e 0%, #2d1b4e 15%, #3d2a5e 30%, #4d3a6e 45%, #5d4a7e 50%, #4d3a6e 55%, #3d2a5e 70%, #2d1b4e 85%, #1a0d2e 100%)
  `.trim().replace(/\s+/g, ' ');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "fixed top-0 left-0 right-0 bottom-0 z-0 pointer-events-none",
        style: {
            background: staticGradient
        },
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/app/components/GradientBackground.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_components_GradientBackground_tsx_0yy163_._.js.map