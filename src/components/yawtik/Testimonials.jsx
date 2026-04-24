import { motion } from "framer-motion";
import { useLang } from "./i18n";

export default function Testimonials() {
    const { t } = useLang();

    return (
        <section className="relative px-6 py-24 md:py-32 lg:px-10" data-testid="testimonials">
            <div className="mx-auto max-w-6xl">
                <div className="mb-14 text-left">
                    <div className="liquid-glass rounded-none inline-block px-3.5 py-1 mb-5">
                        <span className="text-xs font-bold text-white font-body uppercase tracking-widest">
                            {t.testimonials.badge}
                        </span>
                    </div>
                    <h2 className="max-w-3xl text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
                        {t.testimonials.title}
                    </h2>
                    <p className="mt-5 max-w-2xl text-sm md:text-base font-body font-light text-white/62">
                        {t.testimonials.sub}
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                    {t.testimonials.items.map((ti, i) => (
                        <motion.div
                            key={ti.n}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.55, delay: i * 0.1 }}
                            className="liquid-glass rounded-none p-8 flex flex-col border border-white/8"
                            data-testid={`testimonial-${i}`}
                        >
                            <div className="text-[10px] font-body font-bold uppercase tracking-[0.28em] text-primary/85">
                                {ti.r}
                            </div>
                            <div className="mt-4 text-2xl font-heading italic leading-tight text-white">
                                {ti.n}
                            </div>
                            <p className="mt-5 flex-1 text-sm font-body font-light leading-relaxed text-white/74">
                                {ti.q}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
