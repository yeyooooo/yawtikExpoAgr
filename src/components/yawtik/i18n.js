import { createContext, useContext, useState, useEffect, useCallback } from "react";

export const translations = {
    en: {
        nav: {
            links: [
                { id: "home", label: "Home" },
                { id: "methodology", label: "Approach" },
                { id: "expertise", label: "Coverage" },
                { id: "work", label: "Fit" },
                { id: "pricing", label: "Investment" },
            ],
            cta: "Request Quote",
        },
        hero: {
            badge: "Agricultural marketing, content and ads for serious brands in the field.",
            title: "Your ag company should look serious.",
            sub: "We build content, brand direction and paid media for growers, ag companies, suppliers and technical teams that need to look serious in front of distributors, producers and decision-makers. From field coverage to campaign structure, the goal is simple: show up with more authority and generate better conversations.",
            cta1: "Quote My Project",
            trusted: "Built for agricultural companies, suppliers and technical teams.",
            panelTag: "Regional coverage",
            panelLocation: "Ciudad Guzman and surrounding areas",
            panelBase: "Starting investment",
            panelCoverage: "Coverage",
            panelCoverageText: "Field, corporate content, ads and advisor coordination.",
            partnerTags: ["FIELD", "BRAND", "ADS", "ADVISORS", "CONTENT"],
        },
        methodology: {
            badge: "How We Work",
            title: "Field, brand and media buying in one operating system.",
            sub: "This is not a generic social media package. We start with a commercial diagnosis, define the technical narrative with your team, coordinate production in the right context and activate content plus ads according to territory, season and sales objective.",
            cta: "Talk Through The Project",
            pillars: [
                {
                    t: "Commercial Diagnosis",
                    d: "We define target audience, offer, message and objective before recording anything.",
                },
                {
                    t: "Field + Corporate Production",
                    d: "We capture operation, people, technical credibility and visual order across the brand.",
                },
                {
                    t: "Distribution + Follow-up",
                    d: "We turn that material into content, campaigns and ongoing decision-making.",
                },
            ],
        },
        chess: {
            badge: "Execution Fronts",
            title: "From the field to a stronger market presence.",
            r1t: "Field coverage that actually feels credible.",
            r1b: "We document plots, process, applications, demos, results, teams and daily operation so the company stops looking distant or improvised on social media.",
            r1c: "Request Proposal",
            r1label: "FIELD · OPERATION",
            r2t: "Corporate content that helps sell trust.",
            r2b: "Short-form video, institutional pieces, social content and ad assets built for agricultural companies that need to look solid in front of growers, distributors, advisors and commercial allies.",
            r2c: "See The Approach",
            r2label: "BRAND · DIRECTION",
        },
        grid: {
            badge: "Why This Fits",
            title: "A more consultative model for agro.",
            pillarLabel: "Front",
            items: [
                {
                    t: "Technical Narrative",
                    d: "We translate what your company knows into content that sounds clear, solid and commercially useful.",
                },
                {
                    t: "Field And Office Coverage",
                    d: "Your brand needs to look consistent both where the crop happens and where decisions get made.",
                },
                {
                    t: "Advisor Coordination",
                    d: "If agronomists or technical advisors are part of the sales process, we structure the content around them instead of around generic trends.",
                },
                {
                    t: "Media With Intent",
                    d: "Content is not enough on its own. We also shape the ad base so attention turns into qualified conversations.",
                },
            ],
        },
        stats: {
            items: [
                { v: "From $12K", l: "Starting monthly investment" },
                { v: "2 fronts", l: "Field + corporate" },
                { v: "1 system", l: "Content + ads" },
                { v: "Ciudad Guzman and surrounding areas", l: "Coverage area" },
            ],
        },
        pricing: {
            badge: "Investment",
            title: "Projects from $12,000 MXN / month.",
            sub: "A consultative base for agricultural companies that need better content, clearer messaging and a serious digital presence. Final scope is quoted directly according to coverage, filming frequency, ad spend and level of technical coordination.",
            startingAt: "$12,000 MXN",
            startingLabel: "Recommended starting point for companies in Ciudad Guzman and surrounding areas.",
            includesTitle: "This base can include:",
            includes: [
                "Commercial and communication diagnosis.",
                "Monthly content plan and publishing angle.",
                "1 recording day in field or corporate context.",
                "Editing of short-form pieces and key cutdowns.",
                "Creative base for paid campaigns.",
                "Monthly follow-up and next-step adjustments.",
            ],
            factorsTitle: "Final quote changes based on:",
            factors: [
                "Number of brands, products or lines involved.",
                "Coverage in field, offices or multiple locations.",
                "Frequency of shoots, visits and approvals.",
                "Coordination with engineers or technical advisors.",
                "Media buying budget and campaign depth.",
                "Need for institutional, recruitment or event pieces.",
            ],
            note: "If all you need is basic posting, this is probably not the right format. This proposal is built for companies that want a more serious commercial presence.",
            cta: "Request Personalized Quote",
            secondary: "View Contact Options",
        },
        cta: {
            title: "Build a brand that looks ready to sell.",
            sub: "Let's review your current image, what you are actually trying to sell, and what kind of content and media buying makes sense for your company, your territory and your technical team.",
            book: "Quote On WhatsApp",
            services: "View Starting Investment",
        },
        contact: {
            title: "Let's review your case.",
            sub: "Choose the channel you prefer. All options go directly to the Yawtik team.",
            whatsapp: "WhatsApp",
            call: "Call",
            email: "Email",
            whatsappDesc: "Fastest way to discuss your company, your goals and the next step.",
            callDesc: "Useful if you prefer to explain the case quickly by phone.",
            emailDesc: "Best if you want to send context, products, territories or technical details.",
            close: "Close",
            whatsappMsg: "Hello Yawtik CC, I want a quote for marketing, content and ads for an agricultural company. We are interested in a more corporate image, field coverage and a consultative proposal.",
            emailSubject: "Quote Request - Agricultural Landing / Yawtik CC",
            emailBody: "Hello Yawtik CC team,\n\nI want a quote for marketing, content and ads for our agricultural company.\n\nCompany name:\nWhat we sell:\nMain territory or city:\nDo engineers or technical advisors participate in the process?:\nDo we need field content, corporate content or both?:\nApproximate monthly ad budget:\nBest time to talk:\n\nThank you.",
        },
        footer: {
            copy: "© 2026 Yawtik CC. Marketing and content for agricultural brands.",
            links: [
                { label: "Instagram", href: "https://www.instagram.com/yawtik_cc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                { label: "Contact", href: "#contact" },
            ],
        },
    },
    es: {
        nav: {
            links: [
                { id: "home", label: "Inicio" },
                { id: "methodology", label: "Enfoque" },
                { id: "expertise", label: "Cobertura" },
                { id: "work", label: "Encaje" },
                { id: "pricing", label: "Inversion" },
            ],
            cta: "Solicitar cotizacion",
        },
        hero: {
            badge: "Marketing, contenido y ads para marcas serias del agro.",
            title: "Tu empresa del agro debe verse seria.",
            sub: "Disenamos contenido, direccion de marca y pauta para productores, empresas del agro, comercializadoras, viveros y equipos tecnicos que necesitan verse serios frente a distribuidores, productores y tomadores de decision. Desde cobertura en campo hasta estructura de anuncios, la meta es una: llegar con mas autoridad y abrir mejores conversaciones.",
            cta1: "Cotizar mi proyecto",
            trusted: "Pensado para empresas agricolas, proveedores y equipos tecnicos.",
            panelTag: "Cobertura regional",
            panelLocation: "Ciudad Guzman y alrededores",
            panelBase: "Inversion base",
            panelCoverage: "Cobertura",
            panelCoverageText: "Campo, contenido corporativo, pauta y coordinacion con asesores.",
            partnerTags: ["CAMPO", "MARCA", "ADS", "ASESORES", "CONTENIDO"],
        },
        methodology: {
            badge: "Como trabajamos",
            title: "Campo, marca y pauta en un mismo sistema.",
            sub: "No es un paquete generico de redes. Arrancamos con diagnostico comercial, definimos la narrativa tecnica junto con tu equipo, coordinamos la produccion en el contexto correcto y activamos contenido mas anuncios segun plaza, temporada y objetivo comercial.",
            cta: "Hablar del proyecto",
            pillars: [
                {
                    t: "Diagnostico comercial",
                    d: "Definimos audiencia, oferta, mensaje y objetivo antes de prender una camara.",
                },
                {
                    t: "Produccion en campo y corporativa",
                    d: "Capturamos operacion, gente, credibilidad tecnica y orden visual en toda la marca.",
                },
                {
                    t: "Distribucion y seguimiento",
                    d: "Convertimos ese material en contenido, campanas y decisiones de mejora continuas.",
                },
            ],
        },
        chess: {
            badge: "Frentes de ejecucion",
            title: "Del campo a una presencia comercial mas fuerte.",
            r1t: "Cobertura en campo que de verdad se siente creible.",
            r1b: "Documentamos parcelas, procesos, aplicaciones, demos, resultados, equipo y operacion diaria para que la empresa deje de verse lejana o improvisada en redes.",
            r1c: "Solicitar propuesta",
            r1label: "CAMPO · OPERACION",
            r2t: "Contenido corporativo para vender confianza.",
            r2b: "Reels, piezas institucionales, contenido social y materiales para anuncios pensados para empresas agricolas que necesitan verse solidas frente a productores, distribuidores, asesores y aliados comerciales.",
            r2c: "Ver el enfoque",
            r2label: "MARCA · DIRECCION",
        },
        grid: {
            badge: "Por que si encaja",
            title: "Un modelo mas consultivo para agro.",
            pillarLabel: "Frente",
            items: [
                {
                    t: "Narrativa tecnica",
                    d: "Traducimos lo que tu empresa sabe en contenido que suena claro, serio y comercialmente util.",
                },
                {
                    t: "Cobertura de campo y oficina",
                    d: "Tu marca tiene que verse consistente tanto donde sucede el cultivo como donde se toman decisiones.",
                },
                {
                    t: "Coordinacion con asesores",
                    d: "Si los ingenieros o asesores tecnicos forman parte del proceso de venta, estructuramos el contenido alrededor de ellos y no alrededor de tendencias vacias.",
                },
                {
                    t: "Pauta con intencion",
                    d: "El contenido solo no basta. Tambien disenamos la base de anuncios para convertir atencion en conversaciones calificadas.",
                },
            ],
        },
        stats: {
            items: [
                { v: "Desde $12K", l: "Inversion base mensual" },
                { v: "2 frentes", l: "Campo + corporativo" },
                { v: "1 sistema", l: "Contenido + ads" },
                { v: "Ciudad Guzman y alrededores", l: "Zona de cobertura" },
            ],
        },
        pricing: {
            badge: "Inversion",
            title: "Proyectos desde $12,000 MXN / mes.",
            sub: "Es una base consultiva para empresas agricolas que necesitan mejor contenido, mensaje mas claro y presencia digital seria. El alcance final se cotiza directo segun cobertura, frecuencia de grabacion, pauta y nivel de coordinacion tecnica.",
            startingAt: "$12,000 MXN",
            startingLabel: "Punto de arranque recomendado para empresas en Ciudad Guzman y alrededores.",
            includesTitle: "Esta base puede incluir:",
            includes: [
                "Diagnostico comercial y de comunicacion.",
                "Plan mensual de contenido y angulos de publicacion.",
                "1 jornada de grabacion en campo u oficina.",
                "Edicion de piezas cortas y cortes clave.",
                "Base creativa para campanas de pauta.",
                "Seguimiento mensual y ajustes de siguientes pasos.",
            ],
            factorsTitle: "La cotizacion final cambia segun:",
            factors: [
                "Numero de marcas, productos o lineas involucradas.",
                "Cobertura en campo, oficinas o varias plazas.",
                "Frecuencia de grabaciones, visitas y aprobaciones.",
                "Coordinacion con ingenieros o asesores tecnicos.",
                "Presupuesto de pauta y profundidad de campana.",
                "Necesidad de piezas institucionales, reclutamiento o eventos.",
            ],
            note: "Si solo buscas manejo basico de redes, probablemente este no es el formato correcto. Esta propuesta esta pensada para empresas que quieren una presencia comercial mucho mas seria.",
            cta: "Solicitar cotizacion personalizada",
            secondary: "Ver opciones de contacto",
        },
        cta: {
            title: "Haz que tu marca se vea lista para vender.",
            sub: "Revisemos su imagen actual, que estan tratando de vender de verdad y que tipo de contenido y pauta tiene sentido para su empresa, su plaza y su equipo tecnico.",
            book: "Cotizar por WhatsApp",
            services: "Ver inversion base",
        },
        contact: {
            title: "Revisemos tu caso.",
            sub: "Elige el canal que prefieras. Todas las opciones llegan directo al equipo de Yawtik.",
            whatsapp: "WhatsApp",
            call: "Llamada",
            email: "Correo",
            whatsappDesc: "La via mas rapida para hablar de tu empresa, tus objetivos y siguientes pasos.",
            callDesc: "Util si prefieres explicar el caso rapido por telefono.",
            emailDesc: "Ideal si quieres mandar contexto, productos, plazas o detalles tecnicos.",
            close: "Cerrar",
            whatsappMsg: "Hola Yawtik CC, quiero cotizar marketing, contenido y ads para una empresa agricola. Nos interesa una imagen mas corporativa, cobertura en campo y una propuesta consultiva.",
            emailSubject: "Solicitud de cotizacion - Landing Agro / Yawtik CC",
            emailBody: "Hola equipo Yawtik CC,\n\nQuiero cotizar marketing, contenido y ads para nuestra empresa agricola.\n\nNombre de la empresa:\nQue venden:\nPlaza o ciudad principal:\nParticipan ingenieros o asesores tecnicos en el proceso?:\nNecesitan contenido en campo, corporativo o ambos?:\nPresupuesto mensual aproximado en pauta:\nMejor horario para hablar:\n\nGracias.",
        },
        footer: {
            copy: "© 2026 Yawtik CC. Marketing y contenido para marcas del agro.",
            links: [
                { label: "Instagram", href: "https://www.instagram.com/yawtik_cc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                { label: "Contacto", href: "#contact" },
            ],
        },
    },
};

const DEFAULT_LANG = "es";
const LANG_STORAGE_KEY = "yawtik-lang-v2";

const LangCtx = createContext({
    lang: DEFAULT_LANG,
    t: translations[DEFAULT_LANG],
    setLang: () => {},
});

export function LanguageProvider({ children }) {
    const [lang, setLangState] = useState(() => {
        if (typeof window === "undefined") return DEFAULT_LANG;
        const storedLang = localStorage.getItem(LANG_STORAGE_KEY);
        return storedLang && translations[storedLang] ? storedLang : DEFAULT_LANG;
    });

    useEffect(() => {
        document.documentElement.lang = lang;
        localStorage.setItem(LANG_STORAGE_KEY, lang);
        localStorage.removeItem("yawtik-lang");
    }, [lang]);

    const setLang = useCallback((l) => setLangState(l), []);
    const value = { lang, setLang, t: translations[lang] || translations[DEFAULT_LANG] };

    return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useLang() {
    return useContext(LangCtx);
}

export const CONTACT = {
    phone: "523411173818",
    phoneDisplay: "+52 341-117-3818",
    email: "yawtikccworkteam@gmail.com",
};

export const MEDIA = {
    logoBlue: "https://customer-assets.emergentagent.com/job_a7ed5fb0-f469-4b3c-a7a0-4f240488174a/artifacts/a59dq84a_icono%20azul_1%20-%20copia.png",
    logoWhite: "https://customer-assets.emergentagent.com/job_a7ed5fb0-f469-4b3c-a7a0-4f240488174a/artifacts/mysple6e_icono%20blanco.png",
    logoName: "https://customer-assets.emergentagent.com/job_a7ed5fb0-f469-4b3c-a7a0-4f240488174a/artifacts/gs4caghr_Logo%20nombre%20blanco.png",
    heroVideoMp4: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260417_061226_74f0749c-a22d-42b3-895e-5d6203bc741c.mp4",
    hlsVideo: "https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8",
    chessImg1: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&q=80",
    chessImg2: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=80",
    chessVideo1: "",
    chessVideo2: "",
};
