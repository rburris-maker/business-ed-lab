/* =========================================================
   Business Ed Lab — site settings
   Edit the values in SITE below; every page updates.
   ========================================================= */
const SITE = {
  name: "Business Ed Lab",
  email: "BusinessEdLab@gmail.com",          // store email

  // Paste your Payhip product links here once your products are set up.
  // Example: "https://payhip.com/b/AbC12"
  checkout: {
    stitchAndStride: "https://payhip.com/b/rkgnu",
    freeResource:    "https://payhip.com/b/cgKVJ"
  },

  // Optional: your Teachers Pay Teachers store. Leave "" to hide it.
  tpt: "",

  // Social links. Leave any as "" and its icon disappears.
  social: {
    instagram: "https://www.instagram.com/business_edlab/",
    tiktok:    "",
    facebook:  "",
    pinterest: "",
    youtube:   "",
    x:         ""
  }
};

/* ===================== no need to edit below ===================== */
const ICONS = {
  instagram:'<path d="M12 7.3A4.7 4.7 0 1 0 16.7 12 4.7 4.7 0 0 0 12 7.3zm0 7.7a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm6-7.9a1.1 1.1 0 1 1-1.1-1.1A1.1 1.1 0 0 1 18 7.1zM12 3.6c2.7 0 3 0 4.1.1 2.8.1 4.1 1.4 4.2 4.2.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 2.8-1.4 4.1-4.2 4.2-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-2.8-.1-4.1-1.4-4.2-4.2-.1-1.1-.1-1.4-.1-4.1s0-3 .1-4.1C3.8 5.1 5.1 3.8 7.9 3.7c1.1-.1 1.4-.1 4.1-.1zM12 2c-2.7 0-3.1 0-4.1.1C4.2 2.2 2.2 4.2 2.1 7.9 2 8.9 2 9.3 2 12s0 3.1.1 4.1c.1 3.7 2.1 5.7 5.8 5.8 1 .1 1.4.1 4.1.1s3.1 0 4.1-.1c3.7-.1 5.7-2.1 5.8-5.8.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c-.1-3.7-2.1-5.7-5.8-5.8C15.1 2 14.7 2 12 2z"/>',
  tiktok:'<path d="M16.6 2h-3.3v13.2a2.9 2.9 0 1 1-2.9-2.9 2.7 2.7 0 0 1 .8.1V9a6.3 6.3 0 1 0 5.4 6.2V8.6a7.6 7.6 0 0 0 4.4 1.4V6.7a4.5 4.5 0 0 1-4.4-4.7z"/>',
  facebook:'<path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V22z"/>',
  pinterest:'<path d="M12 2a10 10 0 0 0-3.6 19.3 9.6 9.6 0 0 1 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.5 2.1-.8 3.3-.2 1 .5 1.8 1.5 1.8 1.8 0 3.1-1.9 3.1-4.6a3.9 3.9 0 0 0-4.1-4 4.3 4.3 0 0 0-4.5 4.3 3.8 3.8 0 0 0 .7 2.2.3.3 0 0 1 .1.3l-.3 1c0 .2-.1.2-.3.1-1.2-.6-2-2.3-2-3.7 0-3 2.2-5.8 6.4-5.8a5.7 5.7 0 0 1 6 5.6c0 3.4-2.1 6.1-5.1 6.1a2.6 2.6 0 0 1-2.3-1.1l-.6 2.4a11 11 0 0 1-1.3 2.7A10 10 0 1 0 12 2z"/>',
  youtube:'<path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3z"/>',
  x:'<path d="M17.8 3h3.1l-6.8 7.7 8 10.3h-6.2l-4.9-6.4L5.4 21H2.3l7.2-8.3L1.8 3h6.4l4.4 5.8zm-1.1 16.2h1.7L7.4 4.7H5.6z"/>'
};
const LOGO = '<svg viewBox="0 0 40 40" aria-hidden="true"><rect x="1" y="1" width="38" height="38" rx="10" fill="#C9A227"/><path d="M15 9h10M17 9v8.5L10.5 29a2.2 2.2 0 0 0 1.9 3.2h15.2a2.2 2.2 0 0 0 1.9-3.2L23 17.5V9" fill="none" stroke="#1B2A41" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 26.5l4-3.5 3 2.2 5-4.7" fill="none" stroke="#1B2A41" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function socialLinks(){
  return Object.entries(SITE.social).filter(([,u])=>u).map(([k,u])=>
    `<a href="${u}" target="_blank" rel="noopener" aria-label="${k}"><svg viewBox="0 0 24 24">${ICONS[k]}</svg></a>`).join('');
}
function header(active){
  const link=(href,label)=>`<a href="${href}"${active===href?' aria-current="page"':''}>${label}</a>`;
  return `<div class="wrap">
    <a class="brand" href="/">${LOGO}<span>Business Ed <b>Lab</b></span></a>
    <button class="menu-btn" aria-label="Menu" onclick="document.querySelector('.nav').classList.toggle('open')">&#9776;</button>
    <nav class="nav">${link('/store','Store')}${link('/free','Free Resource')}${link('/about','About')}
      <a class="btn btn-gold" href="/stitch-and-stride">Stitch &amp; Stride</a></nav></div>`;
}
function footer(){
  const s=socialLinks();
  return `<div class="wrap"><div class="cols">
    <div><a class="brand" href="/" style="color:#fff">${LOGO}<span>Business Ed <b>Lab</b></span></a>
      <p style="margin-top:12px">Classroom-tested business resources for CTE, dual-credit and intro college teachers.</p>
      ${s?`<div class="socials">${s}</div>`:''}</div>
    <div><h4>Shop</h4><ul><li><a href="/store">All resources</a></li><li><a href="/stitch-and-stride">Stitch &amp; Stride</a></li><li><a href="/free">Free resource</a></li>${SITE.tpt?`<li><a href="${SITE.tpt}" target="_blank" rel="noopener">Teachers Pay Teachers</a></li>`:''}</ul></div>
    <div><h4>Info</h4><ul><li><a href="/about">About</a></li><li><a href="/license">Terms of use</a></li><li><a href="mailto:${SITE.email}">${SITE.email}</a></li></ul></div>
  </div><div class="legal"><span>© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</span><span>Secure checkout and instant download through Payhip.</span></div></div>`;
}
function toast(msg){let t=document.querySelector('.toast');if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t);}t.textContent=msg;t.classList.add('show');clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove('show'),2600);}
function wireCheckout(){
  document.querySelectorAll('[data-checkout]').forEach(a=>{
    const url=SITE.checkout[a.dataset.checkout];
    if(url && !url.startsWith('PAYHIP_LINK')){ a.href=url; a.target='_blank'; a.rel='noopener'; }
    else { a.href='#'; a.addEventListener('click',e=>{e.preventDefault();toast('Checkout opens soon. Thanks for your patience!');}); }
  });
}
document.addEventListener('DOMContentLoaded',()=>{
  const h=document.querySelector('.site-header'); if(h) h.innerHTML=header(h.dataset.active||'');
  const f=document.querySelector('.site-footer'); if(f) f.innerHTML=footer();
  document.querySelectorAll('[data-socials]').forEach(el=>el.innerHTML=socialLinks());
  document.querySelectorAll('[data-email]').forEach(el=>{el.href='mailto:'+SITE.email; if(!el.textContent.trim()) el.textContent=SITE.email;});
  document.querySelectorAll('[data-logo]').forEach(el=>el.innerHTML=LOGO);
  wireCheckout();
  // product gallery
  const main=document.querySelector('.gallery-main img');
  document.querySelectorAll('.gallery-thumbs button').forEach(b=>b.addEventListener('click',()=>{
    main.src=b.dataset.src; main.alt=b.querySelector('img').alt;
    document.querySelectorAll('.gallery-thumbs button').forEach(x=>x.setAttribute('aria-pressed','false'));
    b.setAttribute('aria-pressed','true');
  }));
});
