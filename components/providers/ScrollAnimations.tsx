'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function ScrollAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const headings = gsap.utils.toArray<HTMLElement>('.js-section-heading');
    const headingTweens = headings.map((heading) =>
      gsap.fromTo(
        heading,
        { autoAlpha: 0, y: 36 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 82%'
          }
        }
      )
    );

    const groups = gsap.utils.toArray<HTMLElement>('.js-stagger-group');
    const groupTweens = groups.map((group) =>
      gsap.fromTo(
        group.querySelectorAll('.js-stagger-card'),
        { autoAlpha: 0, y: 34 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: group,
            start: 'top 82%'
          }
        }
      )
    );

    const cards = gsap.utils.toArray<HTMLElement>('.js-scale-card');
    const cardTweens = cards.map((card) =>
      gsap.fromTo(
        card,
        { autoAlpha: 0, scale: 0.95 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.55,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 86%'
          }
        }
      )
    );

    return () => {
      [...headingTweens, ...groupTweens, ...cardTweens].forEach((tween) => tween.kill());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
