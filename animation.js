let tl = gsap.timeline({ defaults: { duration: 1, opacity: 0 } });

tl.from(".anim1", {
  opacity: 0,
  y: -50,
  stagger: 0.3,
})
  .from(".hero-right", {
    y: 30,
  })

  gsap.from('.anim2',{
    scrollTrigger : {
      trigger : '#first',
      start : 'top center',
    },
    opacity : 0,
    y: -50,
    stagger : 0.3,
  })
  gsap.from('.anim3',{
    scrollTrigger : {
      trigger : '#second',
      start : 'top center',
    },
    opacity : 0,
    y: -50,
    stagger : 0.3,
  })
  gsap.from('.anim4',{
    scrollTrigger : {
      trigger : '#third',
      start : 'top center',
    },
    opacity : 0,
    y: -50,
    stagger : 0.3,
  })

  gsap.from('.card',{
    scrollTrigger : {
      trigger : '.skills',
      start : 'top center',
    },
    opacity : 0,
    y: -50,
    stagger : .8,
  })
  gsap.from('.aboutme-image',{
    scrollTrigger : {
      trigger : '.skills',
      start : 'bottom center',
      toggleActions : 'restart none none none '
    },
    x : -500,
    rotation : 360,
    duration : 3
  })

  gsap.from('.anim5',{
    scrollTrigger : {
      trigger : '.skills',
      start : 'bottom center',
    },
    opacity : 0,
    y : 50,
    stagger : 0.5,
  })